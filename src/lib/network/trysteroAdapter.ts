import type {
  JoinRoomConfig,
  JsonValue,
  MessageAction,
  Room,
  RoomError,
} from '@trystero-p2p/core/types';
import { getIceServers } from './ice';
import type {
  ConnectionStatus,
  ConnectOptions,
  NetworkAdapter,
  NetworkEnvelope,
  NetworkError,
  SignalingStrategy,
  Unsubscribe,
} from './types';

export type TrysteroStrategy = Extract<
  SignalingStrategy,
  'torrent' | 'nostr' | 'mqtt'
>;

export const DEFAULT_TRYSTERO_APP_ID = 'play-together-zone-p2p-v1';

async function loadStrategyJoinRoom(strategy: TrysteroStrategy) {
  switch (strategy) {
    case 'torrent': {
      const mod = await import('@trystero-p2p/torrent');
      return mod.joinRoom;
    }
    case 'nostr': {
      const mod = await import('@trystero-p2p/nostr');
      return mod.joinRoom;
    }
    case 'mqtt': {
      const mod = await import('@trystero-p2p/mqtt');
      return mod.joinRoom;
    }
  }
}

function mapRoomError(err: RoomError): NetworkError {
  switch (err.code) {
    case 'decrypt-failed':
      return {
        code: 'auth-failed',
        message: 'Room password mismatch with peer.',
        cause: err,
      };
    case 'relay-failed':
      return {
        code: 'relay-failed',
        message: err.message || 'Signaling relay connection failed.',
        cause: err,
      };
    case 'peer-connect-failed':
      return {
        code: 'peer-connect-failed',
        message: err.message || 'WebRTC peer connection failed (NAT/firewall).',
        cause: err,
      };
    default:
      return {
        code: 'transport-error',
        message: err.message || 'WebRTC transport error.',
        cause: err,
      };
  }
}

/**
 * NetworkAdapter backed by Trystero WebRTC signaling.
 * Defaults to Torrent strategy with configurable fallback to Nostr or MQTT.
 */
export class TrysteroAdapter implements NetworkAdapter {
  private strategy: TrysteroStrategy;
  private _selfPeerId: string;
  private _status: ConnectionStatus = 'disconnected';
  private room: Room | null = null;
  private action: MessageAction<JsonValue> | null = null;
  private unsubscribers: Unsubscribe[] = [];
  private peers = new Set<string>();

  private messageHandlers = new Set<
    (msg: NetworkEnvelope, fromPeerId: string) => void
  >();
  private joinHandlers = new Set<(peerId: string) => void>();
  private leaveHandlers = new Set<(peerId: string) => void>();
  private errorHandlers = new Set<(err: NetworkError) => void>();
  private statusHandlers = new Set<(status: ConnectionStatus) => void>();

  constructor(strategy: TrysteroStrategy = 'torrent') {
    this.strategy = strategy;
    this._selfPeerId =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? `rtc-${crypto.randomUUID().slice(0, 8)}`
        : `rtc-${Math.random().toString(36).slice(2, 10)}`;
  }

  get transportName(): string {
    return `trystero:${this.strategy}`;
  }

  get selfPeerId(): string {
    return this._selfPeerId;
  }

  get status(): ConnectionStatus {
    return this._status;
  }

  private setStatus(status: ConnectionStatus): void {
    this._status = status;
    for (const h of this.statusHandlers) h(status);
  }

  async connect(roomCode: string, options?: ConnectOptions): Promise<void> {
    await this.disconnect();

    if (
      options?.strategy === 'torrent' ||
      options?.strategy === 'nostr' ||
      options?.strategy === 'mqtt'
    ) {
      this.strategy = options.strategy;
    }

    this.setStatus('connecting');

    try {
      const joinRoom = await loadStrategyJoinRoom(this.strategy);
      const iceServers = options?.iceServers ?? getIceServers();

      const config: JoinRoomConfig = {
        appId: options?.appId ?? DEFAULT_TRYSTERO_APP_ID,
        password: options?.password || undefined,
        rtcConfig: { iceServers },
        ...(options?.relayUrls?.length
          ? { relayConfig: { urls: options.relayUrls } }
          : {}),
      };

      const room = joinRoom(config, roomCode);
      this.room = room;

      const msgAction = room.makeAction<JsonValue>('arcade-msg');
      this.action = msgAction;

      this.unsubscribers.push(
        room.onPeerJoin(({ peerId }) => {
          this.peers.add(peerId);
          for (const h of this.joinHandlers) h(peerId);
        }),
        room.onPeerLeave(({ peerId }) => {
          this.peers.delete(peerId);
          for (const h of this.leaveHandlers) h(peerId);
        }),
        room.onError((roomErr) => {
          const mapped = mapRoomError(roomErr);
          for (const h of this.errorHandlers) h(mapped);
        }),
        msgAction.onMessage((data, ctx) => {
          if (data && typeof data === 'object' && !Array.isArray(data)) {
            const raw = data as Record<string, unknown>;
            if (typeof raw.type === 'string') {
              const envelope: NetworkEnvelope = {
                type: raw.type,
                payload: raw.payload,
                senderPeerId:
                  typeof raw.senderPeerId === 'string'
                    ? raw.senderPeerId
                    : ctx.peerId,
                timestamp:
                  typeof raw.timestamp === 'number'
                    ? raw.timestamp
                    : Date.now(),
              };
              for (const h of this.messageHandlers) {
                h(envelope, ctx.peerId);
              }
            }
          }
        }),
      );

      // Resolve Trystero's assigned peerId with a bounded wait so UI doesn't stall
      await Promise.race([
        room.getSelf().then((info) => {
          if (info?.peerId) {
            this._selfPeerId = info.peerId;
          }
        }),
        new Promise<void>((resolve) => setTimeout(resolve, 3000)),
      ]);

      await Promise.race([
        room.ready,
        new Promise<void>((_, reject) =>
          setTimeout(
            () => reject(new Error(`${this.strategy} signaling relay timeout`)),
            9000,
          ),
        ),
      ]);

      this.setStatus('connected');
    } catch (err) {
      await this.disconnect();
      this.setStatus('error');
      const netErr: NetworkError = {
        code: 'relay-failed',
        message:
          err instanceof Error
            ? err.message
            : `Failed to connect using ${this.strategy}`,
        cause: err,
      };
      for (const h of this.errorHandlers) h(netErr);
      throw err;
    }
  }

  async disconnect(): Promise<void> {
    for (const unsub of this.unsubscribers) {
      try {
        unsub();
      } catch {
        // Ignore cleanup errors
      }
    }
    this.unsubscribers = [];
    this.action = null;
    this.peers.clear();

    if (this.room) {
      const r = this.room;
      this.room = null;
      try {
        await r.leave();
      } catch {
        // Ignore leave errors
      }
    }
    this.setStatus('disconnected');
  }

  async send<T = unknown>(
    type: string,
    payload: T,
    targetPeerId?: string,
  ): Promise<void> {
    if (!this.action || this._status !== 'connected') {
      throw new Error('TrysteroAdapter is not connected');
    }
    const envelope = {
      type,
      payload,
      senderPeerId: this._selfPeerId,
      timestamp: Date.now(),
    } as unknown as JsonValue;

    await this.action.send(
      envelope,
      targetPeerId ? { target: targetPeerId } : undefined,
    );
  }

  async ping(peerId: string): Promise<number> {
    if (!this.room) {
      throw new Error('Not connected to a room');
    }
    return this.room.ping(peerId);
  }

  getConnectedPeers(): string[] {
    if (!this.room) return [];
    const fromRoom = Object.keys(this.room.getPeers());
    return fromRoom.length > 0 ? fromRoom : Array.from(this.peers);
  }

  onMessage(
    handler: (msg: NetworkEnvelope, fromPeerId: string) => void,
  ): Unsubscribe {
    this.messageHandlers.add(handler);
    return () => this.messageHandlers.delete(handler);
  }

  onPeerJoin(handler: (peerId: string) => void): Unsubscribe {
    this.joinHandlers.add(handler);
    return () => this.joinHandlers.delete(handler);
  }

  onPeerLeave(handler: (peerId: string) => void): Unsubscribe {
    this.leaveHandlers.add(handler);
    return () => this.leaveHandlers.delete(handler);
  }

  onError(handler: (err: NetworkError) => void): Unsubscribe {
    this.errorHandlers.add(handler);
    return () => this.errorHandlers.delete(handler);
  }

  onStatusChange(handler: (status: ConnectionStatus) => void): Unsubscribe {
    this.statusHandlers.add(handler);
    return () => this.statusHandlers.delete(handler);
  }
}

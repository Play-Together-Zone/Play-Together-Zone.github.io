import type {
  ConnectionStatus,
  ConnectOptions,
  NetworkAdapter,
  NetworkEnvelope,
  NetworkError,
  Unsubscribe,
} from './types';

interface BroadcastFrame {
  kind: 'hello' | 'hello-ack' | 'bye' | 'data' | 'ping' | 'pong';
  fromPeerId: string;
  targetPeerId?: string;
  passwordHash?: string;
  envelope?: NetworkEnvelope;
  pingId?: string;
  sentAt?: number;
}

function makePeerId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `tab-${crypto.randomUUID().slice(0, 8)}`;
  }
  return `tab-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Local two-tab / multi-tab NetworkAdapter backed by BroadcastChannel.
 * Lets developers test full multiplayer, reconnects, and host migration
 * across tabs on the same browser without external WebRTC signaling.
 */
export class BroadcastChannelAdapter implements NetworkAdapter {
  readonly transportName = 'local-broadcast';
  readonly selfPeerId: string;
  private _status: ConnectionStatus = 'disconnected';
  private channel: BroadcastChannel | null = null;
  private peers = new Set<string>();
  private password?: string;
  private pendingPings = new Map<
    string,
    { resolve: (rtt: number) => void; reject: (err: Error) => void; startedAt: number }
  >();

  private messageHandlers = new Set<
    (msg: NetworkEnvelope, fromPeerId: string) => void
  >();
  private joinHandlers = new Set<(peerId: string) => void>();
  private leaveHandlers = new Set<(peerId: string) => void>();
  private errorHandlers = new Set<(err: NetworkError) => void>();
  private statusHandlers = new Set<(status: ConnectionStatus) => void>();
  private beforeUnloadHandler: (() => void) | null = null;

  constructor(peerId?: string) {
    this.selfPeerId = peerId ?? makePeerId();
  }

  get status(): ConnectionStatus {
    return this._status;
  }

  private setStatus(status: ConnectionStatus): void {
    this._status = status;
    for (const h of this.statusHandlers) h(status);
  }

  async connect(roomCode: string, options?: ConnectOptions): Promise<void> {
    if (typeof BroadcastChannel === 'undefined') {
      const err: NetworkError = {
        code: 'transport-error',
        message: 'BroadcastChannel is not available in this environment.',
      };
      this.setStatus('error');
      for (const h of this.errorHandlers) h(err);
      throw new Error(err.message);
    }

    await this.disconnect();
    this.setStatus('connecting');
    this.password = options?.password || undefined;

    const channel = new BroadcastChannel(`p2p-arcade-room:${roomCode}`);
    this.channel = channel;

    channel.onmessage = (event: MessageEvent<BroadcastFrame>) => {
      const frame = event.data;
      if (!frame || frame.fromPeerId === this.selfPeerId) return;
      if (frame.targetPeerId && frame.targetPeerId !== this.selfPeerId) return;

      if (frame.kind === 'hello' || frame.kind === 'hello-ack') {
        if (this.password && frame.passwordHash !== this.password) {
          for (const h of this.errorHandlers) {
            h({
              code: 'auth-failed',
              message: 'Room password mismatch with local peer.',
            });
          }
          return;
        }
        const isNew = !this.peers.has(frame.fromPeerId);
        if (isNew) {
          this.peers.add(frame.fromPeerId);
          for (const h of this.joinHandlers) h(frame.fromPeerId);
        }
        if (frame.kind === 'hello') {
          this.post({
            kind: 'hello-ack',
            fromPeerId: this.selfPeerId,
            targetPeerId: frame.fromPeerId,
            passwordHash: this.password,
          });
        }
        return;
      }

      if (frame.kind === 'bye') {
        if (this.peers.delete(frame.fromPeerId)) {
          for (const h of this.leaveHandlers) h(frame.fromPeerId);
        }
        return;
      }

      if (frame.kind === 'ping' && frame.pingId) {
        this.post({
          kind: 'pong',
          fromPeerId: this.selfPeerId,
          targetPeerId: frame.fromPeerId,
          pingId: frame.pingId,
          sentAt: frame.sentAt,
        });
        return;
      }

      if (frame.kind === 'pong' && frame.pingId) {
        const pending = this.pendingPings.get(frame.pingId);
        if (pending) {
          this.pendingPings.delete(frame.pingId);
          pending.resolve(Math.max(1, Math.round(performance.now() - pending.startedAt)));
        }
        return;
      }

      if (frame.kind === 'data' && frame.envelope) {
        for (const h of this.messageHandlers) {
          h(frame.envelope, frame.fromPeerId);
        }
      }
    };

    if (typeof window !== 'undefined') {
      this.beforeUnloadHandler = () => {
        this.post({ kind: 'bye', fromPeerId: this.selfPeerId });
      };
      window.addEventListener('beforeunload', this.beforeUnloadHandler);
    }

    this.setStatus('connected');
    this.post({
      kind: 'hello',
      fromPeerId: this.selfPeerId,
      passwordHash: this.password,
    });
  }

  private post(frame: BroadcastFrame): void {
    this.channel?.postMessage(frame);
  }

  async disconnect(): Promise<void> {
    if (typeof window !== 'undefined' && this.beforeUnloadHandler) {
      window.removeEventListener('beforeunload', this.beforeUnloadHandler);
      this.beforeUnloadHandler = null;
    }
    if (this.channel) {
      try {
        this.post({ kind: 'bye', fromPeerId: this.selfPeerId });
      } catch {
        // Ignore if channel already closed
      }
      this.channel.close();
      this.channel = null;
    }
    this.peers.clear();
    for (const [, pending] of this.pendingPings) {
      pending.reject(new Error('Disconnected'));
    }
    this.pendingPings.clear();
    this.setStatus('disconnected');
  }

  async send<T = unknown>(
    type: string,
    payload: T,
    targetPeerId?: string,
  ): Promise<void> {
    if (!this.channel || this._status !== 'connected') {
      throw new Error('Local broadcast adapter is not connected');
    }
    const envelope: NetworkEnvelope<T> = {
      type,
      payload,
      senderPeerId: this.selfPeerId,
      timestamp: Date.now(),
    };
    this.post({
      kind: 'data',
      fromPeerId: this.selfPeerId,
      targetPeerId,
      envelope,
    });
  }

  async ping(peerId: string): Promise<number> {
    if (!this.peers.has(peerId)) {
      throw new Error(`Peer ${peerId} is not connected`);
    }
    const pingId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    return new Promise<number>((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pendingPings.delete(pingId);
        reject(new Error('Ping timeout'));
      }, 4000);
      this.pendingPings.set(pingId, {
        startedAt: performance.now(),
        resolve: (rtt) => {
          clearTimeout(timer);
          resolve(rtt);
        },
        reject: (err) => {
          clearTimeout(timer);
          reject(err);
        },
      });
      this.post({
        kind: 'ping',
        fromPeerId: this.selfPeerId,
        targetPeerId: peerId,
        pingId,
      });
    });
  }

  getConnectedPeers(): string[] {
    return Array.from(this.peers);
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

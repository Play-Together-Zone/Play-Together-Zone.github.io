import type {
  ConnectionStatus,
  ConnectOptions,
  NetworkAdapter,
  NetworkEnvelope,
  NetworkError,
  Unsubscribe,
} from './types';

function createRandomId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID().slice(0, 12);
  }
  return Math.random().toString(36).slice(2, 14);
}

/**
 * In-memory deterministic message bus for unit testing multiplayer sync,
 * reconnects, and host migration without real WebRTC connections.
 */
export class MockNetworkBus {
  private rooms = new Map<string, Set<MockNetworkAdapter>>();

  register(roomCode: string, adapter: MockNetworkAdapter): void {
    let peers = this.rooms.get(roomCode);
    if (!peers) {
      peers = new Set();
      this.rooms.set(roomCode, peers);
    }
    const existing = Array.from(peers);
    peers.add(adapter);

    for (const peer of existing) {
      peer._notifyPeerJoin(adapter.selfPeerId);
      adapter._notifyPeerJoin(peer.selfPeerId);
    }
  }

  unregister(roomCode: string, adapter: MockNetworkAdapter): void {
    const peers = this.rooms.get(roomCode);
    if (!peers || !peers.has(adapter)) return;
    peers.delete(adapter);

    for (const peer of peers) {
      peer._notifyPeerLeave(adapter.selfPeerId);
    }
    if (peers.size === 0) {
      this.rooms.delete(roomCode);
    }
  }

  getPeers(roomCode: string, excludePeerId: string): string[] {
    const peers = this.rooms.get(roomCode);
    if (!peers) return [];
    return Array.from(peers)
      .filter((p) => p.selfPeerId !== excludePeerId)
      .map((p) => p.selfPeerId);
  }

  dispatch(
    roomCode: string,
    fromAdapter: MockNetworkAdapter,
    envelope: NetworkEnvelope,
    targetPeerId?: string,
  ): void {
    const peers = this.rooms.get(roomCode);
    if (!peers) return;
    for (const peer of peers) {
      if (peer.selfPeerId === fromAdapter.selfPeerId) continue;
      if (targetPeerId && peer.selfPeerId !== targetPeerId) continue;
      peer._deliverMessage(envelope, fromAdapter.selfPeerId);
    }
  }
}

export class MockNetworkAdapter implements NetworkAdapter {
  readonly transportName = 'mock';
  readonly selfPeerId: string;
  private _status: ConnectionStatus = 'disconnected';
  private roomCode: string | null = null;
  private readonly bus: MockNetworkBus;
  private password?: string;

  private messageHandlers = new Set<
    (msg: NetworkEnvelope, fromPeerId: string) => void
  >();
  private joinHandlers = new Set<(peerId: string) => void>();
  private leaveHandlers = new Set<(peerId: string) => void>();
  private errorHandlers = new Set<(err: NetworkError) => void>();
  private statusHandlers = new Set<(status: ConnectionStatus) => void>();

  constructor(bus: MockNetworkBus, peerId?: string) {
    this.bus = bus;
    this.selfPeerId = peerId ?? `mock-${createRandomId()}`;
  }

  get status(): ConnectionStatus {
    return this._status;
  }

  private setStatus(status: ConnectionStatus): void {
    this._status = status;
    for (const h of this.statusHandlers) h(status);
  }

  async connect(roomCode: string, options?: ConnectOptions): Promise<void> {
    this.setStatus('connecting');
    this.roomCode = roomCode;
    this.password = options?.password;
    this.bus.register(roomCode, this);
    this.setStatus('connected');
  }

  async disconnect(): Promise<void> {
    if (this.roomCode) {
      this.bus.unregister(this.roomCode, this);
      this.roomCode = null;
    }
    this.setStatus('disconnected');
  }

  async send<T = unknown>(
    type: string,
    payload: T,
    targetPeerId?: string,
  ): Promise<void> {
    if (!this.roomCode || this._status !== 'connected') {
      throw new Error('MockNetworkAdapter is not connected');
    }
    const envelope: NetworkEnvelope<T> = {
      type,
      payload,
      senderPeerId: this.selfPeerId,
      timestamp: Date.now(),
    };
    this.bus.dispatch(this.roomCode, this, envelope, targetPeerId);
  }

  async ping(peerId: string): Promise<number> {
    if (!this.getConnectedPeers().includes(peerId)) {
      throw new Error(`Peer ${peerId} is not connected`);
    }
    return 1;
  }

  getConnectedPeers(): string[] {
    if (!this.roomCode) return [];
    return this.bus.getPeers(this.roomCode, this.selfPeerId);
  }

  getPassword(): string | undefined {
    return this.password;
  }

  _notifyPeerJoin(peerId: string): void {
    for (const h of this.joinHandlers) h(peerId);
  }

  _notifyPeerLeave(peerId: string): void {
    for (const h of this.leaveHandlers) h(peerId);
  }

  _deliverMessage(msg: NetworkEnvelope, fromPeerId: string): void {
    for (const h of this.messageHandlers) h(msg, fromPeerId);
  }

  _emitError(err: NetworkError): void {
    for (const h of this.errorHandlers) h(err);
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

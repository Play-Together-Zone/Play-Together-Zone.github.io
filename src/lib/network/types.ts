export type SignalingStrategy = 'torrent' | 'nostr' | 'mqtt' | 'local' | 'mock';

export type ConnectionStatus =
  | 'disconnected'
  | 'connecting'
  | 'connected'
  | 'reconnecting'
  | 'error';

export interface NetworkEnvelope<T = unknown> {
  type: string;
  payload: T;
  senderPeerId: string;
  timestamp: number;
}

export interface NetworkError {
  code:
    | 'auth-failed'
    | 'relay-failed'
    | 'peer-connect-failed'
    | 'transport-error'
    | 'unknown';
  message: string;
  cause?: unknown;
}

export interface ConnectOptions {
  password?: string;
  strategy?: SignalingStrategy;
  iceServers?: RTCIceServer[];
  appId?: string;
  relayUrls?: string[];
}

export type Unsubscribe = () => void;

export interface NetworkAdapter {
  readonly transportName: string;
  readonly selfPeerId: string;
  readonly status: ConnectionStatus;

  connect(roomCode: string, options?: ConnectOptions): Promise<void>;
  disconnect(): Promise<void>;

  send<T = unknown>(
    type: string,
    payload: T,
    targetPeerId?: string,
  ): Promise<void>;

  ping(peerId: string): Promise<number>;
  getConnectedPeers(): string[];

  onMessage(
    handler: (msg: NetworkEnvelope, fromPeerId: string) => void,
  ): Unsubscribe;
  onPeerJoin(handler: (peerId: string) => void): Unsubscribe;
  onPeerLeave(handler: (peerId: string) => void): Unsubscribe;
  onError(handler: (err: NetworkError) => void): Unsubscribe;
  onStatusChange(handler: (status: ConnectionStatus) => void): Unsubscribe;
}

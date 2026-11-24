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

export interface PeerStreamMetadata {
  playerId?: string;
  audio?: boolean;
  video?: boolean;
}

export interface PeerStreamEvent {
  stream: MediaStream;
  peerId: string;
  metadata?: PeerStreamMetadata;
}

export interface NetworkAdapter {
  readonly transportName: string;
  readonly selfPeerId: string;
  readonly status: ConnectionStatus;
  readonly supportsMedia?: boolean;

  connect(roomCode: string, options?: ConnectOptions): Promise<void>;
  disconnect(): Promise<void>;

  send<T = unknown>(
    type: string,
    payload: T,
    targetPeerId?: string,
  ): Promise<void>;

  ping(peerId: string): Promise<number>;
  getConnectedPeers(): string[];

  addMediaStream?(
    stream: MediaStream,
    options?: { targetPeerId?: string; metadata?: PeerStreamMetadata },
  ): Promise<void>;
  removeMediaStream?(stream: MediaStream, targetPeerId?: string): void;
  replaceMediaTrack?(
    oldTrack: MediaStreamTrack,
    newTrack: MediaStreamTrack,
    targetPeerId?: string,
  ): Promise<void>;
  onPeerStream?(handler: (event: PeerStreamEvent) => void): Unsubscribe;

  onMessage(
    handler: (msg: NetworkEnvelope, fromPeerId: string) => void,
  ): Unsubscribe;
  onPeerJoin(handler: (peerId: string) => void): Unsubscribe;
  onPeerLeave(handler: (peerId: string) => void): Unsubscribe;
  onError(handler: (err: NetworkError) => void): Unsubscribe;
  onStatusChange(handler: (status: ConnectionStatus) => void): Unsubscribe;
}

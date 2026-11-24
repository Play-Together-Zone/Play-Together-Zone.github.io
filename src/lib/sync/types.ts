import type { GameId, GameOutcome } from '../games/types';

export type RoomPhase = 'lobby' | 'playing' | 'ended';

export interface SeatPlayer {
  playerId: string;
  peerId: string | null;
  displayName: string;
  avatar: string;
  seatIndex: number;
  ready: boolean;
  connected: boolean;
  isBot: boolean;
}

export interface SpectatorInfo {
  playerId: string;
  peerId: string;
  displayName: string;
  avatar: string;
}

export interface RoomSettings {
  maxPlayers: number;
  chatEnabled: boolean;
  allowSpectators: boolean;
  turnTimerSec: number; // 0 = off
  gameOptions: Record<string, unknown>;
}

export interface ChatMessage {
  id: string;
  senderPlayerId: string;
  senderName: string;
  senderAvatar: string;
  text: string;
  timestamp: number;
}

export type DisconnectVoteChoice = 'end' | 'replace_bot';

export interface DisconnectResolutionState {
  targetPlayerId: string;
  votes: Record<string, DisconnectVoteChoice>;
}

export interface RoomSnapshot<TView = unknown> {
  version: number;
  roomCode: string;
  hostPlayerId: string;
  gameId: GameId;
  phase: RoomPhase;
  settings: RoomSettings;
  seats: SeatPlayer[];
  spectators: SpectatorInfo[];
  gameView: TView | null;
  outcome: GameOutcome | null;
  disconnectVotes: Record<string, DisconnectResolutionState>;
  mutedPlayerIds: string[];
}

export type SyncMessageType =
  | 'hello'
  | 'room_snapshot'
  | 'player_ready'
  | 'update_settings'
  | 'start_game'
  | 'game_action'
  | 'action_rejected'
  | 'rematch'
  | 'chat_message'
  | 'disconnect_vote'
  | 'mute_player'
  | 'add_bot'
  | 'remove_bot';

export interface HelloPayload {
  playerId: string;
  displayName: string;
  avatar: string;
  wantSpectate?: boolean;
}

export interface GameActionPayload {
  playerId: string;
  action: unknown;
  clientSeq: number;
}

export interface ActionRejectedPayload {
  reason: string;
  clientSeq: number;
}

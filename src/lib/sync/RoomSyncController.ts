import {
  IllegalMoveError,
  type GameActionBase,
  type GameEngine,
  type GameId,
  type GameOutcome,
  type GamePlayer,
} from '../games/types';
import type { NetworkAdapter, NetworkEnvelope, NetworkError, Unsubscribe } from '../network/types';
import type {
  ActionRejectedPayload,
  ChatMessage,
  DisconnectResolutionState,
  DisconnectVoteChoice,
  GameActionPayload,
  HelloPayload,
  RoomPhase,
  RoomSettings,
  RoomSnapshot,
  SeatPlayer,
  SpectatorInfo,
} from './types';

export interface RoomSyncCallbacks {
  onSnapshot: (snapshot: RoomSnapshot) => void;
  onChat: (msg: ChatMessage) => void;
  onActionRejected: (reason: string) => void;
  onError: (err: NetworkError) => void;
  onHostMigrated: (newHostPlayerId: string) => void;
}

export interface RoomSyncInitOptions {
  roomCode: string;
  gameId: GameId;
  isInitialHost: boolean;
  self: {
    playerId: string;
    displayName: string;
    avatar: string;
    wantSpectate?: boolean;
  };
  adapter: NetworkAdapter;
  engine: GameEngine<unknown, GameActionBase, Record<string, unknown>, unknown>;
  initialSettings?: Partial<RoomSettings>;
  /**
   * Optional hook for games with hidden state (e.g., Color Rush) to rebuild
   * a valid authoritative state from a migrated host's view.
   */
  reconstructFromView?: (view: unknown, seats: SeatPlayer[]) => unknown;
  callbacks: RoomSyncCallbacks;
}

function defaultSettingsForEngine(
  engine: GameEngine<unknown, GameActionBase, Record<string, unknown>, unknown>,
  overrides?: Partial<RoomSettings>,
): RoomSettings {
  return {
    maxPlayers: overrides?.maxPlayers ?? engine.maxPlayers,
    chatEnabled: overrides?.chatEnabled ?? true,
    allowSpectators: overrides?.allowSpectators ?? true,
    turnTimerSec: overrides?.turnTimerSec ?? 0,
    gameOptions: overrides?.gameOptions ?? {},
  };
}

/**
 * Deterministic host election rule:
 * Among connected, non-bot seated players, select the lowest seatIndex
 * (with lexicographical playerId tiebreaker).
 */
export function selectNextHostPlayerId(seats: SeatPlayer[]): string | null {
  const candidates = seats
    .filter((s) => s.connected && !s.isBot)
    .sort((a, b) =>
      a.seatIndex !== b.seatIndex
        ? a.seatIndex - b.seatIndex
        : a.playerId.localeCompare(b.playerId),
    );
  return candidates[0]?.playerId ?? null;
}

export class RoomSyncController {
  private readonly roomCode: string;
  private readonly adapter: NetworkAdapter;
  private engine: GameEngine<unknown, GameActionBase, Record<string, unknown>, unknown>;
  private reconstructFromView?: (view: unknown, seats: SeatPlayer[]) => unknown;
  private readonly self: {
    playerId: string;
    displayName: string;
    avatar: string;
    wantSpectate?: boolean;
  };
  private readonly callbacks: RoomSyncCallbacks;

  private version = 0;
  private hostPlayerId: string;
  private gameId: GameId;
  private phase: RoomPhase = 'lobby';
  private settings: RoomSettings;
  private seats: SeatPlayer[] = [];
  private spectators: SpectatorInfo[] = [];
  private fullState: unknown = null;
  private lastGameView: unknown = null;
  private outcome: GameOutcome | null = null;
  private disconnectVotes: Record<string, DisconnectResolutionState> = {};
  private mutedPlayerIds = new Set<string>();
  private peerToPlayerId = new Map<string, string>();
  private clientSeq = 0;
  private unsubscribers: Unsubscribe[] = [];
  private botTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(opts: RoomSyncInitOptions) {
    this.roomCode = opts.roomCode;
    this.adapter = opts.adapter;
    this.engine = opts.engine;
    this.reconstructFromView = opts.reconstructFromView;
    this.self = opts.self;
    this.callbacks = opts.callbacks;
    this.gameId = opts.gameId;
    this.settings = defaultSettingsForEngine(opts.engine, opts.initialSettings);
    this.hostPlayerId = opts.isInitialHost ? opts.self.playerId : '';

    if (opts.isInitialHost) {
      this.seats = [
        {
          playerId: opts.self.playerId,
          peerId: opts.adapter.selfPeerId,
          displayName: opts.self.displayName,
          avatar: opts.self.avatar,
          seatIndex: 0,
          ready: true,
          connected: true,
          isBot: false,
        },
      ];
      this.version = 1;
    }

    this.unsubscribers.push(
      this.adapter.onMessage((msg, fromPeerId) => {
        this.handleMessage(msg, fromPeerId);
      }),
      this.adapter.onPeerJoin((peerId) => {
        void this.sendHello(peerId);
      }),
      this.adapter.onPeerLeave((peerId) => {
        this.handlePeerLeave(peerId);
      }),
      this.adapter.onError((err) => {
        this.callbacks.onError(err);
      }),
    );

    if (opts.isInitialHost) {
      this.emitLocalSnapshot();
    } else {
      void this.sendHello();
    }
  }

  get isHost(): boolean {
    return this.hostPlayerId === this.self.playerId;
  }

  getSnapshot(): RoomSnapshot {
    return this.buildSnapshotFor(this.self.playerId);
  }

  destroy(): void {
    if (this.botTimer) {
      clearTimeout(this.botTimer);
      this.botTimer = null;
    }
    for (const unsub of this.unsubscribers) {
      unsub();
    }
    this.unsubscribers = [];
  }

  setEngine(
    engine: GameEngine<unknown, GameActionBase, Record<string, unknown>, unknown>,
    reconstructFromView?: (view: unknown, seats: SeatPlayer[]) => unknown,
  ): void {
    this.engine = engine;
    this.gameId = engine.id;
    this.reconstructFromView = reconstructFromView;
  }

  private async sendHello(targetPeerId?: string): Promise<void> {
    const payload: HelloPayload = {
      playerId: this.self.playerId,
      displayName: this.self.displayName,
      avatar: this.self.avatar,
      wantSpectate: this.self.wantSpectate,
    };
    try {
      await this.adapter.send('hello', payload, targetPeerId);
    } catch {
      // Peer may have disconnected
    }
  }

  async toggleReady(ready: boolean): Promise<void> {
    if (this.isHost) {
      this.applyReady(this.self.playerId, ready);
    } else {
      await this.adapter.send('player_ready', {
        playerId: this.self.playerId,
        ready,
      });
    }
  }

  async updateSettings(partial: Partial<RoomSettings>, newGameId?: GameId): Promise<void> {
    if (!this.isHost) return;
    if (newGameId) {
      this.gameId = newGameId;
    }
    const maxP = Math.max(
      this.engine.minPlayers,
      Math.min(this.engine.maxPlayers, partial.maxPlayers ?? this.settings.maxPlayers),
    );
    this.settings = {
      ...this.settings,
      ...partial,
      maxPlayers: maxP,
      gameOptions: partial.gameOptions
        ? { ...this.settings.gameOptions, ...partial.gameOptions }
        : this.settings.gameOptions,
    };
    this.bumpAndBroadcast();
  }

  async addBot(): Promise<void> {
    if (!this.isHost || !this.engine.supportsBot || this.phase !== 'lobby') return;
    if (this.seats.length >= this.settings.maxPlayers) return;
    const botIndex = this.seats.filter((s) => s.isBot).length + 1;
    const botId = `bot-${Date.now().toString(36)}-${botIndex}`;
    this.seats.push({
      playerId: botId,
      peerId: null,
      displayName: `Bot ${botIndex}`,
      avatar: '🤖',
      seatIndex: this.seats.length,
      ready: true,
      connected: true,
      isBot: true,
    });
    this.bumpAndBroadcast();
  }

  async removeBot(botPlayerId: string): Promise<void> {
    if (!this.isHost || this.phase !== 'lobby') return;
    this.seats = this.seats
      .filter((s) => !(s.isBot && s.playerId === botPlayerId))
      .map((s, idx) => ({ ...s, seatIndex: idx }));
    this.bumpAndBroadcast();
  }

  async startGame(): Promise<void> {
    if (!this.isHost) return;
    if (this.seats.length < this.engine.minPlayers) {
      this.callbacks.onActionRejected(
        `Need at least ${this.engine.minPlayers} players to start ${this.engine.name}.`,
      );
      return;
    }

    const players: GamePlayer[] = this.seats.map((s) => ({
      id: s.playerId,
      name: s.displayName,
      avatar: s.avatar,
      isBot: s.isBot,
      seatIndex: s.seatIndex,
    }));

    this.fullState = this.engine.init(players, this.settings.gameOptions);
    this.outcome = this.engine.isGameOver(this.fullState);
    this.phase = this.outcome ? 'ended' : 'playing';
    this.disconnectVotes = {};
    this.bumpAndBroadcast();
    this.scheduleBotTurnIfNeeded();
  }

  async sendGameAction(action: GameActionBase): Promise<void> {
    this.clientSeq += 1;
    const seq = this.clientSeq;

    if (this.isHost) {
      this.processActionOnHost(this.self.playerId, action, seq, this.adapter.selfPeerId);
    } else {
      const payload: GameActionPayload = {
        playerId: this.self.playerId,
        action,
        clientSeq: seq,
      };
      await this.adapter.send('game_action', payload, this.getHostPeerId());
    }
  }

  async requestRematch(backToLobby = false): Promise<void> {
    if (!this.isHost) {
      await this.adapter.send('rematch', { backToLobby }, this.getHostPeerId());
      return;
    }
    if (backToLobby) {
      this.phase = 'lobby';
      this.fullState = null;
      this.lastGameView = null;
      this.outcome = null;
      this.disconnectVotes = {};
      this.seats = this.seats.map((s) => ({
        ...s,
        ready: s.isBot || s.playerId === this.hostPlayerId,
      }));
      this.bumpAndBroadcast();
      return;
    }
    await this.startGame();
  }

  async sendChat(text: string): Promise<void> {
    if (!this.settings.chatEnabled) return;
    if (this.mutedPlayerIds.has(this.self.playerId)) return;
    const trimmed = text.trim().slice(0, 300);
    if (!trimmed) return;

    const msg: ChatMessage = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      senderPlayerId: this.self.playerId,
      senderName: this.self.displayName,
      senderAvatar: this.self.avatar,
      text: trimmed,
      timestamp: Date.now(),
    };
    this.callbacks.onChat(msg);
    await this.adapter.send('chat_message', msg);
  }

  async toggleMutePlayer(targetPlayerId: string): Promise<void> {
    if (!this.isHost || targetPlayerId === this.hostPlayerId) return;
    if (this.mutedPlayerIds.has(targetPlayerId)) {
      this.mutedPlayerIds.delete(targetPlayerId);
    } else {
      this.mutedPlayerIds.add(targetPlayerId);
    }
    this.bumpAndBroadcast();
  }

  async voteDisconnect(targetPlayerId: string, choice: DisconnectVoteChoice): Promise<void> {
    if (this.isHost) {
      this.applyDisconnectVote(this.self.playerId, targetPlayerId, choice);
    } else {
      await this.adapter.send(
        'disconnect_vote',
        { targetPlayerId, choice },
        this.getHostPeerId(),
      );
    }
  }

  /**
   * Used by Trivia or timed host ticks to advance state deterministically.
   */
  applyHostSystemAction(action: GameActionBase): void {
    if (!this.isHost || this.phase !== 'playing' || !this.fullState) return;
    try {
      this.fullState = this.engine.applyAction(this.fullState, action);
      this.outcome = this.engine.isGameOver(this.fullState);
      if (this.outcome) {
        this.phase = 'ended';
      }
      this.bumpAndBroadcast();
      this.scheduleBotTurnIfNeeded();
    } catch {
      // Ignore stale system tick
    }
  }

  private getHostPeerId(): string | undefined {
    const hostSeat = this.seats.find((s) => s.playerId === this.hostPlayerId);
    return hostSeat?.peerId ?? undefined;
  }

  private handleMessage(msg: NetworkEnvelope, fromPeerId: string): void {
    switch (msg.type) {
      case 'hello': {
        const hello = msg.payload as HelloPayload;
        if (!hello?.playerId) return;
        this.peerToPlayerId.set(fromPeerId, hello.playerId);

        if (this.isHost) {
          this.handleHostJoinOrReconnect(hello, fromPeerId);
        }
        break;
      }
      case 'room_snapshot': {
        const snapshot = msg.payload as RoomSnapshot;
        if (!snapshot || typeof snapshot.version !== 'number') return;
        // Ordering guard: accept snapshot if newer version or initial join
        if (snapshot.version < this.version && snapshot.hostPlayerId === this.hostPlayerId) {
          return;
        }
        this.applyRemoteSnapshot(snapshot);
        break;
      }
      case 'player_ready': {
        if (!this.isHost) return;
        const p = msg.payload as { playerId: string; ready: boolean };
        const senderPlayerId = this.peerToPlayerId.get(fromPeerId);
        if (senderPlayerId && senderPlayerId === p.playerId) {
          this.applyReady(p.playerId, Boolean(p.ready));
        }
        break;
      }
      case 'game_action': {
        if (!this.isHost) return;
        const p = msg.payload as GameActionPayload;
        const senderPlayerId = this.peerToPlayerId.get(fromPeerId);
        if (!senderPlayerId || senderPlayerId !== p.playerId) {
          void this.adapter.send<ActionRejectedPayload>(
            'action_rejected',
            { reason: 'Sender identity mismatch.', clientSeq: p?.clientSeq ?? 0 },
            fromPeerId,
          );
          return;
        }
        this.processActionOnHost(
          senderPlayerId,
          p.action as GameActionBase,
          p.clientSeq,
          fromPeerId,
        );
        break;
      }
      case 'action_rejected': {
        const p = msg.payload as ActionRejectedPayload;
        this.callbacks.onActionRejected(p?.reason ?? 'Illegal move.');
        break;
      }
      case 'chat_message': {
        if (!this.settings.chatEnabled) return;
        const chat = msg.payload as ChatMessage;
        const senderPlayerId = this.peerToPlayerId.get(fromPeerId);
        if (!chat || !senderPlayerId || chat.senderPlayerId !== senderPlayerId) {
          return;
        }
        if (this.mutedPlayerIds.has(senderPlayerId)) return;
        this.callbacks.onChat(chat);
        break;
      }
      case 'disconnect_vote': {
        if (!this.isHost) return;
        const p = msg.payload as {
          targetPlayerId: string;
          choice: DisconnectVoteChoice;
        };
        const senderPlayerId = this.peerToPlayerId.get(fromPeerId);
        if (senderPlayerId && p?.targetPlayerId && p?.choice) {
          this.applyDisconnectVote(senderPlayerId, p.targetPlayerId, p.choice);
        }
        break;
      }
      case 'rematch': {
        if (!this.isHost) return;
        const p = msg.payload as { backToLobby?: boolean };
        void this.requestRematch(Boolean(p?.backToLobby));
        break;
      }
    }
  }

  private handleHostJoinOrReconnect(hello: HelloPayload, fromPeerId: string): void {
    // 1. Check if returning seated player (reconnect!)
    const existingSeat = this.seats.find((s) => s.playerId === hello.playerId);
    if (existingSeat) {
      existingSeat.peerId = fromPeerId;
      existingSeat.connected = true;
      existingSeat.displayName = hello.displayName;
      existingSeat.avatar = hello.avatar;
      delete this.disconnectVotes[hello.playerId];
      this.bumpAndBroadcast();
      return;
    }

    // 2. Check if already spectator
    const existingSpec = this.spectators.find((s) => s.playerId === hello.playerId);
    if (existingSpec) {
      existingSpec.peerId = fromPeerId;
      existingSpec.displayName = hello.displayName;
      existingSpec.avatar = hello.avatar;
      this.bumpAndBroadcast();
      return;
    }

    // 3. New joiner: seat if lobby has space and not requesting spectate
    const canTakeSeat =
      this.phase === 'lobby' &&
      !hello.wantSpectate &&
      this.seats.length < this.settings.maxPlayers;

    if (canTakeSeat) {
      this.seats.push({
        playerId: hello.playerId,
        peerId: fromPeerId,
        displayName: hello.displayName,
        avatar: hello.avatar,
        seatIndex: this.seats.length,
        ready: false,
        connected: true,
        isBot: false,
      });
      this.bumpAndBroadcast();
      return;
    }

    // 4. Otherwise add as read-only spectator if allowed
    if (this.settings.allowSpectators) {
      this.spectators.push({
        playerId: hello.playerId,
        peerId: fromPeerId,
        displayName: hello.displayName,
        avatar: hello.avatar,
      });
      this.bumpAndBroadcast();
    }
  }

  private handlePeerLeave(peerId: string): void {
    const leavingPlayerId = this.peerToPlayerId.get(peerId);
    if (!leavingPlayerId) return;

    let changed = false;
    const seat = this.seats.find((s) => s.playerId === leavingPlayerId);
    if (seat) {
      seat.connected = false;
      seat.peerId = null;
      changed = true;
    }

    const beforeSpecCount = this.spectators.length;
    this.spectators = this.spectators.filter((s) => s.playerId !== leavingPlayerId);
    if (this.spectators.length !== beforeSpecCount) {
      changed = true;
    }

    // Host migration: if the leaving peer was the host, run deterministic election
    if (leavingPlayerId === this.hostPlayerId) {
      const nextHostId = selectNextHostPlayerId(this.seats);
      if (nextHostId) {
        this.hostPlayerId = nextHostId;
        this.callbacks.onHostMigrated(nextHostId);

        if (nextHostId === this.self.playerId) {
          // Promoted to host: restore authoritative state from last synced state
          if (this.phase !== 'lobby' && this.lastGameView !== null) {
            this.fullState = this.reconstructFromView
              ? this.reconstructFromView(this.lastGameView, this.seats)
              : this.lastGameView;
          }
          this.bumpAndBroadcast();
          this.scheduleBotTurnIfNeeded();
          return;
        }
      }
    }

    if (changed && this.isHost) {
      this.bumpAndBroadcast();
    } else if (changed) {
      this.emitLocalSnapshot();
    }
  }

  private applyReady(playerId: string, ready: boolean): void {
    if (this.phase !== 'lobby') return;
    const seat = this.seats.find((s) => s.playerId === playerId);
    if (!seat) return;
    seat.ready = ready;
    this.bumpAndBroadcast();
  }

  private applyDisconnectVote(
    voterPlayerId: string,
    targetPlayerId: string,
    choice: DisconnectVoteChoice,
  ): void {
    const targetSeat = this.seats.find(
      (s) => s.playerId === targetPlayerId && !s.connected && !s.isBot,
    );
    const voterSeat = this.seats.find(
      (s) => s.playerId === voterPlayerId && s.connected && !s.isBot,
    );
    if (!targetSeat || !voterSeat) return;

    if (choice === 'replace_bot' && !this.engine.supportsBot) return;

    const current = this.disconnectVotes[targetPlayerId] ?? {
      targetPlayerId,
      votes: {},
    };
    current.votes[voterPlayerId] = choice;
    this.disconnectVotes[targetPlayerId] = current;

    const activeHumans = this.seats.filter((s) => s.connected && !s.isBot);
    const needed = Math.floor(activeHumans.length / 2) + 1;

    const endCount = Object.values(current.votes).filter((v) => v === 'end').length;
    const botCount = Object.values(current.votes).filter(
      (v) => v === 'replace_bot',
    ).length;

    if (endCount >= needed) {
      this.phase = 'ended';
      this.outcome = {
        winnerIds: [],
        reason: `${targetSeat.displayName} disconnected — match ended by vote.`,
      };
      delete this.disconnectVotes[targetPlayerId];
      this.bumpAndBroadcast();
      return;
    }

    if (botCount >= needed && this.engine.supportsBot) {
      targetSeat.isBot = true;
      targetSeat.connected = true;
      targetSeat.displayName = `${targetSeat.displayName} (Bot)`;
      targetSeat.avatar = '🤖';
      delete this.disconnectVotes[targetPlayerId];
      this.bumpAndBroadcast();
      this.scheduleBotTurnIfNeeded();
      return;
    }

    this.bumpAndBroadcast();
  }

  private processActionOnHost(
    actorPlayerId: string,
    action: GameActionBase,
    clientSeq: number,
    replyPeerId: string,
  ): void {
    if (this.phase !== 'playing' || !this.fullState) {
      this.reject(replyPeerId, clientSeq, 'Game is not currently active.');
      return;
    }
    if (!action || action.playerId !== actorPlayerId) {
      this.reject(replyPeerId, clientSeq, 'Action playerId does not match sender.');
      return;
    }

    try {
      const nextState = this.engine.applyAction(this.fullState, action);
      this.fullState = nextState;
      this.outcome = this.engine.isGameOver(nextState);
      if (this.outcome) {
        this.phase = 'ended';
      }
      this.bumpAndBroadcast();
      this.scheduleBotTurnIfNeeded();
    } catch (err) {
      const reason =
        err instanceof IllegalMoveError
          ? err.message
          : err instanceof Error
            ? err.message
            : 'Illegal move.';
      this.reject(replyPeerId, clientSeq, reason);
    }
  }

  private reject(peerId: string, clientSeq: number, reason: string): void {
    if (peerId === this.adapter.selfPeerId) {
      this.callbacks.onActionRejected(reason);
      return;
    }
    void this.adapter.send<ActionRejectedPayload>(
      'action_rejected',
      { reason, clientSeq },
      peerId,
    );
  }

  private scheduleBotTurnIfNeeded(): void {
    if (this.botTimer) {
      clearTimeout(this.botTimer);
      this.botTimer = null;
    }
    if (!this.isHost || this.phase !== 'playing' || !this.fullState) return;
    if (!this.engine.chooseBotAction) return;

    const botSeats = this.seats.filter((s) => s.isBot);
    for (const bot of botSeats) {
      const botAction = this.engine.chooseBotAction(this.fullState, bot.playerId);
      if (botAction) {
        this.botTimer = setTimeout(() => {
          this.botTimer = null;
          if (!this.isHost || this.phase !== 'playing' || !this.fullState) return;
          try {
            this.fullState = this.engine.applyAction(this.fullState, botAction);
            this.outcome = this.engine.isGameOver(this.fullState);
            if (this.outcome) {
              this.phase = 'ended';
            }
            this.bumpAndBroadcast();
            this.scheduleBotTurnIfNeeded();
          } catch {
            // Bot move became stale
          }
        }, 420);
        break;
      }
    }
  }

  private applyRemoteSnapshot(snapshot: RoomSnapshot): void {
    this.version = snapshot.version;
    this.hostPlayerId = snapshot.hostPlayerId;
    this.gameId = snapshot.gameId;
    this.phase = snapshot.phase;
    this.settings = snapshot.settings;
    this.seats = snapshot.seats;
    this.spectators = snapshot.spectators;
    this.lastGameView = snapshot.gameView;
    this.outcome = snapshot.outcome;
    this.disconnectVotes = snapshot.disconnectVotes ?? {};
    this.mutedPlayerIds = new Set(snapshot.mutedPlayerIds ?? []);

    for (const seat of this.seats) {
      if (seat.peerId) {
        this.peerToPlayerId.set(seat.peerId, seat.playerId);
      }
    }
    for (const spec of this.spectators) {
      this.peerToPlayerId.set(spec.peerId, spec.playerId);
    }

    this.callbacks.onSnapshot(snapshot);
  }

  private buildSnapshotFor(viewerPlayerId: string | null): RoomSnapshot {
    const view =
      this.fullState !== null ? this.engine.getView(this.fullState, viewerPlayerId) : null;

    return {
      version: this.version,
      roomCode: this.roomCode,
      hostPlayerId: this.hostPlayerId,
      gameId: this.gameId,
      phase: this.phase,
      settings: this.settings,
      seats: this.seats.map((s) => ({ ...s })),
      spectators: this.spectators.map((s) => ({ ...s })),
      gameView: view,
      outcome: this.outcome,
      disconnectVotes: structuredClone(this.disconnectVotes),
      mutedPlayerIds: Array.from(this.mutedPlayerIds),
    };
  }

  private emitLocalSnapshot(): void {
    const selfIsSeat = this.seats.some((s) => s.playerId === this.self.playerId);
    const snap = this.buildSnapshotFor(selfIsSeat ? this.self.playerId : null);
    this.lastGameView = snap.gameView;
    this.callbacks.onSnapshot(snap);
  }

  private bumpAndBroadcast(): void {
    this.version += 1;
    this.emitLocalSnapshot();

    // Send personalized view to each connected seated player (protects hidden hands!)
    for (const seat of this.seats) {
      if (!seat.connected || seat.isBot || !seat.peerId) continue;
      if (seat.playerId === this.self.playerId) continue;
      const snap = this.buildSnapshotFor(seat.playerId);
      void this.adapter.send('room_snapshot', snap, seat.peerId);
    }

    // Send spectator view (null playerId = all hidden hands stripped)
    for (const spec of this.spectators) {
      const snap = this.buildSnapshotFor(null);
      void this.adapter.send('room_snapshot', snap, spec.peerId);
    }
  }
}

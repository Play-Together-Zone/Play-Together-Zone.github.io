import { Chess, type Square, type PieceSymbol } from 'chess.js';
import {
  IllegalMoveError,
  type GameActionBase,
  type GameEngine,
  type GameOutcome,
  type GamePlayer,
} from './types';

export type ChessColor = 'w' | 'b';

export interface ChessMoveEntry {
  playerId: string;
  color: ChessColor;
  from: string;
  to: string;
  san: string;
  label: string;
}

export interface ChessClockState {
  enabled: boolean;
  initialMs: number;
  remainingMs: Record<ChessColor, number>;
  lastTickAt: number | null;
}

export interface ChessState {
  fen: string;
  pgn: string;
  players: GamePlayer[];
  colors: Record<string, ChessColor>;
  currentTurnPlayerId: string;
  inCheck: boolean;
  drawOfferBy: string | null;
  outcome: GameOutcome | null;
  clock: ChessClockState;
  history: ChessMoveEntry[];
}

export type ChessAction =
  | (GameActionBase & {
      type: 'move';
      from: string;
      to: string;
      promotion?: 'q' | 'r' | 'b' | 'n';
    })
  | (GameActionBase & {
      type: 'offer_draw';
    })
  | (GameActionBase & {
      type: 'respond_draw';
      accept: boolean;
    })
  | (GameActionBase & {
      type: 'resign';
    })
  | (GameActionBase & {
      type: 'flag_timeout';
    });

export interface ChessOptions {
  clockMinutes?: number;
}

function loadChess(state: Pick<ChessState, 'fen' | 'pgn'>): Chess {
  const chess = new Chess();
  if (state.pgn.trim()) {
    try {
      chess.loadPgn(state.pgn);
      return chess;
    } catch {
      // Fallback to FEN if PGN empty/unparseable
    }
  }
  chess.load(state.fen);
  return chess;
}

function pieceValue(t: PieceSymbol): number {
  switch (t) {
    case 'p':
      return 1;
    case 'n':
    case 'b':
      return 3;
    case 'r':
      return 5;
    case 'q':
      return 9;
    case 'k':
      return 100;
  }
}

export const chessEngine: GameEngine<
  ChessState,
  ChessAction,
  ChessOptions,
  ChessState
> = {
  id: 'chess',
  name: 'Chess',
  minPlayers: 2,
  maxPlayers: 2,
  supportsBot: true,

  init(players: GamePlayer[], options?: ChessOptions): ChessState {
    if (players.length !== 2) {
      throw new Error('Chess requires exactly 2 players.');
    }
    const sorted = [...players].sort((a, b) => a.seatIndex - b.seatIndex);
    const p0 = sorted[0]!;
    const p1 = sorted[1]!;
    const chess = new Chess();
    const clockMinutes = Number(options?.clockMinutes ?? 0);
    const initialMs = clockMinutes > 0 ? clockMinutes * 60 * 1000 : 0;

    return {
      fen: chess.fen(),
      pgn: '',
      players: sorted,
      colors: {
        [p0.id]: 'w',
        [p1.id]: 'b',
      },
      currentTurnPlayerId: p0.id,
      inCheck: false,
      drawOfferBy: null,
      outcome: null,
      clock: {
        enabled: initialMs > 0,
        initialMs,
        remainingMs: { w: initialMs, b: initialMs },
        lastTickAt: initialMs > 0 ? Date.now() : null,
      },
      history: [],
    };
  },

  getLegalActions(state: ChessState, playerId: string): ChessAction[] {
    if (state.outcome) return [];
    const playerColor = state.colors[playerId];
    if (!playerColor) return [];

    const actions: ChessAction[] = [{ type: 'resign', playerId }];
    if (state.drawOfferBy && state.drawOfferBy !== playerId) {
      actions.push(
        { type: 'respond_draw', playerId, accept: true },
        { type: 'respond_draw', playerId, accept: false },
      );
    } else if (!state.drawOfferBy) {
      actions.push({ type: 'offer_draw', playerId });
    }

    if (state.currentTurnPlayerId !== playerId) {
      return actions;
    }

    const chess = loadChess(state);
    const verboseMoves = chess.moves({ verbose: true });
    for (const m of verboseMoves) {
      actions.push({
        type: 'move',
        playerId,
        from: m.from,
        to: m.to,
        ...(m.promotion
          ? { promotion: m.promotion as 'q' | 'r' | 'b' | 'n' }
          : {}),
      });
    }
    return actions;
  },

  applyAction(state: ChessState, action: ChessAction): ChessState {
    if (state.outcome) {
      throw new IllegalMoveError('Chess match is already over.');
    }
    const actorColor = state.colors[action.playerId];
    if (!actorColor) {
      throw new IllegalMoveError('Player is not seated in this chess match.');
    }
    const opponent = state.players.find((p) => p.id !== action.playerId)!;

    if (action.type === 'resign') {
      const actor = state.players.find((p) => p.id === action.playerId);
      return {
        ...state,
        outcome: {
          winnerIds: [opponent.id],
          reason: `${actor?.name ?? 'Player'} resigned.`,
        },
      };
    }

    if (action.type === 'offer_draw') {
      return {
        ...state,
        drawOfferBy: action.playerId,
      };
    }

    if (action.type === 'respond_draw') {
      if (!state.drawOfferBy || state.drawOfferBy === action.playerId) {
        throw new IllegalMoveError('No pending draw offer to respond to.');
      }
      if (!action.accept) {
        return {
          ...state,
          drawOfferBy: null,
        };
      }
      return {
        ...state,
        drawOfferBy: null,
        outcome: {
          winnerIds: [],
          reason: 'Draw agreed by mutual consent.',
        },
      };
    }

    if (action.type === 'flag_timeout') {
      if (!state.clock.enabled || state.clock.lastTickAt === null) {
        throw new IllegalMoveError('Chess clock is not enabled.');
      }
      const turnColor = state.colors[state.currentTurnPlayerId]!;
      const elapsed = Date.now() - state.clock.lastTickAt;
      const rem = state.clock.remainingMs[turnColor] - elapsed;
      if (rem > 0) {
        throw new IllegalMoveError('Active player still has time on the clock.');
      }
      const winner = state.players.find((p) => p.id !== state.currentTurnPlayerId)!;
      const loser = state.players.find((p) => p.id === state.currentTurnPlayerId);
      return {
        ...state,
        clock: {
          ...state.clock,
          remainingMs: {
            ...state.clock.remainingMs,
            [turnColor]: 0,
          },
        },
        outcome: {
          winnerIds: [winner.id],
          reason: `${loser?.name ?? 'Player'} ran out of time.`,
        },
      };
    }

    if (action.type !== 'move') {
      throw new IllegalMoveError('Unsupported chess action.');
    }

    if (state.currentTurnPlayerId !== action.playerId) {
      throw new IllegalMoveError('Not your turn.');
    }

    const now = Date.now();
    let updatedRemaining = { ...state.clock.remainingMs };
    if (state.clock.enabled && state.clock.lastTickAt !== null) {
      const spent = Math.max(0, now - state.clock.lastTickAt);
      const nextRem = Math.max(0, updatedRemaining[actorColor] - spent);
      updatedRemaining = { ...updatedRemaining, [actorColor]: nextRem };
      if (nextRem <= 0) {
        return {
          ...state,
          clock: {
            ...state.clock,
            remainingMs: updatedRemaining,
          },
          outcome: {
            winnerIds: [opponent.id],
            reason: 'Time expired before move completion.',
          },
        };
      }
    }

    const chess = loadChess(state);
    let moved;
    try {
      moved = chess.move({
        from: action.from as Square,
        to: action.to as Square,
        promotion: action.promotion ?? 'q',
      });
    } catch {
      throw new IllegalMoveError(`Illegal chess move: ${action.from} to ${action.to}.`);
    }

    const nextTurnColor = chess.turn();
    const nextPlayer =
      Object.entries(state.colors).find(([, c]) => c === nextTurnColor)?.[0] ??
      opponent.id;

    let outcome: GameOutcome | null = null;
    if (chess.isCheckmate()) {
      const winner = state.players.find((p) => p.id === action.playerId);
      outcome = {
        winnerIds: [action.playerId],
        reason: `Checkmate! ${winner?.name ?? 'Player'} wins.`,
      };
    } else if (chess.isStalemate()) {
      outcome = {
        winnerIds: [],
        reason: 'Draw by stalemate.',
      };
    } else if (chess.isThreefoldRepetition()) {
      outcome = {
        winnerIds: [],
        reason: 'Draw by threefold repetition.',
      };
    } else if (chess.isInsufficientMaterial()) {
      outcome = {
        winnerIds: [],
        reason: 'Draw by insufficient material.',
      };
    } else if (chess.isDraw()) {
      outcome = {
        winnerIds: [],
        reason: 'Draw by 50-move rule.',
      };
    }

    return {
      ...state,
      fen: chess.fen(),
      pgn: chess.pgn(),
      currentTurnPlayerId: nextPlayer,
      inCheck: chess.inCheck(),
      drawOfferBy: null,
      outcome,
      clock: {
        ...state.clock,
        remainingMs: updatedRemaining,
        lastTickAt: state.clock.enabled && !outcome ? now : null,
      },
      history: [
        ...state.history,
        {
          playerId: action.playerId,
          color: actorColor,
          from: moved.from,
          to: moved.to,
          san: moved.san,
          label: moved.san,
        },
      ],
    };
  },

  isGameOver(state: ChessState): GameOutcome | null {
    return state.outcome;
  },

  getView(state: ChessState): ChessState {
    return state;
  },

  chooseBotAction(state: ChessState, botPlayerId: string): ChessAction | null {
    if (state.outcome || state.currentTurnPlayerId !== botPlayerId) {
      return null;
    }

    const chess = loadChess(state);
    const moves = chess.moves({ verbose: true });
    if (moves.length === 0) return null;

    let bestMove = moves[0]!;
    let bestScore = -Infinity;

    for (const m of moves) {
      let score = Math.random() * 0.25;
      if (m.captured) {
        score += pieceValue(m.captured) * 10 - pieceValue(m.piece);
      }
      if (m.promotion) {
        score += pieceValue(m.promotion) * 8;
      }
      chess.move(m);
      if (chess.isCheckmate()) score += 10000;
      else if (chess.inCheck()) score += 3;
      else if (chess.isStalemate()) score -= 50;
      chess.undo();

      if (['d4', 'd5', 'e4', 'e5'].includes(m.to)) {
        score += 1.5;
      }

      if (score > bestScore) {
        bestScore = score;
        bestMove = m;
      }
    }

    return {
      type: 'move',
      playerId: botPlayerId,
      from: bestMove.from,
      to: bestMove.to,
      ...(bestMove.promotion
        ? { promotion: bestMove.promotion as 'q' | 'r' | 'b' | 'n' }
        : {}),
    };
  },
};

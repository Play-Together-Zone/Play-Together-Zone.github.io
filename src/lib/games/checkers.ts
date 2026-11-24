import {
  IllegalMoveError,
  type GameActionBase,
  type GameEngine,
  type GameOutcome,
  type GamePlayer,
} from './types';

export type CheckersColor = 'r' | 'b';
export type CheckersPiece = 'r' | 'R' | 'b' | 'B' | null;

export interface CheckersMoveEntry {
  playerId: string;
  from: number;
  to: number;
  captured: number | null;
  promoted: boolean;
  label: string;
}

export interface CheckersState {
  board: CheckersPiece[]; // 64 squares, row-major 0..63
  players: GamePlayer[];
  colors: Record<string, CheckersColor>;
  currentTurnPlayerId: string;
  mustContinueFrom: number | null;
  pliesWithoutCaptureOrAdvance: number;
  outcome: GameOutcome | null;
  history: CheckersMoveEntry[];
}

export interface CheckersAction extends GameActionBase {
  type: 'move';
  from: number;
  to: number;
}

function pieceColor(p: CheckersPiece): CheckersColor | null {
  if (!p) return null;
  return p === 'r' || p === 'R' ? 'r' : 'b';
}

function isKing(p: CheckersPiece): boolean {
  return p === 'R' || p === 'B';
}

function rc(idx: number): [number, number] {
  return [Math.floor(idx / 8), idx % 8];
}

function toIdx(r: number, c: number): number {
  return r * 8 + c;
}

function inBounds(r: number, c: number): boolean {
  return r >= 0 && r < 8 && c >= 0 && c < 8;
}

function sqLabel(idx: number): string {
  const [r, c] = rc(idx);
  const col = String.fromCharCode(65 + c);
  return `${col}${8 - r}`;
}

function getMoveDirs(piece: NonNullable<CheckersPiece>): Array<[number, number]> {
  if (isKing(piece)) {
    return [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];
  }
  return piece === 'r'
    ? [
        [-1, -1],
        [-1, 1],
      ]
    : [
        [1, -1],
        [1, 1],
      ];
}

interface InternalMove {
  from: number;
  to: number;
  captured: number | null;
}

function getPieceCaptures(
  board: CheckersPiece[],
  from: number,
  color: CheckersColor,
): InternalMove[] {
  const piece = board[from];
  if (!piece || pieceColor(piece) !== color) return [];
  const [r, c] = rc(from);
  const out: InternalMove[] = [];
  for (const [dr, dc] of getMoveDirs(piece)) {
    const mr = r + dr;
    const mc = c + dc;
    const lr = r + dr * 2;
    const lc = c + dc * 2;
    if (!inBounds(lr, lc)) continue;
    const midIdx = toIdx(mr, mc);
    const landIdx = toIdx(lr, lc);
    const mid = board[midIdx] ?? null;
    if (mid && pieceColor(mid) !== color && board[landIdx] === null) {
      out.push({ from, to: landIdx, captured: midIdx });
    }
  }
  return out;
}

function getPieceQuietMoves(
  board: CheckersPiece[],
  from: number,
  color: CheckersColor,
): InternalMove[] {
  const piece = board[from];
  if (!piece || pieceColor(piece) !== color) return [];
  const [r, c] = rc(from);
  const out: InternalMove[] = [];
  for (const [dr, dc] of getMoveDirs(piece)) {
    const nr = r + dr;
    const nc = c + dc;
    if (!inBounds(nr, nc)) continue;
    const landIdx = toIdx(nr, nc);
    if (board[landIdx] === null) {
      out.push({ from, to: landIdx, captured: null });
    }
  }
  return out;
}

function getAllLegalMovesForColor(
  board: CheckersPiece[],
  color: CheckersColor,
  mustContinueFrom: number | null,
): InternalMove[] {
  if (mustContinueFrom !== null) {
    return getPieceCaptures(board, mustContinueFrom, color);
  }

  const captures: InternalMove[] = [];
  const quiet: InternalMove[] = [];
  for (let i = 0; i < 64; i++) {
    const p = board[i] ?? null;
    if (!p || pieceColor(p) !== color) continue;
    captures.push(...getPieceCaptures(board, i, color));
    if (captures.length === 0) {
      quiet.push(...getPieceQuietMoves(board, i, color));
    }
  }
  // Forced capture rule
  return captures.length > 0 ? captures : quiet;
}

function createInitialBoard(): CheckersPiece[] {
  const board = Array<CheckersPiece>(64).fill(null);
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if ((r + c) % 2 === 1) {
        if (r < 3) board[toIdx(r, c)] = 'b';
        else if (r > 4) board[toIdx(r, c)] = 'r';
      }
    }
  }
  return board;
}

export const checkersEngine: GameEngine<
  CheckersState,
  CheckersAction,
  Record<string, unknown>,
  CheckersState
> = {
  id: 'checkers',
  name: 'Checkers',
  minPlayers: 2,
  maxPlayers: 2,
  supportsBot: true,

  init(players: GamePlayer[]): CheckersState {
    if (players.length !== 2) {
      throw new Error('Checkers requires exactly 2 players.');
    }
    const sorted = [...players].sort((a, b) => a.seatIndex - b.seatIndex);
    const p0 = sorted[0]!;
    const p1 = sorted[1]!;

    return {
      board: createInitialBoard(),
      players: sorted,
      colors: {
        [p0.id]: 'r',
        [p1.id]: 'b',
      },
      currentTurnPlayerId: p0.id,
      mustContinueFrom: null,
      pliesWithoutCaptureOrAdvance: 0,
      outcome: null,
      history: [],
    };
  },

  getLegalActions(state: CheckersState, playerId: string): CheckersAction[] {
    if (state.outcome || state.currentTurnPlayerId !== playerId) return [];
    const color = state.colors[playerId];
    if (!color) return [];
    return getAllLegalMovesForColor(
      state.board,
      color,
      state.mustContinueFrom,
    ).map((m) => ({
      type: 'move',
      playerId,
      from: m.from,
      to: m.to,
    }));
  },

  applyAction(state: CheckersState, action: CheckersAction): CheckersState {
    if (state.outcome) {
      throw new IllegalMoveError('Match is already over.');
    }
    if (action.type !== 'move') {
      throw new IllegalMoveError('Invalid action type for Checkers.');
    }
    if (action.playerId !== state.currentTurnPlayerId) {
      throw new IllegalMoveError('Not your turn.');
    }
    const color = state.colors[action.playerId];
    if (!color) {
      throw new IllegalMoveError('Player is not in this match.');
    }

    const legal = getAllLegalMovesForColor(
      state.board,
      color,
      state.mustContinueFrom,
    );
    const matched = legal.find(
      (m) => m.from === action.from && m.to === action.to,
    );
    if (!matched) {
      const hasForcedCapture = legal.some((m) => m.captured !== null);
      throw new IllegalMoveError(
        hasForcedCapture
          ? 'Illegal move: a capture jump is mandatory.'
          : 'Illegal checkers move.',
      );
    }

    const nextBoard = [...state.board];
    const movingPiece = nextBoard[matched.from]!;
    nextBoard[matched.from] = null;
    if (matched.captured !== null) {
      nextBoard[matched.captured] = null;
    }

    const [destRow] = rc(matched.to);
    const shouldPromote =
      !isKing(movingPiece) &&
      ((color === 'r' && destRow === 0) || (color === 'b' && destRow === 7));
    const placedPiece: CheckersPiece = shouldPromote
      ? color === 'r'
        ? 'R'
        : 'B'
      : movingPiece;
    nextBoard[matched.to] = placedPiece;

    // Multi-jump check: only if this move was a capture and the piece did NOT just promote
    const followUpCaptures =
      matched.captured !== null && !shouldPromote
        ? getPieceCaptures(nextBoard, matched.to, color)
        : [];

    const continuesTurn = followUpCaptures.length > 0;
    const otherPlayer = state.players.find((p) => p.id !== action.playerId)!;
    const nextTurnPlayerId = continuesTurn ? action.playerId : otherPlayer.id;
    const nextColor = state.colors[nextTurnPlayerId]!;

    const pliesReset = matched.captured !== null || !isKing(movingPiece);
    const nextPlies = pliesReset ? 0 : state.pliesWithoutCaptureOrAdvance + 1;

    let outcome: GameOutcome | null = null;
    if (!continuesTurn) {
      const oppMoves = getAllLegalMovesForColor(nextBoard, nextColor, null);
      if (oppMoves.length === 0) {
        const winner = state.players.find((p) => p.id === action.playerId);
        outcome = {
          winnerIds: [action.playerId],
          reason: `${winner?.name ?? 'Player'} won — opponent has no legal moves.`,
        };
      } else if (nextPlies >= 80) {
        outcome = {
          winnerIds: [],
          reason: '40 moves without capture or pawn advance — Draw.',
        };
      }
    }

    const moveLabel = `${sqLabel(matched.from)}${
      matched.captured !== null ? '×' : '→'
    }${sqLabel(matched.to)}${shouldPromote ? ' (King)' : ''}`;

    return {
      ...state,
      board: nextBoard,
      currentTurnPlayerId: nextTurnPlayerId,
      mustContinueFrom: continuesTurn ? matched.to : null,
      pliesWithoutCaptureOrAdvance: nextPlies,
      outcome,
      history: [
        ...state.history,
        {
          playerId: action.playerId,
          from: matched.from,
          to: matched.to,
          captured: matched.captured,
          promoted: shouldPromote,
          label: moveLabel,
        },
      ],
    };
  },

  isGameOver(state: CheckersState): GameOutcome | null {
    return state.outcome;
  },

  getView(state: CheckersState): CheckersState {
    return state;
  },

  chooseBotAction(state: CheckersState, botPlayerId: string): CheckersAction | null {
    const legal = this.getLegalActions(state, botPlayerId);
    if (legal.length === 0) return null;

    let best = legal[0]!;
    let bestScore = -Infinity;
    const botColor = state.colors[botPlayerId]!;

    for (const act of legal) {
      const next = this.applyAction(state, act);
      let score = 0;
      if (next.outcome?.winnerIds.includes(botPlayerId)) score += 1000;
      const lastEntry = next.history[next.history.length - 1];
      if (lastEntry?.captured !== null) score += 25;
      if (lastEntry?.promoted) score += 20;
      if (next.mustContinueFrom !== null) score += 15;

      // Penalize landing on a square immediately capturable if opponent moves next
      if (next.currentTurnPlayerId !== botPlayerId) {
        const oppColor: CheckersColor = botColor === 'r' ? 'b' : 'r';
        const oppMoves = getAllLegalMovesForColor(next.board, oppColor, null);
        if (oppMoves.some((m) => m.captured !== null)) {
          score -= 18;
        }
      }
      // Small positional preference for center columns
      const [, c] = rc(act.to);
      score += 3 - Math.abs(3.5 - c);

      if (score > bestScore) {
        bestScore = score;
        best = act;
      }
    }

    return best;
  },
};

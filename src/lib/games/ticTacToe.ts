import {
  IllegalMoveError,
  type GameActionBase,
  type GameEngine,
  type GameOutcome,
  type GamePlayer,
} from './types';

export type TicTacToeMark = 'X' | 'O';
export type TicTacToeCell = TicTacToeMark | null;

export interface TicTacToeMoveEntry {
  playerId: string;
  mark: TicTacToeMark;
  cell: number;
  label: string;
}

export interface TicTacToeState {
  board: TicTacToeCell[];
  players: GamePlayer[];
  marks: Record<string, TicTacToeMark>;
  currentTurnPlayerId: string;
  winnerIds: string[] | null;
  winningLine: number[] | null;
  isDraw: boolean;
  history: TicTacToeMoveEntry[];
}

export interface TicTacToeAction extends GameActionBase {
  type: 'place';
  cell: number;
}

const WIN_LINES: [number, number, number][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function evaluateWinner(board: TicTacToeCell[]): {
  mark: TicTacToeMark;
  line: number[];
} | null {
  for (const line of WIN_LINES) {
    const [a, b, c] = line;
    const m = board[a];
    if (m && m === board[b] && m === board[c]) {
      return { mark: m, line: [...line] };
    }
  }
  return null;
}

function cellLabel(cell: number): string {
  const row = Math.floor(cell / 3) + 1;
  const col = ['A', 'B', 'C'][cell % 3] ?? '?';
  return `${col}${row}`;
}

export const ticTacToeEngine: GameEngine<
  TicTacToeState,
  TicTacToeAction,
  Record<string, unknown>,
  TicTacToeState
> = {
  id: 'tic-tac-toe',
  name: 'Tic-Tac-Toe',
  minPlayers: 2,
  maxPlayers: 2,
  supportsBot: true,

  init(players: GamePlayer[]): TicTacToeState {
    if (players.length !== 2) {
      throw new Error('Tic-Tac-Toe requires exactly 2 players.');
    }
    const sorted = [...players].sort((a, b) => a.seatIndex - b.seatIndex);
    const p0 = sorted[0]!;
    const p1 = sorted[1]!;
    return {
      board: Array<TicTacToeCell>(9).fill(null),
      players: sorted,
      marks: {
        [p0.id]: 'X',
        [p1.id]: 'O',
      },
      currentTurnPlayerId: p0.id,
      winnerIds: null,
      winningLine: null,
      isDraw: false,
      history: [],
    };
  },

  getLegalActions(state: TicTacToeState, playerId: string): TicTacToeAction[] {
    if (state.winnerIds || state.isDraw) return [];
    if (state.currentTurnPlayerId !== playerId) return [];
    const actions: TicTacToeAction[] = [];
    for (let i = 0; i < 9; i++) {
      if (state.board[i] === null) {
        actions.push({ type: 'place', playerId, cell: i });
      }
    }
    return actions;
  },

  applyAction(state: TicTacToeState, action: TicTacToeAction): TicTacToeState {
    if (state.winnerIds || state.isDraw) {
      throw new IllegalMoveError('Match is already over.');
    }
    if (action.type !== 'place') {
      throw new IllegalMoveError('Unsupported Tic-Tac-Toe action.');
    }
    if (action.playerId !== state.currentTurnPlayerId) {
      throw new IllegalMoveError('Not your turn.');
    }
    if (
      !Number.isInteger(action.cell) ||
      action.cell < 0 ||
      action.cell > 8
    ) {
      throw new IllegalMoveError('Cell index out of bounds.');
    }
    if (state.board[action.cell] !== null) {
      throw new IllegalMoveError('Cell is already occupied.');
    }

    const mark = state.marks[action.playerId];
    if (!mark) {
      throw new IllegalMoveError('Player is not seated in this match.');
    }

    const nextBoard = [...state.board];
    nextBoard[action.cell] = mark;

    const win = evaluateWinner(nextBoard);
    const filled = nextBoard.every((c) => c !== null);
    const otherPlayer = state.players.find((p) => p.id !== action.playerId);

    return {
      ...state,
      board: nextBoard,
      currentTurnPlayerId:
        win || filled ? state.currentTurnPlayerId : (otherPlayer?.id ?? action.playerId),
      winnerIds: win ? [action.playerId] : null,
      winningLine: win ? win.line : null,
      isDraw: !win && filled,
      history: [
        ...state.history,
        {
          playerId: action.playerId,
          mark,
          cell: action.cell,
          label: `${mark} → ${cellLabel(action.cell)}`,
        },
      ],
    };
  },

  isGameOver(state: TicTacToeState): GameOutcome | null {
    if (state.winnerIds) {
      const winner = state.players.find((p) => p.id === state.winnerIds?.[0]);
      return {
        winnerIds: state.winnerIds,
        reason: `${winner?.name ?? 'Player'} aligned 3 in a row!`,
      };
    }
    if (state.isDraw) {
      return {
        winnerIds: [],
        reason: 'Board full — Draw!',
      };
    }
    return null;
  },

  getView(state: TicTacToeState): TicTacToeState {
    return state;
  },

  chooseBotAction(state: TicTacToeState, botPlayerId: string): TicTacToeAction | null {
    const legal = this.getLegalActions(state, botPlayerId);
    if (legal.length === 0) return null;

    const myMark = state.marks[botPlayerId];
    const oppMark: TicTacToeMark = myMark === 'X' ? 'O' : 'X';

    // 1. Take immediate winning cell
    for (const act of legal) {
      const copy = [...state.board];
      copy[act.cell] = myMark ?? 'O';
      if (evaluateWinner(copy)) return act;
    }

    // 2. Block opponent winning cell
    for (const act of legal) {
      const copy = [...state.board];
      copy[act.cell] = oppMark;
      if (evaluateWinner(copy)) return act;
    }

    // 3. Prefer center, then corners
    const priority = [4, 0, 2, 6, 8, 1, 3, 5, 7];
    for (const cell of priority) {
      const found = legal.find((a) => a.cell === cell);
      if (found) return found;
    }

    return legal[0] ?? null;
  },
};

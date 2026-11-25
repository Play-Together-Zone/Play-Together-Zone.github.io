import { Chess, type PieceSymbol } from 'chess.js';
import type { ChessColor, ChessMoveEntry } from './chess';

export type CapturedPieceSymbol = Exclude<PieceSymbol, 'k'>;

const STARTING_COUNTS: Record<CapturedPieceSymbol, number> = {
  q: 1,
  r: 2,
  b: 2,
  n: 2,
  p: 8,
};

const CAPTURE_VALUES: Record<CapturedPieceSymbol, number> = {
  q: 9,
  r: 5,
  b: 3,
  n: 3,
  p: 1,
};

const DISPLAY_ORDER: CapturedPieceSymbol[] = ['q', 'r', 'b', 'n', 'p'];

export interface MaterialSummary {
  /** Pieces captured BY white (i.e. missing black pieces). */
  capturedByWhite: CapturedPieceSymbol[];
  /** Pieces captured BY black (i.e. missing white pieces). */
  capturedByBlack: CapturedPieceSymbol[];
  /** Positive if white leads in material, negative if black leads. */
  materialDiff: number;
}

/**
 * Computes captured pieces and net material lead from the current FEN
 * without requiring extra state fields.
 */
export function computeMaterialSummary(fen: string): MaterialSummary {
  const chess = new Chess(fen);
  const board = chess.board();

  const onBoard: Record<ChessColor, Record<CapturedPieceSymbol, number>> = {
    w: { q: 0, r: 0, b: 0, n: 0, p: 0 },
    b: { q: 0, r: 0, b: 0, n: 0, p: 0 },
  };

  for (const row of board) {
    for (const cell of row) {
      if (!cell || cell.type === 'k') continue;
      const t = cell.type as CapturedPieceSymbol;
      onBoard[cell.color][t] += 1;
    }
  }

  const capturedByWhite: CapturedPieceSymbol[] = [];
  const capturedByBlack: CapturedPieceSymbol[] = [];
  let whitePoints = 0;
  let blackPoints = 0;

  for (const sym of DISPLAY_ORDER) {
    const missingBlack = Math.max(0, STARTING_COUNTS[sym] - onBoard.b[sym]);
    for (let i = 0; i < missingBlack; i++) {
      capturedByWhite.push(sym);
    }

    const missingWhite = Math.max(0, STARTING_COUNTS[sym] - onBoard.w[sym]);
    for (let i = 0; i < missingWhite; i++) {
      capturedByBlack.push(sym);
    }

    whitePoints += onBoard.w[sym] * CAPTURE_VALUES[sym];
    blackPoints += onBoard.b[sym] * CAPTURE_VALUES[sym];
  }

  return {
    capturedByWhite,
    capturedByBlack,
    materialDiff: whitePoints - blackPoints,
  };
}

export interface MovePairRow {
  moveNumber: number;
  whiteSan?: string;
  blackSan?: string;
}

export function groupMovePairs(history: ChessMoveEntry[]): MovePairRow[] {
  const rows: MovePairRow[] = [];
  for (let i = 0; i < history.length; i += 2) {
    rows.push({
      moveNumber: Math.floor(i / 2) + 1,
      whiteSan: history[i]?.san,
      blackSan: history[i + 1]?.san,
    });
  }
  return rows;
}

import { describe, expect, it } from 'vitest';
import { Chess } from 'chess.js';
import { computeMaterialSummary, groupMovePairs } from './chessHelpers';

describe('chessHelpers', () => {
  it('computes starting position as zero captures and zero material diff', () => {
    const chess = new Chess();
    expect(computeMaterialSummary(chess.fen())).toEqual({
      capturedByWhite: [],
      capturedByBlack: [],
      materialDiff: 0,
    });
  });

  it('tracks captured pieces and material advantage accurately', () => {
    const chess = new Chess();
    chess.move('e4');
    chess.move('d5');
    chess.move('exd5'); // white captures black pawn (+1)
    chess.move('Qxd5'); // black captures white pawn (0)
    chess.move('Nc3');
    chess.move('Qe5+');
    chess.move('Be2');
    chess.move('Bg4');
    chess.move('Nf3');
    chess.move('Bxf3'); // black captures knight (+3 for black)

    const summary = computeMaterialSummary(chess.fen());
    expect(summary.capturedByWhite).toEqual(['p']);
    expect(summary.capturedByBlack).toEqual(['n', 'p']);
    expect(summary.materialDiff).toBe(-3);
  });

  it('groups flat move history into numbered white/black pairs', () => {
    const pairs = groupMovePairs([
      { playerId: 'p1', color: 'w', from: 'e2', to: 'e4', san: 'e4', label: 'e4' },
      { playerId: 'p2', color: 'b', from: 'e7', to: 'e5', san: 'e5', label: 'e5' },
      { playerId: 'p1', color: 'w', from: 'g1', to: 'f3', san: 'Nf3', label: 'Nf3' },
    ]);

    expect(pairs).toEqual([
      { moveNumber: 1, whiteSan: 'e4', blackSan: 'e5' },
      { moveNumber: 2, whiteSan: 'Nf3', blackSan: undefined },
    ]);
  });
});

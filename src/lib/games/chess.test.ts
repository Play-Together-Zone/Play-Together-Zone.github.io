import { describe, expect, it } from 'vitest';
import { IllegalMoveError, type GamePlayer } from './types';
import { chessEngine } from './chess';

const PLAYERS: GamePlayer[] = [
  { id: 'w', name: 'White', avatar: '🦊', seatIndex: 0 },
  { id: 'b', name: 'Black', avatar: '🦉', seatIndex: 1 },
];

describe('chessEngine', () => {
  it('supports Fool’s Mate checkmate detection', () => {
    let state = chessEngine.init(PLAYERS);
    state = chessEngine.applyAction(state, { type: 'move', playerId: 'w', from: 'f2', to: 'f3' });
    state = chessEngine.applyAction(state, { type: 'move', playerId: 'b', from: 'e7', to: 'e5' });
    state = chessEngine.applyAction(state, { type: 'move', playerId: 'w', from: 'g2', to: 'g4' });
    state = chessEngine.applyAction(state, { type: 'move', playerId: 'b', from: 'd8', to: 'h4' });

    const outcome = chessEngine.isGameOver(state);
    expect(outcome?.winnerIds).toEqual(['b']);
    expect(outcome?.reason).toContain('Checkmate');
  });

  it('rejects illegal moves and supports castling, draw offers, and resignation', () => {
    let state = chessEngine.init(PLAYERS);
    expect(() =>
      chessEngine.applyAction(state, { type: 'move', playerId: 'w', from: 'e2', to: 'e5' }),
    ).toThrow(IllegalMoveError);

    // Clear kingside for White castling
    state = chessEngine.applyAction(state, { type: 'move', playerId: 'w', from: 'e2', to: 'e4' });
    state = chessEngine.applyAction(state, { type: 'move', playerId: 'b', from: 'e7', to: 'e5' });
    state = chessEngine.applyAction(state, { type: 'move', playerId: 'w', from: 'g1', to: 'f3' });
    state = chessEngine.applyAction(state, { type: 'move', playerId: 'b', from: 'b8', to: 'c6' });
    state = chessEngine.applyAction(state, { type: 'move', playerId: 'w', from: 'f1', to: 'c4' });
    state = chessEngine.applyAction(state, { type: 'move', playerId: 'b', from: 'g8', to: 'f6' });
    state = chessEngine.applyAction(state, { type: 'move', playerId: 'w', from: 'e1', to: 'g1' });

    expect(state.history.at(-1)?.san).toBe('O-O');

    // Offer & accept draw
    state = chessEngine.applyAction(state, { type: 'offer_draw', playerId: 'b' });
    expect(state.drawOfferBy).toBe('b');
    state = chessEngine.applyAction(state, {
      type: 'respond_draw',
      playerId: 'w',
      accept: true,
    });
    expect(chessEngine.isGameOver(state)?.winnerIds).toEqual([]);
  });

  it('supports resignation', () => {
    let state = chessEngine.init(PLAYERS);
    state = chessEngine.applyAction(state, { type: 'resign', playerId: 'w' });
    expect(chessEngine.isGameOver(state)?.winnerIds).toEqual(['b']);
  });
});

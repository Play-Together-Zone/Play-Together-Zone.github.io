import { describe, expect, it } from 'vitest';
import { IllegalMoveError, type GamePlayer } from './types';
import { checkersEngine, type CheckersState } from './checkers';

const PLAYERS: GamePlayer[] = [
  { id: 'p1', name: 'Red', avatar: '🦊', seatIndex: 0 },
  { id: 'p2', name: 'Black', avatar: '🦉', seatIndex: 1 },
];

function emptyState(turnId = 'p1'): CheckersState {
  const s = checkersEngine.init(PLAYERS);
  return {
    ...s,
    board: Array(64).fill(null),
    currentTurnPlayerId: turnId,
  };
}

describe('checkersEngine', () => {
  it('enforces forced captures when a jump is available', () => {
    const state = emptyState('p1');
    // Red piece at (4, 3) = 35, Black piece at (3, 4) = 28 -> capture to (2, 5) = 21
    state.board[35] = 'r';
    state.board[28] = 'b';
    // Another quiet move exists (35 -> 26), which must be rejected
    expect(() =>
      checkersEngine.applyAction(state, {
        type: 'move',
        playerId: 'p1',
        from: 35,
        to: 26,
      }),
    ).toThrow(IllegalMoveError);

    const next = checkersEngine.applyAction(state, {
      type: 'move',
      playerId: 'p1',
      from: 35,
      to: 21,
    });
    expect(next.board[28]).toBeNull();
    expect(next.board[21]).toBe('r');
  });

  it('supports multi-jump captures in one turn and crowns kings on back rank', () => {
    const state = emptyState('p1');
    // Red at (5, 2) = 42 -> jumps Black at (4, 3) = 35 -> lands (3, 4) = 28
    // then jumps Black at (2, 5) = 21 -> lands (1, 6) = 14
    state.board[42] = 'r';
    state.board[35] = 'b';
    state.board[21] = 'b';
    state.board[0] = 'b'; // keep black alive so game doesn't end after double jump

    const step1 = checkersEngine.applyAction(state, {
      type: 'move',
      playerId: 'p1',
      from: 42,
      to: 28,
    });
    expect(step1.currentTurnPlayerId).toBe('p1');
    expect(step1.mustContinueFrom).toBe(28);

    const step2 = checkersEngine.applyAction(step1, {
      type: 'move',
      playerId: 'p1',
      from: 28,
      to: 14,
    });
    expect(step2.mustContinueFrom).toBeNull();
    expect(step2.currentTurnPlayerId).toBe('p2');
    expect(step2.board[35]).toBeNull();
    expect(step2.board[21]).toBeNull();

    // Test promotion to King on row 0
    const promoState = emptyState('p1');
    promoState.board[9] = 'r';
    promoState.board[16] = 'b';
    const afterPromo = checkersEngine.applyAction(promoState, {
      type: 'move',
      playerId: 'p1',
      from: 9,
      to: 0,
    });
    expect(afterPromo.board[0]).toBe('R');
  });
});

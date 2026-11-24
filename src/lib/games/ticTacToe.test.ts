import { describe, expect, it } from 'vitest';
import { IllegalMoveError, type GamePlayer } from './types';
import { ticTacToeEngine } from './ticTacToe';

const PLAYERS: GamePlayer[] = [
  { id: 'p1', name: 'Alice', avatar: '🦊', seatIndex: 0 },
  { id: 'p2', name: 'Bob', avatar: '🦉', seatIndex: 1 },
];

describe('ticTacToeEngine', () => {
  it('initializes a 9-cell empty board with seat 0 as X', () => {
    const state = ticTacToeEngine.init(PLAYERS);
    expect(state.board).toHaveLength(9);
    expect(state.marks).toEqual({ p1: 'X', p2: 'O' });
    expect(state.currentTurnPlayerId).toBe('p1');
    expect(ticTacToeEngine.getLegalActions(state, 'p1')).toHaveLength(9);
    expect(ticTacToeEngine.getLegalActions(state, 'p2')).toHaveLength(0);
  });

  it('rejects out-of-turn and occupied moves', () => {
    let state = ticTacToeEngine.init(PLAYERS);
    expect(() =>
      ticTacToeEngine.applyAction(state, { type: 'place', playerId: 'p2', cell: 0 }),
    ).toThrow(IllegalMoveError);

    state = ticTacToeEngine.applyAction(state, {
      type: 'place',
      playerId: 'p1',
      cell: 4,
    });
    expect(() =>
      ticTacToeEngine.applyAction(state, { type: 'place', playerId: 'p2', cell: 4 }),
    ).toThrow(IllegalMoveError);
  });

  it('detects row/diagonal win and stops further moves', () => {
    let state = ticTacToeEngine.init(PLAYERS);
    state = ticTacToeEngine.applyAction(state, { type: 'place', playerId: 'p1', cell: 0 });
    state = ticTacToeEngine.applyAction(state, { type: 'place', playerId: 'p2', cell: 3 });
    state = ticTacToeEngine.applyAction(state, { type: 'place', playerId: 'p1', cell: 1 });
    state = ticTacToeEngine.applyAction(state, { type: 'place', playerId: 'p2', cell: 4 });
    state = ticTacToeEngine.applyAction(state, { type: 'place', playerId: 'p1', cell: 2 });

    const outcome = ticTacToeEngine.isGameOver(state);
    expect(outcome).not.toBeNull();
    expect(outcome?.winnerIds).toEqual(['p1']);
    expect(state.winningLine).toEqual([0, 1, 2]);
  });

  it('detects a draw when board fills without a line', () => {
    let state = ticTacToeEngine.init(PLAYERS);
    const seq: Array<[string, number]> = [
      ['p1', 0],
      ['p2', 1],
      ['p1', 2],
      ['p2', 4],
      ['p1', 3],
      ['p2', 5],
      ['p1', 7],
      ['p2', 6],
      ['p1', 8],
    ];
    for (const [playerId, cell] of seq) {
      state = ticTacToeEngine.applyAction(state, { type: 'place', playerId, cell });
    }
    const outcome = ticTacToeEngine.isGameOver(state);
    expect(outcome?.winnerIds).toEqual([]);
    expect(state.isDraw).toBe(true);
  });
});

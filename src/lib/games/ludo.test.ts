import { describe, expect, it } from 'vitest';
import { IllegalMoveError, type GamePlayer } from './types';
import {
  LUDO_HOME_GOAL,
  canMoveLudoToken,
  getOuterTrackIndex,
  ludoEngine,
} from './ludo';

const PLAYERS: GamePlayer[] = [
  { id: 'p1', name: 'One', avatar: '🦊', seatIndex: 0 },
  { id: 'p2', name: 'Two', avatar: '🦉', seatIndex: 1 },
];

describe('ludoEngine', () => {
  it('requires a 6 to leave home yard and exact roll to finish', () => {
    expect(canMoveLudoToken(-1, 5)).toBe(false);
    expect(canMoveLudoToken(-1, 6)).toBe(true);
    expect(canMoveLudoToken(54, 3)).toBe(false);
    expect(canMoveLudoToken(54, 2)).toBe(true);

    const state = ludoEngine.init(PLAYERS, { seed: 1 });
    expect(() =>
      ludoEngine.applyAction(state, {
        type: 'move_token',
        playerId: 'p1',
        tokenIndex: 0,
      }),
    ).toThrow(IllegalMoveError);
  });

  it('captures opponent tokens on unsafe squares and respects safe stars', () => {
    const base = ludoEngine.init(PLAYERS, { seed: 1 });
    // p1 is red (start=0), p2 is yellow (start=26)
    // Put red token #0 at progress 27 -> outer track 27 (unsafe!)
    // Wait: put red at progress 25 -> rolls 2 -> lands on 27; put yellow at progress 1 -> outer track 27!
    const customState = {
      ...base,
      turnStep: 'move' as const,
      diceValue: 2,
      tokens: {
        ...base.tokens,
        red: [25, -1, -1, -1],
        yellow: [1, 8, -1, -1], // progress 8 for yellow = outer (26+8)%52 = 34 (SAFE star!)
      },
    };

    const afterCapture = ludoEngine.applyAction(customState, {
      type: 'move_token',
      playerId: 'p1',
      tokenIndex: 0,
    });
    expect(afterCapture.tokens.yellow[0]).toBe(-1); // captured!
    expect(afterCapture.currentTurnPlayerId).toBe('p1'); // bonus turn on capture

    // Now test landing on safe star square 34 does NOT capture yellow[1]
    const safeState = {
      ...base,
      turnStep: 'move' as const,
      diceValue: 2,
      tokens: {
        ...base.tokens,
        red: [32, -1, -1, -1], // 32 + 2 = 34 (safe!)
        yellow: [-1, 8, -1, -1], // 26 + 8 = 34
      },
    };
    expect(getOuterTrackIndex('red', 34)).toBe(34);
    expect(getOuterTrackIndex('yellow', 8)).toBe(34);
    const afterSafe = ludoEngine.applyAction(safeState, {
      type: 'move_token',
      playerId: 'p1',
      tokenIndex: 0,
    });
    expect(afterSafe.tokens.yellow[1]).toBe(8);
  });

  it('detects win when all 4 tokens reach home goal 56', () => {
    const base = ludoEngine.init(PLAYERS, { seed: 1 });
    const nearWin = {
      ...base,
      turnStep: 'move' as const,
      diceValue: 1,
      tokens: {
        ...base.tokens,
        red: [LUDO_HOME_GOAL, LUDO_HOME_GOAL, LUDO_HOME_GOAL, 55],
      },
    };
    const won = ludoEngine.applyAction(nearWin, {
      type: 'move_token',
      playerId: 'p1',
      tokenIndex: 3,
    });
    expect(ludoEngine.isGameOver(won)?.winnerIds).toEqual(['p1']);
  });
});

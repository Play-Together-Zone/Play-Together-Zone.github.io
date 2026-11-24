import { describe, expect, it } from 'vitest';
import { IllegalMoveError, type GamePlayer } from './types';
import { colorRushEngine } from './colorRush';

const PLAYERS: GamePlayer[] = [
  { id: 'p1', name: 'Alice', avatar: '🦊', seatIndex: 0 },
  { id: 'p2', name: 'Bob', avatar: '🦉', seatIndex: 1 },
  { id: 'p3', name: 'Cara', avatar: '🐼', seatIndex: 2 },
];

describe('colorRushEngine', () => {
  it('deals 7 cards and hides other players hands in getView', () => {
    const state = colorRushEngine.init(PLAYERS, { seed: 7 });
    const p1View = colorRushEngine.getView(state, 'p1');
    const specView = colorRushEngine.getView(state, null);

    expect(p1View.myHand).toHaveLength(7);
    expect(p1View.players.every((p) => p.handCount === 7)).toBe(true);
    // View object does not expose opponents' cards
    expect(JSON.stringify(p1View)).not.toContain(state.hands.p2![0]!.id);
    expect(specView.myHand).toBeNull();
  });

  it('enforces Skip, Reverse Flow, Surge +2, and Last Card catch rule', () => {
    const base = colorRushEngine.init(PLAYERS, { seed: 10 });
    const controlled = {
      ...base,
      activeSuit: 'coral' as const,
      discardPile: [{ id: 'top', suit: 'coral' as const, value: '5' as const }],
      hands: {
        p1: [
          { id: 'a1', suit: 'coral' as const, value: 'plus2' as const },
          { id: 'a2', suit: 'teal' as const, value: '2' as const },
        ],
        p2: [{ id: 'b1', suit: 'plum' as const, value: '3' as const }],
        p3: [{ id: 'c1', suit: 'lime' as const, value: '4' as const }],
      },
      currentTurnPlayerId: 'p1',
      direction: 1 as const,
    };

    // Playing plus2 forces p2 to draw 2 and skips to p3
    const afterPlus2 = colorRushEngine.applyAction(controlled, {
      type: 'play_card',
      playerId: 'p1',
      cardId: 'a1',
    });
    expect(afterPlus2.hands.p2).toHaveLength(3);
    expect(afterPlus2.currentTurnPlayerId).toBe('p3');
    // p1 now has 1 card and did NOT call Last Card -> p3 can catch p1 (+2 penalty)
    const afterCatch = colorRushEngine.applyAction(afterPlus2, {
      type: 'catch_uncalled',
      playerId: 'p3',
      targetPlayerId: 'p1',
    });
    expect(afterCatch.hands.p1).toHaveLength(3);

    // Illegal play of non-matching card fails
    expect(() =>
      colorRushEngine.applyAction(controlled, {
        type: 'play_card',
        playerId: 'p1',
        cardId: 'a2',
      }),
    ).toThrow(IllegalMoveError);
  });

  it('wins when player plays their final card', () => {
    const base = colorRushEngine.init(PLAYERS, { seed: 5 });
    const finalTurn = {
      ...base,
      activeSuit: 'teal' as const,
      discardPile: [{ id: 'top', suit: 'teal' as const, value: '9' as const }],
      hands: {
        p1: [{ id: 'win-card', suit: 'prism' as const, value: 'prism' as const }],
        p2: [{ id: 'b1', suit: 'plum' as const, value: '3' as const }],
        p3: [{ id: 'c1', suit: 'lime' as const, value: '4' as const }],
      },
      currentTurnPlayerId: 'p1',
    };
    const won = colorRushEngine.applyAction(finalTurn, {
      type: 'play_card',
      playerId: 'p1',
      cardId: 'win-card',
      chosenSuit: 'lime',
    });
    expect(colorRushEngine.isGameOver(won)?.winnerIds).toEqual(['p1']);
  });
});

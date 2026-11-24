import { describe, expect, it } from 'vitest';
import { IllegalMoveError, type GamePlayer } from './types';
import { triviaEngine, type TriviaQuestion } from './trivia';

const PLAYERS: GamePlayer[] = [
  { id: 'p1', name: 'Host', avatar: '🦊', seatIndex: 0 },
  { id: 'p2', name: 'Guest', avatar: '🦉', seatIndex: 1 },
];

const QUESTIONS: TriviaQuestion[] = [
  {
    id: 'q1',
    category: 'Test',
    prompt: '2 + 2 = ?',
    choices: ['3', '4', '5', '6'],
    correctIndex: 1,
  },
];

describe('triviaEngine', () => {
  it('hides correctIndex before reveal and scores faster answers higher', () => {
    const start = 1_000_000;
    let state = triviaEngine.init(PLAYERS, {
      questions: QUESTIONS,
      durationSec: 15,
    });
    state = { ...state, questionStartedAt: start };

    const viewBefore = triviaEngine.getView(state, 'p2');
    expect(viewBefore.currentQuestion.correctIndex).toBeNull();

    // p1 answers right after 1s, p2 answers right after 10s
    state = triviaEngine.applyAction(state, {
      type: 'submit_answer',
      playerId: 'p1',
      choiceIndex: 1,
      timestamp: start + 1000,
    });
    expect(() =>
      triviaEngine.applyAction(state, {
        type: 'submit_answer',
        playerId: 'p1',
        choiceIndex: 2,
      }),
    ).toThrow(IllegalMoveError);

    state = triviaEngine.applyAction(state, {
      type: 'submit_answer',
      playerId: 'p2',
      choiceIndex: 1,
      timestamp: start + 10_000,
    });

    // Both answered -> auto-revealed
    expect(state.phase).toBe('reveal');
    expect((state.scores.p1 ?? 0) > (state.scores.p2 ?? 0)).toBe(true);

    const end = triviaEngine.applyAction(state, {
      type: 'next_question',
      playerId: 'p1',
    });
    expect(triviaEngine.isGameOver(end)?.winnerIds).toEqual(['p1']);
  });
});

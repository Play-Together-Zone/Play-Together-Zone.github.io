import {
  IllegalMoveError,
  type GameActionBase,
  type GameEngine,
  type GameOutcome,
  type GamePlayer,
} from './types';
import { withBasePath } from '../url';

export interface TriviaQuestion {
  id: string;
  category: string;
  prompt: string;
  choices: [string, string, string, string];
  correctIndex: number;
}

export interface TriviaSubmission {
  choiceIndex: number;
  answeredAt: number;
  pointsAwarded: number;
}

export interface TriviaState {
  players: GamePlayer[];
  hostPlayerId: string;
  packTitle: string;
  questions: TriviaQuestion[];
  questionIndex: number;
  phase: 'question' | 'reveal';
  durationSec: number;
  questionStartedAt: number;
  submissions: Record<string, TriviaSubmission>;
  scores: Record<string, number>;
  outcome: GameOutcome | null;
  history: Array<{ playerId: string; label: string }>;
}

export interface TriviaView {
  players: GamePlayer[];
  hostPlayerId: string;
  packTitle: string;
  questionIndex: number;
  totalQuestions: number;
  phase: 'question' | 'reveal';
  durationSec: number;
  questionStartedAt: number;
  currentQuestion: {
    id: string;
    category: string;
    prompt: string;
    choices: [string, string, string, string];
    correctIndex: number | null; // null until reveal!
  };
  answeredPlayerIds: string[];
  myChoiceIndex: number | null;
  revealedSubmissions: Record<string, TriviaSubmission> | null;
  scores: Record<string, number>;
  outcome: GameOutcome | null;
  history: Array<{ playerId: string; label: string }>;
}

export type TriviaAction =
  | (GameActionBase & { type: 'submit_answer'; choiceIndex: number; timestamp?: number })
  | (GameActionBase & { type: 'reveal_question' })
  | (GameActionBase & { type: 'next_question'; timestamp?: number });

export interface TriviaOptions {
  packTitle?: string;
  questions?: TriviaQuestion[];
  durationSec?: number;
}

export const BUILTIN_FALLBACK_QUESTIONS: TriviaQuestion[] = [
  {
    id: 'fb-1',
    category: 'Computing',
    prompt: 'What does P2P stand for in WebRTC multiplayer networking?',
    choices: ['Peer-to-Peer', 'Port-to-Port', 'Packet-to-Packet', 'Proxy-to-Proxy'],
    correctIndex: 0,
  },
  {
    id: 'fb-2',
    category: 'Games',
    prompt: 'How many squares are on a standard Tic-Tac-Toe grid?',
    choices: ['6', '8', '9', '12'],
    correctIndex: 2,
  },
  {
    id: 'fb-3',
    category: 'Science',
    prompt: 'Water freezes at what temperature in degrees Celsius at standard pressure?',
    choices: ['-10°C', '0°C', '32°C', '100°C'],
    correctIndex: 1,
  },
];

export const TRIVIA_PACK_META = [
  { id: 'science-tech', title: 'Science & Computing (CC0)' },
  { id: 'world-history', title: 'World & Geography (CC0)' },
  { id: 'pop-logic', title: 'Games, Logic & Arts (CC0)' },
] as const;

export async function loadStaticTriviaPack(packId: string): Promise<{
  title: string;
  questions: TriviaQuestion[];
}> {
  const res = await fetch(withBasePath(`/trivia/${encodeURIComponent(packId)}.json`));
  if (!res.ok) {
    throw new Error(`Unable to load trivia pack "${packId}"`);
  }
  const data = (await res.json()) as {
    title: string;
    questions: TriviaQuestion[];
  };
  return data;
}

function decodeHtmlEntities(input: string): string {
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&apos;': "'",
    '&ldquo;': '“',
    '&rdquo;': '”',
    '&rsquo;': '’',
    '&lsquo;': '‘',
    '&ndash;': '–',
    '&mdash;': '—',
  };
  return input.replace(
    /&(amp|lt|gt|quot|#039|apos|ldquo|rdquo|rsquo|lsquo|ndash|mdash);/g,
    (m) => entities[m] ?? m,
  );
}

export async function fetchOpenTdbQuestions(amount = 8): Promise<{
  title: string;
  questions: TriviaQuestion[];
}> {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&type=multiple`,
  );
  if (!res.ok) {
    throw new Error('Failed to fetch from Open Trivia Database.');
  }
  const payload = (await res.json()) as {
    response_code: number;
    results: Array<{
      category: string;
      question: string;
      correct_answer: string;
      incorrect_answers: string[];
    }>;
  };
  if (payload.response_code !== 0 || !Array.isArray(payload.results)) {
    throw new Error('Open Trivia Database returned no questions.');
  }

  const questions: TriviaQuestion[] = payload.results.map((r, idx) => {
    const correct = decodeHtmlEntities(r.correct_answer);
    const all = [
      correct,
      ...r.incorrect_answers.slice(0, 3).map(decodeHtmlEntities),
    ];
    // Shuffle choices
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = all[i]!;
      all[i] = all[j]!;
      all[j] = tmp;
    }
    const correctIndex = all.indexOf(correct);
    return {
      id: `otdb-${Date.now()}-${idx}`,
      category: decodeHtmlEntities(r.category),
      prompt: decodeHtmlEntities(r.question),
      choices: [
        all[0] ?? '',
        all[1] ?? '',
        all[2] ?? '',
        all[3] ?? '',
      ],
      correctIndex,
    };
  });

  return { title: 'Open Trivia Database (Live Fetch)', questions };
}

function computePoints(
  isCorrect: boolean,
  answeredAt: number,
  startedAt: number,
  durationSec: number,
): number {
  if (!isCorrect) return 0;
  const elapsedSec = Math.max(0, (answeredAt - startedAt) / 1000);
  const ratioRemaining = Math.max(0, 1 - elapsedSec / Math.max(1, durationSec));
  return Math.round(500 + 500 * ratioRemaining);
}

export const triviaEngine: GameEngine<
  TriviaState,
  TriviaAction,
  TriviaOptions,
  TriviaView
> = {
  id: 'trivia',
  name: 'Trivia Blitz',
  minPlayers: 2,
  maxPlayers: 8,
  supportsBot: true,

  init(players: GamePlayer[], options?: TriviaOptions): TriviaState {
    if (players.length < 2 || players.length > 8) {
      throw new Error('Trivia Blitz supports 2 to 8 players.');
    }
    const sorted = [...players].sort((a, b) => a.seatIndex - b.seatIndex);
    const questions =
      options?.questions && options.questions.length > 0
        ? options.questions
        : BUILTIN_FALLBACK_QUESTIONS;
    const durationSec = Number(options?.durationSec ?? 15);
    const scores: Record<string, number> = {};
    for (const p of sorted) scores[p.id] = 0;

    return {
      players: sorted,
      hostPlayerId: sorted[0]!.id,
      packTitle: options?.packTitle ?? 'Quick Pack',
      questions,
      questionIndex: 0,
      phase: 'question',
      durationSec: durationSec > 0 ? durationSec : 15,
      questionStartedAt: Date.now(),
      submissions: {},
      scores,
      outcome: null,
      history: [],
    };
  },

  getLegalActions(state: TriviaState, playerId: string): TriviaAction[] {
    if (state.outcome) return [];
    const isSeated = state.players.some((p) => p.id === playerId);
    if (!isSeated) return [];

    if (state.phase === 'question') {
      if (state.submissions[playerId]) {
        return playerId === state.hostPlayerId
          ? [{ type: 'reveal_question', playerId }]
          : [];
      }
      const acts: TriviaAction[] = [0, 1, 2, 3].map((choiceIndex) => ({
        type: 'submit_answer',
        playerId,
        choiceIndex,
      }));
      if (playerId === state.hostPlayerId) {
        acts.push({ type: 'reveal_question', playerId });
      }
      return acts;
    }

    if (state.phase === 'reveal' && playerId === state.hostPlayerId) {
      return [{ type: 'next_question', playerId }];
    }
    return [];
  },

  applyAction(state: TriviaState, action: TriviaAction): TriviaState {
    if (state.outcome) {
      throw new IllegalMoveError('Trivia match has already finished.');
    }
    const actor = state.players.find((p) => p.id === action.playerId);
    if (!actor) {
      throw new IllegalMoveError('Player is not seated in this Trivia match.');
    }

    const q = state.questions[state.questionIndex]!;

    if (action.type === 'submit_answer') {
      if (state.phase !== 'question') {
        throw new IllegalMoveError('Question is no longer accepting answers.');
      }
      if (state.submissions[action.playerId]) {
        throw new IllegalMoveError('You already answered this question.');
      }
      if (
        !Number.isInteger(action.choiceIndex) ||
        action.choiceIndex < 0 ||
        action.choiceIndex > 3
      ) {
        throw new IllegalMoveError('Choice index out of bounds.');
      }

      const answeredAt = action.timestamp ?? Date.now();
      const pointsAwarded = computePoints(
        action.choiceIndex === q.correctIndex,
        answeredAt,
        state.questionStartedAt,
        state.durationSec,
      );

      const nextSubmissions: Record<string, TriviaSubmission> = {
        ...state.submissions,
        [action.playerId]: {
          choiceIndex: action.choiceIndex,
          answeredAt,
          pointsAwarded,
        },
      };

      // Auto-reveal if every player has answered
      const allAnswered = state.players.every((p) => Boolean(nextSubmissions[p.id]));
      if (allAnswered) {
        const nextScores = { ...state.scores };
        for (const p of state.players) {
          nextScores[p.id] =
            (nextScores[p.id] ?? 0) + (nextSubmissions[p.id]?.pointsAwarded ?? 0);
        }
        return {
          ...state,
          phase: 'reveal',
          submissions: nextSubmissions,
          scores: nextScores,
          history: [
            ...state.history,
            {
              playerId: action.playerId,
              label: `Q${state.questionIndex + 1} revealed (Answer: ${q.choices[q.correctIndex]})`,
            },
          ],
        };
      }

      return {
        ...state,
        submissions: nextSubmissions,
      };
    }

    if (action.type === 'reveal_question') {
      if (state.phase !== 'question') {
        throw new IllegalMoveError('Question is already revealed.');
      }
      const nextScores = { ...state.scores };
      for (const p of state.players) {
        nextScores[p.id] =
          (nextScores[p.id] ?? 0) + (state.submissions[p.id]?.pointsAwarded ?? 0);
      }
      return {
        ...state,
        phase: 'reveal',
        scores: nextScores,
        history: [
          ...state.history,
          {
            playerId: action.playerId,
            label: `Q${state.questionIndex + 1} revealed (Answer: ${q.choices[q.correctIndex]})`,
          },
        ],
      };
    }

    if (action.type === 'next_question') {
      if (state.phase !== 'reveal') {
        throw new IllegalMoveError('Reveal the current question first.');
      }
      const nextIdx = state.questionIndex + 1;
      if (nextIdx >= state.questions.length) {
        const maxScore = Math.max(...Object.values(state.scores));
        const winnerIds = state.players
          .filter((p) => (state.scores[p.id] ?? 0) === maxScore)
          .map((p) => p.id);
        const winnerNames = state.players
          .filter((p) => winnerIds.includes(p.id))
          .map((p) => p.name)
          .join(', ');
        return {
          ...state,
          outcome: {
            winnerIds: winnerIds.length === state.players.length && maxScore === 0 ? [] : winnerIds,
            reason:
              winnerIds.length > 1
                ? `Tie between ${winnerNames} with ${maxScore} pts!`
                : `${winnerNames} wins Trivia Blitz with ${maxScore} pts!`,
            scores: { ...state.scores },
          },
        };
      }

      return {
        ...state,
        questionIndex: nextIdx,
        phase: 'question',
        questionStartedAt: action.timestamp ?? Date.now(),
        submissions: {},
      };
    }

    throw new IllegalMoveError('Unsupported Trivia action.');
  },

  isGameOver(state: TriviaState): GameOutcome | null {
    return state.outcome;
  },

  getView(state: TriviaState, playerId: string | null): TriviaView {
    const q = state.questions[state.questionIndex]!;
    const isReveal = state.phase === 'reveal';
    return {
      players: state.players,
      hostPlayerId: state.hostPlayerId,
      packTitle: state.packTitle,
      questionIndex: state.questionIndex,
      totalQuestions: state.questions.length,
      phase: state.phase,
      durationSec: state.durationSec,
      questionStartedAt: state.questionStartedAt,
      currentQuestion: {
        id: q.id,
        category: q.category,
        prompt: q.prompt,
        choices: q.choices,
        correctIndex: isReveal ? q.correctIndex : null,
      },
      answeredPlayerIds: Object.keys(state.submissions),
      myChoiceIndex:
        playerId && state.submissions[playerId]
          ? state.submissions[playerId]!.choiceIndex
          : null,
      revealedSubmissions: isReveal ? state.submissions : null,
      scores: state.scores,
      outcome: state.outcome,
      history: state.history,
    };
  },

  chooseBotAction(state: TriviaState, botPlayerId: string): TriviaAction | null {
    if (state.outcome || state.phase !== 'question') return null;
    if (state.submissions[botPlayerId]) return null;
    const q = state.questions[state.questionIndex]!;
    const correct = Math.random() < 0.7;
    const choiceIndex = correct ? q.correctIndex : (q.correctIndex + 1) % 4;
    return {
      type: 'submit_answer',
      playerId: botPlayerId,
      choiceIndex,
    };
  },
};

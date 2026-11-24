'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Eye, Trophy, XCircle } from 'lucide-react';
import type { TriviaAction, TriviaView } from '@/lib/games/trivia';

interface TriviaBoardProps {
  view: TriviaView;
  selfPlayerId: string;
  isHost: boolean;
  isSpectator: boolean;
  onAction: (action: TriviaAction) => void;
  onHostSystemAction: (action: TriviaAction) => void;
}

export function TriviaBoard({
  view,
  selfPlayerId,
  isHost,
  isSpectator,
  onAction,
  onHostSystemAction,
}: TriviaBoardProps) {
  const [secondsLeft, setSecondsLeft] = useState<number>(view.durationSec);

  useEffect(() => {
    if (view.outcome || view.phase !== 'question') return;
    const update = () => {
      const elapsed = (Date.now() - view.questionStartedAt) / 1000;
      const rem = Math.max(0, Math.ceil(view.durationSec - elapsed));
      setSecondsLeft(rem);
      if (rem === 0 && isHost) {
        onHostSystemAction({ type: 'reveal_question', playerId: selfPlayerId });
      }
    };
    const id = setInterval(update, 250);
    queueMicrotask(update);
    return () => clearInterval(id);
  }, [
    view.questionIndex,
    view.phase,
    view.questionStartedAt,
    view.durationSec,
    view.outcome,
    isHost,
    selfPlayerId,
    onHostSystemAction,
  ]);

  const sortedBoard = [...view.players].sort(
    (a, b) => (view.scores[b.id] ?? 0) - (view.scores[a.id] ?? 0),
  );

  const hasAnswered = view.answeredPlayerIds.includes(selfPlayerId);

  return (
    <div className="space-y-5">
      {/* Header Progress & Timer */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-semibold dark:bg-slate-950">
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-indigo-500/15 px-2.5 py-1 text-indigo-600 dark:text-indigo-300">
            {view.packTitle}
          </span>
          <span>
            Question {view.questionIndex + 1} / {view.totalQuestions}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span>
            Answered: {view.answeredPlayerIds.length}/{view.players.length}
          </span>
          {view.phase === 'question' && !view.outcome && (
            <span
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1 font-mono font-bold ${
                secondsLeft <= 5
                  ? 'bg-rose-500 text-white'
                  : 'bg-slate-900 text-white dark:bg-slate-800'
              }`}
            >
              <Clock className="h-3.5 w-3.5" />
              {secondsLeft}s
            </span>
          )}
        </div>
      </div>

      {/* Prompt Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <span className="text-[11px] font-bold tracking-wider text-indigo-500 uppercase">
          {view.currentQuestion.category}
        </span>
        <h2 className="mt-1.5 text-lg font-bold text-slate-900 dark:text-white">
          {view.currentQuestion.prompt}
        </h2>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {view.currentQuestion.choices.map((choice, idx) => {
            const isMine = view.myChoiceIndex === idx;
            const isCorrect =
              view.phase === 'reveal' &&
              view.currentQuestion.correctIndex === idx;
            const isWrongMine =
              view.phase === 'reveal' &&
              isMine &&
              view.currentQuestion.correctIndex !== idx;

            const canClick =
              !isSpectator &&
              !view.outcome &&
              view.phase === 'question' &&
              !hasAnswered;

            return (
              <button
                key={idx}
                type="button"
                disabled={!canClick}
                onClick={() =>
                  onAction({
                    type: 'submit_answer',
                    playerId: selfPlayerId,
                    choiceIndex: idx,
                  })
                }
                className={`flex items-center justify-between gap-2 rounded-xl border p-3.5 text-left text-sm font-semibold transition ${
                  isCorrect
                    ? 'border-emerald-500 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                    : isWrongMine
                      ? 'border-rose-500 bg-rose-500/15 text-rose-700 dark:text-rose-300'
                      : isMine
                        ? 'border-indigo-500 bg-indigo-500/15 text-indigo-700 dark:text-indigo-200'
                        : canClick
                          ? 'cursor-pointer border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 dark:border-slate-800 dark:hover:border-indigo-500 dark:hover:bg-slate-800'
                          : 'border-slate-200 opacity-75 dark:border-slate-800'
                }`}
              >
                <span>
                  <span className="mr-2 font-mono text-xs opacity-60">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {choice}
                </span>
                {isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />}
                {isWrongMine && <XCircle className="h-4 w-4 shrink-0 text-rose-500" />}
              </button>
            );
          })}
        </div>

        {/* Host Controls */}
        {isHost && !view.outcome && (
          <div className="mt-4 flex justify-end gap-2">
            {view.phase === 'question' ? (
              <button
                type="button"
                onClick={() =>
                  onAction({ type: 'reveal_question', playerId: selfPlayerId })
                }
                className="flex items-center gap-1.5 rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <Eye className="h-3.5 w-3.5" />
                Reveal Now
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  onAction({ type: 'next_question', playerId: selfPlayerId })
                }
                className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-500"
              >
                {view.questionIndex + 1 >= view.totalQuestions
                  ? 'Finish & Final Scores'
                  : 'Next Question'}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Live Scoreboard */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <h3 className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-slate-500 uppercase">
          <Trophy className="h-3.5 w-3.5 text-amber-500" />
          Live Scoreboard
        </h3>
        <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
          {sortedBoard.map((p, rank) => {
            const sub = view.revealedSubmissions?.[p.id];
            const answered = view.answeredPlayerIds.includes(p.id);
            return (
              <div
                key={p.id}
                className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-xs dark:border-slate-800"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-slate-400">
                    #{rank + 1}
                  </span>
                  <span>{p.avatar}</span>
                  <span className="font-semibold">{p.name}</span>
                  {view.phase === 'question' && answered && (
                    <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] text-emerald-600 dark:text-emerald-300">
                      Locked
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 font-mono font-bold">
                  {sub && sub.pointsAwarded > 0 && (
                    <span className="text-emerald-500">+{sub.pointsAwarded}</span>
                  )}
                  <span>{view.scores[p.id] ?? 0} pts</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import type { TicTacToeAction, TicTacToeState } from '@/lib/games/ticTacToe';

interface TicTacToeBoardProps {
  state: TicTacToeState;
  selfPlayerId: string;
  isSpectator: boolean;
  onAction: (action: TicTacToeAction) => void;
}

export function TicTacToeBoard({
  state,
  selfPlayerId,
  isSpectator,
  onAction,
}: TicTacToeBoardProps) {
  const isMyTurn =
    !isSpectator &&
    !state.winnerIds &&
    !state.isDraw &&
    state.currentTurnPlayerId === selfPlayerId;

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {state.players.map((p) => {
          const mark = state.marks[p.id];
          const active =
            !state.winnerIds && !state.isDraw && state.currentTurnPlayerId === p.id;
          return (
            <div
              key={p.id}
              className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition ${
                active
                  ? 'border-sky-500 bg-sky-500/10 text-sky-700 ring-2 ring-sky-500/30 dark:text-sky-300'
                  : 'border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
              }`}
            >
              <span>{p.avatar}</span>
              <span>{p.name}</span>
              <span
                className={`ml-1 rounded-md px-2 py-0.5 font-mono text-xs font-bold ${
                  mark === 'X'
                    ? 'bg-sky-500 text-white'
                    : 'bg-rose-500 text-white'
                }`}
              >
                {mark}
              </span>
            </div>
          );
        })}
      </div>

      <div
        role="grid"
        aria-label="Tic-Tac-Toe board"
        className="grid grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-slate-100 p-4 shadow-inner dark:border-slate-800 dark:bg-slate-950"
      >
        {state.board.map((cell, idx) => {
          const isWinCell = state.winningLine?.includes(idx) ?? false;
          const canClick = isMyTurn && cell === null;
          const row = Math.floor(idx / 3) + 1;
          const col = ['A', 'B', 'C'][idx % 3];

          return (
            <button
              key={idx}
              type="button"
              disabled={!canClick}
              onClick={() =>
                onAction({ type: 'place', playerId: selfPlayerId, cell: idx })
              }
              aria-label={`Square ${col}${row}, ${cell ?? 'empty'}`}
              className={`flex h-24 w-24 items-center justify-center rounded-2xl border text-4xl font-black transition sm:h-28 sm:w-28 ${
                isWinCell
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-500 shadow-lg'
                  : cell === 'X'
                    ? 'border-sky-500/30 bg-white text-sky-500 dark:bg-slate-900'
                    : cell === 'O'
                      ? 'border-rose-500/30 bg-white text-rose-500 dark:bg-slate-900'
                      : canClick
                        ? 'cursor-pointer border-slate-200 bg-white hover:border-sky-400 hover:bg-sky-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-500 dark:hover:bg-slate-800'
                        : 'border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900/70'
              }`}
            >
              {cell && <span className="animate-pop">{cell}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

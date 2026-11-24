'use client';

import React, { useMemo, useState } from 'react';
import { Crown } from 'lucide-react';
import {
  checkersEngine,
  type CheckersAction,
  type CheckersState,
} from '@/lib/games/checkers';

interface CheckersBoardProps {
  state: CheckersState;
  selfPlayerId: string;
  isSpectator: boolean;
  onAction: (action: CheckersAction) => void;
}

export function CheckersBoard({
  state,
  selfPlayerId,
  isSpectator,
  onAction,
}: CheckersBoardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const myColor = state.colors[selfPlayerId];
  const flipped = myColor === 'b';

  const legalActions = useMemo(
    () =>
      isSpectator ? [] : checkersEngine.getLegalActions(state, selfPlayerId),
    [state, selfPlayerId, isSpectator],
  );

  const effectiveSelected =
    state.mustContinueFrom !== null ? state.mustContinueFrom : selected;

  const targetSquares = useMemo(() => {
    if (effectiveSelected === null) return new Set<number>();
    return new Set(
      legalActions
        .filter((a) => a.from === effectiveSelected)
        .map((a) => a.to),
    );
  }, [legalActions, effectiveSelected]);

  const movableFromSquares = useMemo(
    () => new Set(legalActions.map((a) => a.from)),
    [legalActions],
  );

  const isMyTurn =
    !isSpectator && !state.outcome && state.currentTurnPlayerId === selfPlayerId;

  const displayOrder = useMemo(() => {
    const indices = Array.from({ length: 64 }, (_, i) => i);
    return flipped ? indices.reverse() : indices;
  }, [flipped]);

  const handleSquareClick = (idx: number) => {
    if (!isMyTurn) return;

    if (effectiveSelected !== null && targetSquares.has(idx)) {
      onAction({
        type: 'move',
        playerId: selfPlayerId,
        from: effectiveSelected,
        to: idx,
      });
      setSelected(null);
      return;
    }

    if (movableFromSquares.has(idx)) {
      setSelected(idx === selected ? null : idx);
      return;
    }

    setSelected(null);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {state.players.map((p) => {
          const color = state.colors[p.id];
          const active = !state.outcome && state.currentTurnPlayerId === p.id;
          return (
            <div
              key={p.id}
              className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition ${
                active
                  ? 'border-amber-500 bg-amber-500/10 ring-2 ring-amber-500/30'
                  : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
              }`}
            >
              <span
                className={`h-4 w-4 rounded-full border-2 ${
                  color === 'r'
                    ? 'border-rose-300 bg-rose-600'
                    : 'border-slate-500 bg-slate-900'
                }`}
              />
              <span>{p.avatar}</span>
              <span>{p.name}</span>
            </div>
          );
        })}
      </div>

      {state.mustContinueFrom !== null && isMyTurn && (
        <p className="rounded-lg bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-300">
          Multi-jump available! Continue capturing with the highlighted piece.
        </p>
      )}

      <div
        role="grid"
        aria-label="Checkers board"
        className="grid w-full max-w-[440px] grid-cols-8 overflow-hidden rounded-2xl border-4 border-slate-800 shadow-xl"
      >
        {displayOrder.map((idx) => {
          const r = Math.floor(idx / 8);
          const c = idx % 8;
          const isDark = (r + c) % 2 === 1;
          const piece = state.board[idx];
          const isSelected = effectiveSelected === idx;
          const isTarget = targetSquares.has(idx);
          const canSelect = isMyTurn && movableFromSquares.has(idx);

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSquareClick(idx)}
              disabled={!isDark}
              aria-label={`Square ${String.fromCharCode(65 + c)}${8 - r}${
                piece ? `, ${piece}` : ''
              }`}
              className={`relative flex aspect-square items-center justify-center transition ${
                isDark
                  ? isSelected
                    ? 'bg-amber-600'
                    : 'bg-slate-700 hover:bg-slate-600'
                  : 'bg-amber-100 dark:bg-amber-200/80'
              }`}
            >
              {isTarget && (
                <span className="h-4 w-4 rounded-full bg-emerald-400/90 ring-4 ring-emerald-400/30" />
              )}
              {piece && (
                <span
                  className={`flex h-[74%] w-[74%] items-center justify-center rounded-full border-2 shadow-md transition ${
                    piece === 'r' || piece === 'R'
                      ? 'border-rose-300 bg-gradient-to-br from-rose-500 to-rose-700 text-amber-200'
                      : 'border-slate-500 bg-gradient-to-br from-slate-800 to-slate-950 text-amber-300'
                  } ${canSelect ? 'ring-2 ring-amber-400/70' : ''}`}
                >
                  {(piece === 'R' || piece === 'B') && (
                    <Crown className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

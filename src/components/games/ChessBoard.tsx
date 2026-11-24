'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Chess, type Square } from 'chess.js';
import { Flag, Handshake, ShieldAlert } from 'lucide-react';
import type { ChessAction, ChessColor, ChessState } from '@/lib/games/chess';

interface ChessBoardProps {
  state: ChessState;
  selfPlayerId: string;
  isSpectator: boolean;
  onAction: (action: ChessAction) => void;
}

const PIECE_UNICODE: Record<string, string> = {
  wp: '♙',
  wn: '♘',
  wb: '♗',
  wr: '♖',
  wq: '♕',
  wk: '♔',
  bp: '♟',
  bn: '♞',
  bb: '♝',
  br: '♜',
  bq: '♛',
  bk: '♚',
};

function formatClock(ms: number): string {
  const totalSec = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export function ChessBoard({
  state,
  selfPlayerId,
  isSpectator,
  onAction,
}: ChessBoardProps) {
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [pendingPromotion, setPendingPromotion] = useState<{
    from: Square;
    to: Square;
  } | null>(null);
  const [nowMs, setNowMs] = useState<number>(() => Date.now());

  const myColor: ChessColor | undefined = state.colors[selfPlayerId];
  const flipped = myColor === 'b';
  const isMyTurn =
    !isSpectator && !state.outcome && state.currentTurnPlayerId === selfPlayerId;

  useEffect(() => {
    if (!state.clock.enabled || state.outcome || state.clock.lastTickAt === null) {
      return;
    }
    const id = setInterval(() => setNowMs(Date.now()), 250);
    return () => clearInterval(id);
  }, [state.clock.enabled, state.clock.lastTickAt, state.outcome]);

  const chess = useMemo(() => new Chess(state.fen), [state.fen]);

  const verboseMoves = useMemo(() => {
    if (!isMyTurn) return [];
    return chess.moves({ verbose: true });
  }, [chess, isMyTurn]);

  const targetsForSelected = useMemo(() => {
    if (!selectedSquare) return new Map<Square, boolean>();
    const map = new Map<Square, boolean>();
    for (const m of verboseMoves) {
      if (m.from === selectedSquare) {
        map.set(m.to, Boolean(m.promotion));
      }
    }
    return map;
  }, [verboseMoves, selectedSquare]);

  const boardRows = useMemo(() => {
    const raw = chess.board();
    const rows = raw.map((row, rIdx) =>
      row.map((cell, cIdx) => {
        const sq = `${String.fromCharCode(97 + cIdx)}${8 - rIdx}` as Square;
        return { sq, cell, isLight: (rIdx + cIdx) % 2 === 0 };
      }),
    );
    if (!flipped) return rows;
    return [...rows].reverse().map((row) => [...row].reverse());
  }, [chess, flipped]);

  const getDisplayClock = (color: ChessColor): string | null => {
    if (!state.clock.enabled) return null;
    const base = state.clock.remainingMs[color];
    const activeColor = state.colors[state.currentTurnPlayerId];
    if (
      !state.outcome &&
      state.clock.lastTickAt !== null &&
      activeColor === color
    ) {
      return formatClock(base - Math.max(0, nowMs - state.clock.lastTickAt));
    }
    return formatClock(base);
  };

  const handleSquareClick = (sq: Square) => {
    if (!isMyTurn) return;

    if (selectedSquare && targetsForSelected.has(sq)) {
      const needsPromo = targetsForSelected.get(sq);
      if (needsPromo) {
        setPendingPromotion({ from: selectedSquare, to: sq });
        setSelectedSquare(null);
        return;
      }
      onAction({
        type: 'move',
        playerId: selfPlayerId,
        from: selectedSquare,
        to: sq,
      });
      setSelectedSquare(null);
      return;
    }

    const hasMovesFromSq = verboseMoves.some((m) => m.from === sq);
    if (hasMovesFromSq) {
      setSelectedSquare(sq === selectedSquare ? null : sq);
    } else {
      setSelectedSquare(null);
    }
  };

  const activeDrawOfferFromOther =
    state.drawOfferBy && state.drawOfferBy !== selfPlayerId && !isSpectator;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Player & Clock Strip */}
      <div className="flex w-full max-w-[480px] flex-wrap items-center justify-between gap-2">
        {state.players.map((p) => {
          const color = state.colors[p.id]!;
          const active = !state.outcome && state.currentTurnPlayerId === p.id;
          const clockText = getDisplayClock(color);
          return (
            <div
              key={p.id}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                active
                  ? 'border-emerald-500 bg-emerald-500/10 ring-2 ring-emerald-500/30'
                  : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
              }`}
            >
              <span>{color === 'w' ? '♔' : '♚'}</span>
              <span>{p.avatar}</span>
              <span>{p.name}</span>
              {clockText && (
                <span className="ml-1 rounded bg-slate-900 px-2 py-0.5 font-mono text-white dark:bg-slate-800">
                  {clockText}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {state.inCheck && !state.outcome && (
        <div className="flex items-center gap-1.5 rounded-xl bg-rose-500/15 px-3 py-1 text-xs font-bold text-rose-600 dark:text-rose-300">
          <ShieldAlert className="h-3.5 w-3.5" />
          Check!
        </div>
      )}

      {activeDrawOfferFromOther && !state.outcome && (
        <div className="flex flex-wrap items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-3.5 py-2 text-xs">
          <span className="font-semibold">Opponent offered a draw.</span>
          <button
            type="button"
            onClick={() =>
              onAction({ type: 'respond_draw', playerId: selfPlayerId, accept: true })
            }
            className="rounded-lg bg-emerald-600 px-2.5 py-1 font-bold text-white"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() =>
              onAction({ type: 'respond_draw', playerId: selfPlayerId, accept: false })
            }
            className="rounded-lg bg-slate-200 px-2.5 py-1 font-semibold text-slate-800 dark:bg-slate-800 dark:text-slate-200"
          >
            Decline
          </button>
        </div>
      )}

      {/* Board */}
      <div
        role="grid"
        aria-label="Chess board"
        className="grid w-full max-w-[460px] grid-cols-8 overflow-hidden rounded-2xl border-4 border-slate-800 shadow-xl"
      >
        {boardRows.flat().map(({ sq, cell, isLight }) => {
          const isSelected = selectedSquare === sq;
          const isTarget = targetsForSelected.has(sq);
          const pieceChar = cell
            ? PIECE_UNICODE[`${cell.color}${cell.type}`]
            : null;
          const lastMove = state.history[state.history.length - 1];
          const isLastMoveSq =
            lastMove && (lastMove.from === sq || lastMove.to === sq);

          return (
            <button
              key={sq}
              type="button"
              onClick={() => handleSquareClick(sq)}
              aria-label={`Square ${sq}${cell ? `, ${cell.color} ${cell.type}` : ''}`}
              className={`relative flex aspect-square items-center justify-center text-2xl transition select-none sm:text-3xl ${
                isSelected
                  ? 'bg-emerald-500'
                  : isLastMoveSq
                    ? isLight
                      ? 'bg-amber-200'
                      : 'bg-amber-500/70'
                    : isLight
                      ? 'bg-stone-200 hover:bg-stone-300'
                      : 'bg-emerald-800 hover:bg-emerald-700'
              }`}
            >
              {isTarget && (
                <span
                  className={`pointer-events-none absolute rounded-full ${
                    cell
                      ? 'inset-1 border-4 border-amber-400/90'
                      : 'h-3.5 w-3.5 bg-slate-900/35'
                  }`}
                />
              )}
              {pieceChar && (
                <span
                  className={
                    cell?.color === 'w'
                      ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]'
                      : 'text-slate-950 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]'
                  }
                >
                  {pieceChar}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Promotion Picker */}
      {pendingPromotion && (
        <div className="animate-pop flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-white p-3 shadow-lg dark:bg-slate-900">
          <span className="text-xs font-semibold">Promote pawn to:</span>
          {(['q', 'r', 'b', 'n'] as const).map((promo) => (
            <button
              key={promo}
              type="button"
              onClick={() => {
                onAction({
                  type: 'move',
                  playerId: selfPlayerId,
                  from: pendingPromotion.from,
                  to: pendingPromotion.to,
                  promotion: promo,
                });
                setPendingPromotion(null);
              }}
              className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-bold text-white uppercase hover:bg-indigo-500"
            >
              {promo}
            </button>
          ))}
        </div>
      )}

      {/* Draw & Resign Controls */}
      {!isSpectator && !state.outcome && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            disabled={Boolean(state.drawOfferBy)}
            onClick={() => onAction({ type: 'offer_draw', playerId: selfPlayerId })}
            className="flex items-center gap-1.5 rounded-xl border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Handshake className="h-3.5 w-3.5" />
            {state.drawOfferBy === selfPlayerId ? 'Draw Offered' : 'Offer Draw'}
          </button>
          <button
            type="button"
            onClick={() => onAction({ type: 'resign', playerId: selfPlayerId })}
            className="flex items-center gap-1.5 rounded-xl border border-rose-500/40 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-500/10 dark:text-rose-400"
          >
            <Flag className="h-3.5 w-3.5" />
            Resign
          </button>
        </div>
      )}
    </div>
  );
}

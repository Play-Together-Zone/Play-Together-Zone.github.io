'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Chess, type Square } from 'chess.js';
import {
  ArrowUpDown,
  Check,
  Clock,
  Copy,
  Flag,
  Handshake,
  ShieldAlert,
  Sparkles,
  X,
} from 'lucide-react';
import type { ChessAction, ChessColor, ChessState } from '@/lib/games/chess';
import { computeMaterialSummary, groupMovePairs } from '@/lib/games/chessHelpers';
import type { GamePlayer } from '@/lib/games/types';
import { ChessPieceSvg } from './ChessPieceSvg';

interface ChessBoardProps {
  state: ChessState;
  selfPlayerId: string;
  isSpectator: boolean;
  onAction: (action: ChessAction) => void;
}

type BoardThemeId = 'emerald' | 'walnut' | 'midnight';

interface BoardTheme {
  id: BoardThemeId;
  label: string;
  lightBg: string;
  darkBg: string;
  frameClass: string;
}

const BOARD_THEMES: Record<BoardThemeId, BoardTheme> = {
  emerald: {
    id: 'emerald',
    label: 'Emerald',
    lightBg: '#eeeed2',
    darkBg: '#769656',
    frameClass: 'from-slate-800 via-slate-900 to-slate-950 border-slate-700/70',
  },
  walnut: {
    id: 'walnut',
    label: 'Walnut',
    lightBg: '#f0d9b5',
    darkBg: '#b58863',
    frameClass: 'from-[#3b2718] via-[#2c1c11] to-[#1e120b] border-amber-900/60',
  },
  midnight: {
    id: 'midnight',
    label: 'Slate',
    lightBg: '#cbd5e1',
    darkBg: '#475569',
    frameClass: 'from-slate-800 via-slate-900 to-black border-slate-600/60',
  },
};

const PROMOTION_LABELS: Record<'q' | 'r' | 'b' | 'n', string> = {
  q: 'Queen',
  r: 'Rook',
  b: 'Bishop',
  n: 'Knight',
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
  const [dragOrigin, setDragOrigin] = useState<Square | null>(null);
  const [pendingPromotion, setPendingPromotion] = useState<{
    from: Square;
    to: Square;
  } | null>(null);
  const [themeId, setThemeId] = useState<BoardThemeId>('emerald');
  const [manualFlip, setManualFlip] = useState(false);
  const [confirmResign, setConfirmResign] = useState(false);
  const [copiedPgn, setCopiedPgn] = useState(false);
  const [nowMs, setNowMs] = useState<number>(() => Date.now());

  const myColor: ChessColor | undefined = state.colors[selfPlayerId];
  const baseFlipped = myColor === 'b';
  const flipped = manualFlip ? !baseFlipped : baseFlipped;
  const isMyTurn =
    !isSpectator && !state.outcome && state.currentTurnPlayerId === selfPlayerId;
  const theme = BOARD_THEMES[themeId];

  useEffect(() => {
    if (!state.clock.enabled || state.outcome || state.clock.lastTickAt === null) {
      return;
    }
    const id = setInterval(() => setNowMs(Date.now()), 250);
    return () => clearInterval(id);
  }, [state.clock.enabled, state.clock.lastTickAt, state.outcome]);

  const chess = useMemo(() => new Chess(state.fen), [state.fen]);
  const activeColor = chess.turn() as ChessColor;

  const material = useMemo(() => computeMaterialSummary(state.fen), [state.fen]);
  const movePairs = useMemo(() => groupMovePairs(state.history), [state.history]);

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
        const fileChar = String.fromCharCode(97 + cIdx);
        const rankNum = String(8 - rIdx);
        const sq = `${fileChar}${rankNum}` as Square;
        return {
          sq,
          fileChar,
          rankNum,
          cell,
          isLight: (rIdx + cIdx) % 2 === 0,
        };
      }),
    );
    if (!flipped) return rows;
    return [...rows].reverse().map((row) => [...row].reverse());
  }, [chess, flipped]);

  const getClockRemainingMs = (color: ChessColor): number | null => {
    if (!state.clock.enabled) return null;
    const base = state.clock.remainingMs[color];
    const turnColor = state.colors[state.currentTurnPlayerId];
    if (
      !state.outcome &&
      state.clock.lastTickAt !== null &&
      turnColor === color
    ) {
      return Math.max(0, base - Math.max(0, nowMs - state.clock.lastTickAt));
    }
    return base;
  };

  const commitMove = (from: Square, to: Square) => {
    const matching = verboseMoves.filter((m) => m.from === from && m.to === to);
    if (matching.length === 0) return;

    const needsPromo = matching.some((m) => Boolean(m.promotion));
    if (needsPromo) {
      setPendingPromotion({ from, to });
      setSelectedSquare(null);
      return;
    }

    onAction({
      type: 'move',
      playerId: selfPlayerId,
      from,
      to,
    });
    setSelectedSquare(null);
    setConfirmResign(false);
  };

  const handleSquareClick = (sq: Square) => {
    if (!isMyTurn) return;

    if (selectedSquare && targetsForSelected.has(sq)) {
      commitMove(selectedSquare, sq);
      return;
    }

    const hasMovesFromSq = verboseMoves.some((m) => m.from === sq);
    if (hasMovesFromSq) {
      setSelectedSquare(sq === selectedSquare ? null : sq);
    } else {
      setSelectedSquare(null);
    }
  };

  const handleCopyPgn = async () => {
    if (!state.pgn) return;
    try {
      await navigator.clipboard.writeText(state.pgn);
      setCopiedPgn(true);
      setTimeout(() => setCopiedPgn(false), 1800);
    } catch {
      // Ignore clipboard failure
    }
  };

  const whitePlayer = state.players.find((p) => state.colors[p.id] === 'w');
  const blackPlayer = state.players.find((p) => state.colors[p.id] === 'b');
  const topPlayer = flipped ? whitePlayer : blackPlayer;
  const bottomPlayer = flipped ? blackPlayer : whitePlayer;

  const lastMove = state.history[state.history.length - 1];
  const activeDrawOfferFromOther =
    state.drawOfferBy && state.drawOfferBy !== selfPlayerId && !isSpectator;

  const renderPlayerCard = (player: GamePlayer | undefined, position: 'top' | 'bottom') => {
    if (!player) return null;
    const color = state.colors[player.id]!;
    const isActiveTurn = !state.outcome && state.currentTurnPlayerId === player.id;
    const isSelf = player.id === selfPlayerId;
    const remMs = getClockRemainingMs(color);
    const isLowTime = remMs !== null && remMs > 0 && remMs <= 20_000;
    const capturedList =
      color === 'w' ? material.capturedByWhite : material.capturedByBlack;
    const advantage =
      color === 'w' ? material.materialDiff : -material.materialDiff;

    return (
      <div
        key={`${position}-${player.id}`}
        className={`flex w-full max-w-[500px] items-center justify-between gap-3 rounded-2xl border px-3.5 py-2.5 transition ${
          isActiveTurn
            ? 'border-emerald-500/60 bg-gradient-to-r from-emerald-500/12 via-emerald-500/5 to-transparent shadow-sm ring-1 ring-emerald-500/30 dark:bg-slate-900'
            : 'border-slate-200/90 bg-white/90 dark:border-slate-800 dark:bg-slate-900/90'
        }`}
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <div
            className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-lg shadow-xs ${
              color === 'w'
                ? 'border-slate-300 bg-slate-100 text-slate-900'
                : 'border-slate-700 bg-slate-800 text-white'
            }`}
          >
            <span>{player.avatar}</span>
            <span
              className={`absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full border text-[10px] shadow-xs ${
                color === 'w'
                  ? 'border-slate-300 bg-white text-slate-900'
                  : 'border-slate-600 bg-slate-950 text-white'
              }`}
              title={color === 'w' ? 'White pieces' : 'Black pieces'}
            >
              {color === 'w' ? '♔' : '♚'}
            </span>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="truncate text-xs font-bold text-slate-900 sm:text-sm dark:text-white">
                {player.name}
                {isSelf ? ' (You)' : ''}
              </span>
              {isActiveTurn && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Turn
                </span>
              )}
            </div>

            {/* Captured pieces + material lead */}
            <div className="mt-0.5 flex min-h-[18px] flex-wrap items-center gap-0.5">
              {capturedList.length === 0 && advantage <= 0 ? (
                <span className="text-[10px] font-medium text-slate-400">
                  {color === 'w' ? 'White' : 'Black'}
                </span>
              ) : (
                <>
                  {capturedList.map((sym, idx) => (
                    <span
                      key={`${sym}-${idx}`}
                      className="inline-flex h-4 w-4 items-center justify-center"
                    >
                      <ChessPieceSvg
                        color={color === 'w' ? 'b' : 'w'}
                        type={sym}
                        className="h-4 w-4"
                      />
                    </span>
                  ))}
                  {advantage > 0 && (
                    <span className="ml-1 rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-extrabold text-emerald-700 dark:text-emerald-300">
                      +{advantage}
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {remMs !== null && (
          <div
            className={`flex shrink-0 items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-sm font-bold tracking-tight transition ${
              isActiveTurn
                ? isLowTime
                  ? 'animate-pulse border-rose-500/60 bg-rose-600 text-white shadow-sm'
                  : 'border-emerald-500/50 bg-slate-950 text-emerald-300 shadow-sm'
                : 'border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400'
            }`}
          >
            <Clock className="h-3.5 w-3.5 opacity-80" />
            <span>{formatClock(remMs)}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center gap-3.5">
      {/* Top Toolbar: Board Theme + Flip + Copy PGN */}
      <div className="flex w-full max-w-[500px] flex-wrap items-center justify-between gap-2 rounded-2xl border border-slate-200/80 bg-slate-50/90 px-3 py-2 dark:border-slate-800 dark:bg-slate-950/60">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            Board:
          </span>
          {(Object.values(BOARD_THEMES) as BoardTheme[]).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setThemeId(t.id)}
              className={`flex items-center gap-1.5 rounded-lg px-2 py-1 text-[11px] font-semibold transition ${
                themeId === t.id
                  ? 'bg-slate-900 text-white shadow-xs dark:bg-slate-100 dark:text-slate-900'
                  : 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
              title={`${t.label} board theme`}
            >
              <span
                className="inline-block h-2.5 w-2.5 rounded-xs border border-black/20"
                style={{ backgroundColor: t.darkBg }}
              />
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setManualFlip((f) => !f)}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-[11px] font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            title="Flip board perspective"
          >
            <ArrowUpDown className="h-3 w-3" />
            Flip
          </button>

          {state.pgn && (
            <button
              type="button"
              onClick={() => void handleCopyPgn()}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-[11px] font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              title="Copy PGN notation"
            >
              {copiedPgn ? (
                <Check className="h-3 w-3 text-emerald-500" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
              {copiedPgn ? 'Copied' : 'PGN'}
            </button>
          )}
        </div>
      </div>

      {/* Status Alerts: Check / Draw Offer */}
      {(state.inCheck || activeDrawOfferFromOther) && !state.outcome && (
        <div className="flex w-full max-w-[500px] flex-wrap items-center justify-center gap-2">
          {state.inCheck && (
            <div className="animate-pop inline-flex items-center gap-1.5 rounded-xl border border-rose-500/40 bg-rose-500/15 px-3 py-1 text-xs font-bold text-rose-600 dark:text-rose-300">
              <ShieldAlert className="h-3.5 w-3.5" />
              King in Check!
            </div>
          )}

          {activeDrawOfferFromOther && (
            <div className="animate-pop flex flex-wrap items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-3.5 py-1.5 text-xs">
              <span className="font-semibold text-amber-800 dark:text-amber-200">
                Opponent offered a draw.
              </span>
              <button
                type="button"
                onClick={() =>
                  onAction({ type: 'respond_draw', playerId: selfPlayerId, accept: true })
                }
                className="rounded-lg bg-emerald-600 px-2.5 py-1 font-bold text-white transition hover:bg-emerald-500"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() =>
                  onAction({ type: 'respond_draw', playerId: selfPlayerId, accept: false })
                }
                className="rounded-lg bg-slate-200 px-2.5 py-1 font-semibold text-slate-800 transition hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Decline
              </button>
            </div>
          )}
        </div>
      )}

      {/* Top Opponent Card */}
      {renderPlayerCard(topPlayer, 'top')}

      {/* Framed Chessboard */}
      <div
        className={`relative w-full max-w-[500px] rounded-2xl border bg-gradient-to-b p-2 shadow-2xl sm:p-3 ${theme.frameClass}`}
      >
        <div
          role="grid"
          aria-label="Chess board"
          className="grid w-full grid-cols-8 overflow-hidden rounded-xl shadow-inner ring-1 ring-black/40"
        >
          {boardRows.map((row, visualRowIdx) =>
            row.map(({ sq, fileChar, rankNum, cell, isLight }, visualColIdx) => {
              const isSelected = selectedSquare === sq;
              const isTarget = targetsForSelected.has(sq);
              const isLastMoveSq =
                lastMove && (lastMove.from === sq || lastMove.to === sq);
              const isCheckedKing =
                state.inCheck &&
                !state.outcome &&
                cell?.type === 'k' &&
                cell.color === activeColor;
              const canDrag =
                isMyTurn && Boolean(cell && cell.color === myColor);

              const showRankLabel = visualColIdx === 0;
              const showFileLabel = visualRowIdx === 7;
              const coordColor = isLight ? theme.darkBg : theme.lightBg;

              return (
                <button
                  key={sq}
                  type="button"
                  draggable={canDrag}
                  onDragStart={(e) => {
                    if (!canDrag) {
                      e.preventDefault();
                      return;
                    }
                    setDragOrigin(sq);
                    setSelectedSquare(sq);
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text/plain', sq);
                  }}
                  onDragEnd={() => setDragOrigin(null)}
                  onDragOver={(e) => {
                    if (isMyTurn && dragOrigin && verboseMoves.some((m) => m.from === dragOrigin && m.to === sq)) {
                      e.preventDefault();
                      e.dataTransfer.dropEffect = 'move';
                    }
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    const origin = (dragOrigin ?? e.dataTransfer.getData('text/plain')) as Square;
                    if (origin && isMyTurn) {
                      commitMove(origin, sq);
                    }
                    setDragOrigin(null);
                  }}
                  onClick={() => handleSquareClick(sq)}
                  aria-label={`Square ${sq}${cell ? `, ${cell.color === 'w' ? 'white' : 'black'} ${cell.type}` : ''}`}
                  style={{
                    backgroundColor: isLight ? theme.lightBg : theme.darkBg,
                  }}
                  className={`group relative flex aspect-square items-center justify-center transition-transform select-none focus:outline-none ${
                    canDrag ? 'cursor-grab active:cursor-grabbing' : isTarget ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  {/* Last move warm tint */}
                  {isLastMoveSq && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-amber-300/40"
                    />
                  )}

                  {/* Selected square highlight */}
                  {isSelected && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-emerald-400/45 ring-2 ring-inset ring-emerald-300"
                    />
                  )}

                  {/* Checked King radial danger glow */}
                  {isCheckedKing && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          'radial-gradient(circle, rgba(239,68,68,0.92) 0%, rgba(220,38,38,0.5) 55%, rgba(220,38,38,0) 78%)',
                      }}
                    />
                  )}

                  {/* Rank coordinate (left edge) */}
                  {showRankLabel && (
                    <span
                      aria-hidden="true"
                      style={{ color: coordColor }}
                      className="pointer-events-none absolute top-0.5 left-1 z-10 text-[9px] leading-none font-extrabold opacity-90 sm:text-[10px]"
                    >
                      {rankNum}
                    </span>
                  )}

                  {/* File coordinate (bottom edge) */}
                  {showFileLabel && (
                    <span
                      aria-hidden="true"
                      style={{ color: coordColor }}
                      className="pointer-events-none absolute right-1 bottom-0.5 z-10 text-[9px] leading-none font-extrabold opacity-90 sm:text-[10px]"
                    >
                      {fileChar}
                    </span>
                  )}

                  {/* Legal move target dot or capture ring */}
                  {isTarget && (
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute z-10 rounded-full transition-transform ${
                        cell
                          ? 'inset-1 border-[3.5px] border-slate-950/35 sm:border-4'
                          : 'h-3 w-3 bg-slate-950/28 group-hover:scale-125 sm:h-3.5 sm:w-3.5'
                      }`}
                    />
                  )}

                  {/* Chess Piece SVG */}
                  {cell && (
                    <span
                      className={`relative z-20 flex h-full w-full items-center justify-center transition-transform duration-150 ${
                        isSelected
                          ? 'scale-110'
                          : canDrag
                            ? 'group-hover:scale-105'
                            : ''
                      }`}
                    >
                      <ChessPieceSvg color={cell.color} type={cell.type} />
                    </span>
                  )}
                </button>
              );
            }),
          )}
        </div>

        {/* Promotion Overlay Modal */}
        {pendingPromotion && myColor && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Choose pawn promotion piece"
            className="absolute inset-0 z-30 flex items-center justify-center rounded-2xl bg-slate-950/70 p-4 backdrop-blur-xs"
          >
            <div className="animate-pop w-full max-w-xs rounded-2xl border border-slate-700 bg-slate-900 p-4 text-center text-white shadow-2xl">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold tracking-wide text-slate-200 uppercase">
                  Promote Pawn
                </span>
                <button
                  type="button"
                  onClick={() => setPendingPromotion(null)}
                  className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
                  aria-label="Cancel promotion"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
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
                    className="flex flex-col items-center gap-1 rounded-xl border border-slate-700 bg-slate-800/80 p-2 transition hover:border-emerald-400 hover:bg-slate-800"
                  >
                    <ChessPieceSvg
                      color={myColor}
                      type={promo}
                      className="h-10 w-10"
                    />
                    <span className="text-[10px] font-semibold text-slate-300">
                      {PROMOTION_LABELS[promo]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Player Card */}
      {renderPlayerCard(bottomPlayer, 'bottom')}

      {/* Draw & Resign Controls */}
      {!isSpectator && !state.outcome && (
        <div className="flex flex-wrap items-center justify-center gap-2 pt-0.5">
          <button
            type="button"
            disabled={Boolean(state.drawOfferBy)}
            onClick={() => onAction({ type: 'offer_draw', playerId: selfPlayerId })}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Handshake className="h-3.5 w-3.5" />
            {state.drawOfferBy === selfPlayerId ? 'Draw Offered' : 'Offer Draw'}
          </button>

          {confirmResign ? (
            <div className="flex items-center gap-1.5 rounded-xl border border-rose-500/40 bg-rose-500/10 px-2.5 py-1">
              <span className="text-[11px] font-semibold text-rose-600 dark:text-rose-300">
                Resign?
              </span>
              <button
                type="button"
                onClick={() => {
                  setConfirmResign(false);
                  onAction({ type: 'resign', playerId: selfPlayerId });
                }}
                className="rounded-lg bg-rose-600 px-2 py-1 text-[11px] font-bold text-white hover:bg-rose-500"
              >
                Confirm
              </button>
              <button
                type="button"
                onClick={() => setConfirmResign(false)}
                className="rounded-lg px-2 py-1 text-[11px] font-semibold text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmResign(true)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-500/40 px-3.5 py-1.5 text-xs font-semibold text-rose-600 transition hover:bg-rose-500/10 dark:text-rose-400"
            >
              <Flag className="h-3.5 w-3.5" />
              Resign
            </button>
          )}
        </div>
      )}

      {/* Paired Algebraic Move Sheet */}
      {movePairs.length > 0 && (
        <div className="w-full max-w-[500px] rounded-2xl border border-slate-200/80 bg-slate-50/80 px-3 py-2 dark:border-slate-800 dark:bg-slate-950/60">
          <div className="flex max-h-24 flex-wrap items-center gap-1.5 overflow-y-auto text-xs">
            {movePairs.map((pair, idx) => {
              const isLatestRow = idx === movePairs.length - 1;
              return (
                <div
                  key={pair.moveNumber}
                  className="inline-flex items-center gap-1 rounded-lg bg-white px-2 py-0.5 font-mono text-[11px] shadow-2xs dark:bg-slate-900"
                >
                  <span className="text-slate-400">{pair.moveNumber}.</span>
                  {pair.whiteSan && (
                    <span
                      className={
                        isLatestRow && !pair.blackSan
                          ? 'font-bold text-emerald-600 dark:text-emerald-400'
                          : 'font-semibold text-slate-800 dark:text-slate-200'
                      }
                    >
                      {pair.whiteSan}
                    </span>
                  )}
                  {pair.blackSan && (
                    <span
                      className={
                        isLatestRow
                          ? 'font-bold text-emerald-600 dark:text-emerald-400'
                          : 'text-slate-600 dark:text-slate-400'
                      }
                    >
                      {pair.blackSan}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import {
  AlertCircle,
  ArrowLeftRight,
  Flame,
  Layers,
  Megaphone,
  Sparkles,
  Sprout,
  Waves,
} from 'lucide-react';
import {
  RUSH_SUITS,
  isCardPlayable,
  type ColorRushAction,
  type ColorRushCard,
  type ColorRushView,
  type RushSuit,
} from '@/lib/games/colorRush';

interface ColorRushBoardProps {
  view: ColorRushView;
  selfPlayerId: string;
  isSpectator: boolean;
  onAction: (action: ColorRushAction) => void;
}

const SUIT_META: Record<
  RushSuit | 'prism',
  { label: string; bg: string; border: string; pill: string }
> = {
  coral: {
    label: 'Coral',
    bg: 'from-orange-500 to-rose-600',
    border: 'border-orange-300',
    pill: 'bg-orange-500 text-white',
  },
  teal: {
    label: 'Teal',
    bg: 'from-cyan-500 to-teal-700',
    border: 'border-cyan-300',
    pill: 'bg-cyan-600 text-white',
  },
  plum: {
    label: 'Plum',
    bg: 'from-purple-500 to-violet-800',
    border: 'border-purple-300',
    pill: 'bg-purple-600 text-white',
  },
  lime: {
    label: 'Lime',
    bg: 'from-lime-500 to-emerald-700',
    border: 'border-lime-300',
    pill: 'bg-lime-600 text-slate-950',
  },
  prism: {
    label: 'Prism',
    bg: 'from-fuchsia-600 via-indigo-600 to-cyan-500',
    border: 'border-white/70',
    pill: 'bg-slate-900 text-white',
  },
};

function SuitGlyph({ suit, className = 'h-4 w-4' }: { suit: RushSuit | 'prism'; className?: string }) {
  switch (suit) {
    case 'coral':
      return <Flame className={className} />;
    case 'teal':
      return <Waves className={className} />;
    case 'plum':
      return <Sparkles className={className} />;
    case 'lime':
      return <Sprout className={className} />;
    case 'prism':
      return <Layers className={className} />;
  }
}

function formatCardLabel(value: ColorRushCard['value']): string {
  switch (value) {
    case 'skip':
      return 'SKIP';
    case 'flip':
      return 'FLIP';
    case 'plus2':
      return '+2';
    case 'prism':
      return 'PRISM';
    case 'prism4':
      return 'PRISM +4';
    default:
      return value;
  }
}

function RushCardButton({
  card,
  playable,
  onClick,
}: {
  card: ColorRushCard;
  playable?: boolean;
  onClick?: () => void;
}) {
  const meta = SUIT_META[card.suit];
  return (
    <button
      type="button"
      disabled={!playable || !onClick}
      onClick={onClick}
      aria-label={`${meta.label} ${formatCardLabel(card.value)}`}
      className={`relative flex h-32 w-22 shrink-0 flex-col justify-between rounded-2xl border-2 bg-gradient-to-br p-2.5 text-white shadow-md transition sm:h-36 sm:w-24 ${
        meta.bg
      } ${meta.border} ${
        playable
          ? 'cursor-pointer hover:-translate-y-2 hover:shadow-xl ring-2 ring-white/80'
          : 'opacity-65'
      }`}
    >
      <div className="flex items-center justify-between text-xs font-extrabold">
        <span>{formatCardLabel(card.value)}</span>
        <SuitGlyph suit={card.suit} className="h-3.5 w-3.5" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xs">
          <SuitGlyph suit={card.suit} className="h-6 w-6" />
        </div>
      </div>
      <div className="text-right text-[10px] font-bold tracking-wider uppercase opacity-90">
        {meta.label}
      </div>
    </button>
  );
}

export function ColorRushBoard({
  view,
  selfPlayerId,
  isSpectator,
  onAction,
}: ColorRushBoardProps) {
  const [prismCardId, setPrismCardId] = useState<string | null>(null);
  const isMyTurn =
    !isSpectator && !view.outcome && view.currentTurnPlayerId === selfPlayerId;

  const myHand = view.myHand ?? [];
  const canCallLastCard =
    !isSpectator &&
    !view.outcome &&
    myHand.length >= 1 &&
    myHand.length <= 2 &&
    !view.players.find((p) => p.id === selfPlayerId)?.calledLastCard;

  const catchablePlayers = !isSpectator && !view.outcome
    ? view.players.filter(
        (p) =>
          p.id !== selfPlayerId && p.handCount === 1 && !p.calledLastCard,
      )
    : [];

  return (
    <div className="space-y-5">
      {/* Opponents / Seat Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {view.players.map((p) => {
          const active = !view.outcome && view.currentTurnPlayerId === p.id;
          return (
            <div
              key={p.id}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                active
                  ? 'border-rose-500 bg-rose-500/10 ring-2 ring-rose-500/30'
                  : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
              }`}
            >
              <span>{p.avatar}</span>
              <span>{p.name}</span>
              <span className="rounded-md bg-slate-900 px-2 py-0.5 font-mono text-white dark:bg-slate-800">
                {p.handCount} {p.handCount === 1 ? 'card' : 'cards'}
              </span>
              {p.calledLastCard && (
                <span className="rounded-md bg-amber-500 px-1.5 py-0.5 text-[10px] font-black text-slate-950">
                  LAST!
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Catch uncalled Last Card alert */}
      {catchablePlayers.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-xs">
          <AlertCircle className="h-4 w-4 text-amber-500" />
          {catchablePlayers.map((target) => (
            <button
              key={target.id}
              type="button"
              onClick={() =>
                onAction({
                  type: 'catch_uncalled',
                  playerId: selfPlayerId,
                  targetPlayerId: target.id,
                })
              }
              className="rounded-lg bg-amber-500 px-3 py-1 font-bold text-slate-950 hover:bg-amber-400"
            >
              Catch {target.name} (+2 penalty)!
            </button>
          ))}
        </div>
      )}

      {/* Center Table: Draw Pile + Discard Pile + Active Suit */}
      <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-slate-200 bg-slate-100/70 p-6 dark:border-slate-800 dark:bg-slate-950/60">
        <button
          type="button"
          disabled={!isMyTurn}
          onClick={() => onAction({ type: 'draw_card', playerId: selfPlayerId })}
          className={`flex h-36 w-24 flex-col items-center justify-center rounded-2xl border-2 border-slate-600 bg-gradient-to-br from-slate-800 to-slate-950 text-white shadow-lg transition ${
            isMyTurn
              ? 'cursor-pointer hover:-translate-y-1 hover:border-cyan-400'
              : 'opacity-70'
          }`}
        >
          <Layers className="h-7 w-7 text-cyan-400" />
          <span className="mt-2 text-xs font-bold">DRAW</span>
          <span className="text-[11px] text-slate-400">
            {view.drawPileCount} left
          </span>
        </button>

        <div className="flex flex-col items-center gap-2">
          <RushCardButton card={view.topCard} playable={false} />
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span>Active Suit:</span>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                SUIT_META[view.activeSuit].pill
              }`}
            >
              <SuitGlyph suit={view.activeSuit} className="h-3 w-3" />
              {SUIT_META[view.activeSuit].label}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-1.5 font-semibold dark:border-slate-700 dark:bg-slate-900">
            <ArrowLeftRight className="h-3.5 w-3.5" />
            {view.direction === 1 ? 'Clockwise' : 'Counter-Clockwise'}
          </div>
          {canCallLastCard && (
            <button
              type="button"
              onClick={() =>
                onAction({ type: 'call_last_card', playerId: selfPlayerId })
              }
              className="flex items-center gap-1.5 rounded-xl bg-amber-500 px-3.5 py-2 text-xs font-black text-slate-950 shadow-md hover:bg-amber-400 animate-pulse"
            >
              <Megaphone className="h-4 w-4" />
              Call Last Card!
            </button>
          )}
        </div>
      </div>

      {/* Prism Suit Picker */}
      {prismCardId && (
        <div className="animate-pop flex flex-wrap items-center justify-center gap-2 rounded-xl border border-indigo-500/40 bg-white p-3 shadow-md dark:bg-slate-900">
          <span className="text-xs font-bold">Choose active suit:</span>
          {RUSH_SUITS.map((suit) => (
            <button
              key={suit}
              type="button"
              onClick={() => {
                onAction({
                  type: 'play_card',
                  playerId: selfPlayerId,
                  cardId: prismCardId,
                  chosenSuit: suit,
                });
                setPrismCardId(null);
              }}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold ${SUIT_META[suit].pill}`}
            >
              <SuitGlyph suit={suit} className="h-3.5 w-3.5" />
              {SUIT_META[suit].label}
            </button>
          ))}
        </div>
      )}

      {/* Player Hand */}
      {isSpectator ? (
        <p className="text-center text-xs text-slate-500">
          Spectator mode: players&apos; private hands are hidden.
        </p>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
            <span>Your Private Hand ({myHand.length} cards)</span>
            <span>{isMyTurn ? 'Your turn — play a matching card or draw' : 'Waiting for active player'}</span>
          </div>
          <div className="flex gap-2.5 overflow-x-auto pb-2 pt-2">
            {myHand.map((card) => {
              const playable =
                isMyTurn &&
                isCardPlayable(card, view.topCard, view.activeSuit);
              return (
                <RushCardButton
                  key={card.id}
                  card={card}
                  playable={playable}
                  onClick={() => {
                    if (card.suit === 'prism') {
                      setPrismCardId(card.id);
                    } else {
                      onAction({
                        type: 'play_card',
                        playerId: selfPlayerId,
                        cardId: card.id,
                      });
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useMemo } from 'react';
import { Dices, Star } from 'lucide-react';
import {
  LUDO_HOME_GOAL,
  LUDO_SAFE_INDICES,
  canMoveLudoToken,
  getOuterTrackIndex,
  type LudoAction,
  type LudoColor,
  type LudoState,
} from '@/lib/games/ludo';

interface LudoBoardProps {
  state: LudoState;
  selfPlayerId: string;
  isSpectator: boolean;
  onAction: (action: LudoAction) => void;
}

// 52 outer track coordinates [row, col] on a 15x15 grid (0-indexed)
// Red starts top-left (6,1) moving clockwise; Green top-right (1,8);
// Yellow bottom-right (8,13); Blue bottom-left (13,6)
const OUTER_COORDS: Array<[number, number]> = [
  // 0..4: Red arm top row moving right
  [6, 1], [6, 2], [6, 3], [6, 4], [6, 5],
  // 5..10: Top arm left col moving up
  [5, 6], [4, 6], [3, 6], [2, 6], [1, 6], [0, 6],
  // 11..12: Top bridge
  [0, 7], [0, 8],
  // 13..17: Top arm right col moving down (13 = Green start)
  [1, 8], [2, 8], [3, 8], [4, 8], [5, 8],
  // 18..23: Right arm top row moving right
  [6, 9], [6, 10], [6, 11], [6, 12], [6, 13], [6, 14],
  // 24..25: Right bridge
  [7, 14], [8, 14],
  // 26..30: Right arm bottom row moving left (26 = Yellow start)
  [8, 13], [8, 12], [8, 11], [8, 10], [8, 9],
  // 31..36: Bottom arm right col moving down
  [9, 8], [10, 8], [11, 8], [12, 8], [13, 8], [14, 8],
  // 37..38: Bottom bridge
  [14, 7], [14, 6],
  // 39..43: Bottom arm left col moving up (39 = Blue start)
  [13, 6], [12, 6], [11, 6], [10, 6], [9, 6],
  // 44..49: Left arm bottom row moving left
  [8, 5], [8, 4], [8, 3], [8, 2], [8, 1], [8, 0],
  // 50..51: Left bridge
  [7, 0], [6, 0],
];

const HOME_STRETCH_COORDS: Record<LudoColor, Array<[number, number]>> = {
  red: [
    [7, 1], [7, 2], [7, 3], [7, 4], [7, 5],
  ],
  green: [
    [1, 7], [2, 7], [3, 7], [4, 7], [5, 7],
  ],
  yellow: [
    [7, 13], [7, 12], [7, 11], [7, 10], [7, 9],
  ],
  blue: [
    [13, 7], [12, 7], [11, 7], [10, 7], [9, 7],
  ],
};

const YARD_SLOTS: Record<LudoColor, Array<[number, number]>> = {
  red: [
    [1.5, 1.5], [1.5, 3.5], [3.5, 1.5], [3.5, 3.5],
  ],
  green: [
    [1.5, 10.5], [1.5, 12.5], [3.5, 10.5], [3.5, 12.5],
  ],
  yellow: [
    [10.5, 10.5], [10.5, 12.5], [12.5, 10.5], [12.5, 12.5],
  ],
  blue: [
    [10.5, 1.5], [10.5, 3.5], [12.5, 1.5], [12.5, 3.5],
  ],
};

const FINISH_COORDS: Record<LudoColor, [number, number]> = {
  red: [7, 6.1],
  green: [6.1, 7],
  yellow: [7, 7.9],
  blue: [7.9, 7],
};

const COLOR_STYLES: Record<
  LudoColor,
  { bg: string; token: string; border: string; badge: string }
> = {
  red: {
    bg: 'bg-rose-500',
    token: 'bg-rose-600 border-rose-200 text-white',
    border: 'border-rose-500',
    badge: 'bg-rose-500/15 text-rose-600 dark:text-rose-300',
  },
  green: {
    bg: 'bg-emerald-500',
    token: 'bg-emerald-600 border-emerald-200 text-white',
    border: 'border-emerald-500',
    badge: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300',
  },
  yellow: {
    bg: 'bg-amber-400',
    token: 'bg-amber-500 border-amber-100 text-slate-950',
    border: 'border-amber-500',
    badge: 'bg-amber-500/15 text-amber-600 dark:text-amber-300',
  },
  blue: {
    bg: 'bg-sky-500',
    token: 'bg-sky-600 border-sky-200 text-white',
    border: 'border-sky-500',
    badge: 'bg-sky-500/15 text-sky-600 dark:text-sky-300',
  },
};

function tokenGridCoord(
  color: LudoColor,
  tokenIndex: number,
  progress: number,
): [number, number] {
  if (progress === -1) {
    return YARD_SLOTS[color][tokenIndex]!;
  }
  if (progress === LUDO_HOME_GOAL) {
    return FINISH_COORDS[color];
  }
  if (progress >= 51) {
    return HOME_STRETCH_COORDS[color][progress - 51]!;
  }
  const trackIdx = getOuterTrackIndex(color, progress)!;
  return OUTER_COORDS[trackIdx]!;
}

export function LudoBoard({
  state,
  selfPlayerId,
  isSpectator,
  onAction,
}: LudoBoardProps) {
  const myColor = state.playerColors[selfPlayerId];
  const isMyTurn =
    !isSpectator && !state.outcome && state.currentTurnPlayerId === selfPlayerId;

  const canRoll = isMyTurn && state.turnStep === 'roll';
  const movableTokens = useMemo(() => {
    if (!isMyTurn || state.turnStep !== 'move' || state.diceValue === null || !myColor) {
      return new Set<number>();
    }
    const set = new Set<number>();
    state.tokens[myColor].forEach((pos, idx) => {
      if (canMoveLudoToken(pos, state.diceValue!)) set.add(idx);
    });
    return set;
  }, [isMyTurn, state.turnStep, state.diceValue, state.tokens, myColor]);

  // Map outer/stretch cell backgrounds
  const cellLookup = useMemo(() => {
    const map = new Map<string, { bg: string; safe?: boolean }>();
    OUTER_COORDS.forEach(([r, c], idx) => {
      let bg = 'bg-white dark:bg-slate-900';
      if (idx === 0) bg = 'bg-rose-500/80';
      else if (idx === 13) bg = 'bg-emerald-500/80';
      else if (idx === 26) bg = 'bg-amber-400/85';
      else if (idx === 39) bg = 'bg-sky-500/80';
      map.set(`${r},${c}`, { bg, safe: LUDO_SAFE_INDICES.has(idx) });
    });
    (Object.keys(HOME_STRETCH_COORDS) as LudoColor[]).forEach((color) => {
      const tint =
        color === 'red'
          ? 'bg-rose-400/60'
          : color === 'green'
            ? 'bg-emerald-400/60'
            : color === 'yellow'
              ? 'bg-amber-300/70'
              : 'bg-sky-400/60';
      HOME_STRETCH_COORDS[color].forEach(([r, c]) => {
        map.set(`${r},${c}`, { bg: tint });
      });
    });
    return map;
  }, []);

  // Group tokens sharing the same coordinates to offset them cleanly
  const renderedTokens = useMemo(() => {
    const list: Array<{
      color: LudoColor;
      tokenIndex: number;
      progress: number;
      coord: [number, number];
      offsetX: number;
      offsetY: number;
    }> = [];

    const buckets = new Map<string, number>();
    for (const color of state.activeColors) {
      state.tokens[color].forEach((progress, tokenIndex) => {
        const coord = tokenGridCoord(color, tokenIndex, progress);
        const key = `${coord[0]},${coord[1]}`;
        const count = buckets.get(key) ?? 0;
        buckets.set(key, count + 1);
        const offsets: Array<[number, number]> = [
          [0, 0],
          [0.18, -0.18],
          [-0.18, 0.18],
          [0.18, 0.18],
          [-0.18, -0.18],
        ];
        const [ox, oy] = offsets[count % offsets.length]!;
        list.push({ color, tokenIndex, progress, coord, offsetX: ox, offsetY: oy });
      });
    }
    return list;
  }, [state.activeColors, state.tokens]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Players & Dice Control */}
      <div className="flex w-full flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {state.players.map((p) => {
            const color = state.playerColors[p.id]!;
            const active = !state.outcome && state.currentTurnPlayerId === p.id;
            const finishedCount = state.tokens[color].filter(
              (x) => x === LUDO_HOME_GOAL,
            ).length;
            return (
              <div
                key={p.id}
                className={`flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-semibold transition ${
                  active
                    ? `${COLOR_STYLES[color].border} ${COLOR_STYLES[color].badge} ring-2 ring-current/25`
                    : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
                }`}
              >
                <span className={`h-3 w-3 rounded-full ${COLOR_STYLES[color].bg}`} />
                <span>{p.avatar}</span>
                <span>{p.name}</span>
                <span className="text-[10px] opacity-75">({finishedCount}/4)</span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {state.diceValue !== null && (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-300 bg-white font-mono text-lg font-black text-slate-900 shadow-xs dark:border-slate-700 dark:bg-slate-950 dark:text-white">
              {state.diceValue}
            </div>
          )}
          <button
            type="button"
            disabled={!canRoll}
            onClick={() => onAction({ type: 'roll_dice', playerId: selfPlayerId })}
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Dices className="h-4 w-4" />
            {canRoll
              ? 'Roll Dice'
              : isMyTurn && state.turnStep === 'move'
                ? 'Select a Token'
                : 'Waiting...'}
          </button>
        </div>
      </div>

      {/* 15x15 Ludo Board */}
      <div className="relative aspect-square w-full max-w-[480px] overflow-hidden rounded-2xl border-4 border-slate-800 bg-slate-200 shadow-xl dark:bg-slate-800">
        <div className="grid h-full w-full grid-cols-15 grid-rows-15">
          {Array.from({ length: 225 }, (_, i) => {
            const r = Math.floor(i / 15);
            const c = i % 15;

            // Corner Yards
            const inRedYard = r < 6 && c < 6;
            const inGreenYard = r < 6 && c > 8;
            const inBlueYard = r > 8 && c < 6;
            const inYellowYard = r > 8 && c > 8;
            const inCenter = r >= 6 && r <= 8 && c >= 6 && c <= 8;

            if (inRedYard || inGreenYard || inBlueYard || inYellowYard) {
              const yardBg = inRedYard
                ? 'bg-rose-500'
                : inGreenYard
                  ? 'bg-emerald-500'
                  : inYellowYard
                    ? 'bg-amber-400'
                    : 'bg-sky-500';
              return <div key={i} className={yardBg} />;
            }

            if (inCenter) {
              return (
                <div
                  key={i}
                  className="border border-slate-400/20 bg-gradient-to-br from-indigo-500/30 to-amber-500/30"
                />
              );
            }

            const cell = cellLookup.get(`${r},${c}`);
            return (
              <div
                key={i}
                className={`flex items-center justify-center border border-slate-300/70 dark:border-slate-700/70 ${
                  cell?.bg ?? 'bg-white dark:bg-slate-900'
                }`}
              >
                {cell?.safe && (
                  <Star className="h-3 w-3 text-slate-600/70 dark:text-slate-200/80" />
                )}
              </div>
            );
          })}
        </div>

        {/* White inner yard pads */}
        <div className="pointer-events-none absolute top-[6.67%] left-[6.67%] h-[26.67%] w-[26.67%] rounded-xl bg-white/95 shadow-inner dark:bg-slate-950/90" />
        <div className="pointer-events-none absolute top-[6.67%] right-[6.67%] h-[26.67%] w-[26.67%] rounded-xl bg-white/95 shadow-inner dark:bg-slate-950/90" />
        <div className="pointer-events-none absolute bottom-[6.67%] left-[6.67%] h-[26.67%] w-[26.67%] rounded-xl bg-white/95 shadow-inner dark:bg-slate-950/90" />
        <div className="pointer-events-none absolute right-[6.67%] bottom-[6.67%] h-[26.67%] w-[26.67%] rounded-xl bg-white/95 shadow-inner dark:bg-slate-950/90" />

        {/* Tokens */}
        {renderedTokens.map(
          ({ color, tokenIndex, coord, offsetX, offsetY }) => {
            const isMovable =
              color === myColor && movableTokens.has(tokenIndex);
            const topPct = ((coord[0] + 0.5 + offsetY) / 15) * 100;
            const leftPct = ((coord[1] + 0.5 + offsetX) / 15) * 100;

            return (
              <button
                key={`${color}-${tokenIndex}`}
                type="button"
                disabled={!isMovable}
                onClick={() =>
                  onAction({
                    type: 'move_token',
                    playerId: selfPlayerId,
                    tokenIndex,
                  })
                }
                aria-label={`${color} token ${tokenIndex + 1}`}
                style={{
                  top: `${topPct}%`,
                  left: `${leftPct}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className={`absolute flex h-[5.4%] w-[5.4%] items-center justify-center rounded-full border-2 text-[10px] font-black shadow-md transition-all duration-200 ${
                  COLOR_STYLES[color].token
                } ${
                  isMovable
                    ? 'z-20 scale-125 cursor-pointer ring-4 ring-white animate-bounce'
                    : 'z-10'
                }`}
              >
                {tokenIndex + 1}
              </button>
            );
          },
        )}
      </div>
    </div>
  );
}

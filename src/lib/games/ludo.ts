import {
  IllegalMoveError,
  type GameActionBase,
  type GameEngine,
  type GameOutcome,
  type GamePlayer,
} from './types';

export type LudoColor = 'red' | 'green' | 'yellow' | 'blue';

export const LUDO_COLORS: LudoColor[] = ['red', 'green', 'yellow', 'blue'];

// Start square on the 52-cell outer ring for each color slot
export const LUDO_START_INDEX: Record<LudoColor, number> = {
  red: 0,
  green: 13,
  yellow: 26,
  blue: 39,
};

// Safe squares on the 52-cell outer ring (4 start squares + 4 star squares)
export const LUDO_SAFE_INDICES = new Set<number>([0, 8, 13, 21, 26, 34, 39, 47]);

export const LUDO_HOME_GOAL = 56;

export interface LudoMoveEntry {
  playerId: string;
  color: LudoColor;
  label: string;
}

export interface LudoState {
  players: GamePlayer[];
  playerColors: Record<string, LudoColor>;
  tokens: Record<LudoColor, number[]>; // 4 tokens per active color: -1=yard, 0..50=track, 51..55=stretch, 56=finished
  activeColors: LudoColor[];
  currentTurnPlayerId: string;
  turnStep: 'roll' | 'move';
  diceValue: number | null;
  consecutiveSixes: number;
  rngState: number;
  outcome: GameOutcome | null;
  history: LudoMoveEntry[];
}

export type LudoAction =
  | (GameActionBase & { type: 'roll_dice' })
  | (GameActionBase & { type: 'move_token'; tokenIndex: number });

export interface LudoOptions {
  seed?: number;
}

function nextRandomInt1to6(seed: number): { value: number; nextSeed: number } {
  // Deterministic LCG (Numerical Recipes)
  const nextSeed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  const value = (nextSeed % 6) + 1;
  return { value, nextSeed };
}

export function getOuterTrackIndex(color: LudoColor, progress: number): number | null {
  if (progress < 0 || progress > 50) return null;
  return (LUDO_START_INDEX[color] + progress) % 52;
}

export function canMoveLudoToken(progress: number, diceValue: number): boolean {
  if (progress === -1) return diceValue === 6;
  if (progress >= 0 && progress < LUDO_HOME_GOAL) {
    return progress + diceValue <= LUDO_HOME_GOAL;
  }
  return false;
}

function getMovableTokenIndices(tokens: number[], diceValue: number): number[] {
  const out: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    if (canMoveLudoToken(tokens[i]!, diceValue)) {
      out.push(i);
    }
  }
  return out;
}

function assignColors(count: number): LudoColor[] {
  if (count === 2) return ['red', 'yellow']; // opposite corners
  if (count === 3) return ['red', 'green', 'yellow'];
  return ['red', 'green', 'yellow', 'blue'];
}

export const ludoEngine: GameEngine<
  LudoState,
  LudoAction,
  LudoOptions,
  LudoState
> = {
  id: 'ludo',
  name: 'Ludo',
  minPlayers: 2,
  maxPlayers: 4,
  supportsBot: true,

  init(players: GamePlayer[], options?: LudoOptions): LudoState {
    if (players.length < 2 || players.length > 4) {
      throw new Error('Ludo supports 2 to 4 players.');
    }
    const sorted = [...players].sort((a, b) => a.seatIndex - b.seatIndex);
    const assigned = assignColors(sorted.length);
    const playerColors: Record<string, LudoColor> = {};
    const tokens: Record<LudoColor, number[]> = {
      red: [-1, -1, -1, -1],
      green: [-1, -1, -1, -1],
      yellow: [-1, -1, -1, -1],
      blue: [-1, -1, -1, -1],
    };

    sorted.forEach((p, idx) => {
      playerColors[p.id] = assigned[idx]!;
    });

    const initialSeed =
      typeof options?.seed === 'number'
        ? options.seed >>> 0
        : (Date.now() ^ 0x5f3759df) >>> 0;

    return {
      players: sorted,
      playerColors,
      tokens,
      activeColors: assigned,
      currentTurnPlayerId: sorted[0]!.id,
      turnStep: 'roll',
      diceValue: null,
      consecutiveSixes: 0,
      rngState: initialSeed,
      outcome: null,
      history: [],
    };
  },

  getLegalActions(state: LudoState, playerId: string): LudoAction[] {
    if (state.outcome || state.currentTurnPlayerId !== playerId) return [];
    if (state.turnStep === 'roll') {
      return [{ type: 'roll_dice', playerId }];
    }
    if (state.turnStep === 'move' && state.diceValue !== null) {
      const color = state.playerColors[playerId];
      if (!color) return [];
      return getMovableTokenIndices(state.tokens[color], state.diceValue).map(
        (tokenIndex) => ({
          type: 'move_token',
          playerId,
          tokenIndex,
        }),
      );
    }
    return [];
  },

  applyAction(state: LudoState, action: LudoAction): LudoState {
    if (state.outcome) {
      throw new IllegalMoveError('Ludo match is already over.');
    }
    if (action.playerId !== state.currentTurnPlayerId) {
      throw new IllegalMoveError('Not your turn.');
    }
    const color = state.playerColors[action.playerId];
    if (!color) {
      throw new IllegalMoveError('Player is not seated in this match.');
    }

    const currentSeatIdx = state.players.findIndex((p) => p.id === action.playerId);
    const nextSeatPlayer =
      state.players[(currentSeatIdx + 1) % state.players.length]!;

    if (action.type === 'roll_dice') {
      if (state.turnStep !== 'roll') {
        throw new IllegalMoveError('You must move a token before rolling again.');
      }

      const { value: roll, nextSeed } = nextRandomInt1to6(state.rngState);
      const nextSixes = roll === 6 ? state.consecutiveSixes + 1 : 0;

      // Three consecutive 6s forfeits turn
      if (nextSixes >= 3) {
        return {
          ...state,
          diceValue: roll,
          consecutiveSixes: 0,
          turnStep: 'roll',
          currentTurnPlayerId: nextSeatPlayer.id,
          rngState: nextSeed,
          history: [
            ...state.history,
            {
              playerId: action.playerId,
              color,
              label: `${color}: rolled 6 (3rd 6 — turn lost)`,
            },
          ],
        };
      }

      const movable = getMovableTokenIndices(state.tokens[color], roll);
      if (movable.length === 0) {
        return {
          ...state,
          diceValue: roll,
          consecutiveSixes: 0,
          turnStep: 'roll',
          currentTurnPlayerId: nextSeatPlayer.id,
          rngState: nextSeed,
          history: [
            ...state.history,
            {
              playerId: action.playerId,
              color,
              label: `${color}: rolled ${roll} (no legal move)`,
            },
          ],
        };
      }

      return {
        ...state,
        diceValue: roll,
        consecutiveSixes: nextSixes,
        turnStep: 'move',
        rngState: nextSeed,
      };
    }

    if (action.type === 'move_token') {
      if (state.turnStep !== 'move' || state.diceValue === null) {
        throw new IllegalMoveError('Roll the dice before moving a token.');
      }
      const { tokenIndex } = action;
      const myTokens = [...state.tokens[color]];
      const currentProgress = myTokens[tokenIndex];
      if (
        currentProgress === undefined ||
        !canMoveLudoToken(currentProgress, state.diceValue)
      ) {
        throw new IllegalMoveError('Selected token cannot make that move.');
      }

      const nextProgress =
        currentProgress === -1 ? 0 : currentProgress + state.diceValue;
      myTokens[tokenIndex] = nextProgress;

      const nextTokens: Record<LudoColor, number[]> = {
        ...state.tokens,
        [color]: myTokens,
      };

      // Check capture on unsafe outer track square
      let capturedCount = 0;
      const landingTrack = getOuterTrackIndex(color, nextProgress);
      if (landingTrack !== null && !LUDO_SAFE_INDICES.has(landingTrack)) {
        for (const oppColor of state.activeColors) {
          if (oppColor === color) continue;
          const oppArr = [...nextTokens[oppColor]];
          let changed = false;
          for (let i = 0; i < oppArr.length; i++) {
            const oppTrack = getOuterTrackIndex(oppColor, oppArr[i]!);
            if (oppTrack === landingTrack) {
              oppArr[i] = -1;
              capturedCount += 1;
              changed = true;
            }
          }
          if (changed) {
            nextTokens[oppColor] = oppArr;
          }
        }
      }

      const finishedMatch = myTokens.every((pos) => pos === LUDO_HOME_GOAL);
      const actor = state.players[currentSeatIdx];
      const outcome: GameOutcome | null = finishedMatch
        ? {
            winnerIds: [action.playerId],
            reason: `${actor?.name ?? color} brought all 4 tokens home!`,
          }
        : null;

      const bonusTurn =
        !finishedMatch &&
        (state.diceValue === 6 ||
          capturedCount > 0 ||
          nextProgress === LUDO_HOME_GOAL);

      const moveDesc =
        currentProgress === -1
          ? `${color}: rolled 6, deployed token #${tokenIndex + 1}`
          : nextProgress === LUDO_HOME_GOAL
            ? `${color}: rolled ${state.diceValue}, token #${tokenIndex + 1} reached Home!`
            : `${color}: rolled ${state.diceValue}, moved token #${tokenIndex + 1}${
                capturedCount > 0 ? ' (Capture!)' : ''
              }`;

      return {
        ...state,
        tokens: nextTokens,
        turnStep: 'roll',
        currentTurnPlayerId: bonusTurn ? action.playerId : nextSeatPlayer.id,
        consecutiveSixes: bonusTurn ? state.consecutiveSixes : 0,
        outcome,
        history: [
          ...state.history,
          {
            playerId: action.playerId,
            color,
            label: moveDesc,
          },
        ],
      };
    }

    throw new IllegalMoveError('Unsupported Ludo action.');
  },

  isGameOver(state: LudoState): GameOutcome | null {
    return state.outcome;
  },

  getView(state: LudoState): LudoState {
    return state;
  },

  chooseBotAction(state: LudoState, botPlayerId: string): LudoAction | null {
    const legal = this.getLegalActions(state, botPlayerId);
    if (legal.length === 0) return null;
    if (legal[0]?.type === 'roll_dice') return legal[0];

    const color = state.playerColors[botPlayerId]!;
    let best = legal[0]!;
    let bestScore = -Infinity;

    for (const act of legal) {
      if (act.type !== 'move_token') continue;
      const prevTokens = state.tokens[color];
      const next = this.applyAction(state, act);
      let score = 0;

      if (next.outcome?.winnerIds.includes(botPlayerId)) score += 1000;
      const newPos = next.tokens[color][act.tokenIndex]!;
      const oldPos = prevTokens[act.tokenIndex]!;
      if (oldPos === -1 && newPos === 0) score += 35; // deploy from yard
      if (newPos === LUDO_HOME_GOAL) score += 60; // finish token
      if (newPos >= 51) score += 25; // safe home stretch
      if (next.history.at(-1)?.label.includes('Capture!')) score += 50;
      const trackIdx = getOuterTrackIndex(color, newPos);
      if (trackIdx !== null && LUDO_SAFE_INDICES.has(trackIdx)) score += 15;
      score += newPos * 0.3;

      if (score > bestScore) {
        bestScore = score;
        best = act;
      }
    }

    return best;
  },
};

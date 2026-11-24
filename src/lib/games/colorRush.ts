import {
  IllegalMoveError,
  type GameActionBase,
  type GameEngine,
  type GameOutcome,
  type GamePlayer,
} from './types';
import type { SeatPlayer } from '../sync/types';

export type RushSuit = 'coral' | 'teal' | 'plum' | 'lime';
export type RushValue =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'skip'
  | 'flip'
  | 'plus2'
  | 'prism'
  | 'prism4';

export interface ColorRushCard {
  id: string;
  suit: RushSuit | 'prism';
  value: RushValue;
}

export interface ColorRushMoveEntry {
  playerId: string;
  label: string;
}

export interface ColorRushState {
  players: GamePlayer[];
  hands: Record<string, ColorRushCard[]>;
  calledLastCard: Record<string, boolean>;
  drawPile: ColorRushCard[];
  discardPile: ColorRushCard[];
  activeSuit: RushSuit;
  currentTurnPlayerId: string;
  direction: 1 | -1;
  rngState: number;
  outcome: GameOutcome | null;
  history: ColorRushMoveEntry[];
}

export interface ColorRushPlayerSummary {
  id: string;
  name: string;
  avatar: string;
  seatIndex: number;
  isBot?: boolean;
  handCount: number;
  calledLastCard: boolean;
}

export interface ColorRushView {
  players: ColorRushPlayerSummary[];
  myHand: ColorRushCard[] | null;
  topCard: ColorRushCard;
  activeSuit: RushSuit;
  currentTurnPlayerId: string;
  direction: 1 | -1;
  drawPileCount: number;
  discardCount: number;
  outcome: GameOutcome | null;
  history: ColorRushMoveEntry[];
}

export type ColorRushAction =
  | (GameActionBase & {
      type: 'play_card';
      cardId: string;
      chosenSuit?: RushSuit;
    })
  | (GameActionBase & { type: 'draw_card' })
  | (GameActionBase & { type: 'call_last_card' })
  | (GameActionBase & { type: 'catch_uncalled'; targetPlayerId: string });

export interface ColorRushOptions {
  seed?: number;
}

export const RUSH_SUITS: RushSuit[] = ['coral', 'teal', 'plum', 'lime'];

function nextRng(seed: number): number {
  return (Math.imul(seed, 1664525) + 1013904223) >>> 0;
}

function shuffleWithSeed<T>(items: T[], seed: number): { shuffled: T[]; nextSeed: number } {
  const arr = [...items];
  let s = seed >>> 0;
  for (let i = arr.length - 1; i > 0; i--) {
    s = nextRng(s);
    const j = s % (i + 1);
    const tmp = arr[i]!;
    arr[i] = arr[j]!;
    arr[j] = tmp;
  }
  return { shuffled: arr, nextSeed: s };
}

export function buildColorRushDeck(): ColorRushCard[] {
  const deck: ColorRushCard[] = [];
  let seq = 1;
  for (const suit of RUSH_SUITS) {
    deck.push({ id: `c-${seq++}`, suit, value: '1' });
    const numbers: RushValue[] = ['2', '3', '4', '5', '6', '7', '8', '9'];
    for (const v of numbers) {
      deck.push({ id: `c-${seq++}`, suit, value: v });
      deck.push({ id: `c-${seq++}`, suit, value: v });
    }
    for (const act of ['skip', 'flip', 'plus2'] as const) {
      deck.push({ id: `c-${seq++}`, suit, value: act });
      deck.push({ id: `c-${seq++}`, suit, value: act });
    }
  }
  for (let i = 0; i < 4; i++) {
    deck.push({ id: `c-${seq++}`, suit: 'prism', value: 'prism' });
    deck.push({ id: `c-${seq++}`, suit: 'prism', value: 'prism4' });
  }
  return deck;
}

export function isCardPlayable(
  card: ColorRushCard,
  topCard: ColorRushCard,
  activeSuit: RushSuit,
): boolean {
  if (card.suit === 'prism') return true;
  if (card.suit === activeSuit) return true;
  if (card.value === topCard.value) return true;
  return false;
}

function drawCards(
  drawPile: ColorRushCard[],
  discardPile: ColorRushCard[],
  count: number,
  seed: number,
): {
  drawn: ColorRushCard[];
  drawPile: ColorRushCard[];
  discardPile: ColorRushCard[];
  nextSeed: number;
} {
  let pile = [...drawPile];
  let discards = [...discardPile];
  let s = seed;
  const drawn: ColorRushCard[] = [];

  for (let i = 0; i < count; i++) {
    if (pile.length === 0) {
      if (discards.length <= 1) break;
      const top = discards[discards.length - 1]!;
      const rest = discards.slice(0, -1);
      const res = shuffleWithSeed(rest, s);
      pile = res.shuffled;
      s = res.nextSeed;
      discards = [top];
    }
    const card = pile.pop();
    if (card) drawn.push(card);
  }

  return { drawn, drawPile: pile, discardPile: discards, nextSeed: s };
}

function advanceSeat(
  players: GamePlayer[],
  currentPlayerId: string,
  direction: 1 | -1,
  steps = 1,
): GamePlayer {
  const idx = players.findIndex((p) => p.id === currentPlayerId);
  const len = players.length;
  const target = (((idx + direction * steps) % len) + len) % len;
  return players[target]!;
}

export const colorRushEngine: GameEngine<
  ColorRushState,
  ColorRushAction,
  ColorRushOptions,
  ColorRushView
> = {
  id: 'color-rush',
  name: 'Color Rush',
  minPlayers: 2,
  maxPlayers: 6,
  supportsBot: true,

  init(players: GamePlayer[], options?: ColorRushOptions): ColorRushState {
    if (players.length < 2 || players.length > 6) {
      throw new Error('Color Rush supports 2 to 6 players.');
    }
    const sorted = [...players].sort((a, b) => a.seatIndex - b.seatIndex);
    const seed =
      typeof options?.seed === 'number'
        ? options.seed >>> 0
        : (Date.now() ^ 0x9e3779b9) >>> 0;

    const { shuffled, nextSeed } = shuffleWithSeed(buildColorRushDeck(), seed);
    const deck = [...shuffled];
    const hands: Record<string, ColorRushCard[]> = {};
    const calledLastCard: Record<string, boolean> = {};

    for (const p of sorted) {
      hands[p.id] = deck.splice(0, 7);
      calledLastCard[p.id] = false;
    }

    // Pick a non-prism starter card
    let starterIdx = deck.findIndex((c) => c.suit !== 'prism');
    if (starterIdx === -1) starterIdx = 0;
    const [starterCard] = deck.splice(starterIdx, 1);
    const topCard = starterCard!;
    const activeSuit: RushSuit =
      topCard.suit === 'prism' ? 'coral' : topCard.suit;

    return {
      players: sorted,
      hands,
      calledLastCard,
      drawPile: deck,
      discardPile: [topCard],
      activeSuit,
      currentTurnPlayerId: sorted[0]!.id,
      direction: 1,
      rngState: nextSeed,
      outcome: null,
      history: [
        {
          playerId: sorted[0]!.id,
          label: `Match started (${activeSuit} ${topCard.value})`,
        },
      ],
    };
  },

  getLegalActions(state: ColorRushState, playerId: string): ColorRushAction[] {
    if (state.outcome) return [];
    const actions: ColorRushAction[] = [];

    const myHand = state.hands[playerId] ?? [];
    if (myHand.length <= 2 && myHand.length >= 1 && !state.calledLastCard[playerId]) {
      actions.push({ type: 'call_last_card', playerId });
    }

    // Any player can catch an opponent who has 1 card and forgot to call Last Card
    for (const p of state.players) {
      if (p.id === playerId) continue;
      if ((state.hands[p.id]?.length ?? 0) === 1 && !state.calledLastCard[p.id]) {
        actions.push({ type: 'catch_uncalled', playerId, targetPlayerId: p.id });
      }
    }

    if (state.currentTurnPlayerId !== playerId) {
      return actions;
    }

    const topCard = state.discardPile[state.discardPile.length - 1]!;
    for (const card of myHand) {
      if (isCardPlayable(card, topCard, state.activeSuit)) {
        if (card.suit === 'prism') {
          for (const suit of RUSH_SUITS) {
            actions.push({
              type: 'play_card',
              playerId,
              cardId: card.id,
              chosenSuit: suit,
            });
          }
        } else {
          actions.push({ type: 'play_card', playerId, cardId: card.id });
        }
      }
    }

    actions.push({ type: 'draw_card', playerId });
    return actions;
  },

  applyAction(state: ColorRushState, action: ColorRushAction): ColorRushState {
    if (state.outcome) {
      throw new IllegalMoveError('Match is already over.');
    }
    const actor = state.players.find((p) => p.id === action.playerId);
    if (!actor) {
      throw new IllegalMoveError('Player is not seated in this match.');
    }

    if (action.type === 'call_last_card') {
      const hand = state.hands[action.playerId] ?? [];
      if (hand.length > 2 || hand.length === 0) {
        throw new IllegalMoveError(
          'You can only call Last Card when holding 1 or 2 cards.',
        );
      }
      return {
        ...state,
        calledLastCard: { ...state.calledLastCard, [action.playerId]: true },
        history: [
          ...state.history,
          { playerId: action.playerId, label: `${actor.name} called Last Card!` },
        ],
      };
    }

    if (action.type === 'catch_uncalled') {
      const targetHand = state.hands[action.targetPlayerId];
      const targetPlayer = state.players.find((p) => p.id === action.targetPlayerId);
      if (
        !targetHand ||
        targetHand.length !== 1 ||
        state.calledLastCard[action.targetPlayerId]
      ) {
        throw new IllegalMoveError('Target player cannot be caught right now.');
      }
      const res = drawCards(state.drawPile, state.discardPile, 2, state.rngState);
      return {
        ...state,
        hands: {
          ...state.hands,
          [action.targetPlayerId]: [...targetHand, ...res.drawn],
        },
        drawPile: res.drawPile,
        discardPile: res.discardPile,
        rngState: res.nextSeed,
        history: [
          ...state.history,
          {
            playerId: action.playerId,
            label: `${actor.name} caught ${targetPlayer?.name ?? 'opponent'} (+2 cards)!`,
          },
        ],
      };
    }

    if (action.playerId !== state.currentTurnPlayerId) {
      throw new IllegalMoveError('Not your turn.');
    }

    if (action.type === 'draw_card') {
      const res = drawCards(state.drawPile, state.discardPile, 1, state.rngState);
      const currentHand = state.hands[action.playerId] ?? [];
      const nextPlayer = advanceSeat(
        state.players,
        action.playerId,
        state.direction,
        1,
      );
      return {
        ...state,
        hands: {
          ...state.hands,
          [action.playerId]: [...currentHand, ...res.drawn],
        },
        calledLastCard: {
          ...state.calledLastCard,
          [action.playerId]: false,
        },
        drawPile: res.drawPile,
        discardPile: res.discardPile,
        rngState: res.nextSeed,
        currentTurnPlayerId: nextPlayer.id,
        history: [
          ...state.history,
          { playerId: action.playerId, label: `${actor.name} drew a card` },
        ],
      };
    }

    if (action.type === 'play_card') {
      const myHand = state.hands[action.playerId] ?? [];
      const cardIndex = myHand.findIndex((c) => c.id === action.cardId);
      if (cardIndex === -1) {
        throw new IllegalMoveError('Card is not in your hand.');
      }
      const card = myHand[cardIndex]!;
      const topCard = state.discardPile[state.discardPile.length - 1]!;
      if (!isCardPlayable(card, topCard, state.activeSuit)) {
        throw new IllegalMoveError('Card does not match the active suit or rank.');
      }
      if (card.suit === 'prism' && !action.chosenSuit) {
        throw new IllegalMoveError('Must choose an active suit for Prism card.');
      }

      const remainingHand = myHand.filter((_, i) => i !== cardIndex);
      const nextSuit: RushSuit =
        card.suit === 'prism' ? action.chosenSuit! : card.suit;
      let nextDirection = state.direction;
      let nextDrawPile = state.drawPile;
      let nextDiscardPile = [...state.discardPile, card];
      let nextSeed = state.rngState;
      const nextHands: Record<string, ColorRushCard[]> = {
        ...state.hands,
        [action.playerId]: remainingHand,
      };
      const nextCalled: Record<string, boolean> = {
        ...state.calledLastCard,
        [action.playerId]:
          remainingHand.length === 1
            ? Boolean(state.calledLastCard[action.playerId])
            : false,
      };

      // Check win immediately
      if (remainingHand.length === 0) {
        return {
          ...state,
          hands: nextHands,
          calledLastCard: nextCalled,
          discardPile: nextDiscardPile,
          activeSuit: nextSuit,
          outcome: {
            winnerIds: [action.playerId],
            reason: `${actor.name} emptied their hand and won Color Rush!`,
          },
          history: [
            ...state.history,
            {
              playerId: action.playerId,
              label: `${actor.name} played final card (${nextSuit} ${card.value})!`,
            },
          ],
        };
      }

      let steps = 1;
      let extraNote = '';

      if (card.value === 'skip') {
        steps = 2;
        extraNote = ' (Skip)';
      } else if (card.value === 'flip') {
        if (state.players.length === 2) {
          steps = 2; // In 2-player mode, Reverse Flow acts as Skip Next
        } else {
          nextDirection = (state.direction * -1) as 1 | -1;
        }
        extraNote = ' (Reverse)';
      } else if (card.value === 'plus2' || card.value === 'prism4') {
        const penalty = card.value === 'plus2' ? 2 : 4;
        const victim = advanceSeat(state.players, action.playerId, nextDirection, 1);
        const res = drawCards(nextDrawPile, nextDiscardPile, penalty, nextSeed);
        nextDrawPile = res.drawPile;
        nextDiscardPile = res.discardPile;
        nextSeed = res.nextSeed;
        nextHands[victim.id] = [...(nextHands[victim.id] ?? []), ...res.drawn];
        nextCalled[victim.id] = false;
        steps = 2;
        extraNote = ` (+${penalty} to ${victim.name})`;
      }

      const nextTurnPlayer = advanceSeat(
        state.players,
        action.playerId,
        nextDirection,
        steps,
      );

      return {
        ...state,
        hands: nextHands,
        calledLastCard: nextCalled,
        drawPile: nextDrawPile,
        discardPile: nextDiscardPile,
        activeSuit: nextSuit,
        direction: nextDirection,
        currentTurnPlayerId: nextTurnPlayer.id,
        rngState: nextSeed,
        history: [
          ...state.history,
          {
            playerId: action.playerId,
            label: `${actor.name} played ${
              card.suit === 'prism' ? `${card.value} → ${nextSuit}` : `${card.suit} ${card.value}`
            }${extraNote}`,
          },
        ],
      };
    }

    throw new IllegalMoveError('Unsupported Color Rush action.');
  },

  isGameOver(state: ColorRushState): GameOutcome | null {
    return state.outcome;
  },

  /**
   * Strictly strips opponents' cards so each client only receives their own hand.
   * Spectators (playerId === null) receive myHand: null.
   */
  getView(state: ColorRushState, playerId: string | null): ColorRushView {
    const topCard = state.discardPile[state.discardPile.length - 1]!;
    return {
      players: state.players.map((p) => ({
        id: p.id,
        name: p.name,
        avatar: p.avatar,
        seatIndex: p.seatIndex,
        isBot: p.isBot,
        handCount: state.hands[p.id]?.length ?? 0,
        calledLastCard: Boolean(state.calledLastCard[p.id]),
      })),
      myHand: playerId && state.hands[playerId] ? [...state.hands[playerId]!] : null,
      topCard,
      activeSuit: state.activeSuit,
      currentTurnPlayerId: state.currentTurnPlayerId,
      direction: state.direction,
      drawPileCount: state.drawPile.length,
      discardCount: state.discardPile.length,
      outcome: state.outcome,
      history: state.history,
    };
  },

  chooseBotAction(state: ColorRushState, botPlayerId: string): ColorRushAction | null {
    const legal = this.getLegalActions(state, botPlayerId);
    if (legal.length === 0) return null;

    // Bot calls Last Card when holding 2 cards before playing
    const callAct = legal.find((a) => a.type === 'call_last_card');
    if (callAct && (state.hands[botPlayerId]?.length ?? 0) <= 2) {
      return callAct;
    }

    // Prefer non-prism playable cards first, then prism, then draw
    const playNonPrism = legal.find(
      (a) => a.type === 'play_card' && !a.chosenSuit,
    );
    if (playNonPrism) return playNonPrism;

    const myHand = state.hands[botPlayerId] ?? [];
    const suitCounts: Record<RushSuit, number> = {
      coral: 0,
      teal: 0,
      plum: 0,
      lime: 0,
    };
    for (const c of myHand) {
      if (c.suit !== 'prism') suitCounts[c.suit] += 1;
    }
    const favoriteSuit = (Object.entries(suitCounts).sort(
      (a, b) => b[1] - a[1],
    )[0]?.[0] ?? 'coral') as RushSuit;

    const playPrism = legal.find(
      (a) => a.type === 'play_card' && a.chosenSuit === favoriteSuit,
    );
    if (playPrism) return playPrism;

    return legal.find((a) => a.type === 'draw_card') ?? legal[0] ?? null;
  },
};

/**
 * Reconstructs an authoritative ColorRushState if the previous host leaves
 * mid-game, using the newly elected host's sanitized ColorRushView while
 * preserving its own hand and opponents' exact card counts.
 */
export function reconstructColorRushFromView(
  rawView: unknown,
  seats: SeatPlayer[],
): ColorRushState {
  const view = rawView as ColorRushView;
  const fullDeck = buildColorRushDeck();
  const usedIds = new Set<string>([
    view.topCard.id,
    ...(view.myHand ?? []).map((c) => c.id),
  ]);
  const pool = fullDeck.filter((c) => !usedIds.has(c.id));

  const selfSeat = seats.find((s) =>
    view.players.some((vp) => vp.id === s.playerId) && view.myHand !== null,
  );
  // Find which player owns myHand by matching handCount when ambiguous, or seat 0 fallback
  const hands: Record<string, ColorRushCard[]> = {};
  const calledLastCard: Record<string, boolean> = {};

  let assignedMyHand = false;
  for (const vp of view.players) {
    calledLastCard[vp.id] = vp.calledLastCard;
    if (
      !assignedMyHand &&
      view.myHand !== null &&
      vp.handCount === view.myHand.length &&
      selfSeat
    ) {
      // Prefer assigning myHand to matching seat
      hands[vp.id] = [...view.myHand];
      assignedMyHand = true;
    }
  }
  for (const vp of view.players) {
    if (!hands[vp.id]) {
      hands[vp.id] = pool.splice(0, vp.handCount);
    }
  }

  return {
    players: view.players.map((vp) => ({
      id: vp.id,
      name: vp.name,
      avatar: vp.avatar,
      seatIndex: vp.seatIndex,
      isBot: vp.isBot,
    })),
    hands,
    calledLastCard,
    drawPile: pool,
    discardPile: [view.topCard],
    activeSuit: view.activeSuit,
    currentTurnPlayerId: view.currentTurnPlayerId,
    direction: view.direction,
    rngState: Date.now() >>> 0,
    outcome: view.outcome,
    history: view.history,
  };
}

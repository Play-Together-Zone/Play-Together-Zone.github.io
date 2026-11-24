export type GameId =
  | 'tic-tac-toe'
  | 'checkers'
  | 'chess'
  | 'ludo'
  | 'color-rush'
  | 'trivia';

export interface GamePlayer {
  id: string;
  name: string;
  avatar: string;
  isBot?: boolean;
  seatIndex: number;
}

export interface GameActionBase {
  type: string;
  playerId: string;
}

export interface GameOutcome {
  winnerIds: string[];
  reason: string;
  scores?: Record<string, number>;
}

export class IllegalMoveError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'IllegalMoveError';
  }
}

export interface GameEngine<
  TState = unknown,
  TAction extends GameActionBase = GameActionBase,
  TOptions = Record<string, unknown>,
  TView = TState,
> {
  readonly id: GameId;
  readonly name: string;
  readonly minPlayers: number;
  readonly maxPlayers: number;
  readonly supportsBot: boolean;

  init(players: GamePlayer[], options?: TOptions): TState;
  getLegalActions(state: TState, playerId: string): TAction[];
  applyAction(state: TState, action: TAction): TState;
  isGameOver(state: TState): GameOutcome | null;
  getView(state: TState, playerId: string | null): TView;
  chooseBotAction?(state: TState, botPlayerId: string): TAction | null;
}

export interface GameCatalogEntry {
  id: GameId;
  name: string;
  tagline: string;
  minPlayers: number;
  maxPlayers: number;
  accentColor: string;
  badge: string;
  rulesSummary: string;
}

export const GAME_CATALOG: GameCatalogEntry[] = [
  {
    id: 'tic-tac-toe',
    name: 'Tic-Tac-Toe',
    tagline: 'Classic 3x3 grid duel with quick rematches and bot sparring.',
    minPlayers: 2,
    maxPlayers: 2,
    accentColor: 'from-sky-500 to-cyan-500',
    badge: '2 Players',
    rulesSummary: 'Alternate placing marks on a 3x3 grid. First to align 3 wins.',
  },
  {
    id: 'checkers',
    name: 'Checkers',
    tagline: '8x8 draughts with forced captures, multi-jumps, and crowned kings.',
    minPlayers: 2,
    maxPlayers: 2,
    accentColor: 'from-amber-500 to-orange-600',
    badge: '2 Players',
    rulesSummary: 'Diagonal movement, mandatory jumps & multi-captures, king promotion.',
  },
  {
    id: 'chess',
    name: 'Chess',
    tagline: 'Full standard chess with castling, en passant, promotion, draws, and clock.',
    minPlayers: 2,
    maxPlayers: 2,
    accentColor: 'from-emerald-500 to-teal-600',
    badge: '2 Players',
    rulesSummary: 'Standard FIDE rules via chess.js with optional match clock and draw offers.',
  },
  {
    id: 'ludo',
    name: 'Ludo',
    tagline: '2-4 player tabletop race with host-rolled dice, safe stars, and captures.',
    minPlayers: 2,
    maxPlayers: 4,
    accentColor: 'from-violet-500 to-purple-600',
    badge: '2-4 Players',
    rulesSummary: 'Roll 6 to exit home, capture rivals on unsafe tiles, exact roll to finish.',
  },
  {
    id: 'color-rush',
    name: 'Color Rush',
    tagline: 'Original fast-paced card shedding game with hidden hands and Last Card callouts.',
    minPlayers: 2,
    maxPlayers: 6,
    accentColor: 'from-rose-500 to-pink-600',
    badge: '2-6 Players',
    rulesSummary: 'Match suit or rank, play Skip/Flip/Plus-Two/Prism cards, call Last Card!',
  },
  {
    id: 'trivia',
    name: 'Trivia Blitz',
    tagline: 'Live 2-8 player quiz show with speed scoring and curated local packs.',
    minPlayers: 2,
    maxPlayers: 8,
    accentColor: 'from-indigo-500 to-blue-600',
    badge: '2-8 Players',
    rulesSummary: 'Host picks a static pack or OpenTDB fetch. Faster right answers score more.',
  },
];

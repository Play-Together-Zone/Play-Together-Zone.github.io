import type { GameActionBase, GameEngine, GameId } from './types';
import { ticTacToeEngine } from './ticTacToe';
import { checkersEngine } from './checkers';
import { chessEngine } from './chess';
import { ludoEngine } from './ludo';
import { colorRushEngine, reconstructColorRushFromView } from './colorRush';
import { triviaEngine } from './trivia';
import type { SeatPlayer } from '../sync/types';

export type AnyGameEngine = GameEngine<
  unknown,
  GameActionBase,
  Record<string, unknown>,
  unknown
>;

const ENGINE_MAP: Partial<Record<GameId, AnyGameEngine>> = {
  'tic-tac-toe': ticTacToeEngine as unknown as AnyGameEngine,
  checkers: checkersEngine as unknown as AnyGameEngine,
  chess: chessEngine as unknown as AnyGameEngine,
  ludo: ludoEngine as unknown as AnyGameEngine,
  'color-rush': colorRushEngine as unknown as AnyGameEngine,
  trivia: triviaEngine as unknown as AnyGameEngine,
};

export function getGameEngine(gameId: GameId): AnyGameEngine {
  return ENGINE_MAP[gameId] ?? (ticTacToeEngine as unknown as AnyGameEngine);
}

export function getReconstructHook(
  gameId: GameId,
): ((view: unknown, seats: SeatPlayer[]) => unknown) | undefined {
  if (gameId === 'color-rush') {
    return reconstructColorRushFromView;
  }
  return undefined;
}

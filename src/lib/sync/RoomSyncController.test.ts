import { describe, expect, it } from 'vitest';
import { MockNetworkAdapter, MockNetworkBus } from '../network/mockAdapter';
import { RoomSyncController } from './RoomSyncController';
import { ticTacToeEngine } from '../games/ticTacToe';
import {
  colorRushEngine,
  reconstructColorRushFromView,
  type ColorRushView,
} from '../games/colorRush';
import type { RoomSnapshot } from './types';
import type { GameActionBase, GameEngine } from '../games/types';

const tttEngine = ticTacToeEngine as unknown as GameEngine<
  unknown,
  GameActionBase,
  Record<string, unknown>,
  unknown
>;

const rushEngine = colorRushEngine as unknown as GameEngine<
  unknown,
  GameActionBase,
  Record<string, unknown>,
  unknown
>;

describe('RoomSyncController with MockNetworkAdapter', () => {
  it('syncs lobby, rejects illegal moves, restores reconnects, and migrates host', async () => {
    const bus = new MockNetworkBus();
    const hostAdapter = new MockNetworkAdapter(bus, 'peer-host');
    const guestAdapter = new MockNetworkAdapter(bus, 'peer-guest');

    const observed: {
      hostSnap: RoomSnapshot | null;
      guestSnap: RoomSnapshot | null;
      rejectedReason: string;
      migratedHost: string;
    } = {
      hostSnap: null,
      guestSnap: null,
      rejectedReason: '',
      migratedHost: '',
    };

    await hostAdapter.connect('ROOM1');
    const hostCtrl = new RoomSyncController({
      roomCode: 'ROOM1',
      gameId: 'tic-tac-toe',
      isInitialHost: true,
      self: { playerId: 'p1', displayName: 'Host', avatar: '🦊' },
      adapter: hostAdapter,
      engine: tttEngine,
      callbacks: {
        onSnapshot: (s) => {
          observed.hostSnap = s;
        },
        onChat: () => {},
        onActionRejected: (r) => {
          observed.rejectedReason = r;
        },
        onError: () => {},
        onHostMigrated: () => {},
      },
    });

    await guestAdapter.connect('ROOM1');
    const guestCtrl = new RoomSyncController({
      roomCode: 'ROOM1',
      gameId: 'tic-tac-toe',
      isInitialHost: false,
      self: { playerId: 'p2', displayName: 'Guest', avatar: '🦉' },
      adapter: guestAdapter,
      engine: tttEngine,
      callbacks: {
        onSnapshot: (s) => {
          observed.guestSnap = s;
        },
        onChat: () => {},
        onActionRejected: (r) => {
          observed.rejectedReason = r;
        },
        onError: () => {},
        onHostMigrated: (id) => {
          observed.migratedHost = id;
        },
      },
    });

    expect(observed.hostSnap?.seats).toHaveLength(2);
    expect(observed.guestSnap?.seats).toHaveLength(2);

    await hostCtrl.startGame();
    expect(observed.guestSnap?.phase).toBe('playing');

    // Guest tries to move out of turn -> rejected by host
    await guestCtrl.sendGameAction({
      type: 'place',
      playerId: 'p2',
      cell: 0,
    } as GameActionBase & { cell: number });
    expect(observed.rejectedReason).toContain('Not your turn');

    // Host moves validly
    await hostCtrl.sendGameAction({
      type: 'place',
      playerId: 'p1',
      cell: 4,
    } as GameActionBase & { cell: number });
    expect(observed.guestSnap?.version).toBeGreaterThan(2);

    // Guest disconnects and reconnects with same playerId
    await guestAdapter.disconnect();
    expect(
      observed.hostSnap?.seats.find((s) => s.playerId === 'p2')?.connected,
    ).toBe(false);

    const guestAdapter2 = new MockNetworkAdapter(bus, 'peer-guest-2');
    await guestAdapter2.connect('ROOM1');
    const guestCtrl2 = new RoomSyncController({
      roomCode: 'ROOM1',
      gameId: 'tic-tac-toe',
      isInitialHost: false,
      self: { playerId: 'p2', displayName: 'Guest', avatar: '🦉' },
      adapter: guestAdapter2,
      engine: tttEngine,
      callbacks: {
        onSnapshot: (s) => {
          observed.guestSnap = s;
        },
        onChat: () => {},
        onActionRejected: () => {},
        onError: () => {},
        onHostMigrated: (id) => {
          observed.migratedHost = id;
        },
      },
    });
    expect(
      observed.hostSnap?.seats.find((s) => s.playerId === 'p2')?.connected,
    ).toBe(true);
    expect(observed.guestSnap?.phase).toBe('playing');

    // Host leaves -> deterministic migration promotes p2
    await hostAdapter.disconnect();
    expect(observed.migratedHost).toBe('p2');
    expect(guestCtrl2.isHost).toBe(true);
    expect(observed.guestSnap?.hostPlayerId).toBe('p2');

    hostCtrl.destroy();
    guestCtrl.destroy();
    guestCtrl2.destroy();
  });

  it('isolates private hands for players and spectators in Color Rush and handles disconnect vote', async () => {
    const bus = new MockNetworkBus();
    const p1Adapter = new MockNetworkAdapter(bus, 'peer-1');
    const p2Adapter = new MockNetworkAdapter(bus, 'peer-2');
    const specAdapter = new MockNetworkAdapter(bus, 'peer-spec');

    const snaps: {
      p1: RoomSnapshot<ColorRushView> | null;
      p2: RoomSnapshot<ColorRushView> | null;
      spec: RoomSnapshot<ColorRushView> | null;
    } = { p1: null, p2: null, spec: null };

    await p1Adapter.connect('RUSH');
    const c1 = new RoomSyncController({
      roomCode: 'RUSH',
      gameId: 'color-rush',
      isInitialHost: true,
      self: { playerId: 'p1', displayName: 'Alice', avatar: '🦊' },
      adapter: p1Adapter,
      engine: rushEngine,
      reconstructFromView: reconstructColorRushFromView,
      callbacks: {
        onSnapshot: (s) => {
          snaps.p1 = s as RoomSnapshot<ColorRushView>;
        },
        onChat: () => {},
        onActionRejected: () => {},
        onError: () => {},
        onHostMigrated: () => {},
      },
    });

    await p2Adapter.connect('RUSH');
    const c2 = new RoomSyncController({
      roomCode: 'RUSH',
      gameId: 'color-rush',
      isInitialHost: false,
      self: { playerId: 'p2', displayName: 'Bob', avatar: '🦉' },
      adapter: p2Adapter,
      engine: rushEngine,
      reconstructFromView: reconstructColorRushFromView,
      callbacks: {
        onSnapshot: (s) => {
          snaps.p2 = s as RoomSnapshot<ColorRushView>;
        },
        onChat: () => {},
        onActionRejected: () => {},
        onError: () => {},
        onHostMigrated: () => {},
      },
    });

    await specAdapter.connect('RUSH');
    const cSpec = new RoomSyncController({
      roomCode: 'RUSH',
      gameId: 'color-rush',
      isInitialHost: false,
      self: {
        playerId: 'spec1',
        displayName: 'Watcher',
        avatar: '🐢',
        wantSpectate: true,
      },
      adapter: specAdapter,
      engine: rushEngine,
      callbacks: {
        onSnapshot: (s) => {
          snaps.spec = s as RoomSnapshot<ColorRushView>;
        },
        onChat: () => {},
        onActionRejected: () => {},
        onError: () => {},
        onHostMigrated: () => {},
      },
    });

    await c1.startGame();

    const p1Cards = snaps.p1?.gameView?.myHand ?? [];
    const p2Cards = snaps.p2?.gameView?.myHand ?? [];
    expect(p1Cards).toHaveLength(7);
    expect(p2Cards).toHaveLength(7);
    expect(p1Cards[0]?.id).not.toBe(p2Cards[0]?.id);
    // Spectator gets read-only view with null hand
    expect(snaps.spec?.spectators).toHaveLength(1);
    expect(snaps.spec?.gameView?.myHand).toBeNull();

    // p2 disconnects; p1 votes to replace with bot
    await p2Adapter.disconnect();
    await c1.voteDisconnect('p2', 'replace_bot');
    expect(snaps.p1?.seats.find((s) => s.playerId === 'p2')?.isBot).toBe(true);

    c1.destroy();
    c2.destroy();
    cSpec.destroy();
  });
});

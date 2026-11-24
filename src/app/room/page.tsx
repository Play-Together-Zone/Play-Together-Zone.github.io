'use client';

import React, { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  AlertTriangle,
  Bot,
  Check,
  CheckCircle2,
  Copy,
  Crown,
  ExternalLink,
  Eye,
  KeyRound,
  LogOut,
  Play,
  RefreshCw,
  Settings,
  ShieldAlert,
  Timer,
  Users,
  Wifi,
  WifiOff,
} from 'lucide-react';
import { useAppContext } from '@/components/AppProvider';
import { ChatBox } from '@/components/room/ChatBox';
import { QrCodeCard } from '@/components/room/QrCodeCard';
import { TicTacToeBoard } from '@/components/games/TicTacToeBoard';
import { CheckersBoard } from '@/components/games/CheckersBoard';
import { ChessBoard } from '@/components/games/ChessBoard';
import { LudoBoard } from '@/components/games/LudoBoard';
import { ColorRushBoard } from '@/components/games/ColorRushBoard';
import { TriviaBoard } from '@/components/games/TriviaBoard';
import { getGameEngine, getReconstructHook } from '@/lib/games/registry';
import { GAME_CATALOG, type GameActionBase, type GameId } from '@/lib/games/types';
import type { TicTacToeState } from '@/lib/games/ticTacToe';
import type { CheckersState } from '@/lib/games/checkers';
import type { ChessState } from '@/lib/games/chess';
import type { LudoState } from '@/lib/games/ludo';
import type { ColorRushView } from '@/lib/games/colorRush';
import {
  TRIVIA_PACK_META,
  fetchOpenTdbQuestions,
  loadStaticTriviaPack,
  type TriviaView,
} from '@/lib/games/trivia';
import {
  connectWithFallback,
  type NetworkAdapter,
  type SignalingStrategy,
} from '@/lib/network';
import { playSound } from '@/lib/sound';
import { RoomSyncController } from '@/lib/sync/RoomSyncController';
import type { ChatMessage, DisconnectVoteChoice, RoomSnapshot } from '@/lib/sync/types';
import { buildRoomShareUrl, generateRoomCode, normalizeRoomCode, withBasePath } from '@/lib/url';

function RoomWorkspace() {
  const searchParams = useSearchParams();
  const {
    profile,
    mounted,
    soundEnabled,
    recordResult,
    blockedIds,
    toggleBlockPlayer,
  } = useAppContext();

  const rawCode = normalizeRoomCode(searchParams.get('code') ?? '');
  const roomCode = useMemo(() => rawCode || generateRoomCode(5), [rawCode]);
  const initialGameParam = (searchParams.get('game') as GameId) || 'tic-tac-toe';
  const isInitialHost = searchParams.get('host') === '1';
  const isSoloBot = searchParams.get('solo') === '1';
  const wantSpectate = searchParams.get('spectate') === '1';
  const initialStrategy =
    (searchParams.get('strategy') as SignalingStrategy) || 'torrent';

  const [strategy, setStrategy] = useState<SignalingStrategy>(initialStrategy);
  const [activeStrategy, setActiveStrategy] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState('');
  const [activePassword, setActivePassword] = useState('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  const [connStatus, setConnStatus] = useState<string>('connecting');
  const [connError, setConnError] = useState<string | null>(null);
  const [snapshot, setSnapshot] = useState<RoomSnapshot | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [turnTick, setTurnTick] = useState<{ version: number; left: number } | null>(null);
  const [triviaLoading, setTriviaLoading] = useState(false);

  const adapterRef = useRef<NetworkAdapter | null>(null);
  const syncRef = useRef<RoomSyncController | null>(null);
  const lastRecordedVersionRef = useRef<number>(-1);
  const prevVersionRef = useRef<number>(0);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast((prev) => (prev === msg ? null : prev));
    }, 3500);
  }, []);

  const teardown = useCallback(async () => {
    syncRef.current?.destroy();
    syncRef.current = null;
    if (adapterRef.current) {
      await adapterRef.current.disconnect();
      adapterRef.current = null;
    }
  }, []);

  const connectRoom = useCallback(
    async (chosenStrategy: SignalingStrategy, roomPassword: string) => {
      await teardown();
      setConnStatus('connecting');
      setConnError(null);

      try {
        const { adapter, strategy: used } = await connectWithFallback(roomCode, {
          strategy: chosenStrategy,
          password: roomPassword || undefined,
          autoFallback: chosenStrategy !== 'local',
        });

        adapterRef.current = adapter;
        setActiveStrategy(used);
        setConnStatus('connected');
        setShowPasswordPrompt(false);

        const initialEngine = getGameEngine(initialGameParam);
        const controller = new RoomSyncController({
          roomCode,
          gameId: initialEngine.id,
          isInitialHost,
          self: {
            playerId: profile.playerId,
            displayName: profile.displayName,
            avatar: profile.avatar,
            wantSpectate,
          },
          adapter,
          engine: initialEngine,
          reconstructFromView: getReconstructHook(initialEngine.id),
          callbacks: {
            onSnapshot: (snap) => {
              setSnapshot(snap);
              if (snap.version > prevVersionRef.current) {
                if (snap.phase === 'playing' && prevVersionRef.current > 0) {
                  playSound('move', soundEnabled);
                }
                prevVersionRef.current = snap.version;
              }
            },
            onChat: (msg) => {
              setChatMessages((prev) => [...prev.slice(-99), msg]);
              if (msg.senderPlayerId !== profile.playerId) {
                playSound('chat', soundEnabled);
              }
            },
            onActionRejected: (reason) => {
              playSound('error', soundEnabled);
              showToast(`Move rejected: ${reason}`);
            },
            onError: (err) => {
              if (err.code === 'auth-failed') {
                setShowPasswordPrompt(true);
                setConnError('Password required or incorrect password.');
              } else {
                setConnError(err.message);
              }
            },
            onHostMigrated: (newHostId) => {
              showToast(
                newHostId === profile.playerId
                  ? 'Previous host left — you are now the room host!'
                  : 'Host migrated to another player.',
              );
            },
          },
        });

        syncRef.current = controller;

        if (isInitialHost && isSoloBot && initialEngine.supportsBot) {
          await controller.addBot();
          await controller.startGame();
        }
      } catch (err) {
        setConnStatus('error');
        setConnError(
          err instanceof Error ? err.message : 'Unable to connect to room.',
        );
      }
    },
    [
      teardown,
      roomCode,
      initialGameParam,
      isInitialHost,
      isSoloBot,
      profile.playerId,
      profile.displayName,
      profile.avatar,
      wantSpectate,
      soundEnabled,
      showToast,
    ],
  );

  useEffect(() => {
    if (!mounted) return;
    let active = true;
    const timer = setTimeout(() => {
      if (active) {
        void connectRoom(strategy, activePassword);
      }
    }, 0);
    return () => {
      active = false;
      clearTimeout(timer);
      void teardown();
    };
    // Only run on initial mount; explicit reconnects invoke connectRoom directly
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  // Keep engine synced on non-host clients when host changes gameId in lobby
  useEffect(() => {
    if (!snapshot || !syncRef.current) return;
    const engine = getGameEngine(snapshot.gameId);
    syncRef.current.setEngine(engine, getReconstructHook(snapshot.gameId));
  }, [snapshot]);

  // Record win/loss/draw once when a match finishes
  useEffect(() => {
    if (!snapshot || snapshot.phase !== 'ended' || !snapshot.outcome) return;
    if (lastRecordedVersionRef.current === snapshot.version) return;
    const isSeated = snapshot.seats.some((s) => s.playerId === profile.playerId);
    if (!isSeated) return;

    lastRecordedVersionRef.current = snapshot.version;
    const winners = snapshot.outcome.winnerIds;
    if (winners.length === 0) {
      recordResult(snapshot.gameId, 'draw');
    } else if (winners.includes(profile.playerId)) {
      playSound('win', soundEnabled);
      recordResult(snapshot.gameId, 'win');
    } else {
      playSound('lose', soundEnabled);
      recordResult(snapshot.gameId, 'loss');
    }
  }, [snapshot, profile.playerId, recordResult, soundEnabled]);

  // Optional turn countdown display
  const activeVersion = snapshot?.version ?? 0;
  const activePhase = snapshot?.phase ?? 'lobby';
  const activeTurnTimerSec = snapshot?.settings.turnTimerSec ?? 0;

  useEffect(() => {
    if (activePhase !== 'playing' || !activeTurnTimerSec) {
      return;
    }
    const id = setInterval(() => {
      setTurnTick((prev) => {
        const currentLeft =
          prev && prev.version === activeVersion ? prev.left : activeTurnTimerSec;
        return {
          version: activeVersion,
          left: currentLeft > 0 ? currentLeft - 1 : 0,
        };
      });
    }, 1000);
    return () => clearInterval(id);
  }, [activeVersion, activePhase, activeTurnTimerSec]);

  const turnSecondsLeft =
    activePhase === 'playing' && activeTurnTimerSec > 0
      ? turnTick && turnTick.version === activeVersion
        ? turnTick.left
        : activeTurnTimerSec
      : null;

  const isHost = snapshot?.hostPlayerId === profile.playerId;
  const selfSeat = snapshot?.seats.find((s) => s.playerId === profile.playerId);
  const isSpectator = !selfSeat;

  const shareUrl = useMemo(
    () =>
      buildRoomShareUrl({
        code: roomCode,
        game: snapshot?.gameId ?? initialGameParam,
        strategy,
      }),
    [roomCode, snapshot?.gameId, initialGameParam, strategy],
  );

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      showToast('Copy failed — copy URL from address bar.');
    }
  };

  const handleOpenSecondTab = () => {
    const url = withBasePath(
      `/room/?code=${encodeURIComponent(roomCode)}&game=${encodeURIComponent(
        snapshot?.gameId ?? initialGameParam,
      )}&strategy=${encodeURIComponent(strategy)}&tabId=tab2`,
    );
    window.open(url, '_blank', 'noopener');
  };

  const handleGameChange = (newGameId: GameId) => {
    if (!syncRef.current || !isHost) return;
    const eng = getGameEngine(newGameId);
    syncRef.current.setEngine(eng, getReconstructHook(newGameId));
    void syncRef.current.updateSettings({ maxPlayers: eng.maxPlayers }, newGameId);
  };

  const handleAction = (action: GameActionBase) => {
    void syncRef.current?.sendGameAction(action);
  };

  const handleLoadTriviaPack = async (packId: string) => {
    if (!syncRef.current || !isHost) return;
    setTriviaLoading(true);
    try {
      const pack =
        packId === 'opentdb'
          ? await fetchOpenTdbQuestions(8)
          : await loadStaticTriviaPack(packId);
      await syncRef.current.updateSettings({
        gameOptions: {
          packId,
          packTitle: pack.title,
          questions: pack.questions,
        },
      });
      showToast(`Loaded "${pack.title}" (${pack.questions.length} questions)`);
    } catch (err) {
      showToast(
        err instanceof Error ? err.message : 'Failed to load trivia pack.',
      );
    } finally {
      setTriviaLoading(false);
    }
  };

  const handleStartMatch = async () => {
    if (!syncRef.current || !isHost || !snapshot) return;
    if (
      snapshot.gameId === 'trivia' &&
      !Array.isArray(snapshot.settings.gameOptions.questions)
    ) {
      await handleLoadTriviaPack('science-tech');
    }
    await syncRef.current.startGame();
  };

  const disconnectedSeats =
    snapshot?.seats.filter((s) => !s.connected && !s.isBot) ?? [];

  const renderGameBoard = () => {
    if (!snapshot || !snapshot.gameView) return null;

    switch (snapshot.gameId) {
      case 'tic-tac-toe':
        return (
          <TicTacToeBoard
            state={snapshot.gameView as TicTacToeState}
            selfPlayerId={profile.playerId}
            isSpectator={isSpectator}
            onAction={handleAction}
          />
        );
      case 'checkers':
        return (
          <CheckersBoard
            state={snapshot.gameView as CheckersState}
            selfPlayerId={profile.playerId}
            isSpectator={isSpectator}
            onAction={handleAction}
          />
        );
      case 'chess':
        return (
          <ChessBoard
            state={snapshot.gameView as ChessState}
            selfPlayerId={profile.playerId}
            isSpectator={isSpectator}
            onAction={handleAction}
          />
        );
      case 'ludo':
        return (
          <LudoBoard
            state={snapshot.gameView as LudoState}
            selfPlayerId={profile.playerId}
            isSpectator={isSpectator}
            onAction={handleAction}
          />
        );
      case 'color-rush':
        return (
          <ColorRushBoard
            view={snapshot.gameView as ColorRushView}
            selfPlayerId={profile.playerId}
            isSpectator={isSpectator}
            onAction={handleAction}
          />
        );
      case 'trivia':
        return (
          <TriviaBoard
            view={snapshot.gameView as TriviaView}
            selfPlayerId={profile.playerId}
            isHost={isHost}
            isSpectator={isSpectator}
            onAction={handleAction}
            onHostSystemAction={(act) =>
              syncRef.current?.applyHostSystemAction(act)
            }
          />
        );
      default:
        return (
          <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">
            Game module for {snapshot.gameId} is loading...
          </div>
        );
    }
  };

  const renderMoveHistory = (): string[] => {
    if (!snapshot?.gameView) return [];
    const view = snapshot.gameView as { history?: Array<{ label?: string }> };
    if (!Array.isArray(view.history)) return [];
    return view.history.map((h, i) => `${i + 1}. ${h.label ?? JSON.stringify(h)}`);
  };

  const currentCatalog = GAME_CATALOG.find(
    (g) => g.id === (snapshot?.gameId ?? initialGameParam),
  );

  return (
    <div className="space-y-5">
      {toast && (
        <div
          role="status"
          className="animate-pop fixed right-4 bottom-4 z-50 rounded-xl border border-amber-500/40 bg-slate-900 px-4 py-3 text-sm font-medium text-amber-300 shadow-xl"
        >
          {toast}
        </div>
      )}

      {/* Top Room Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-indigo-500/15 px-2.5 py-1 font-mono text-sm font-bold tracking-wider text-indigo-600 dark:text-indigo-300">
                {roomCode}
              </span>
              <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                {currentCatalog?.name ?? 'Game Room'}
              </h1>
              {isSpectator && snapshot && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-600 dark:text-amber-300">
                  <Eye className="h-3.5 w-3.5" />
                  Spectating
                </span>
              )}
            </div>
            <p className="mt-0.5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              {connStatus === 'connected' ? (
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <Wifi className="h-3.5 w-3.5" />
                  Connected ({activeStrategy || strategy})
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400">
                  <WifiOff className="h-3.5 w-3.5" />
                  {connStatus}
                </span>
              )}
              {snapshot && <span>· Sync v{snapshot.version}</span>}
              {turnSecondsLeft !== null && snapshot?.phase === 'playing' && (
                <span className="inline-flex items-center gap-1 font-semibold text-indigo-500">
                  <Timer className="h-3.5 w-3.5" />
                  {turnSecondsLeft}s
                </span>
              )}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => void handleCopyLink()}
            className="flex items-center gap-1.5 rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {copiedLink ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            {copiedLink ? 'Copied!' : 'Copy Invite Link'}
          </button>

          <button
            type="button"
            onClick={handleOpenSecondTab}
            className="flex items-center gap-1.5 rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            title="Open second browser tab for local two-tab testing"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Tab 2 Test
          </button>

          <button
            type="button"
            onClick={() => setShowPasswordPrompt((p) => !p)}
            className="flex items-center gap-1.5 rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            title="Room password"
          >
            <KeyRound className="h-3.5 w-3.5" />
            Password
          </button>

          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            <LogOut className="h-3.5 w-3.5" />
            Leave
          </Link>
        </div>
      </div>

      {/* Optional Room Password / Reconnect Panel */}
      {(showPasswordPrompt || connError) && (
        <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm">
          {connError && (
            <p className="mb-2 flex items-center gap-2 font-medium text-amber-700 dark:text-amber-300">
              <AlertTriangle className="h-4 w-4" />
              {connError}
            </p>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setActivePassword(passwordInput);
              void connectRoom(strategy, passwordInput);
            }}
            className="flex flex-wrap items-center gap-2"
          >
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Optional room password..."
              aria-label="Room password"
              className="rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs dark:border-slate-700 dark:bg-slate-950"
            />
            <select
              value={strategy}
              onChange={(e) => setStrategy(e.target.value as SignalingStrategy)}
              aria-label="Signaling strategy"
              className="rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs dark:border-slate-700 dark:bg-slate-950"
            >
              <option value="torrent">Torrent</option>
              <option value="nostr">Nostr</option>
              <option value="mqtt">MQTT</option>
              <option value="local">Local Two-Tab</option>
            </select>
            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500"
            >
              Reconnect
            </button>
          </form>
        </div>
      )}

      {/* Disconnected Player Waiting & Vote Banner */}
      {disconnectedSeats.length > 0 && snapshot && (
        <div className="space-y-2 rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4">
          {disconnectedSeats.map((seat) => {
            const eng = getGameEngine(snapshot.gameId);
            const voteState = snapshot.disconnectVotes[seat.playerId];
            const myVote = voteState?.votes[profile.playerId];
            return (
              <div
                key={seat.playerId}
                className="flex flex-wrap items-center justify-between gap-3 text-sm"
              >
                <div className="flex items-center gap-2 font-medium text-rose-700 dark:text-rose-300">
                  <ShieldAlert className="h-4 w-4" />
                  <span>
                    {seat.displayName} left — waiting for reconnect...
                  </span>
                </div>
                {!isSpectator && (
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        void syncRef.current?.voteDisconnect(
                          seat.playerId,
                          'end' as DisconnectVoteChoice,
                        )
                      }
                      className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
                        myVote === 'end'
                          ? 'bg-rose-600 text-white'
                          : 'border border-rose-500/40 text-rose-700 hover:bg-rose-500/20 dark:text-rose-200'
                      }`}
                    >
                      Vote to End Match
                    </button>
                    {eng.supportsBot && (
                      <button
                        type="button"
                        onClick={() =>
                          void syncRef.current?.voteDisconnect(
                            seat.playerId,
                            'replace_bot' as DisconnectVoteChoice,
                          )
                        }
                        className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
                          myVote === 'replace_bot'
                            ? 'bg-indigo-600 text-white'
                            : 'border border-indigo-500/40 text-indigo-700 hover:bg-indigo-500/20 dark:text-indigo-200'
                        }`}
                      >
                        Vote to Replace with Bot
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Main Grid: Board/Lobby on Left, Players & Chat on Right */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          {!snapshot ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
              <RefreshCw className="h-7 w-7 animate-spin text-indigo-500" />
              <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                {isInitialHost
                  ? 'Initializing host room...'
                  : `Connecting to room ${roomCode}...`}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Waiting for host state snapshot via {strategy}.
              </p>
            </div>
          ) : snapshot.phase === 'lobby' ? (
            <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Match Lobby
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Share the code or QR link. Host can adjust rules, add bots, or
                    start the match.
                  </p>
                </div>
                <QrCodeCard url={shareUrl} />
              </div>

              {isHost && (
                <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-slate-600 uppercase dark:text-slate-300">
                    <Settings className="h-3.5 w-3.5" />
                    Host Settings
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <label
                        htmlFor="host-game-select"
                        className="mb-1 block text-xs text-slate-500"
                      >
                        Game
                      </label>
                      <select
                        id="host-game-select"
                        value={snapshot.gameId}
                        onChange={(e) => handleGameChange(e.target.value as GameId)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-2.5 py-1.5 text-xs dark:border-slate-700 dark:bg-slate-900"
                      >
                        {GAME_CATALOG.map((g) => (
                          <option key={g.id} value={g.id}>
                            {g.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="host-max-players"
                        className="mb-1 block text-xs text-slate-500"
                      >
                        Max Players
                      </label>
                      <input
                        id="host-max-players"
                        type="number"
                        min={getGameEngine(snapshot.gameId).minPlayers}
                        max={getGameEngine(snapshot.gameId).maxPlayers}
                        value={snapshot.settings.maxPlayers}
                        onChange={(e) =>
                          void syncRef.current?.updateSettings({
                            maxPlayers: Number(e.target.value),
                          })
                        }
                        className="w-full rounded-xl border border-slate-300 bg-white px-2.5 py-1.5 text-xs dark:border-slate-700 dark:bg-slate-900"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="host-turn-timer"
                        className="mb-1 block text-xs text-slate-500"
                      >
                        Turn Timer
                      </label>
                      <select
                        id="host-turn-timer"
                        value={snapshot.settings.turnTimerSec}
                        onChange={(e) =>
                          void syncRef.current?.updateSettings({
                            turnTimerSec: Number(e.target.value),
                          })
                        }
                        className="w-full rounded-xl border border-slate-300 bg-white px-2.5 py-1.5 text-xs dark:border-slate-700 dark:bg-slate-900"
                      >
                        <option value={0}>No limit</option>
                        <option value={15}>15 seconds</option>
                        <option value={30}>30 seconds</option>
                        <option value={60}>60 seconds</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-1 text-xs">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={snapshot.settings.chatEnabled}
                        onChange={(e) =>
                          void syncRef.current?.updateSettings({
                            chatEnabled: e.target.checked,
                          })
                        }
                      />
                      Enable room chat
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={snapshot.settings.allowSpectators}
                        onChange={(e) =>
                          void syncRef.current?.updateSettings({
                            allowSpectators: e.target.checked,
                          })
                        }
                      />
                      Allow spectators
                    </label>
                    {snapshot.gameId === 'chess' && (
                      <label className="flex items-center gap-2">
                        <span>Chess Clock:</span>
                        <select
                          value={Number(snapshot.settings.gameOptions.clockMinutes ?? 0)}
                          onChange={(e) =>
                            void syncRef.current?.updateSettings({
                              gameOptions: { clockMinutes: Number(e.target.value) },
                            })
                          }
                          className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-900"
                        >
                          <option value={0}>Untimed</option>
                          <option value={3}>3 min</option>
                          <option value={5}>5 min</option>
                          <option value={10}>10 min</option>
                        </select>
                      </label>
                    )}
                    {snapshot.gameId === 'trivia' && (
                      <div className="flex flex-wrap items-center gap-2">
                        <span>Question Pack:</span>
                        <select
                          disabled={triviaLoading}
                          value={String(snapshot.settings.gameOptions.packId ?? 'science-tech')}
                          onChange={(e) => void handleLoadTriviaPack(e.target.value)}
                          className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-900"
                        >
                          {TRIVIA_PACK_META.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.title}
                            </option>
                          ))}
                          <option value="opentdb">Open Trivia DB (Live Fetch)</option>
                        </select>
                        {triviaLoading && (
                          <span className="text-[11px] text-indigo-500">Loading...</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-1">
                {selfSeat && (
                  <button
                    type="button"
                    onClick={() => void syncRef.current?.toggleReady(!selfSeat.ready)}
                    className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      selfSeat.ready
                        ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                        : 'border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    {selfSeat.ready ? 'Ready!' : 'Mark Ready'}
                  </button>
                )}

                {isHost && (
                  <>
                    {getGameEngine(snapshot.gameId).supportsBot &&
                      snapshot.seats.length < snapshot.settings.maxPlayers && (
                        <button
                          type="button"
                          onClick={() => void syncRef.current?.addBot()}
                          className="flex items-center gap-1.5 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          <Bot className="h-4 w-4" />
                          Add Bot
                        </button>
                      )}
                    <button
                      type="button"
                      disabled={
                        triviaLoading ||
                        snapshot.seats.length < getGameEngine(snapshot.gameId).minPlayers
                      }
                      onClick={() => void handleStartMatch()}
                      className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Play className="h-4 w-4" />
                      Start Match
                    </button>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              {snapshot.phase === 'playing' && (() => {
                const viewObj = snapshot.gameView as { currentTurnPlayerId?: string } | null;
                const turnId = viewObj?.currentTurnPlayerId;
                const turnPlayer = snapshot.seats.find((s) => s.playerId === turnId);
                if (!turnPlayer) return null;
                const isMine = turnId === profile.playerId && !isSpectator;
                return (
                  <div
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2 text-xs font-bold ${
                      isMine
                        ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800/70 dark:text-slate-300'
                    }`}
                  >
                    <span>
                      {isMine
                        ? 'Your turn — make your move!'
                        : `${turnPlayer.avatar} ${turnPlayer.displayName}'s turn`}
                    </span>
                    <span className="font-mono text-[11px] opacity-75">
                      {currentCatalog?.name}
                    </span>
                  </div>
                );
              })()}

              {snapshot.phase === 'ended' && snapshot.outcome && (
                <div className="animate-pop flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <div>
                    <h2 className="text-base font-bold text-emerald-700 dark:text-emerald-300">
                      Match Complete
                    </h2>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      {snapshot.outcome.reason}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => void syncRef.current?.requestRematch(false)}
                      className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      Rematch
                    </button>
                    {isHost && (
                      <button
                        type="button"
                        onClick={() => void syncRef.current?.requestRematch(true)}
                        className="rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                      >
                        Back to Lobby
                      </button>
                    )}
                  </div>
                </div>
              )}

              {renderGameBoard()}
            </div>
          )}

          {/* Move History (In-game) */}
          {snapshot && snapshot.phase !== 'lobby' && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xs font-bold tracking-wide text-slate-500 uppercase">
                Move History
              </h3>
              <div className="mt-2 flex max-h-28 flex-wrap gap-1.5 overflow-y-auto">
                {renderMoveHistory().length === 0 ? (
                  <span className="text-xs text-slate-400">No moves yet.</span>
                ) : (
                  renderMoveHistory().map((entry, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {entry}
                    </span>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar: Seats, Spectators & Chat */}
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="flex items-center justify-between text-xs font-bold tracking-wide text-slate-600 uppercase dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" />
                Players ({snapshot?.seats.length ?? 0}/
                {snapshot?.settings.maxPlayers ?? 2})
              </span>
              {snapshot && snapshot.spectators.length > 0 && (
                <span className="text-[11px] font-medium text-slate-400">
                  +{snapshot.spectators.length} watching
                </span>
              )}
            </h2>

            <div className="mt-3 space-y-2">
              {snapshot?.seats.map((seat) => {
                const isSeatHost = seat.playerId === snapshot.hostPlayerId;
                return (
                  <div
                    key={seat.playerId}
                    className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-xs dark:border-slate-800"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="text-base">{seat.avatar}</span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-100">
                          <span className="truncate">{seat.displayName}</span>
                          {isSeatHost && (
                            <Crown
                              className="h-3.5 w-3.5 shrink-0 text-amber-500"
                              aria-label="Room host"
                            />
                          )}
                        </div>
                        <span
                          className={`text-[10px] ${
                            seat.connected
                              ? 'text-emerald-600 dark:text-emerald-400'
                              : 'text-rose-500'
                          }`}
                        >
                          {seat.isBot
                            ? 'AI Bot'
                            : seat.connected
                              ? seat.ready
                                ? 'Connected · Ready'
                                : 'Connected'
                              : 'Disconnected'}
                        </span>
                      </div>
                    </div>

                    {isHost && seat.isBot && snapshot.phase === 'lobby' && (
                      <button
                        type="button"
                        onClick={() => void syncRef.current?.removeBot(seat.playerId)}
                        className="rounded-lg px-2 py-1 text-[11px] text-rose-500 hover:bg-rose-500/10"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {snapshot && snapshot.spectators.length > 0 && (
              <div className="mt-3 border-t border-slate-200 pt-2.5 dark:border-slate-800">
                <p className="text-[11px] font-semibold text-slate-500">
                  Spectators (Read-Only)
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {snapshot.spectators.map((sp) => (
                    <span
                      key={sp.playerId}
                      className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-1 text-[11px] text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      <span>{sp.avatar}</span>
                      <span>{sp.displayName}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>

          <ChatBox
            messages={chatMessages}
            chatEnabled={snapshot?.settings.chatEnabled ?? true}
            selfPlayerId={profile.playerId}
            isHost={Boolean(isHost)}
            mutedPlayerIds={snapshot?.mutedPlayerIds ?? []}
            blockedPlayerIds={blockedIds}
            onSend={(text) => void syncRef.current?.sendChat(text)}
            onToggleMute={(pid) => void syncRef.current?.toggleMutePlayer(pid)}
            onToggleBlock={toggleBlockPlayer}
          />
        </div>
      </div>
    </div>
  );
}

export default function RoomPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-sm text-slate-500">
          Loading room...
        </div>
      }
    >
      <RoomWorkspace />
    </Suspense>
  );
}

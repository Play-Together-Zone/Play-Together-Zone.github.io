'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  Bot,
  Crown,
  Dices,
  Eye,
  Grid3X3,
  HelpCircle,
  Layers,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { GAME_CATALOG, type GameId } from '@/lib/games/types';
import { generateRoomCode, normalizeRoomCode, withBasePath } from '@/lib/url';
import type { SignalingStrategy } from '@/lib/network';

function gameIcon(id: GameId) {
  switch (id) {
    case 'tic-tac-toe':
      return <Grid3X3 className="h-6 w-6 text-white" />;
    case 'checkers':
      return <Sparkles className="h-6 w-6 text-white" />;
    case 'chess':
      return <Crown className="h-6 w-6 text-white" />;
    case 'ludo':
      return <Dices className="h-6 w-6 text-white" />;
    case 'color-rush':
      return <Layers className="h-6 w-6 text-white" />;
    case 'trivia':
      return <HelpCircle className="h-6 w-6 text-white" />;
  }
}

export default function HomePage() {
  const router = useRouter();
  const [joinCode, setJoinCode] = useState('');
  const [strategy, setStrategy] = useState<SignalingStrategy>('torrent');
  const [spectate, setSpectate] = useState(false);

  const handleCreateRoom = (gameId: GameId, soloBot = false) => {
    const code = generateRoomCode(5);
    const params = new URLSearchParams({
      code,
      game: gameId,
      host: '1',
      strategy: soloBot ? 'local' : strategy,
    });
    if (soloBot) {
      params.set('solo', '1');
    }
    router.push(`/room/?${params.toString()}`);
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = normalizeRoomCode(joinCode);
    if (cleaned.length < 4) return;
    const params = new URLSearchParams({
      code: cleaned,
      strategy,
    });
    if (spectate) {
      params.set('spectate', '1');
    }
    router.push(`/room/?${params.toString()}`);
  };

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#061235] via-[#0c1d52] to-slate-900 p-6 text-white shadow-xl sm:p-8 dark:border-slate-800">
        <div className="grid gap-8 lg:grid-cols-5 lg:items-center">
          <div className="space-y-4 lg:col-span-3">
            <div className="flex flex-wrap items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath('/logo.jpg')}
                alt="Play-Together-Zone — Play, Connect, Enjoy"
                className="h-24 w-auto rounded-2xl border border-white/15 bg-[#061235] object-contain shadow-lg sm:h-28"
              />
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-200">
                <ShieldCheck className="h-3.5 w-3.5" />
                100% Static · Serverless WebRTC P2P
              </div>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Play-<span className="text-amber-400">Together</span>-Zone: Play · Connect · Enjoy
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
              Create a room code, share a link or QR code, and play directly with
              friends or practice against built-in bots — no accounts or sign-ups
              required.
            </p>
          </div>

          <form
            onSubmit={handleJoin}
            className="space-y-3.5 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md lg:col-span-2"
          >
            <h2 className="text-base font-bold text-white">Join with Room Code</h2>
            <div>
              <label
                htmlFor="join-code-input"
                className="mb-1 block text-xs font-medium text-slate-200"
              >
                Room Code (4–6 chars)
              </label>
              <input
                id="join-code-input"
                type="text"
                value={joinCode}
                onChange={(e) => setJoinCode(normalizeRoomCode(e.target.value))}
                placeholder="e.g. K7M9P"
                maxLength={6}
                className="w-full rounded-xl border border-white/20 bg-slate-950/70 px-3.5 py-2.5 font-mono text-base tracking-widest text-white uppercase placeholder:tracking-normal placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="home-strategy"
                className="mb-1 block text-xs font-medium text-slate-200"
              >
                Network Transport
              </label>
              <select
                id="home-strategy"
                value={strategy}
                onChange={(e) => setStrategy(e.target.value as SignalingStrategy)}
                className="w-full rounded-xl border border-white/20 bg-slate-950/70 px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="torrent">WebRTC · Torrent (Default + Auto-Fallback)</option>
                <option value="nostr">WebRTC · Nostr Relays</option>
                <option value="mqtt">WebRTC · MQTT Brokers</option>
                <option value="local">Local Two-Tab Test Mode (BroadcastChannel)</option>
              </select>
            </div>

            <label className="flex items-center gap-2 text-xs text-slate-200">
              <input
                type="checkbox"
                checked={spectate}
                onChange={(e) => setSpectate(e.target.checked)}
                className="h-4 w-4 rounded border-white/30 bg-slate-900 text-cyan-500"
              />
              <Eye className="h-3.5 w-3.5" />
              Join as Spectator (read-only)
            </label>

            <button
              type="submit"
              disabled={joinCode.trim().length < 4}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Enter Room
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section aria-labelledby="games-heading" className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2
              id="games-heading"
              className="text-xl font-bold text-slate-900 dark:text-white"
            >
              Choose a Game
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Launch a multiplayer lobby or spar solo with a built-in bot.
            </p>
          </div>
          <span className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            Transport: <strong className="uppercase">{strategy}</strong>
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GAME_CATALOG.map((game) => (
            <article
              key={game.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${game.accentColor} shadow-sm`}
                  >
                    {gameIcon(game.id)}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    <Users className="h-3.5 w-3.5" />
                    {game.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                  {game.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {game.tagline}
                </p>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  {game.rulesSummary}
                </p>
              </div>

              <div className="mt-5 flex gap-2">
                <button
                  type="button"
                  onClick={() => handleCreateRoom(game.id, false)}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500"
                >
                  Create Room
                </button>
                <button
                  type="button"
                  onClick={() => handleCreateRoom(game.id, true)}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 px-3 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                  title="Practice solo vs bot"
                >
                  <Bot className="h-4 w-4" />
                  Solo
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

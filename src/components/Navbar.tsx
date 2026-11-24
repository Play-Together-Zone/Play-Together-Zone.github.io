'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  ExternalLink,
  Moon,
  Radio,
  ShieldCheck,
  Sun,
  User,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { useAppContext } from './AppProvider';
import { BrandMark } from './BrandMark';
import { AVATAR_OPTIONS } from '@/lib/storage';
import { GAME_CATALOG } from '@/lib/games/types';

export function Navbar() {
  const {
    profile,
    updateProfile,
    theme,
    toggleTheme,
    soundEnabled,
    toggleSound,
    stats,
    resetStats,
  } = useAppContext();

  const [profileOpen, setProfileOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);
  const [nameInput, setNameInput] = useState('');

  const openProfile = () => {
    setNameInput(profile.displayName);
    setProfileOpen(true);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ displayName: nameInput });
    setProfileOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              <BrandMark className="h-9 w-9 shrink-0 rounded-xl shadow-sm" />
              <span>
                Play-<span className="text-amber-500">Together</span>-Zone
              </span>
            </Link>

            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-1 md:flex"
            >
              <Link
                href="/"
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                Games
              </Link>
              <Link
                href="/ping/"
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <Radio className="h-3.5 w-3.5" />
                P2P Ping Test
              </Link>
              <Link
                href="/privacy/"
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Privacy
              </Link>
              <a
                href="https://khushwinder-dev.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                Contact
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setStatsOpen(true)}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="View local stats"
              title="Local Stats"
            >
              <BarChart3 className="h-4 w-4" />
              <span className="hidden md:inline">Stats</span>
            </button>

            <button
              type="button"
              onClick={toggleSound}
              className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
              title={soundEnabled ? 'Sound On' : 'Sound Off'}
            >
              {soundEnabled ? (
                <Volume2 className="h-4 w-4" />
              ) : (
                <VolumeX className="h-4 w-4 text-slate-400" />
              )}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={openProfile}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              aria-label="Edit player profile"
            >
              <span className="text-base" aria-hidden="true">
                {profile.avatar}
              </span>
              <span className="max-w-[110px] truncate">{profile.displayName}</span>
              <User className="h-3.5 w-3.5 text-slate-400" />
            </button>
          </div>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="flex items-center justify-around border-t border-slate-200/70 px-2 py-1.5 text-xs font-medium text-slate-600 md:hidden dark:border-slate-800/70 dark:text-slate-300"
        >
          <Link href="/" className="rounded-lg px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800">
            Games
          </Link>
          <Link href="/ping/" className="rounded-lg px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800">
            Ping Test
          </Link>
          <Link href="/privacy/" className="rounded-lg px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800">
            Privacy
          </Link>
          <a
            href="https://khushwinder-dev.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Contact
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>
        </nav>
      </header>

      {profileOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="profile-modal-title"
        >
          <div className="animate-pop w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between">
              <h2
                id="profile-modal-title"
                className="text-lg font-bold text-slate-900 dark:text-white"
              >
                Player Profile
              </h2>
              <button
                type="button"
                onClick={() => setProfileOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800"
                aria-label="Close profile dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label
                  htmlFor="profile-display-name"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Display Name
                </label>
                <input
                  id="profile-display-name"
                  type="text"
                  maxLength={24}
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  required
                />
              </div>

              <div>
                <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Avatar
                </span>
                <div className="grid grid-cols-6 gap-2">
                  {AVATAR_OPTIONS.map((av) => (
                    <button
                      key={av}
                      type="button"
                      onClick={() => updateProfile({ avatar: av })}
                      className={`flex h-11 items-center justify-center rounded-xl border text-xl transition ${
                        profile.avatar === av
                          ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500/30 dark:bg-indigo-950/60'
                          : 'border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800'
                      }`}
                      aria-label={`Select avatar ${av}`}
                    >
                      {av}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-600 dark:bg-slate-800/70 dark:text-slate-400">
                Persistent Player ID:{' '}
                <code className="font-mono text-slate-800 dark:text-slate-200">
                  {profile.playerId}
                </code>
                <p className="mt-1">
                  Stored locally in your browser so reconnecting restores your seat.
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setProfileOpen(false)}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {statsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="stats-modal-title"
        >
          <div className="animate-pop w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between">
              <h2
                id="stats-modal-title"
                className="text-lg font-bold text-slate-900 dark:text-white"
              >
                Local Match Stats
              </h2>
              <button
                type="button"
                onClick={() => setStatsOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800"
                aria-label="Close stats dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-2.5">
              {GAME_CATALOG.map((g) => {
                const entry = stats[g.id] ?? { wins: 0, losses: 0, draws: 0 };
                return (
                  <div
                    key={g.id}
                    className="flex items-center justify-between rounded-xl border border-slate-200 px-3.5 py-2.5 dark:border-slate-800"
                  >
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {g.name}
                    </span>
                    <div className="flex items-center gap-3 text-xs font-medium">
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {entry.wins}W
                      </span>
                      <span className="text-rose-600 dark:text-rose-400">
                        {entry.losses}L
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {entry.draws}D
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <button
                type="button"
                onClick={resetStats}
                className="text-xs font-medium text-rose-600 hover:underline dark:text-rose-400"
              >
                Reset local stats
              </button>
              <button
                type="button"
                onClick={() => setStatsOpen(false)}
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white dark:bg-slate-100 dark:text-slate-900"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

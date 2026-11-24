'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  clearPlayerStats,
  getBlockedPlayerIds,
  getOrCreatePlayerProfile,
  getPlayerStats,
  getSoundEnabled,
  getThemePreference,
  recordGameResult,
  savePlayerProfile,
  saveSoundEnabled,
  saveThemePreference,
  toggleBlockedPlayerId,
  type PlayerProfile,
  type PlayerStatsMap,
  type ThemePreference,
} from '@/lib/storage';
import type { GameId } from '@/lib/games/types';

interface AppContextValue {
  profile: PlayerProfile;
  updateProfile: (updates: Partial<Pick<PlayerProfile, 'displayName' | 'avatar'>>) => void;
  theme: ThemePreference;
  toggleTheme: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  stats: PlayerStatsMap;
  recordResult: (gameId: GameId, result: 'win' | 'loss' | 'draw') => void;
  resetStats: () => void;
  blockedIds: string[];
  toggleBlockPlayer: (playerId: string) => void;
  mounted: boolean;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [profile, setProfile] = useState<PlayerProfile>({
    playerId: 'loading',
    displayName: 'Player',
    avatar: '🦊',
  });
  const [theme, setTheme] = useState<ThemePreference>('dark');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [stats, setStats] = useState<PlayerStatsMap>({});
  const [blockedIds, setBlockedIds] = useState<string[]>([]);

  useEffect(() => {
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      setProfile(getOrCreatePlayerProfile());
      setTheme(getThemePreference());
      setSoundEnabled(getSoundEnabled());
      setStats(getPlayerStats());
      setBlockedIds(getBlockedPlayerIds());
      setMounted(true);
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, mounted]);

  const updateProfile = useCallback(
    (updates: Partial<Pick<PlayerProfile, 'displayName' | 'avatar'>>) => {
      const next = savePlayerProfile(updates);
      setProfile(next);
    },
    [],
  );

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: ThemePreference = prev === 'dark' ? 'light' : 'dark';
      saveThemePreference(next);
      return next;
    });
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      saveSoundEnabled(next);
      return next;
    });
  }, []);

  const recordResult = useCallback(
    (gameId: GameId, result: 'win' | 'loss' | 'draw') => {
      const next = recordGameResult(gameId, result);
      setStats(next);
    },
    [],
  );

  const resetStats = useCallback(() => {
    clearPlayerStats();
    setStats({});
  }, []);

  const toggleBlockPlayer = useCallback((playerId: string) => {
    const next = toggleBlockedPlayerId(playerId);
    setBlockedIds(next);
  }, []);

  return (
    <AppContext.Provider
      value={{
        profile,
        updateProfile,
        theme,
        toggleTheme,
        soundEnabled,
        toggleSound,
        stats,
        recordResult,
        resetStats,
        blockedIds,
        toggleBlockPlayer,
        mounted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used inside AppProvider');
  }
  return ctx;
}

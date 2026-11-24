import type { GameId } from './games/types';

export type ThemePreference = 'light' | 'dark';

export interface PlayerStatsEntry {
  wins: number;
  losses: number;
  draws: number;
}

export type PlayerStatsMap = Partial<Record<GameId, PlayerStatsEntry>>;

export interface PlayerProfile {
  playerId: string;
  displayName: string;
  avatar: string;
}

export const AVATAR_OPTIONS = [
  '🦊',
  '🐙',
  '🦉',
  '🐼',
  '🦁',
  '🐸',
  '🦋',
  '🐢',
  '🦄',
  '🐝',
  '🐧',
  '🐳',
];

const KEYS = {
  playerId: 'p2p_arcade_player_id',
  displayName: 'p2p_arcade_display_name',
  avatar: 'p2p_arcade_avatar',
  theme: 'p2p_arcade_theme',
  sound: 'p2p_arcade_sound',
  stats: 'p2p_arcade_stats',
  blocked: 'p2p_arcade_blocked',
} as const;

function randomId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `p-${Math.random().toString(36).slice(2, 12)}-${Date.now().toString(36)}`;
}

function isTabScopedTest(): boolean {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  return params.get('tabProfile') === '1' || params.has('tabId');
}

export function getOrCreatePlayerProfile(): PlayerProfile {
  if (typeof window === 'undefined') {
    return {
      playerId: 'ssr-placeholder',
      displayName: 'Player',
      avatar: AVATAR_OPTIONS[0] ?? '🦊',
    };
  }

  // In local two-tab testing, a second tab opened with ?tabId=tab2 gets a
  // separate sessionStorage identity so both tabs don't collide on the same ID.
  if (isTabScopedTest()) {
    const params = new URLSearchParams(window.location.search);
    const tabId = params.get('tabId') || 'tab2';
    const sessionIdKey = `${KEYS.playerId}:${tabId}`;
    const sessionNameKey = `${KEYS.displayName}:${tabId}`;
    const sessionAvatarKey = `${KEYS.avatar}:${tabId}`;

    let playerId = window.sessionStorage.getItem(sessionIdKey);
    if (!playerId) {
      playerId = randomId();
      window.sessionStorage.setItem(sessionIdKey, playerId);
    }
    let displayName = window.sessionStorage.getItem(sessionNameKey);
    if (!displayName) {
      displayName = `Guest (${tabId})`;
      window.sessionStorage.setItem(sessionNameKey, displayName);
    }
    let avatar = window.sessionStorage.getItem(sessionAvatarKey);
    if (!avatar) {
      avatar = AVATAR_OPTIONS[2] ?? '🦉';
      window.sessionStorage.setItem(sessionAvatarKey, avatar);
    }
    return { playerId, displayName, avatar };
  }

  let playerId = window.localStorage.getItem(KEYS.playerId);
  if (!playerId) {
    playerId = randomId();
    window.localStorage.setItem(KEYS.playerId, playerId);
  }

  let displayName = window.localStorage.getItem(KEYS.displayName);
  if (!displayName) {
    displayName = `Player ${playerId.slice(0, 4).toUpperCase()}`;
    window.localStorage.setItem(KEYS.displayName, displayName);
  }

  let avatar = window.localStorage.getItem(KEYS.avatar);
  if (!avatar) {
    avatar = AVATAR_OPTIONS[0] ?? '🦊';
    window.localStorage.setItem(KEYS.avatar, avatar);
  }

  return { playerId, displayName, avatar };
}

export function savePlayerProfile(updates: Partial<Pick<PlayerProfile, 'displayName' | 'avatar'>>): PlayerProfile {
  const current = getOrCreatePlayerProfile();
  const next: PlayerProfile = {
    playerId: current.playerId,
    displayName:
      updates.displayName !== undefined
        ? updates.displayName.trim().slice(0, 24) || current.displayName
        : current.displayName,
    avatar: updates.avatar ?? current.avatar,
  };

  if (typeof window !== 'undefined') {
    if (isTabScopedTest()) {
      const params = new URLSearchParams(window.location.search);
      const tabId = params.get('tabId') || 'tab2';
      window.sessionStorage.setItem(`${KEYS.displayName}:${tabId}`, next.displayName);
      window.sessionStorage.setItem(`${KEYS.avatar}:${tabId}`, next.avatar);
    } else {
      window.localStorage.setItem(KEYS.displayName, next.displayName);
      window.localStorage.setItem(KEYS.avatar, next.avatar);
    }
  }
  return next;
}

export function getThemePreference(): ThemePreference {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(KEYS.theme);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia?.('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

export function saveThemePreference(theme: ThemePreference): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(KEYS.theme, theme);
}

export function getSoundEnabled(): boolean {
  if (typeof window === 'undefined') return true;
  const stored = window.localStorage.getItem(KEYS.sound);
  return stored === null ? true : stored === 'true';
}

export function saveSoundEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(KEYS.sound, String(enabled));
}

export function getPlayerStats(): PlayerStatsMap {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(KEYS.stats);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null
      ? (parsed as PlayerStatsMap)
      : {};
  } catch {
    return {};
  }
}

export function recordGameResult(
  gameId: GameId,
  result: 'win' | 'loss' | 'draw',
): PlayerStatsMap {
  const stats = getPlayerStats();
  const prev = stats[gameId] ?? { wins: 0, losses: 0, draws: 0 };
  const updated: PlayerStatsMap = {
    ...stats,
    [gameId]: {
      wins: prev.wins + (result === 'win' ? 1 : 0),
      losses: prev.losses + (result === 'loss' ? 1 : 0),
      draws: prev.draws + (result === 'draw' ? 1 : 0),
    },
  };
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(KEYS.stats, JSON.stringify(updated));
  }
  return updated;
}

export function clearPlayerStats(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(KEYS.stats);
}

export function getBlockedPlayerIds(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(KEYS.blocked);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((x): x is string => typeof x === 'string')
      : [];
  } catch {
    return [];
  }
}

export function toggleBlockedPlayerId(playerId: string): string[] {
  const current = new Set(getBlockedPlayerIds());
  if (current.has(playerId)) {
    current.delete(playerId);
  } else {
    current.add(playerId);
  }
  const next = Array.from(current);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(KEYS.blocked, JSON.stringify(next));
  }
  return next;
}

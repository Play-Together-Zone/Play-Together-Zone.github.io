const rawBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').trim();

export function getBasePath(): string {
  if (!rawBasePath) return '';
  const withLeading = rawBasePath.startsWith('/') ? rawBasePath : `/${rawBasePath}`;
  return withLeading.replace(/\/+$/, '');
}

export function withBasePath(path: string): string {
  const base = getBasePath();
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function buildRoomShareUrl(params: {
  code: string;
  game?: string;
  strategy?: string;
  localTest?: boolean;
}): string {
  const search = new URLSearchParams();
  search.set('code', params.code.toUpperCase());
  if (params.game) search.set('game', params.game);
  if (params.strategy && params.strategy !== 'torrent') {
    search.set('strategy', params.strategy);
  }
  if (params.localTest) {
    search.set('local', '1');
  }

  const relative = withBasePath(`/room/?${search.toString()}`);
  if (typeof window !== 'undefined' && window.location?.origin) {
    return `${window.location.origin}${relative}`;
  }
  return relative;
}

const ROOM_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export function generateRoomCode(length = 5): string {
  const bytes = new Uint8Array(length);
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  let out = '';
  for (let i = 0; i < length; i++) {
    const b = bytes[i] ?? 0;
    out += ROOM_ALPHABET[b % ROOM_ALPHABET.length];
  }
  return out;
}

export function normalizeRoomCode(raw: string): string {
  return raw
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 6);
}

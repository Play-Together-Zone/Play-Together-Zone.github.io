export const DEFAULT_ICE_SERVERS: RTCIceServer[] = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
  { urls: 'stun:stun.cloudflare.com:3478' },
];

/**
 * Parses ICE servers from NEXT_PUBLIC_ICE_SERVERS JSON env var,
 * falling back to public STUN servers when unset or malformed.
 */
export function getIceServers(): RTCIceServer[] {
  const raw = process.env.NEXT_PUBLIC_ICE_SERVERS;
  if (!raw || !raw.trim()) {
    return DEFAULT_ICE_SERVERS;
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return DEFAULT_ICE_SERVERS;
    }
    const valid = parsed.filter(
      (item): item is RTCIceServer =>
        typeof item === 'object' &&
        item !== null &&
        'urls' in item &&
        (typeof (item as { urls: unknown }).urls === 'string' ||
          Array.isArray((item as { urls: unknown }).urls)),
    );
    return valid.length > 0 ? valid : DEFAULT_ICE_SERVERS;
  } catch {
    return DEFAULT_ICE_SERVERS;
  }
}

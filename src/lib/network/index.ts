import { BroadcastChannelAdapter } from './broadcastAdapter';
import { TrysteroAdapter, type TrysteroStrategy } from './trysteroAdapter';
import type { ConnectOptions, NetworkAdapter, SignalingStrategy } from './types';

export * from './types';
export { getIceServers, DEFAULT_ICE_SERVERS } from './ice';
export { BroadcastChannelAdapter } from './broadcastAdapter';
export { TrysteroAdapter, type TrysteroStrategy } from './trysteroAdapter';
export { MockNetworkAdapter, MockNetworkBus } from './mockAdapter';

export const FALLBACK_STRATEGY_ORDER: TrysteroStrategy[] = [
  'torrent',
  'nostr',
  'mqtt',
];

export function createNetworkAdapter(
  strategy: SignalingStrategy = 'torrent',
): NetworkAdapter {
  if (strategy === 'local') {
    return new BroadcastChannelAdapter();
  }
  if (strategy === 'mock') {
    throw new Error('Use new MockNetworkAdapter(bus) directly in tests.');
  }
  return new TrysteroAdapter(strategy);
}

/**
 * Connects using the requested strategy; if Torrent fails on relay startup
 * and autoFallback is enabled, automatically falls back through Nostr -> MQTT.
 */
export async function connectWithFallback(
  roomCode: string,
  options: ConnectOptions & {
    autoFallback?: boolean;
    onAttempt?: (strategy: SignalingStrategy) => void;
  } = {},
): Promise<{ adapter: NetworkAdapter; strategy: SignalingStrategy }> {
  const requested = options.strategy ?? 'torrent';

  if (requested === 'local') {
    const adapter = new BroadcastChannelAdapter();
    options.onAttempt?.('local');
    await adapter.connect(roomCode, options);
    return { adapter, strategy: 'local' };
  }

  const candidates: TrysteroStrategy[] = options.autoFallback
    ? [
        requested === 'torrent' || requested === 'nostr' || requested === 'mqtt'
          ? requested
          : 'torrent',
        ...FALLBACK_STRATEGY_ORDER.filter((s) => s !== requested),
      ]
    : [
        requested === 'torrent' || requested === 'nostr' || requested === 'mqtt'
          ? requested
          : 'torrent',
      ];

  let lastError: unknown;
  for (const strategy of candidates) {
    const adapter = new TrysteroAdapter(strategy);
    options.onAttempt?.(strategy);
    try {
      await adapter.connect(roomCode, { ...options, strategy });
      return { adapter, strategy };
    } catch (err) {
      lastError = err;
      await adapter.disconnect().catch(() => {});
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error('Unable to connect with any WebRTC signaling strategy.');
}

import { describe, expect, it } from 'vitest';
import {
  isStreamHasLiveAudio,
  isStreamHasLiveVideo,
  parseMediaStatePayload,
  resolveParticipantForPeer,
} from './roomMedia';
import type { RoomSnapshot } from '@/lib/sync/types';

const sampleSnapshot: RoomSnapshot = {
  roomCode: 'ABC12',
  gameId: 'tic-tac-toe',
  phase: 'playing',
  version: 3,
  hostPlayerId: 'p1',
  settings: {
    maxPlayers: 2,
    chatEnabled: true,
    allowSpectators: true,
    turnTimerSec: 0,
    gameOptions: {},
  },
  seats: [
    {
      playerId: 'p1',
      peerId: 'rtc-host',
      displayName: 'Alice',
      avatar: '🦊',
      seatIndex: 0,
      ready: true,
      connected: true,
      isBot: false,
    },
  ],
  spectators: [
    {
      playerId: 'p2',
      peerId: 'rtc-spec',
      displayName: 'Bob',
      avatar: '🦉',
    },
  ],
  gameView: null,
  outcome: null,
  disconnectVotes: {},
  mutedPlayerIds: [],
};

describe('roomMedia helpers', () => {
  it('parses valid media_state payloads and rejects malformed ones', () => {
    expect(
      parseMediaStatePayload({
        playerId: 'p1',
        audioEnabled: true,
        videoEnabled: false,
      }),
    ).toEqual({
      playerId: 'p1',
      audioEnabled: true,
      videoEnabled: false,
    });

    expect(parseMediaStatePayload(null)).toBeNull();
    expect(parseMediaStatePayload({ audioEnabled: 'yes', videoEnabled: false })).toBeNull();
    expect(parseMediaStatePayload([])).toBeNull();
  });

  it('resolves seated players, spectators, and unknown peers', () => {
    expect(resolveParticipantForPeer(sampleSnapshot, 'rtc-host')).toEqual({
      playerId: 'p1',
      displayName: 'Alice',
      avatar: '🦊',
      role: 'player',
    });

    expect(resolveParticipantForPeer(sampleSnapshot, 'rtc-spec')).toEqual({
      playerId: 'p2',
      displayName: 'Bob',
      avatar: '🦉',
      role: 'spectator',
    });

    expect(resolveParticipantForPeer(sampleSnapshot, 'rtc-999999')).toEqual({
      playerId: undefined,
      displayName: 'Peer rtc-99',
      avatar: '🎧',
      role: 'peer',
    });
  });

  it('detects live audio and video tracks while respecting reported state', () => {
    const fakeStream = {
      getVideoTracks: () => [{ readyState: 'live', enabled: true }],
      getAudioTracks: () => [{ readyState: 'live', enabled: true }],
    } as unknown as MediaStream;

    expect(isStreamHasLiveVideo(fakeStream)).toBe(true);
    expect(isStreamHasLiveVideo(fakeStream, false)).toBe(false);
    expect(isStreamHasLiveAudio(fakeStream)).toBe(true);
    expect(isStreamHasLiveAudio(fakeStream, false)).toBe(false);
    expect(isStreamHasLiveVideo(null)).toBe(false);
  });
});

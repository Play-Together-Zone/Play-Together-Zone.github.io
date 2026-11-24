import type { RoomSnapshot } from '@/lib/sync/types';

export interface PeerMediaState {
  playerId?: string;
  audioEnabled: boolean;
  videoEnabled: boolean;
}

export interface ResolvedParticipant {
  playerId?: string;
  displayName: string;
  avatar: string;
  role: 'player' | 'spectator' | 'peer';
}

export function parseMediaStatePayload(payload: unknown): PeerMediaState | null {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return null;
  }
  const obj = payload as Record<string, unknown>;
  if (
    typeof obj.audioEnabled !== 'boolean' ||
    typeof obj.videoEnabled !== 'boolean'
  ) {
    return null;
  }
  return {
    playerId: typeof obj.playerId === 'string' ? obj.playerId : undefined,
    audioEnabled: obj.audioEnabled,
    videoEnabled: obj.videoEnabled,
  };
}

export function resolveParticipantForPeer(
  snapshot: RoomSnapshot | null,
  peerId: string,
  fallbackPlayerId?: string,
): ResolvedParticipant {
  if (snapshot) {
    const seat = snapshot.seats.find(
      (s) =>
        s.peerId === peerId ||
        (fallbackPlayerId !== undefined && s.playerId === fallbackPlayerId),
    );
    if (seat) {
      return {
        playerId: seat.playerId,
        displayName: seat.displayName,
        avatar: seat.avatar,
        role: 'player',
      };
    }

    const spectator = snapshot.spectators.find(
      (sp) =>
        sp.peerId === peerId ||
        (fallbackPlayerId !== undefined && sp.playerId === fallbackPlayerId),
    );
    if (spectator) {
      return {
        playerId: spectator.playerId,
        displayName: spectator.displayName,
        avatar: spectator.avatar,
        role: 'spectator',
      };
    }
  }

  return {
    playerId: fallbackPlayerId,
    displayName: `Peer ${peerId.slice(0, 6)}`,
    avatar: '🎧',
    role: 'peer',
  };
}

export function isStreamHasLiveVideo(
  stream: MediaStream | null | undefined,
  reportedVideoEnabled?: boolean,
): boolean {
  if (!stream) return false;
  if (reportedVideoEnabled === false) return false;
  const videoTracks = stream.getVideoTracks?.() ?? [];
  return videoTracks.some((t) => t.readyState === 'live' && t.enabled);
}

export function isStreamHasLiveAudio(
  stream: MediaStream | null | undefined,
  reportedAudioEnabled?: boolean,
): boolean {
  if (!stream) return false;
  if (reportedAudioEnabled === false) return false;
  const audioTracks = stream.getAudioTracks?.() ?? [];
  return audioTracks.some((t) => t.readyState === 'live' && t.enabled);
}

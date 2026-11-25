'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  GripHorizontal,
  Headphones,
  Maximize2,
  Mic,
  MicOff,
  Minimize2,
  PhoneOff,
  Video,
  VideoOff,
  Volume2,
  VolumeX,
} from 'lucide-react';
import type { NetworkAdapter } from '@/lib/network/types';
import type { RoomSnapshot } from '@/lib/sync/types';
import {
  isStreamHasLiveAudio,
  isStreamHasLiveVideo,
  parseMediaStatePayload,
  resolveParticipantForPeer,
  type PeerMediaState,
} from '@/lib/media/roomMedia';

interface VoiceVideoPanelProps {
  adapter: NetworkAdapter | null;
  connected: boolean;
  snapshot: RoomSnapshot | null;
  selfPlayerId: string;
  selfDisplayName: string;
  selfAvatar: string;
  blockedPlayerIds: string[];
}

interface RemotePeerMedia {
  peerId: string;
  stream: MediaStream;
  playerId?: string;
}

function MediaStreamView({
  stream,
  hasVideo,
  muted,
  mirrored = false,
  className = '',
}: {
  stream: MediaStream;
  hasVideo: boolean;
  muted: boolean;
  mirrored?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const el = hasVideo ? videoRef.current : audioRef.current;
    if (!el) return;
    if (el.srcObject !== stream) {
      el.srcObject = stream;
    }
    el.muted = muted;
    void el.play().catch(() => {
      // Autoplay may wait for user interaction on strict browsers
    });
  }, [stream, hasVideo, muted]);

  if (hasVideo) {
    return (
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={muted}
        className={`h-full w-full object-cover ${mirrored ? '-scale-x-100' : ''} ${className}`}
      />
    );
  }

  return <audio ref={audioRef} autoPlay playsInline muted={muted} />;
}

function clampPositionToViewport(
  x: number,
  y: number,
  width: number,
  height: number,
): { x: number; y: number } {
  const margin = 8;
  const maxX = Math.max(margin, window.innerWidth - width - margin);
  const maxY = Math.max(margin, window.innerHeight - height - margin);
  return {
    x: Math.round(Math.min(Math.max(margin, x), maxX)),
    y: Math.round(Math.min(Math.max(margin, y), maxY)),
  };
}

type ResizeEdge = 'n' | 's' | 'e' | 'w' | 'nw' | 'ne' | 'sw' | 'se';

const MIN_PANEL_WIDTH = 180;
const MIN_PANEL_HEIGHT = 120;

function clampPanelSize(
  width: number,
  height: number,
): { width: number; height: number } {
  const maxW =
    typeof window !== 'undefined' ? Math.max(MIN_PANEL_WIDTH, window.innerWidth - 16) : 960;
  const maxH =
    typeof window !== 'undefined'
      ? Math.max(MIN_PANEL_HEIGHT, window.innerHeight - 16)
      : 720;
  return {
    width: Math.round(Math.min(Math.max(MIN_PANEL_WIDTH, width), maxW)),
    height: Math.round(Math.min(Math.max(MIN_PANEL_HEIGHT, height), maxH)),
  };
}

export function VoiceVideoPanel({
  adapter,
  connected,
  snapshot,
  selfPlayerId,
  selfDisplayName,
  selfAvatar,
  blockedPlayerIds,
}: VoiceVideoPanelProps) {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [deafened, setDeafened] = useState(false);
  const [mutedPeers, setMutedPeers] = useState<Record<string, boolean>>({});
  const [remoteStreams, setRemoteStreams] = useState<Record<string, RemotePeerMedia>>({});
  const [remoteMediaStates, setRemoteMediaStates] = useState<Record<string, PeerMediaState>>({});
  const [mediaError, setMediaError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [dragPos, setDragPos] = useState<{ x: number; y: number } | null>(null);
  const [panelSize, setPanelSize] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [, setTrackTick] = useState(0);

  const localStreamRef = useRef<MediaStream | null>(null);
  const audioEnabledRef = useRef(false);
  const videoEnabledRef = useRef(false);
  const panelRef = useRef<HTMLElement | null>(null);
  const dragStateRef = useRef<{
    pointerId: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);
  const resizeStateRef = useRef<{
    pointerId: number;
    edge: ResizeEdge;
    startX: number;
    startY: number;
    startRect: DOMRect;
  } | null>(null);

  useEffect(() => {
    audioEnabledRef.current = audioEnabled;
  }, [audioEnabled]);

  useEffect(() => {
    videoEnabledRef.current = videoEnabled;
  }, [videoEnabled]);

  // Keep dragged floating position and resized bounds strictly inside viewport
  useEffect(() => {
    const el = panelRef.current;
    if (!el || typeof window === 'undefined') return;

    const reclamp = () => {
      const mobile = window.innerWidth < 640;
      setIsMobileViewport(mobile);
      setPanelSize((prev) => {
        if (!prev) return prev;
        const clamped = clampPanelSize(prev.width, prev.height);
        return clamped.width === prev.width && clamped.height === prev.height
          ? prev
          : clamped;
      });
      const rect = el.getBoundingClientRect();
      setDragPos((prev) => {
        if (!prev) return prev;
        const clamped = clampPositionToViewport(
          prev.x,
          prev.y,
          rect.width,
          rect.height,
        );
        return clamped.x === prev.x && clamped.y === prev.y ? prev : clamped;
      });
    };

    const rafId = requestAnimationFrame(reclamp);
    window.addEventListener('resize', reclamp);
    const ro =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(reclamp) : null;
    ro?.observe(el);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', reclamp);
      ro?.disconnect();
    };
  }, []);

  const supportsWebRtcMedia = Boolean(adapter?.supportsMedia);

  const broadcastMediaState = useCallback(
    async (nextAudio: boolean, nextVideo: boolean, targetPeerId?: string) => {
      if (!adapter || adapter.status !== 'connected') return;
      try {
        await adapter.send(
          'media_state',
          {
            playerId: selfPlayerId,
            audioEnabled: nextAudio,
            videoEnabled: nextVideo,
          },
          targetPeerId,
        );
      } catch {
        // Ignore transient send errors when peers disconnect
      }
    },
    [adapter, selfPlayerId],
  );

  const stopTracks = (tracks: MediaStreamTrack[]) => {
    for (const track of tracks) {
      try {
        track.stop();
      } catch {
        // Ignore already-stopped tracks
      }
    }
  };

  const publishStream = useCallback(
    async (nextTracks: MediaStreamTrack[], nextAudio: boolean, nextVideo: boolean) => {
      const prevStream = localStreamRef.current;
      if (prevStream) {
        adapter?.removeMediaStream?.(prevStream);
      }

      if (nextTracks.length === 0) {
        localStreamRef.current = null;
        setLocalStream(null);
        setAudioEnabled(false);
        setVideoEnabled(false);
        await broadcastMediaState(false, false);
        return;
      }

      const nextStream = new MediaStream(nextTracks);
      localStreamRef.current = nextStream;
      setLocalStream(nextStream);
      setAudioEnabled(nextAudio);
      setVideoEnabled(nextVideo);

      if (adapter?.supportsMedia && adapter.addMediaStream && adapter.status === 'connected') {
        await adapter.addMediaStream(nextStream, {
          metadata: {
            playerId: selfPlayerId,
            audio: nextAudio,
            video: nextVideo,
          },
        });
      }
      await broadcastMediaState(nextAudio, nextVideo);
    },
    [adapter, broadcastMediaState, selfPlayerId],
  );

  const stopAllLocalMedia = useCallback(() => {
    const cur = localStreamRef.current;
    if (cur) {
      adapter?.removeMediaStream?.(cur);
      stopTracks(cur.getTracks());
      localStreamRef.current = null;
    }
    setLocalStream(null);
    setAudioEnabled(false);
    setVideoEnabled(false);
    void broadcastMediaState(false, false);
  }, [adapter, broadcastMediaState]);

  // Subscribe to incoming streams and media_state messages without touching game sync
  useEffect(() => {
    if (!adapter) return;

    const streamCleanups = new Map<string, () => void>();
    const bump = () => setTrackTick((t) => t + 1);

    const attachRemoteStream = (
      peerId: string,
      stream: MediaStream,
      playerId?: string,
    ) => {
      streamCleanups.get(peerId)?.();

      const onUpdate = () => {
        const liveTracks = stream.getTracks().filter((t) => t.readyState === 'live');
        if (liveTracks.length === 0) {
          setRemoteStreams((prev) => {
            if (!prev[peerId]) return prev;
            const next = { ...prev };
            delete next[peerId];
            return next;
          });
          return;
        }
        bump();
      };

      const onInactive = () => {
        setRemoteStreams((prev) => {
          if (!prev[peerId]) return prev;
          const next = { ...prev };
          delete next[peerId];
          return next;
        });
      };

      stream.addEventListener('addtrack', onUpdate);
      stream.addEventListener('removetrack', onUpdate);
      stream.addEventListener('inactive', onInactive);
      for (const track of stream.getTracks()) {
        track.addEventListener('ended', onUpdate);
        track.addEventListener('mute', bump);
        track.addEventListener('unmute', bump);
      }

      streamCleanups.set(peerId, () => {
        stream.removeEventListener('addtrack', onUpdate);
        stream.removeEventListener('removetrack', onUpdate);
        stream.removeEventListener('inactive', onInactive);
        for (const track of stream.getTracks()) {
          track.removeEventListener('ended', onUpdate);
          track.removeEventListener('mute', bump);
          track.removeEventListener('unmute', bump);
        }
      });

      setRemoteStreams((prev) => ({
        ...prev,
        [peerId]: { peerId, stream, playerId },
      }));
    };

    const unsubs: Array<() => void> = [];

    if (adapter.onPeerStream) {
      unsubs.push(
        adapter.onPeerStream(({ stream, peerId, metadata }) => {
          attachRemoteStream(peerId, stream, metadata?.playerId);
        }),
      );
    }

    unsubs.push(
      adapter.onMessage((msg, fromPeerId) => {
        if (msg.type !== 'media_state') return;
        const parsed = parseMediaStatePayload(msg.payload);
        if (!parsed) return;
        setRemoteMediaStates((prev) => ({
          ...prev,
          [fromPeerId]: parsed,
        }));
      }),
      adapter.onPeerJoin((peerId) => {
        if (audioEnabledRef.current || videoEnabledRef.current) {
          void broadcastMediaState(
            audioEnabledRef.current,
            videoEnabledRef.current,
            peerId,
          );
        }
      }),
      adapter.onPeerLeave((peerId) => {
        streamCleanups.get(peerId)?.();
        streamCleanups.delete(peerId);
        setRemoteStreams((prev) => {
          if (!prev[peerId]) return prev;
          const next = { ...prev };
          delete next[peerId];
          return next;
        });
        setRemoteMediaStates((prev) => {
          if (!prev[peerId]) return prev;
          const next = { ...prev };
          delete next[peerId];
          return next;
        });
      }),
    );

    return () => {
      for (const unsub of unsubs) unsub();
      for (const cleanup of streamCleanups.values()) cleanup();
      streamCleanups.clear();
      const cur = localStreamRef.current;
      if (cur) {
        adapter.removeMediaStream?.(cur);
        stopTracks(cur.getTracks());
        localStreamRef.current = null;
      }
    };
  }, [adapter, broadcastMediaState]);

  const handleToggleMic = async () => {
    if (busy || !supportsWebRtcMedia || !connected) return;
    setMediaError(null);

    const curStream = localStreamRef.current;
    const existingAudio = curStream?.getAudioTracks() ?? [];

    if (existingAudio.length > 0) {
      const nextAudio = !audioEnabled;
      for (const track of existingAudio) {
        track.enabled = nextAudio;
      }
      setAudioEnabled(nextAudio);
      await broadcastMediaState(nextAudio, videoEnabled);
      return;
    }

    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      setMediaError('Microphone access is unavailable in this browser or context (requires HTTPS).');
      return;
    }

    setBusy(true);
    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      const newAudioTracks = audioStream.getAudioTracks();
      const existingVideo = curStream?.getVideoTracks().filter((t) => t.readyState === 'live') ?? [];
      setMinimized(false);
      await publishStream([...newAudioTracks, ...existingVideo], true, existingVideo.length > 0 && videoEnabled);
    } catch (err) {
      setMediaError(
        err instanceof Error ? err.message : 'Could not access microphone.',
      );
    } finally {
      setBusy(false);
    }
  };

  const handleToggleVideo = async () => {
    if (busy || !supportsWebRtcMedia || !connected) return;
    setMediaError(null);

    const curStream = localStreamRef.current;
    const existingVideo = curStream?.getVideoTracks() ?? [];

    if (videoEnabled && existingVideo.length > 0) {
      stopTracks(existingVideo);
      const remainingAudio = curStream?.getAudioTracks().filter((t) => t.readyState === 'live') ?? [];
      await publishStream(remainingAudio, remainingAudio.length > 0 && audioEnabled, false);
      return;
    }

    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      setMediaError('Camera access is unavailable in this browser or context (requires HTTPS).');
      return;
    }

    setBusy(true);
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 480 },
          height: { ideal: 360 },
          frameRate: { ideal: 24, max: 24 },
        },
      });
      const newVideoTracks = videoStream.getVideoTracks();
      const existingAudio = curStream?.getAudioTracks().filter((t) => t.readyState === 'live') ?? [];
      setMinimized(false);
      await publishStream([...existingAudio, ...newVideoTracks], existingAudio.length > 0 && audioEnabled, true);
    } catch (err) {
      setMediaError(
        err instanceof Error ? err.message : 'Could not access camera.',
      );
    } finally {
      setBusy(false);
    }
  };

  const handleDragPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (typeof window === 'undefined') return;
    if ((e.target as HTMLElement).closest('button')) return;

    const el = panelRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    dragStateRef.current = {
      pointerId: e.pointerId,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleDragPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragStateRef.current;
    const el = panelRef.current;
    if (!drag || drag.pointerId !== e.pointerId || !el) return;

    const rect = el.getBoundingClientRect();
    const clamped = clampPositionToViewport(
      e.clientX - drag.offsetX,
      e.clientY - drag.offsetY,
      rect.width,
      rect.height,
    );
    setDragPos(clamped);
  };

  const handleDragPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStateRef.current?.pointerId === e.pointerId) {
      dragStateRef.current = null;
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    }
  };

  const handleResizePointerDown = (
    e: React.PointerEvent<HTMLDivElement>,
    edge: ResizeEdge,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const el = panelRef.current;
    if (!el) return;
    resizeStateRef.current = {
      pointerId: e.pointerId,
      edge,
      startX: e.clientX,
      startY: e.clientY,
      startRect: el.getBoundingClientRect(),
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleResizePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rs = resizeStateRef.current;
    if (!rs || rs.pointerId !== e.pointerId || typeof window === 'undefined') {
      return;
    }

    const dx = e.clientX - rs.startX;
    const dy = e.clientY - rs.startY;
    const { startRect, edge } = rs;
    const margin = 8;

    const maxWidthAllowed = Math.max(MIN_PANEL_WIDTH, window.innerWidth - margin * 2);
    const maxHeightAllowed = Math.max(MIN_PANEL_HEIGHT, window.innerHeight - margin * 2);

    let left = startRect.left;
    let right = startRect.right;
    let top = startRect.top;
    let bottom = startRect.bottom;

    if (edge.includes('w')) {
      left = Math.min(
        Math.max(margin, startRect.left + dx),
        startRect.right - MIN_PANEL_WIDTH,
      );
      if (right - left > maxWidthAllowed) {
        left = right - maxWidthAllowed;
      }
    }
    if (edge.includes('e')) {
      right = Math.max(
        Math.min(window.innerWidth - margin, startRect.right + dx),
        left + MIN_PANEL_WIDTH,
      );
      if (right - left > maxWidthAllowed) {
        right = left + maxWidthAllowed;
      }
    }
    if (edge.includes('n')) {
      top = Math.min(
        Math.max(margin, startRect.top + dy),
        startRect.bottom - MIN_PANEL_HEIGHT,
      );
      if (bottom - top > maxHeightAllowed) {
        top = bottom - maxHeightAllowed;
      }
    }
    if (edge.includes('s')) {
      bottom = Math.max(
        Math.min(window.innerHeight - margin, startRect.bottom + dy),
        top + MIN_PANEL_HEIGHT,
      );
      if (bottom - top > maxHeightAllowed) {
        bottom = top + maxHeightAllowed;
      }
    }

    const width = Math.round(right - left);
    const height = Math.round(bottom - top);
    setPanelSize({ width, height });
    setDragPos({ x: Math.round(left), y: Math.round(top) });
  };

  const handleResizePointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (resizeStateRef.current?.pointerId === e.pointerId) {
      resizeStateRef.current = null;
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    }
  };

  const handleToggleSizePreset = () => {
    if (typeof window === 'undefined') return;
    if (panelSize) {
      setPanelSize(null);
      return;
    }
    const mobile = window.innerWidth < 640;
    const expanded = clampPanelSize(
      mobile ? window.innerWidth - 16 : Math.min(540, window.innerWidth - 32),
      mobile
        ? Math.floor(window.innerHeight * 0.52)
        : Math.floor(window.innerHeight * 0.56),
    );
    setPanelSize(expanded);
  };

  const visibleRemotePeers = useMemo(() => {
    return Object.values(remoteStreams)
      .map((entry) => {
        const mediaState = remoteMediaStates[entry.peerId];
        const participant = resolveParticipantForPeer(
          snapshot,
          entry.peerId,
          entry.playerId ?? mediaState?.playerId,
        );
        const hasVideo = isStreamHasLiveVideo(
          entry.stream,
          mediaState?.videoEnabled,
        );
        const hasAudio = isStreamHasLiveAudio(
          entry.stream,
          mediaState?.audioEnabled,
        );
        return {
          ...entry,
          participant,
          mediaState,
          hasVideo,
          hasAudio,
        };
      })
      .filter(
        (item) =>
          (!item.participant.playerId ||
            !blockedPlayerIds.includes(item.participant.playerId)) &&
          (item.hasVideo ||
            item.hasAudio ||
            item.stream.getTracks().some((t) => t.readyState === 'live')),
      );
  }, [remoteStreams, remoteMediaStates, snapshot, blockedPlayerIds]);

  const callActive = audioEnabled || videoEnabled || localStream !== null;
  const hasStreams = Boolean(localStream) || visibleRemotePeers.length > 0;
  const totalTileCount = (localStream ? 1 : 0) + visibleRemotePeers.length;
  const activeExpanded = !minimized && hasStreams;
  const defaultWidth = isMobileViewport ? (totalTileCount <= 1 ? 212 : 248) : 348;
  const currentWidth = panelSize?.width ?? defaultWidth;
  const isCompactWidth = activeExpanded && currentWidth < 305;
  const gridCols =
    totalTileCount <= 1
      ? 1
      : currentWidth >= 480 && totalTileCount >= 3
        ? Math.min(3, totalTileCount)
        : 2;
  const gridRows = Math.max(1, Math.ceil(totalTileCount / gridCols));

  const panelStyle: React.CSSProperties = {
    ...(dragPos
      ? {
          left: `${dragPos.x}px`,
          top: `${dragPos.y}px`,
          right: 'auto',
          bottom: 'auto',
        }
      : undefined),
    ...(activeExpanded && panelSize
      ? {
          width: `${panelSize.width}px`,
          height: `${panelSize.height}px`,
          maxHeight: 'calc(100dvh - 1rem)',
        }
      : undefined),
  };

  return (
    <section
      ref={panelRef}
      aria-label="Floating voice and video chat"
      style={panelStyle}
      className={`fixed right-2 bottom-2 z-40 flex max-h-[56dvh] max-w-[calc(100vw-1rem)] flex-col rounded-2xl border border-slate-200/90 bg-white/95 shadow-2xl backdrop-blur-md transition-shadow sm:right-4 sm:bottom-4 sm:max-h-[calc(100dvh-2rem)] dark:border-slate-700/90 dark:bg-slate-900/95 ${
        activeExpanded
          ? panelSize
            ? ''
            : totalTileCount <= 1
              ? 'w-[212px] sm:w-[348px]'
              : 'w-[248px] sm:w-[348px]'
          : 'w-auto'
      }`}
    >
      {/* 8-Way Edge & Corner Resize Handles (Mobile + Desktop) */}
      {activeExpanded && (
        <>
          {/* Edges */}
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 'n')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerEnd}
            onPointerCancel={handleResizePointerEnd}
            onDoubleClick={() => setPanelSize(null)}
            title="Drag top edge to resize"
            className="absolute top-0 right-4 left-4 z-20 h-2.5 cursor-ns-resize touch-none"
          />
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 's')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerEnd}
            onPointerCancel={handleResizePointerEnd}
            onDoubleClick={() => setPanelSize(null)}
            title="Drag bottom edge to resize"
            className="absolute right-4 bottom-0 left-4 z-20 h-2.5 cursor-ns-resize touch-none"
          />
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 'w')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerEnd}
            onPointerCancel={handleResizePointerEnd}
            onDoubleClick={() => setPanelSize(null)}
            title="Drag left edge to resize"
            className="absolute top-4 bottom-4 left-0 z-20 w-2.5 cursor-ew-resize touch-none"
          />
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 'e')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerEnd}
            onPointerCancel={handleResizePointerEnd}
            onDoubleClick={() => setPanelSize(null)}
            title="Drag right edge to resize"
            className="absolute top-4 right-0 bottom-4 z-20 w-2.5 cursor-ew-resize touch-none"
          />

          {/* Corners */}
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 'nw')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerEnd}
            onPointerCancel={handleResizePointerEnd}
            onDoubleClick={() => setPanelSize(null)}
            title="Drag top-left corner to resize · Double-click to reset"
            aria-label="Drag top-left corner to resize"
            className="absolute top-0 left-0 z-30 flex h-5 w-5 cursor-nwse-resize touch-none items-start justify-start rounded-tl-2xl p-1"
          >
            <span className="h-2 w-2 rounded-tl-xs border-t-2 border-l-2 border-slate-400/80 dark:border-slate-500/90" />
          </div>
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 'ne')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerEnd}
            onPointerCancel={handleResizePointerEnd}
            onDoubleClick={() => setPanelSize(null)}
            title="Drag top-right corner to resize"
            aria-label="Drag top-right corner to resize"
            className="absolute top-0 right-0 z-30 h-5 w-5 cursor-nesw-resize touch-none rounded-tr-2xl"
          />
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 'sw')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerEnd}
            onPointerCancel={handleResizePointerEnd}
            onDoubleClick={() => setPanelSize(null)}
            title="Drag bottom-left corner to resize"
            aria-label="Drag bottom-left corner to resize"
            className="absolute bottom-0 left-0 z-30 h-5 w-5 cursor-nesw-resize touch-none rounded-bl-2xl"
          />
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 'se')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerEnd}
            onPointerCancel={handleResizePointerEnd}
            onDoubleClick={() => setPanelSize(null)}
            title="Drag bottom-right corner to resize"
            aria-label="Drag bottom-right corner to resize"
            className="absolute right-0 bottom-0 z-30 flex h-5 w-5 cursor-nwse-resize touch-none items-end justify-end rounded-br-2xl p-1"
          >
            <span className="h-2 w-2 rounded-br-xs border-r-2 border-b-2 border-slate-400/80 dark:border-slate-500/90" />
          </div>
        </>
      )}
      {/* Keep remote audio playing seamlessly even when minimized */}
      {minimized && visibleRemotePeers.length > 0 && (
        <div className="sr-only" aria-hidden="true">
          {visibleRemotePeers.map(({ peerId, stream }) => (
            <MediaStreamView
              key={`bg-audio-${peerId}`}
              stream={stream}
              hasVideo={false}
              muted={deafened || Boolean(mutedPeers[peerId])}
            />
          ))}
        </div>
      )}

      {/* Floating Header / Control Bar (Draggable on Mobile + Desktop) */}
      <div
        onPointerDown={handleDragPointerDown}
        onPointerMove={handleDragPointerMove}
        onPointerUp={handleDragPointerEnd}
        onPointerCancel={handleDragPointerEnd}
        onDoubleClick={() => setDragPos(null)}
        className="flex cursor-grab touch-none flex-wrap items-center justify-between gap-1 px-2.5 py-2 active:cursor-grabbing sm:gap-1.5"
        title={dragPos ? 'Drag to move · Double-click to reset dock' : 'Drag to move'}
      >
        <div className="flex min-w-0 items-center gap-1">
          <GripHorizontal className="h-3.5 w-3.5 shrink-0 text-slate-400" />
          <Headphones className="hidden h-3.5 w-3.5 shrink-0 text-indigo-500 sm:inline" />
          {!isCompactWidth && (
            <h2 className="hidden truncate text-[11px] font-bold tracking-wide text-slate-700 uppercase sm:inline dark:text-slate-200">
              Voice &amp; Video
            </h2>
          )}
          {visibleRemotePeers.length > 0 && (
            <span className="shrink-0 rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
              {visibleRemotePeers.length} live
            </span>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            disabled={!supportsWebRtcMedia || !connected || busy}
            onClick={() => void handleToggleMic()}
            className={`inline-flex items-center gap-1 rounded-lg px-1.5 py-1 text-[11px] font-semibold transition disabled:cursor-not-allowed disabled:opacity-45 sm:px-2 ${
              audioEnabled
                ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                : 'border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
            }`}
            title={audioEnabled ? 'Mute microphone' : 'Turn on microphone'}
            aria-label={audioEnabled ? 'Mute microphone' : 'Turn on microphone'}
          >
            {audioEnabled ? <Mic className="h-3.5 w-3.5" /> : <MicOff className="h-3.5 w-3.5" />}
            {!isCompactWidth && (
              <span className="hidden sm:inline">{audioEnabled ? 'On' : 'Mic'}</span>
            )}
          </button>

          <button
            type="button"
            disabled={!supportsWebRtcMedia || !connected || busy}
            onClick={() => void handleToggleVideo()}
            className={`inline-flex items-center gap-1 rounded-lg px-1.5 py-1 text-[11px] font-semibold transition disabled:cursor-not-allowed disabled:opacity-45 sm:px-2 ${
              videoEnabled
                ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                : 'border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
            }`}
            title={videoEnabled ? 'Turn off camera' : 'Turn on camera'}
            aria-label={videoEnabled ? 'Turn off camera' : 'Turn on camera'}
          >
            {videoEnabled ? <Video className="h-3.5 w-3.5" /> : <VideoOff className="h-3.5 w-3.5" />}
            {!isCompactWidth && (
              <span className="hidden sm:inline">{videoEnabled ? 'On' : 'Cam'}</span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setDeafened((d) => !d)}
            className={`rounded-lg p-1.5 transition ${
              deafened
                ? 'bg-amber-500/20 text-amber-600 dark:text-amber-300'
                : 'border border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'
            }`}
            title={deafened ? 'Unmute incoming audio' : 'Mute all incoming audio'}
            aria-label={deafened ? 'Unmute incoming audio' : 'Mute all incoming audio'}
          >
            {deafened ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          </button>

          {callActive && (
            <button
              type="button"
              onClick={stopAllLocalMedia}
              className="rounded-lg bg-rose-600 p-1.5 text-white transition hover:bg-rose-500"
              title="Turn off mic & camera"
              aria-label="Leave voice and video call"
            >
              <PhoneOff className="h-3.5 w-3.5" />
            </button>
          )}

          {hasStreams && !minimized && (
            <button
              type="button"
              onClick={handleToggleSizePreset}
              className="rounded-lg border border-slate-300 p-1.5 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              title={panelSize ? 'Reset dock size' : 'Expand dock size'}
              aria-label={panelSize ? 'Reset voice and video dock size' : 'Expand voice and video dock size'}
            >
              {panelSize ? (
                <Minimize2 className="h-3.5 w-3.5" />
              ) : (
                <Maximize2 className="h-3.5 w-3.5" />
              )}
            </button>
          )}

          {hasStreams && (
            <button
              type="button"
              onClick={() => setMinimized((m) => !m)}
              className="rounded-lg border border-slate-300 p-1.5 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              title={minimized ? 'Show video & voice tiles' : 'Minimize to floating bar'}
              aria-label={minimized ? 'Expand voice and video panel' : 'Minimize voice and video panel'}
            >
              {minimized ? (
                <ChevronUp className="h-3.5 w-3.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Notices & Errors */}
      {!minimized && !supportsWebRtcMedia && connected && (
        <p className="mx-3 mb-2.5 rounded-xl bg-slate-100 px-3 py-1.5 text-[11px] text-slate-600 dark:bg-slate-800/70 dark:text-slate-400">
          Voice &amp; video require WebRTC (Torrent, Nostr, or MQTT); unavailable in Local Two-Tab mode.
        </p>
      )}

      {mediaError && (
        <div className="mx-3 mb-2.5 flex items-start justify-between gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 text-[11px] text-rose-700 dark:text-rose-300">
          <span>{mediaError}</span>
          <button
            type="button"
            onClick={() => setMediaError(null)}
            className="shrink-0 font-semibold hover:underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Adaptive Video/Voice Tile Grid (scales smoothly with resize, no ugly scrollbar) */}
      {!minimized && hasStreams && (
        <div className="min-h-0 flex-1 overflow-y-auto border-t border-slate-200/80 p-2 dark:border-slate-800">
          <div
            className="grid h-full w-full gap-2"
            style={{
              gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
              gridTemplateRows:
                gridRows === 1 && panelSize
                  ? 'minmax(0, 1fr)'
                  : `repeat(${gridRows}, minmax(${panelSize ? 54 : isMobileViewport ? 88 : 116}px, 1fr))`,
            }}
          >
            {localStream && (
              <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-indigo-500/40 bg-slate-950">
                {videoEnabled && isStreamHasLiveVideo(localStream) ? (
                  <div className="min-h-0 w-full flex-1">
                    <MediaStreamView
                      stream={localStream}
                      hasVideo
                      muted
                      mirrored
                    />
                  </div>
                ) : (
                  <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-1 bg-slate-900 text-slate-200">
                    <span className="text-xl sm:text-2xl" aria-hidden="true">
                      {selfAvatar}
                    </span>
                    <span className="text-[10px] font-medium text-emerald-400">
                      {audioEnabled ? 'Mic live' : 'Mic muted'}
                    </span>
                  </div>
                )}
                <div className="flex shrink-0 items-center justify-between gap-1 bg-slate-950/90 px-2 py-1 text-[10px] text-white">
                  <span className="truncate font-semibold">
                    {selfDisplayName} (You)
                  </span>
                  <span className="shrink-0">
                    {audioEnabled ? (
                      <Mic className="h-3 w-3 text-emerald-400" />
                    ) : (
                      <MicOff className="h-3 w-3 text-rose-400" />
                    )}
                  </span>
                </div>
              </div>
            )}

            {visibleRemotePeers.map(
              ({ peerId, stream, participant, hasVideo, hasAudio }) => {
                const isPeerMuted = deafened || Boolean(mutedPeers[peerId]);
                return (
                  <div
                    key={peerId}
                    className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-950 dark:border-slate-700"
                  >
                    {hasVideo ? (
                      <div className="min-h-0 w-full flex-1">
                        <MediaStreamView
                          stream={stream}
                          hasVideo
                          muted={isPeerMuted}
                        />
                      </div>
                    ) : (
                      <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-1 bg-slate-900 text-slate-200">
                        <MediaStreamView
                          stream={stream}
                          hasVideo={false}
                          muted={isPeerMuted}
                        />
                        <span className="text-xl sm:text-2xl" aria-hidden="true">
                          {participant.avatar}
                        </span>
                        <span className="text-[10px] font-medium text-slate-300">
                          {hasAudio ? 'Voice active' : 'Audio muted'}
                        </span>
                      </div>
                    )}

                    <div className="flex shrink-0 items-center justify-between gap-1 bg-slate-950/90 px-2 py-1 text-[10px] text-white">
                      <span className="truncate font-semibold">
                        {participant.displayName}
                      </span>
                      <div className="flex shrink-0 items-center gap-1">
                        {hasAudio ? (
                          <Mic className="h-3 w-3 text-emerald-400" />
                        ) : (
                          <MicOff className="h-3 w-3 text-slate-400" />
                        )}
                        <button
                          type="button"
                          onClick={() =>
                            setMutedPeers((prev) => ({
                              ...prev,
                              [peerId]: !prev[peerId],
                            }))
                          }
                          className="rounded p-0.5 text-slate-300 hover:bg-white/10 hover:text-white"
                          title={isPeerMuted ? 'Unmute peer' : 'Mute peer'}
                          aria-label={
                            isPeerMuted
                              ? `Unmute ${participant.displayName}`
                              : `Mute ${participant.displayName}`
                          }
                        >
                          {isPeerMuted ? (
                            <VolumeX className="h-3 w-3 text-amber-400" />
                          ) : (
                            <Volume2 className="h-3 w-3" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      )}
    </section>
  );
}

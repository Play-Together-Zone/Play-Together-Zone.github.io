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

function clampPanelSize(
  width: number,
  height: number,
): { width: number; height: number } {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const maxW =
    typeof window !== 'undefined' ? Math.min(720, window.innerWidth - 16) : 720;
  const maxH =
    typeof window !== 'undefined'
      ? Math.floor(window.innerHeight * (isMobile ? 0.72 : 0.8))
      : 600;
  return {
    width: Math.round(Math.min(Math.max(260, width), Math.max(260, maxW))),
    height: Math.round(Math.min(Math.max(150, height), Math.max(180, maxH))),
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
    edge: 'nw' | 'w' | 'n' | 'se';
    startX: number;
    startY: number;
    startRect: DOMRect;
    hadDragPos: boolean;
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
      if (mobile) {
        setDragPos((prev) => (prev !== null ? null : prev));
      }
      setPanelSize((prev) => {
        if (!prev) return prev;
        const clamped = clampPanelSize(prev.width, prev.height);
        return clamped.width === prev.width && clamped.height === prev.height
          ? prev
          : clamped;
      });
      if (!mobile) {
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
      }
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
    if (typeof window === 'undefined' || window.innerWidth < 640) return;
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
    edge: 'nw' | 'w' | 'n' | 'se',
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
      hadDragPos: dragPos !== null,
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
    const { startRect, edge, hadDragPos } = rs;

    let rawWidth = startRect.width;
    let rawHeight = startRect.height;

    if (edge === 'nw' || edge === 'w') {
      rawWidth = startRect.width - dx;
    } else if (edge === 'se') {
      rawWidth = startRect.width + dx;
    }

    if (edge === 'nw' || edge === 'n') {
      rawHeight = startRect.height - dy;
    } else if (edge === 'se') {
      rawHeight = startRect.height + dy;
    }

    const clamped = clampPanelSize(rawWidth, rawHeight);
    setPanelSize(clamped);

    if (hadDragPos && window.innerWidth >= 640) {
      let nextX = startRect.left;
      let nextY = startRect.top;
      if (edge === 'nw' || edge === 'w') {
        nextX = startRect.right - clamped.width;
      }
      if (edge === 'nw' || edge === 'n') {
        nextY = startRect.bottom - clamped.height;
      }
      setDragPos(
        clampPositionToViewport(nextX, nextY, clamped.width, clamped.height),
      );
    }
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

  const panelStyle: React.CSSProperties = {
    ...(dragPos && !isMobileViewport
      ? {
          left: `${dragPos.x}px`,
          top: `${dragPos.y}px`,
          right: 'auto',
          bottom: 'auto',
        }
      : undefined),
    ...(activeExpanded && panelSize
      ? {
          ...(isMobileViewport ? {} : { width: `${panelSize.width}px` }),
          height: `${panelSize.height}px`,
          maxHeight: isMobileViewport ? '72dvh' : '82dvh',
        }
      : undefined),
  };

  return (
    <section
      ref={panelRef}
      aria-label="Floating voice and video chat"
      style={panelStyle}
      className={`fixed inset-x-2 bottom-2 z-40 mx-auto flex max-h-[48dvh] w-auto max-w-lg flex-col rounded-2xl border border-slate-200/90 bg-white/95 shadow-2xl backdrop-blur-md transition-shadow sm:inset-x-auto sm:right-4 sm:bottom-4 sm:mx-0 sm:max-h-[calc(100dvh-5.5rem)] sm:max-w-[calc(100vw-1rem)] dark:border-slate-700/90 dark:bg-slate-900/95 ${
        activeExpanded
          ? panelSize
            ? ''
            : 'sm:w-[348px]'
          : 'sm:w-auto'
      }`}
    >
      {/* Mobile Top Height Resize Handle */}
      {activeExpanded && (
        <div
          onPointerDown={(e) => handleResizePointerDown(e, 'n')}
          onPointerMove={handleResizePointerMove}
          onPointerUp={handleResizePointerEnd}
          onPointerCancel={handleResizePointerEnd}
          onDoubleClick={() => setPanelSize(null)}
          role="separator"
          aria-orientation="horizontal"
          aria-label="Drag to resize voice and video height"
          title="Drag up or down to resize"
          className="flex cursor-ns-resize touch-none items-center justify-center pt-1.5 pb-0.5 sm:hidden"
        >
          <span className="h-1 w-10 rounded-full bg-slate-300 dark:bg-slate-600" />
        </div>
      )}

      {/* Desktop Edge & Corner Resize Handles */}
      {activeExpanded && (
        <>
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 'nw')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerEnd}
            onPointerCancel={handleResizePointerEnd}
            onDoubleClick={() => setPanelSize(null)}
            title="Drag corner to resize · Double-click to reset"
            aria-label="Drag top-left corner to resize"
            className="hidden sm:flex sm:absolute sm:top-0.5 sm:left-0.5 sm:z-20 sm:h-4 sm:w-4 sm:cursor-nwse-resize sm:touch-none sm:items-start sm:justify-start sm:rounded-tl-2xl sm:p-1"
          >
            <span className="h-2 w-2 rounded-tl-xs border-t-2 border-l-2 border-slate-400/70 dark:border-slate-500/80" />
          </div>
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 'w')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerEnd}
            onPointerCancel={handleResizePointerEnd}
            onDoubleClick={() => setPanelSize(null)}
            title="Drag left edge to resize width"
            className="hidden sm:block sm:absolute sm:top-4 sm:bottom-4 sm:left-0 sm:z-10 sm:w-1.5 sm:cursor-ew-resize sm:touch-none"
          />
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 'n')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerEnd}
            onPointerCancel={handleResizePointerEnd}
            onDoubleClick={() => setPanelSize(null)}
            title="Drag top edge to resize height"
            className="hidden sm:block sm:absolute sm:top-0 sm:right-4 sm:left-4 sm:z-10 sm:h-1.5 sm:cursor-ns-resize sm:touch-none"
          />
          {dragPos && (
            <div
              onPointerDown={(e) => handleResizePointerDown(e, 'se')}
              onPointerMove={handleResizePointerMove}
              onPointerUp={handleResizePointerEnd}
              onPointerCancel={handleResizePointerEnd}
              onDoubleClick={() => setPanelSize(null)}
              title="Drag bottom-right corner to resize"
              aria-label="Drag bottom-right corner to resize"
              className="hidden sm:block sm:absolute sm:right-0 sm:bottom-0 sm:z-20 sm:h-3.5 sm:w-3.5 sm:cursor-nwse-resize sm:touch-none sm:rounded-br-2xl"
            />
          )}
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

      {/* Floating Header / Control Bar (Draggable on >= sm) */}
      <div
        onPointerDown={handleDragPointerDown}
        onPointerMove={handleDragPointerMove}
        onPointerUp={handleDragPointerEnd}
        onPointerCancel={handleDragPointerEnd}
        onDoubleClick={() => setDragPos(null)}
        className="flex flex-wrap items-center justify-between gap-2 px-3 py-2.5 sm:cursor-grab sm:touch-none sm:active:cursor-grabbing"
        title={dragPos ? 'Drag to move · Double-click to reset dock' : 'Drag to move'}
      >
        <div className="flex min-w-0 items-center gap-1.5">
          <GripHorizontal className="hidden h-3.5 w-3.5 shrink-0 text-slate-400 sm:inline" />
          <Headphones className="h-3.5 w-3.5 shrink-0 text-indigo-500" />
          <h2 className="truncate text-xs font-bold tracking-wide text-slate-700 uppercase dark:text-slate-200">
            Voice &amp; Video
          </h2>
          {visibleRemotePeers.length > 0 && (
            <span className="shrink-0 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
              {visibleRemotePeers.length} live
            </span>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-1.5">
          <button
            type="button"
            disabled={!supportsWebRtcMedia || !connected || busy}
            onClick={() => void handleToggleMic()}
            className={`inline-flex items-center gap-1 rounded-xl px-2 py-1.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-45 sm:px-2.5 ${
              audioEnabled
                ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                : 'border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
            }`}
            title={audioEnabled ? 'Mute microphone' : 'Turn on microphone'}
            aria-label={audioEnabled ? 'Mute microphone' : 'Turn on microphone'}
          >
            {audioEnabled ? <Mic className="h-3.5 w-3.5" /> : <MicOff className="h-3.5 w-3.5" />}
            <span>{audioEnabled ? 'On' : 'Mic'}</span>
          </button>

          <button
            type="button"
            disabled={!supportsWebRtcMedia || !connected || busy}
            onClick={() => void handleToggleVideo()}
            className={`inline-flex items-center gap-1 rounded-xl px-2 py-1.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-45 sm:px-2.5 ${
              videoEnabled
                ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                : 'border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
            }`}
            title={videoEnabled ? 'Turn off camera' : 'Turn on camera'}
            aria-label={videoEnabled ? 'Turn off camera' : 'Turn on camera'}
          >
            {videoEnabled ? <Video className="h-3.5 w-3.5" /> : <VideoOff className="h-3.5 w-3.5" />}
            <span>{videoEnabled ? 'On' : 'Cam'}</span>
          </button>

          <button
            type="button"
            onClick={() => setDeafened((d) => !d)}
            className={`rounded-xl p-1.5 transition ${
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
              className="rounded-xl bg-rose-600 p-1.5 text-white transition hover:bg-rose-500"
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
              className="rounded-xl border border-slate-300 p-1.5 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
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
              className="rounded-xl border border-slate-300 p-1.5 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
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

      {/* Scrollable Video/Voice Tile Grid (stays bounded inside viewport) */}
      {!minimized && hasStreams && (
        <div className="min-h-0 flex-1 overflow-y-auto border-t border-slate-200/80 p-2.5 dark:border-slate-800">
          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns:
                totalTileCount === 1
                  ? '1fr'
                  : 'repeat(auto-fit, minmax(140px, 1fr))',
            }}
          >
            {localStream && (
              <div className="relative overflow-hidden rounded-xl border border-indigo-500/40 bg-slate-950">
                {videoEnabled && isStreamHasLiveVideo(localStream) ? (
                  <div className="aspect-video w-full">
                    <MediaStreamView
                      stream={localStream}
                      hasVideo
                      muted
                      mirrored
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video w-full flex-col items-center justify-center gap-1 bg-slate-900 text-slate-200">
                    <span className="text-xl sm:text-2xl" aria-hidden="true">
                      {selfAvatar}
                    </span>
                    <span className="text-[10px] font-medium text-emerald-400">
                      {audioEnabled ? 'Mic live' : 'Mic muted'}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between gap-1 bg-slate-950/90 px-2 py-1 text-[10px] text-white">
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
                    className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-950 dark:border-slate-700"
                  >
                    {hasVideo ? (
                      <div className="aspect-video w-full">
                        <MediaStreamView
                          stream={stream}
                          hasVideo
                          muted={isPeerMuted}
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-video w-full flex-col items-center justify-center gap-1 bg-slate-900 text-slate-200">
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

                    <div className="flex items-center justify-between gap-1 bg-slate-950/90 px-2 py-1 text-[10px] text-white">
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

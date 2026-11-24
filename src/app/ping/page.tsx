'use client';

import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Activity, ArrowLeftRight, CheckCircle2, ExternalLink, Radio, Send } from 'lucide-react';
import {
  connectWithFallback,
  type NetworkAdapter,
  type SignalingStrategy,
} from '@/lib/network';
import { generateRoomCode, normalizeRoomCode, withBasePath } from '@/lib/url';

interface PingLogItem {
  id: string;
  text: string;
  time: string;
}

function PingTestInner() {
  const searchParams = useSearchParams();
  const initialCode = normalizeRoomCode(searchParams.get('code') ?? '') || 'PING1';
  const initialStrategy = (searchParams.get('strategy') as SignalingStrategy) || 'torrent';

  const [roomCode, setRoomCode] = useState(initialCode);
  const [password, setPassword] = useState('');
  const [strategy, setStrategy] = useState<SignalingStrategy>(initialStrategy);
  const [autoFallback, setAutoFallback] = useState(true);
  const [status, setStatus] = useState<string>('disconnected');
  const [activeStrategy, setActiveStrategy] = useState<string>('');
  const [selfPeerId, setSelfPeerId] = useState<string>('');
  const [peers, setPeers] = useState<string[]>([]);
  const [logs, setLogs] = useState<PingLogItem[]>([]);
  const [echoText, setEchoText] = useState('Hello from browser!');
  const [rtts, setRtts] = useState<Record<string, number>>({});

  const adapterRef = useRef<NetworkAdapter | null>(null);

  const appendLog = useCallback((text: string) => {
    setLogs((prev) => [
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        text,
        time: new Date().toLocaleTimeString(),
      },
      ...prev.slice(0, 49),
    ]);
  }, []);

  const disconnect = useCallback(async () => {
    if (adapterRef.current) {
      await adapterRef.current.disconnect();
      adapterRef.current = null;
    }
    setPeers([]);
    setSelfPeerId('');
    setActiveStrategy('');
    setStatus('disconnected');
  }, []);

  useEffect(() => {
    return () => {
      void adapterRef.current?.disconnect();
    };
  }, []);

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    await disconnect();
    const code = normalizeRoomCode(roomCode) || generateRoomCode(5);
    setRoomCode(code);
    setStatus('connecting');
    appendLog(`Connecting to room ${code} via ${strategy}...`);

    try {
      const { adapter, strategy: used } = await connectWithFallback(code, {
        strategy,
        password: password || undefined,
        autoFallback: strategy !== 'local' && autoFallback,
        onAttempt: (s) => appendLog(`Trying signaling strategy: ${s}...`),
      });

      adapterRef.current = adapter;
      setActiveStrategy(used);
      setSelfPeerId(adapter.selfPeerId);
      setStatus(adapter.status);
      setPeers(adapter.getConnectedPeers());

      adapter.onPeerJoin((peerId) => {
        setPeers(adapter.getConnectedPeers());
        appendLog(`Peer joined: ${peerId}`);
      });
      adapter.onPeerLeave((peerId) => {
        setPeers(adapter.getConnectedPeers());
        appendLog(`Peer left: ${peerId}`);
      });
      adapter.onMessage((msg, fromPeerId) => {
        appendLog(
          `[${msg.type}] from ${fromPeerId}: ${JSON.stringify(msg.payload)}`,
        );
      });
      adapter.onError((err) => {
        appendLog(`Error (${err.code}): ${err.message}`);
      });
      adapter.onStatusChange((st) => setStatus(st));

      appendLog(`Connected! Transport=${used}, selfPeerId=${adapter.selfPeerId}`);
    } catch (err) {
      setStatus('error');
      appendLog(
        `Connection failed: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  };

  const handlePingPeer = async (peerId: string) => {
    if (!adapterRef.current) return;
    try {
      const rtt = await adapterRef.current.ping(peerId);
      setRtts((prev) => ({ ...prev, [peerId]: rtt }));
      appendLog(`Ping to ${peerId}: ${rtt} ms`);
    } catch (err) {
      appendLog(
        `Ping failed for ${peerId}: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  };

  const handleSendEcho = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adapterRef.current || !echoText.trim()) return;
    await adapterRef.current.send('ping_echo', { message: echoText.trim() });
    appendLog(`Sent echo: "${echoText.trim()}"`);
  };

  const openSecondTab = () => {
    const code = normalizeRoomCode(roomCode) || 'PING1';
    const url = withBasePath(
      `/ping/?code=${encodeURIComponent(code)}&strategy=${encodeURIComponent(strategy)}&tabId=tab2`,
    );
    window.open(url, '_blank', 'noopener');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
            <Radio className="h-6 w-6 text-indigo-500" />
            WebRTC &amp; Local P2P Ping Test
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Verify peer discovery, DataChannel connectivity, and round-trip latency
            between two browsers or two tabs before starting a match.
          </p>
        </div>
        <button
          type="button"
          onClick={openSecondTab}
          className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <ExternalLink className="h-4 w-4" />
          Open Second Tab
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <form
          onSubmit={handleConnect}
          className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Connection Settings
          </h2>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="ping-room-code"
                className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                Room Code (4-6 chars)
              </label>
              <input
                id="ping-room-code"
                type="text"
                value={roomCode}
                onChange={(e) => setRoomCode(normalizeRoomCode(e.target.value))}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 font-mono text-sm uppercase dark:border-slate-700 dark:bg-slate-950"
              />
            </div>

            <div>
              <label
                htmlFor="ping-strategy"
                className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                Signaling Strategy
              </label>
              <select
                id="ping-strategy"
                value={strategy}
                onChange={(e) => setStrategy(e.target.value as SignalingStrategy)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
              >
                <option value="torrent">Trystero Torrent (WebRTC Default)</option>
                <option value="nostr">Trystero Nostr (WebRTC Fallback)</option>
                <option value="mqtt">Trystero MQTT (WebRTC Fallback)</option>
                <option value="local">Local Two-Tab (BroadcastChannel)</option>
              </select>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="ping-password"
                className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                Optional Password
              </label>
              <input
                id="ping-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Leave empty for open room"
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
              />
            </div>

            <label className="mt-5 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
              <input
                type="checkbox"
                checked={autoFallback}
                onChange={(e) => setAutoFallback(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-indigo-600"
              />
              Auto-fallback (Torrent → Nostr → MQTT)
            </label>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <button
              type="submit"
              disabled={status === 'connecting'}
              className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-60"
            >
              {status === 'connecting' ? 'Connecting...' : 'Connect'}
            </button>
            <button
              type="button"
              onClick={() => void disconnect()}
              disabled={status === 'disconnected'}
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:opacity-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Disconnect
            </button>
          </div>

          <div className="rounded-xl bg-slate-100 p-3 text-xs dark:bg-slate-800/70">
            <div className="flex items-center justify-between">
              <span className="font-medium">Status: {status}</span>
              {activeStrategy && (
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {activeStrategy}
                </span>
              )}
            </div>
            {selfPeerId && (
              <div className="mt-1 font-mono text-slate-600 dark:text-slate-300">
                Self Peer ID: {selfPeerId}
              </div>
            )}
          </div>
        </form>

        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900 dark:text-white">
            <Activity className="h-4 w-4 text-emerald-500" />
            Connected Peers ({peers.length})
          </h2>

          {peers.length === 0 ? (
            <p className="rounded-xl border border-dashed border-slate-300 p-4 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
              No peers connected yet. Open the same room code in another browser,
              device, or second tab.
            </p>
          ) : (
            <div className="space-y-2">
              {peers.map((peerId) => (
                <div
                  key={peerId}
                  className="flex items-center justify-between rounded-xl border border-slate-200 px-3.5 py-2.5 dark:border-slate-800"
                >
                  <div>
                    <p className="font-mono text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {peerId}
                    </p>
                    {rtts[peerId] !== undefined && (
                      <p className="text-xs text-emerald-600 dark:text-emerald-400">
                        Last RTT: {rtts[peerId]} ms
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => void handlePingPeer(peerId)}
                    className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500"
                  >
                    <ArrowLeftRight className="h-3.5 w-3.5" />
                    Ping
                  </button>
                </div>
              ))}
            </div>
          )}

          <form onSubmit={handleSendEcho} className="flex gap-2">
            <input
              type="text"
              value={echoText}
              onChange={(e) => setEchoText(e.target.value)}
              disabled={status !== 'connected'}
              aria-label="Test echo message"
              className="flex-1 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950"
            />
            <button
              type="submit"
              disabled={status !== 'connected'}
              className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900"
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </form>

          <div className="max-h-56 space-y-1 overflow-y-auto rounded-xl bg-slate-950 p-3 font-mono text-xs text-slate-200">
            {logs.length === 0 ? (
              <span className="text-slate-500">Event log will appear here...</span>
            ) : (
              logs.map((l) => (
                <div key={l.id}>
                  <span className="text-slate-500">[{l.time}]</span> {l.text}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PingPage() {
  return (
    <Suspense fallback={<div className="p-8 text-sm text-slate-500">Loading ping tool...</div>}>
      <PingTestInner />
    </Suspense>
  );
}

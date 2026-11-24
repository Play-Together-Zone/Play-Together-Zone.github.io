'use client';

import React, { useState } from 'react';
import { Ban, MessageSquareOff, Send, VolumeX } from 'lucide-react';
import type { ChatMessage } from '@/lib/sync/types';

interface ChatBoxProps {
  messages: ChatMessage[];
  chatEnabled: boolean;
  selfPlayerId: string;
  isHost: boolean;
  mutedPlayerIds: string[];
  blockedPlayerIds: string[];
  onSend: (text: string) => void;
  onToggleMute: (playerId: string) => void;
  onToggleBlock: (playerId: string) => void;
}

export function ChatBox({
  messages,
  chatEnabled,
  selfPlayerId,
  isHost,
  mutedPlayerIds,
  blockedPlayerIds,
  onSend,
  onToggleMute,
  onToggleBlock,
}: ChatBoxProps) {
  const [text, setText] = useState('');
  const selfMuted = mutedPlayerIds.includes(selfPlayerId);

  const visibleMessages = messages.filter(
    (m) => !blockedPlayerIds.includes(m.senderPlayerId),
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || !chatEnabled || selfMuted) return;
    onSend(text.trim());
    setText('');
  };

  return (
    <section
      aria-label="Room chat"
      className="flex h-72 flex-col rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-3.5 py-2.5 dark:border-slate-800">
        <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase dark:text-slate-300">
          Room Chat
        </span>
        {!chatEnabled && (
          <span className="flex items-center gap-1 text-[11px] text-amber-600 dark:text-amber-400">
            <MessageSquareOff className="h-3.5 w-3.5" />
            Disabled by host
          </span>
        )}
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
        {!chatEnabled ? (
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Chat is turned off for this room.
          </p>
        ) : visibleMessages.length === 0 ? (
          <p className="text-xs text-slate-500 dark:text-slate-400">
            No messages yet. Say hello!
          </p>
        ) : (
          visibleMessages.map((m) => {
            const isSelf = m.senderPlayerId === selfPlayerId;
            const isMuted = mutedPlayerIds.includes(m.senderPlayerId);
            return (
              <div
                key={m.id}
                className="group flex items-start justify-between gap-2 rounded-xl bg-slate-50 px-2.5 py-1.5 dark:bg-slate-800/60"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <span>{m.senderAvatar}</span>
                    <span className="truncate">{m.senderName}</span>
                    <span className="text-[10px] font-normal text-slate-400">
                      {new Date(m.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                  <p className="mt-0.5 break-words text-xs text-slate-700 dark:text-slate-300">
                    {m.text}
                  </p>
                </div>

                {!isSelf && (
                  <div className="flex shrink-0 items-center gap-1 opacity-75 group-hover:opacity-100">
                    {isHost && (
                      <button
                        type="button"
                        onClick={() => onToggleMute(m.senderPlayerId)}
                        className={`rounded p-1 text-xs transition ${
                          isMuted
                            ? 'bg-amber-500/20 text-amber-500'
                            : 'text-slate-400 hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-slate-700'
                        }`}
                        title={isMuted ? 'Unmute in room' : 'Mute in room'}
                        aria-label={isMuted ? 'Unmute player' : 'Mute player'}
                      >
                        <VolumeX className="h-3.5 w-3.5" />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => onToggleBlock(m.senderPlayerId)}
                      className="rounded p-1 text-slate-400 transition hover:bg-rose-500/15 hover:text-rose-500"
                      title="Block messages from this player"
                      aria-label={`Block ${m.senderName}`}
                    >
                      <Ban className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-slate-200 p-2.5 dark:border-slate-800"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={!chatEnabled || selfMuted}
          maxLength={300}
          placeholder={
            !chatEnabled
              ? 'Chat disabled'
              : selfMuted
                ? 'You are muted by host'
                : 'Type a message...'
          }
          aria-label="Chat message"
          className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs focus:border-indigo-500 focus:outline-none disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950"
        />
        <button
          type="submit"
          disabled={!chatEnabled || selfMuted || !text.trim()}
          aria-label="Send message"
          className="rounded-xl bg-indigo-600 p-2 text-white transition hover:bg-indigo-500 disabled:opacity-40"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </form>
    </section>
  );
}

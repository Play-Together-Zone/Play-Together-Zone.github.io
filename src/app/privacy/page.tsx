import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
          <ShieldCheck className="h-6 w-6 text-emerald-500" />
          Privacy &amp; Open-Source Credits
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          PlayTogether is a static, serverless web application hosted with zero
          backend database or tracking infrastructure. Need to reach the creator?
          Visit{' '}
          <a
            href="https://khushwinder-dev.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
          >
            khushwinder-dev.github.io
          </a>
          .
        </p>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              1. No Accounts &amp; No Server Storage
            </h2>
            <p className="mt-1">
              We do not require registration, logins, or cookies. Your display name,
              avatar choice, persistent random player ID, theme preference, sound
              setting, blocked peer IDs, and win/loss counts are saved strictly in
              your browser&apos;s <code className="font-mono">localStorage</code>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              2. WebRTC Peer-to-Peer IP Address Disclosure
            </h2>
            <p className="mt-1">
              Multiplayer connections run directly between participants&apos; browsers
              over WebRTC. Establishing a peer-to-peer WebRTC connection exchanges
              ICE network candidates, which means{' '}
              <strong>
                room participants&apos; IP addresses and connection metadata may be
                visible to other peers in the room
              </strong>
              , as well as to the public STUN/TURN servers and signaling relays
              (WebTorrent trackers, Nostr relays, or MQTT brokers) used to negotiate
              the connection. Only join rooms with people you trust, or use a VPN /
              relay-only TURN configuration if you wish to mask your IP address.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              3. Original Content &amp; Open-Source Licenses
            </h2>
            <p className="mt-1">
              All game titles, card designs, and artwork are original creations and
              are not affiliated with Hasbro, Mattel, or any third-party trademark
              holder. This site is powered by open-source libraries:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-600 dark:text-slate-400">
              <li>Next.js &amp; React — MIT License</li>
              <li>Trystero (@trystero-p2p/torrent, nostr, mqtt) — MIT License</li>
              <li>chess.js — BSD-2-Clause License</li>
              <li>Tailwind CSS — MIT License</li>
              <li>Lucide React — ISC License</li>
              <li>qrcode — MIT License</li>
              <li>
                Trivia Packs — Original / CC0 public-domain questions, plus optional
                user-triggered client fetch from Open Trivia Database (CC BY-SA 4.0)
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

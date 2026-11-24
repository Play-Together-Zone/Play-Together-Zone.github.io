import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'P2P Connection & Ping Test',
  description:
    'Test peer-to-peer WebRTC connection latency and signaling relays for Play-Together-Zone multiplayer rooms.',
  alternates: {
    canonical: '/ping/',
  },
};

export default function PingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

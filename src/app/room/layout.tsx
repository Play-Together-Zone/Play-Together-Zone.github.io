import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multiplayer Game Room',
  description:
    'Live multiplayer game room on Play-Together-Zone with real-time board sync, text chat, and voice & video chat.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

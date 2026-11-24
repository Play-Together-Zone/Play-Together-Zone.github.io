import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Play-Together-Zone — Play · Connect · Enjoy',
    short_name: 'Play-Together-Zone',
    description:
      'Play Chess, Ludo, Checkers, Tic-Tac-Toe, Color Rush, and Trivia Blitz with friends directly in your browser with voice & video chat.',
    start_url: '/',
    display: 'standalone',
    background_color: '#061235',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/logo.jpg',
        sizes: '1024x576',
        type: 'image/jpeg',
      },
    ],
  };
}

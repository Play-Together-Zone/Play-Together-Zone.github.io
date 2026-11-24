import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { AppProvider } from '@/components/AppProvider';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
  metadataBase: new URL('https://play-together-zone.github.io'),
  title: {
    default: 'Play-Together-Zone — Play · Connect · Enjoy',
    template: '%s | Play-Together-Zone',
  },
  description:
    'Play free online multiplayer board and party games with friends in your browser — Chess, Ludo, Checkers, Tic-Tac-Toe, Color Rush, and Trivia Blitz with built-in voice and video chat. No sign-ups required.',
  keywords: [
    'Play-Together-Zone',
    'play games together online',
    'multiplayer browser games',
    'free online chess with friends',
    'online ludo multiplayer',
    'checkers online',
    'tic tac toe multiplayer',
    'trivia quiz game online',
    'color rush card game',
    'voice and video chat games',
    'no signup multiplayer games',
  ],
  applicationName: 'Play-Together-Zone',
  authors: [{ name: 'Khushwinder', url: 'https://khushwinder-dev.github.io/' }],
  creator: 'Khushwinder',
  publisher: 'Play-Together-Zone',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://play-together-zone.github.io/',
    siteName: 'Play-Together-Zone',
    locale: 'en_US',
    title: 'Play-Together-Zone — Free Online Multiplayer Games with Friends',
    description:
      'Create a room code or QR link and play Chess, Ludo, Checkers, Tic-Tac-Toe, Color Rush, and Trivia Blitz live with voice & video chat — no accounts needed.',
    images: [
      {
        url: '/logo.jpg',
        width: 1024,
        height: 576,
        alt: 'Play-Together-Zone — Play · Connect · Enjoy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Play-Together-Zone — Free Online Multiplayer Games',
    description:
      'Play Chess, Ludo, Checkers, Tic-Tac-Toe, Color Rush & Trivia Blitz directly in your browser with voice & video chat.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://play-together-zone.github.io/#website',
      url: 'https://play-together-zone.github.io/',
      name: 'Play-Together-Zone',
      description:
        'Free browser-based multiplayer board and party games with instant room codes, QR invites, and voice & video chat.',
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://play-together-zone.github.io/#webapp',
      name: 'Play-Together-Zone',
      url: 'https://play-together-zone.github.io/',
      applicationCategory: 'GameApplication',
      operatingSystem: 'Any (Web Browser)',
      browserRequirements: 'Requires JavaScript and modern web browser',
      image: 'https://play-together-zone.github.io/logo.jpg',
      description:
        'Play Chess, Ludo, Checkers, Tic-Tac-Toe, Color Rush, and Trivia Blitz with friends or bots directly in your browser with built-in voice and video chat.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Instant room code and QR code invites',
        'Built-in peer-to-peer voice and video chat',
        '6 multiplayer games: Chess, Ludo, Checkers, Tic-Tac-Toe, Color Rush, Trivia Blitz',
        'Solo practice mode against AI bots',
        'No sign-up or account required',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9193773194117466"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-slate-100">
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-TR8G4MN9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
        <AppProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
              {children}
            </main>
            <footer className="border-t border-slate-200/80 py-5 text-center text-xs text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
              <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row">
                <p>
                  &copy; 2026 Play-Together-Zone &mdash; Play &middot; Connect &middot;
                  Enjoy. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <Link href="/ping/" className="hover:underline">
                    Ping Test
                  </Link>
                  <Link href="/privacy/" className="hover:underline">
                    Privacy &amp; Credits
                  </Link>
                  <a
                    href="https://khushwinder-dev.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}

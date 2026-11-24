import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { AppProvider } from '@/components/AppProvider';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Play-Together-Zone — Play · Connect · Enjoy',
  description:
    'Play-Together-Zone: turn-based peer-to-peer multiplayer games running directly over WebRTC with zero backend servers.',
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

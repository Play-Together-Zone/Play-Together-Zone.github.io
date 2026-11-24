'use client';

import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const PORTFOLIO_URL = 'https://khushwinder-dev.github.io/';

export default function ContactRedirectPage() {
  useEffect(() => {
    window.location.replace(PORTFOLIO_URL);
  }, []);

  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">
        Redirecting to Portfolio...
      </h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Taking you to Khushwinder&apos;s portfolio website.
      </p>
      <a
        href={PORTFOLIO_URL}
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
      >
        Open Portfolio
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}

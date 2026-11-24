'use client';

import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

export function QrCodeCard({ url }: { url: string }) {
  const [dataUrl, setDataUrl] = useState<string>('');

  useEffect(() => {
    let active = true;
    QRCode.toDataURL(url, {
      width: 168,
      margin: 1,
      color: {
        dark: '#0f172a',
        light: '#ffffff',
      },
    })
      .then((res) => {
        if (active) setDataUrl(res);
      })
      .catch(() => {
        if (active) setDataUrl('');
      });
    return () => {
      active = false;
    };
  }, [url]);

  if (!dataUrl) return null;

  return (
    <div className="inline-flex flex-col items-center rounded-xl border border-slate-200 bg-white p-2.5 shadow-xs dark:border-slate-700">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={dataUrl}
        alt="QR code to join room"
        width={136}
        height={136}
        className="rounded-lg"
      />
      <span className="mt-1.5 text-[11px] font-medium text-slate-600">
        Scan to join
      </span>
    </div>
  );
}

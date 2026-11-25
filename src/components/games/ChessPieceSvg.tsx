import React from 'react';
import type { PieceSymbol } from 'chess.js';
import type { ChessColor } from '@/lib/games/chess';

interface ChessPieceSvgProps {
  color: ChessColor;
  type: PieceSymbol;
  className?: string;
}

/**
 * Custom crisp Staunton-style SVG chess pieces with warm ivory (white)
 * and satin obsidian (black) styling so pieces look consistent across all OSes.
 */
export function ChessPieceSvg({
  color,
  type,
  className = 'h-[82%] w-[82%]',
}: ChessPieceSvgProps) {
  const isWhite = color === 'w';
  const fill = isWhite ? '#f8fafc' : '#1e293b';
  const fillAlt = isWhite ? '#e2e8f0' : '#0f172a';
  const stroke = isWhite ? '#1e293b' : '#020617';
  const accent = isWhite ? '#334155' : '#cbd5e1';

  return (
    <svg
      viewBox="0 0 45 45"
      className={`pointer-events-none select-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.45)] ${className}`}
      aria-hidden="true"
    >
      {type === 'p' && (
        <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M22.5 9a4 4 0 0 0-4 4c0 1.44.76 2.7 1.9 3.4-2.2 1.15-3.65 3.42-3.65 6.05 0 2.02.88 3.83 2.27 5.05-3.03 1.07-5.52 3.83-5.52 7.5h18c0-3.67-2.49-6.43-5.52-7.5 1.39-1.22 2.27-3.03 2.27-5.05 0-2.63-1.45-4.9-3.65-6.05A3.99 3.99 0 0 0 26.5 13a4 4 0 0 0-4-4z"
            fill={fill}
          />
          <path d="M12.5 35.5h20a1 1 0 0 1 1 1v2h-22v-2a1 1 0 0 1 1-1z" fill={fillAlt} />
          <path d="M17.5 27.5h10" stroke={accent} strokeWidth="1.1" opacity="0.65" />
        </g>
      )}

      {type === 'r' && (
        <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" fill={fill} />
          <path d="M34 14l-3 3H14l-3-3" fill={fillAlt} />
          <path d="M31 17v12.5H14V17" fill={fill} />
          <path d="M31 29.5l1.5 2.5h-20l1.5-2.5" fill={fillAlt} />
          <path d="M11 14h23" stroke={stroke} />
          {!isWhite && (
            <>
              <path d="M14 17.5h17M14 29h17" stroke={accent} strokeWidth="1" opacity="0.55" />
            </>
          )}
        </g>
      )}

      {type === 'n' && (
        <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"
            fill={fill}
          />
          <path
            d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.04-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.99-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.99 2.5-3c1 0 1 3 1 3"
            fill={fill}
          />
          <circle cx="15" cy="15.5" r="1.1" fill={accent} stroke="none" />
          <path d="M12 39h26" stroke={stroke} />
          <path
            d="M24.5 10.5c5.5 2 9.5 7.5 10 17.5"
            fill="none"
            stroke={accent}
            strokeWidth="1.1"
            opacity="0.55"
          />
        </g>
      )}

      {type === 'b' && (
        <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <g fill={fill}>
            <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.94 3-2 3-2z" />
            <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" />
            <circle cx="22.5" cy="8" r="2.5" />
          </g>
          <path d="M17.5 26h10M15 30h15M22.5 15.5v5M20 18h5" stroke={accent} strokeWidth="1.35" />
        </g>
      )}

      {type === 'q' && (
        <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="12" r="2.5" fill={fill} />
          <circle cx="14" cy="9" r="2.5" fill={fill} />
          <circle cx="22.5" cy="8" r="2.5" fill={fill} />
          <circle cx="31" cy="9" r="2.5" fill={fill} />
          <circle cx="39" cy="12" r="2.5" fill={fill} />
          <path
            d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"
            fill={fill}
          />
          <path
            d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"
            fill={fillAlt}
          />
          <path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none" stroke={accent} strokeWidth="1.15" />
        </g>
      )}

      {type === 'k' && (
        <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.5 11.63V6M20 8h5" fill="none" stroke={isWhite ? '#1e293b' : '#cbd5e1'} strokeWidth="1.8" />
          <path
            d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
            fill={fill}
          />
          <path
            d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"
            fill={fill}
          />
          <path
            d="M11.5 30c5.5-3 15.5-3 21 0M11.5 33.5c5.5-3 15.5-3 21 0M11.5 37c5.5-3 15.5-3 21 0"
            fill="none"
            stroke={accent}
            strokeWidth="1.2"
          />
        </g>
      )}
    </svg>
  );
}

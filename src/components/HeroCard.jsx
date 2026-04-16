import React from 'react';

/**
 * HeroCard — the right-side visual used on inner page heroes.
 * Shows a large white rounded box with colorful floating shapes
 * peeking out from the left edge, exactly as seen in the screenshots.
 */
export default function HeroCard() {
  return (
    <div className="relative w-full h-[420px] flex items-center justify-center">
      {/* Main white card */}
      <div className="relative w-full h-full bg-white border-2 border-red-100 rounded-[24px] shadow-[0_8px_40px_rgba(232,25,75,0.06)] overflow-visible" />

      {/* Floating shapes — positioned to peek from the left of the card */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none z-10">
        {/* Blue triangle */}
        <svg width="56" height="56" viewBox="0 0 100 100" fill="none" className="transform rotate-[20deg] drop-shadow-lg">
          <path d="M10 90L90 90L50 10Z" fill="#2563EB" />
          <circle cx="50" cy="40" r="5" fill="white" />
          <circle cx="40" cy="58" r="4" fill="white" />
          <circle cx="60" cy="58" r="4" fill="white" />
          <circle cx="50" cy="72" r="5" fill="white" />
        </svg>

        {/* Dark navy oval/pill */}
        <svg width="44" height="80" viewBox="0 0 44 80" fill="none" className="transform -rotate-[8deg] drop-shadow-lg -ml-6">
          <rect x="0" y="0" width="44" height="80" rx="22" fill="#1E3A8A" />
          <line x1="10" y1="20" x2="34" y2="60" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="20" y1="10" x2="44" y2="50" stroke="white" strokeWidth="1" opacity="0.3" />
        </svg>

        {/* Yellow wedge */}
        <svg width="36" height="36" viewBox="0 0 60 60" fill="none" className="transform rotate-[15deg] drop-shadow-lg ml-4 -mt-6 z-10">
          <path d="M5 5 Q 50 5 55 45 L 5 50 Z" fill="#FBBF24" />
          <circle cx="30" cy="25" r="3" fill="white" />
        </svg>

        {/* Red pill with dots */}
        <svg width="64" height="32" viewBox="0 0 90 40" fill="none" className="transform -rotate-[12deg] drop-shadow-lg mt-2 -ml-3">
          <rect x="0" y="0" width="90" height="40" rx="20" fill="#E8194B" />
          <circle cx="20" cy="15" r="3" fill="white" opacity="0.7" />
          <circle cx="35" cy="25" r="3" fill="white" opacity="0.7" />
          <circle cx="50" cy="15" r="3" fill="white" opacity="0.7" />
          <circle cx="65" cy="25" r="3" fill="white" opacity="0.7" />
          <circle cx="75" cy="15" r="3" fill="white" opacity="0.7" />
        </svg>

        {/* Yellow angular */}
        <svg width="44" height="36" viewBox="0 0 60 50" fill="none" className="transform rotate-[18deg] drop-shadow-lg -ml-10 mt-4">
          <path d="M5 25 L 55 25 L 55 45 L 25 45 Z" fill="#FBBF24" />
          <circle cx="30" cy="35" r="2.5" fill="white" opacity="0.7" />
          <circle cx="48" cy="32" r="2" fill="white" opacity="0.7" />
        </svg>

        {/* Green blob */}
        <svg width="36" height="36" viewBox="0 0 50 50" fill="none" className="transform -rotate-[15deg] drop-shadow-lg mt-3">
          <ellipse cx="25" cy="25" rx="20" ry="14" fill="#10B981" />
          <circle cx="15" cy="22" r="2" fill="white" opacity="0.7" />
          <circle cx="30" cy="30" r="2" fill="white" opacity="0.7" />
          <circle cx="35" cy="20" r="2" fill="white" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

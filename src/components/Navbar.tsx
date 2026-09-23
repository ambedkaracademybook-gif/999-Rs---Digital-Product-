import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Zap, AlertTriangle } from 'lucide-react';

const CTA_URL = 'https://www.ambedkaracademy.in/courses/648764';

export const Navbar: React.FC = () => {
  // 2-minute countdown timer (120 seconds)
  const [secondsLeft, setSecondsLeft] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          return 120; // reset to 2 minutes to keep urgent pressure alive
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <header className="w-full bg-black border-b border-neutral-900">
      {/* Scrollable / Announcement Offer Strip with 2-Minute Timer */}
      <aside 
        aria-label="Limited Time Offer"
        className="w-full bg-gradient-to-r from-red-950 via-neutral-900 to-amber-950/80 border-b border-[#E5B83B]/30 px-3 py-2 text-center text-xs"
      >
        <div className="mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <div className="flex items-center gap-1.5 text-amber-300 font-bold">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
            <Clock className="h-3.5 w-3.5 text-[#E5B83B]" />
            <span className="uppercase tracking-wider">OFFER EXPIRES IN:</span>
            <span className="font-mono text-sm font-black text-white bg-black/60 px-2 py-0.5 rounded border border-[#E5B83B]/40 tabular-nums">
              {formattedTime}
            </span>
          </div>

          <span className="hidden sm:inline text-neutral-500">•</span>

          <div className="text-neutral-200 font-medium">
            Regular <span className="line-through text-neutral-400">₹4,999</span>{' '}
            <span className="font-black text-white">Offer ₹999</span>{' '}
            <span className="text-[#E5B83B] font-bold">(Save ₹4,000)</span>
          </div>

          <a
            href={CTA_URL}
            className="text-[11px] font-black text-[#E5B83B] hover:text-white underline underline-offset-2 ml-1"
          >
            Claim ₹999 Offer →
          </a>
        </div>
      </aside>

      {/* Main Header Bar (Non-sticky, scrolls with page) */}
      <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Brand Lockup */}
        <a 
          href="#hero" 
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-white hover:text-[#E5B83B] transition-colors"
        >
          <span className="truncate">Ambedkar Academy</span>
        </a>

        {/* Primary Action Button: Single Line Text CTA linking to https://www.ambedkaracademy.in/courses/648764 */}
        <div className="flex items-center gap-2">
          <a
            href={CTA_URL}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] hover:from-[#FFE28A] hover:via-[#F5D061] hover:to-[#E5B83B] px-3 sm:px-4 py-2 text-xs sm:text-sm font-black text-black shadow-[0_0_15px_rgba(229,184,59,0.35)] transition active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            <span>👉 GET ACCESS – ₹999</span>
            <ArrowRight className="h-3.5 w-3.5 stroke-[3] hidden sm:inline" />
          </a>
        </div>
      </div>
    </header>
  );
};

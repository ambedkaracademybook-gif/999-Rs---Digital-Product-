import React from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';

const CTA_URL = 'https://www.ambedkaracademy.in/courses/648764';

interface StickyFooterCtaProps {
  onOpenSampleModal?: () => void;
}

export const StickyFooterCta: React.FC<StickyFooterCtaProps> = ({
  onOpenSampleModal,
}) => {
  return (
    <aside 
      aria-label="Sticky Access Bar"
      className="fixed bottom-0 inset-x-0 z-40 bg-black/95 border-t border-[#E5B83B]/40 px-3 py-2.5 sm:px-4 sm:py-3.5 backdrop-blur-xl shadow-2xl transition-all"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 sm:gap-4">
        {/* Left: Pricing & Value */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <div>
            <div className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="font-display text-xl sm:text-3xl font-black text-white tabular-nums tracking-tight">
                ₹999
              </span>
              <span className="text-[11px] sm:text-sm text-neutral-400 line-through tabular-nums">
                ₹4,999
              </span>
              <span className="inline-flex items-center rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] sm:text-xs font-bold text-emerald-400 border border-emerald-500/30">
                Save ₹4,000
              </span>
            </div>

            <div className="text-[10px] sm:text-xs text-neutral-300 truncate">
              <span className="text-[#E5B83B] font-semibold truncate flex items-center gap-1">
                <AlertTriangle className="h-3 w-3 inline text-[#E5B83B] shrink-0" />
                Price soon increase aagum!
              </span>
            </div>
          </div>
        </div>

        {/* Right: Actions with Guaranteed Single-Line Text */}
        <div className="flex items-center gap-2 shrink-0">
          {onOpenSampleModal && (
            <button
              onClick={onOpenSampleModal}
              className="hidden md:inline-flex items-center justify-center rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2 text-xs font-semibold text-neutral-200 hover:text-white hover:bg-neutral-800 transition whitespace-nowrap"
            >
              மாதிரி பக்கங்கள்
            </button>
          )}

          {/* Guaranteed Single-Line Gold CTA Button */}
          <a
            href={CTA_URL}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] hover:from-[#FFE28A] hover:via-[#F5D061] hover:to-[#E5B83B] px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-black text-black shadow-[0_0_20px_rgba(229,184,59,0.4)] hover:scale-[1.02] active:scale-[0.98] transition whitespace-nowrap cursor-pointer shrink-0"
          >
            <span className="whitespace-nowrap">👉 GET ACCESS – ₹999</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[3] shrink-0" />
          </a>
        </div>
      </div>
    </aside>
  );
};

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenCheckout: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 md:py-28 bg-black border-t border-neutral-900 relative overflow-hidden text-neutral-100">
      {/* Decorative subtle gold light */}
      <div 
        className="pointer-events-none absolute bottom-0 left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-[#E5B83B]/10 blur-[130px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Anti-randomness punchline */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Stop Preparing Randomly.
        </h2>
        <div className="mt-2 font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] bg-clip-text text-transparent tracking-tight">
          Start Preparing With a System.
        </div>

        {/* 4-Word Creed */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-base sm:text-xl font-bold text-neutral-200">
          <span>Learn.</span>
          <span className="text-[#E5B83B]">·</span>
          <span>Practice.</span>
          <span className="text-[#E5B83B]">·</span>
          <span>Analyse.</span>
          <span className="text-[#E5B83B]">·</span>
          <span>Revise.</span>
        </div>

        <p className="mt-4 text-base sm:text-lg text-neutral-300 font-medium max-w-xl mx-auto">
          Your TNPSC Preparation Starts Here.
          <span className="block text-sm text-[#E5B83B] mt-1 font-semibold">
            நேரம் வீணடிக்காமல் இன்றே உங்கள் தயாரிப்பை தொடங்குங்கள்!
          </span>
        </p>

        {/* Big Action Gold CTA */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <a
            href="https://www.ambedkaracademy.in/courses/648764"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] hover:from-[#FFE28A] hover:via-[#F5D061] hover:to-[#E5B83B] px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-xl font-black text-black shadow-[0_0_30px_rgba(229,184,59,0.45)] hover:shadow-[0_0_45px_rgba(229,184,59,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="whitespace-nowrap">👉 GET COMPLETE SYSTEM – ₹999</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[3] shrink-0" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-neutral-400 font-medium text-center">
            <span>Instant Digital Access</span>
            <span aria-hidden="true">·</span>
            <span>Regular Price ₹4,999</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400 font-bold">Today Just ₹999 (Save ₹4,000)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

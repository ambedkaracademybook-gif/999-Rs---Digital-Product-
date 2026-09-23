import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Clock, ShieldCheck, Zap } from 'lucide-react';

interface OfferSectionProps {
  onOpenCheckout: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  // Subtle countdown timer for urgency (e.g. 05:42:19)
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 4, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const stackItems = [
    { title: 'Previous Year Papers', value: '₹1,499' },
    { title: 'Expert Guidance & Strategy Roadmap', value: '₹999' },
    { title: 'Topic-Wise Test Practices', value: '₹1,199' },
    { title: 'High-Yield Quick Revision Notes', value: '₹899' },
    { title: 'Question Paper Analysis & Trends', value: '₹699' },
    { title: 'Group 1, Group 2/2A & Group 4 Materials', value: 'Included' },
  ];

  return (
    <section id="offer-section" className="py-20 md:py-28 bg-black border-b border-neutral-900 relative overflow-hidden text-neutral-100">
      {/* Ambient gold glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 h-[450px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E5B83B]/10 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs sm:text-sm font-bold tracking-widest text-[#E5B83B] uppercase mb-3">
            LIMITED TIME ENROLLMENT • வரையறுக்கப்பட்ட காலச் சலுகை
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get The Complete System Today
          </h2>
          <p className="mt-2 text-base text-neutral-300 font-semibold">
            Everything in One Place • ஒரே இடத்தில் முழுமையான தயாரிப்பு
          </p>
        </div>

        {/* The Offer Card Container */}
        <div className="rounded-3xl border-2 border-[#E5B83B]/80 bg-neutral-950 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {/* Urgency ticker banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-neutral-800 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-amber-400 font-semibold">
              <Clock className="h-4 w-4" />
              <span>Offer Ends Soon — Price soon increase aagum, so hurry up!</span>
              <span className="font-mono tabular-nums text-white bg-neutral-800 px-2 py-0.5 rounded">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            <div className="text-neutral-400 font-medium">
              Regular <span className="line-through">₹4,999</span> · Today <span className="text-amber-400 font-bold tabular-nums">₹999 Only</span>
            </div>
          </div>

          {/* Value Stack Breakdown */}
          <div className="mt-6 space-y-3.5">
            {stackItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-sm sm:text-base py-1.5 border-b border-neutral-800/40 text-neutral-200"
              >
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span className="font-medium">{item.title}</span>
                </div>
                <span className="text-xs sm:text-sm font-mono text-neutral-400 tabular-nums">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Highlight */}
          <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
            <div className="text-sm font-semibold text-neutral-400 line-through tracking-wider">
              Total Regular Price: ₹4,999
            </div>

            <div className="mt-1 flex items-baseline justify-center gap-3">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                Special Access:
              </span>
              <span className="font-display text-5xl sm:text-7xl font-black text-white tracking-tight tabular-nums">
                ₹999
              </span>
            </div>

            <div className="mt-2 text-sm sm:text-base font-bold text-emerald-400 tracking-wide">
              🎉 Save ₹4,000 (80% Instant Discount)
            </div>

            {/* CTA Button in Gold */}
            <div className="mt-6 flex justify-center">
              <a
                href="https://www.ambedkaracademy.in/courses/648764"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] hover:from-[#FFE28A] hover:via-[#F5D061] hover:to-[#E5B83B] px-5 sm:px-10 py-3.5 sm:py-4.5 text-sm sm:text-lg font-black text-black shadow-[0_0_25px_rgba(229,184,59,0.4)] hover:shadow-[0_0_35px_rgba(229,184,59,0.6)] hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">👉 GET COMPLETE ACCESS – ₹999</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[3] shrink-0" />
              </a>
            </div>

            <div className="mt-4 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              * Limited-time offer • Instant Digital Access • 100% Secure Payment
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Check, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

interface WhoIsThisForSectionProps {
  onOpenCheckout: () => void;
}

export const WhoIsThisForSection: React.FC<WhoIsThisForSectionProps> = ({ onOpenCheckout }) => {
  const criteria = [
    {
      text: "You don't know what to study first",
      sub: "Get a crystal-clear starting roadmap so you never stare blankly at an overwhelming syllabus.",
    },
    {
      text: "You are confused about previous-year questions",
      sub: "Understand exact question framing trends and recurring examiner patterns across past exams.",
    },
    {
      text: "You want structured preparation",
      sub: "Move from random chapter reading into an organized, step-by-step daily study structure.",
    },
    {
      text: "You need regular practice",
      sub: "Test your recall with topic-wise test practice to build speed, accuracy, and confidence.",
    },
    {
      text: "You want to revise important topics",
      sub: "High-yield revision summaries designed specifically for quick retention and zero panic.",
    },
    {
      text: "You are preparing for TNPSC Group 1, Group 2/2A or Group 4",
      sub: "Tailored materials covering prelims standards, syllabus overlap, and core state administration focus.",
      highlight: true,
    },
  ];

  return (
    <section id="who-is-this-for" className="py-20 md:py-28 bg-neutral-900/40 border-b border-neutral-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase mb-3">
            IS THIS THE RIGHT FIT?
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            This Is For You If…
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            If you check even two of these boxes, the ₹999 Complete System will save you months of trial and error.
          </p>
        </div>

        {/* Checkmark List Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {criteria.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl p-5 sm:p-6 border transition-all ${
                item.highlight
                  ? 'bg-amber-500/10 border-amber-500/40 md:col-span-2'
                  : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-black text-sm ${
                  item.highlight
                    ? 'bg-amber-500 text-neutral-950'
                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                }`}>
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <h3 className={`text-base sm:text-lg font-bold ${
                    item.highlight ? 'text-amber-300' : 'text-white'
                  }`}>
                    {item.text}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="mt-10 rounded-xl bg-neutral-950 border border-neutral-800 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="h-10 w-10 shrink-0 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">No prior coaching required</div>
              <div className="text-xs text-neutral-400">Designed for both fresh beginners and working aspirants studying part-time.</div>
            </div>
          </div>

          <a
            href="https://www.ambedkaracademy.in/courses/648764"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] hover:from-[#FFE28A] hover:via-[#F5D061] hover:to-[#E5B83B] px-5 sm:px-6 py-3 text-xs sm:text-sm font-black text-black shadow-[0_0_20px_rgba(229,184,59,0.35)] transition whitespace-nowrap cursor-pointer"
          >
            <span className="whitespace-nowrap">👉 GET ACCESS – ₹999</span>
            <ArrowRight className="h-4 w-4 stroke-[3] shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};

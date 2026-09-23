import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, BookOpen, PenTool, Search, RotateCcw } from 'lucide-react';

interface SimpleProcessSectionProps {
  onOpenCheckout: () => void;
}

export const SimpleProcessSection: React.FC<SimpleProcessSectionProps> = ({ onOpenCheckout }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      name: 'Learn',
      description: 'Understand the important topics.',
      icon: BookOpen,
      action: 'Focus on high-weightage syllabus chapters first instead of reading entire bulky textbooks blindly.',
      deliverable: 'Topic Summaries & Expert Roadmap',
    },
    {
      num: '02',
      name: 'Practice',
      description: 'Solve questions and test your knowledge.',
      icon: PenTool,
      action: 'Apply what you learned directly through targeted previous-year questions and sectional question banks.',
      deliverable: 'PYQ Drills & Mock Question Sets',
    },
    {
      num: '03',
      name: 'Analyse',
      description: 'Identify your mistakes and weak areas.',
      icon: Search,
      action: 'Pinpoint conceptual traps, negative marking tendencies, and time-management bottlenecks.',
      deliverable: 'Question Paper Pattern Analysis',
    },
    {
      num: '04',
      name: 'Revise',
      description: 'Revise again and improve your preparation.',
      icon: RotateCcw,
      action: 'Consolidate key formulas, Tamil heritage milestones, polity articles, and timelines.',
      deliverable: 'High-Yield Quick Revision Guides',
    },
  ];

  return (
    <section id="simple-process" className="py-20 md:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase mb-3">
            METHODOLOGY THAT WORKS
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            A Simple 4-Step Preparation System
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            A scientifically structured workflow that eliminates confusion and turns daily study into predictable exam results.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((st, index) => {
            const Icon = st.icon;
            const isCurrent = activeStep === index;

            return (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative rounded-2xl p-6 border transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-neutral-900 border-amber-500 shadow-xl shadow-amber-500/10 scale-[1.02]'
                    : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/40'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-black text-amber-400 tabular-nums">
                    {st.num}
                  </span>
                  <div className="h-9 w-9 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                <div className="text-xs uppercase font-mono text-neutral-400 mb-1">
                  Step {st.num}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {st.name}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  {st.description}
                </p>

                <div className="pt-3 border-t border-neutral-800/80 text-xs text-neutral-400">
                  <div className="font-semibold text-neutral-300 mb-1">{st.deliverable}</div>
                  <p className="text-neutral-400 leading-normal">{st.action}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prominent Flow Highlight Banner as requested: LEARN → PRACTICE → ANALYSE → REVISE */}
        <div className="mt-12 rounded-2xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 text-center relative overflow-hidden">
          <div className="text-xs uppercase font-bold tracking-widest text-amber-400 mb-3">
            THE WINNING FORMULA
          </div>
          <div className="font-display text-lg sm:text-2xl lg:text-3xl font-black text-white tracking-wide flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="text-amber-400">LEARN</span>
            <span className="text-neutral-600">→</span>
            <span className="text-white">PRACTICE</span>
            <span className="text-neutral-600">→</span>
            <span className="text-amber-400">ANALYSE</span>
            <span className="text-neutral-600">→</span>
            <span className="text-white">REVISE</span>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
            Repeat this 4-step loop for every unit in the syllabus. No more cramming at the last minute or forgetting what you studied.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="https://www.ambedkaracademy.in/courses/648764"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] hover:from-[#FFE28A] hover:via-[#F5D061] hover:to-[#E5B83B] px-5 sm:px-8 py-3.5 text-xs sm:text-sm font-black text-black shadow-[0_0_20px_rgba(229,184,59,0.35)] transition whitespace-nowrap cursor-pointer"
            >
              <span className="whitespace-nowrap">👉 START 4-STEP SYSTEM – ₹999</span>
              <ArrowRight className="h-4 w-4 stroke-[3] shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

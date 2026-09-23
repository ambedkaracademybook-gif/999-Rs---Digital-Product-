import React, { useState } from 'react';
import { BookOpen, Target, FileCheck, RefreshCw, BarChart3, FolderKanban, Check, ArrowRight, Smartphone } from 'lucide-react';
import mobileAppImg from '../assets/images/tnpsc_mobile_app_mockup_1790190085701.jpg';

interface WhatYouGetSectionProps {
  onOpenCheckout: () => void;
}

export const WhatYouGetSection: React.FC<WhatYouGetSectionProps> = ({
  onOpenCheckout,
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const features = [
    {
      icon: BookOpen,
      title: 'Previous Year Question Papers',
      description: 'Study previous-year questions and understand the exam pattern.',
      detail: 'Complete collection of curated previous 10 years papers with bilingual keys, official question analysis, and answer trend indicators.',
      badgeText: 'All Groups Included',
    },
    {
      icon: Target,
      title: 'Expert Guidance',
      description: 'Follow a clear preparation approach instead of studying randomly.',
      detail: 'Step-by-step topic sequencing so you never waste hours guessing what syllabus chapter to study first.',
      badgeText: 'Zero Guesswork',
    },
    {
      icon: FileCheck,
      title: 'Test Practices',
      description: 'Practice questions and identify where you need improvement.',
      detail: 'Timed mock sets and sectional topic drills modeled after the latest TNPSC standards to build speed and accuracy.',
      badgeText: 'Speed & Accuracy',
    },
    {
      icon: RefreshCw,
      title: 'Revision',
      description: 'Revise important topics and strengthen your preparation.',
      detail: 'Consolidated micro-notes and high-yield summary sheets for last-mile memory retention before the exam date.',
      badgeText: 'High-Yield Formula',
    },
    {
      icon: BarChart3,
      title: 'Question Paper Analysis',
      description: 'Understand recurring topics, question patterns and important areas.',
      detail: 'Weightage charts detailing recurring question themes across Tamil History, Polity, Aptitude, Geography, and Current Affairs.',
      badgeText: 'Topic Weightage',
    },
    {
      icon: FolderKanban,
      title: 'Group-Wise Materials',
      description: 'Group 1 • Group 2/2A • Group 4',
      detail: 'Separately categorized modules tailored strictly to syllabus depth: from Group 4 foundational basics up to Group 1 & 2 mains orientation.',
      badgeText: 'Tailored Modules',
    },
  ];

  return (
    <section id="what-you-get" className="py-20 md:py-28 bg-neutral-900/40 border-b border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase mb-3">
            EVERYTHING INCLUDED FOR ₹999
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Your Complete TNPSC Preparation System
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base">
            No fragmented sources, no endless telegram groups. Get every component structured neatly in one single portal.
          </p>
        </div>

        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selectedItemIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => setSelectedItemIndex(isSelected ? null : idx)}
                className={`relative rounded-2xl p-6 sm:p-7 border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 border-amber-500/80 shadow-xl shadow-amber-500/10'
                    : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 tracking-wide">
                    {item.badgeText}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span>{item.title}</span>
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>

                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-neutral-800 text-xs text-amber-200/90 leading-relaxed bg-neutral-950/60 p-3 rounded-lg">
                    {item.detail}
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-neutral-400 pt-3 border-t border-neutral-800/60">
                  <span className="text-[#E5B83B]">{isSelected ? 'Tap to collapse' : 'Tap to expand detail'}</span>
                  <span className="text-neutral-500">Included in ₹999</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* All-in-One Mobile App Visual & Offer Anchor */}
        <div className="mt-14 rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-10 overflow-hidden relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5B83B] tracking-wider uppercase mb-2 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                <Smartphone className="h-3.5 w-3.5" />
                <span>ALL-IN-ONE MOBILE APP PREPARATION</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Your Complete TNPSC Coaching In One Powerful Mobile App
              </h3>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                Carry your entire preparation library in your pocket. Solve previous-year question sets, take sectional mock tests, access structured study plans, and revise high-yield notes directly from your smartphone anytime, anywhere.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-neutral-300 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#E5B83B]" />
                  <span>Instant Mobile App & Web Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#E5B83B]" />
                  <span>PYQs + Mock Tests + Smart Notes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#E5B83B]" />
                  <span>Tailored for Group 1, 2/2A & 4</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://www.ambedkaracademy.in/courses/648764"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] hover:from-[#FFE28A] hover:via-[#F5D061] hover:to-[#E5B83B] px-5 sm:px-8 py-3.5 text-xs sm:text-sm font-black text-black shadow-[0_0_20px_rgba(229,184,59,0.35)] transition whitespace-nowrap cursor-pointer"
                >
                  <span className="whitespace-nowrap">👉 GET COMPLETE SYSTEM – ₹999</span>
                  <ArrowRight className="h-4 w-4 stroke-[3] shrink-0" />
                </a>
                <div className="text-xs text-neutral-400 flex items-center justify-center gap-2">
                  <span className="line-through">₹4,999</span>
                  <span className="font-bold text-white">₹999 today</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-[#E5B83B]/50 shadow-[0_0_30px_rgba(229,184,59,0.2)] bg-neutral-900 group">
                <img
                  src={mobileAppImg}
                  alt="TNPSC All-in-One Mobile App UI Mockup"
                  className="w-full h-auto object-cover max-h-[340px] transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-2 text-center text-[11px] text-[#E5B83B] font-semibold">
                📱 TNPSC All-In-One Mobile App Interface
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

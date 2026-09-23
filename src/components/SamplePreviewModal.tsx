import React, { useState } from 'react';
import { X, BookOpen, BarChart3, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface SamplePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
  initialCategory?: string;
}

export const SamplePreviewModal: React.FC<SamplePreviewModalProps> = ({
  isOpen,
  onClose,
  onOpenCheckout,
  initialCategory,
}) => {
  const [activeTab, setActiveTab] = useState<'pyq' | 'analysis' | 'revision'>('pyq');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 shadow-2xl text-left my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
          SAMPLE MATERIAL EXTRACT
        </div>
        <h3 className="font-display text-2xl font-black text-white">
          Inspect The ₹999 Preparation Quality
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Preview how our structured format cuts fluff and gives you exact exam points.
        </p>

        {/* Tab switch */}
        <div className="mt-5 flex gap-2 border-b border-neutral-800 pb-3">
          <button
            onClick={() => setActiveTab('pyq')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              activeTab === 'pyq'
                ? 'bg-amber-500 text-neutral-950 font-bold'
                : 'text-neutral-400 hover:text-white bg-neutral-950'
            }`}
          >
            1. Previous Year Papers
          </button>
          <button
            onClick={() => setActiveTab('analysis')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              activeTab === 'analysis'
                ? 'bg-amber-500 text-neutral-950 font-bold'
                : 'text-neutral-400 hover:text-white bg-neutral-950'
            }`}
          >
            2. Question Paper Analysis
          </button>
          <button
            onClick={() => setActiveTab('revision')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              activeTab === 'revision'
                ? 'bg-amber-500 text-neutral-950 font-bold'
                : 'text-neutral-400 hover:text-white bg-neutral-950'
            }`}
          >
            3. Revision Micro-Notes
          </button>
        </div>

        {/* Tab content */}
        <div className="mt-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-300 min-h-[220px]">
          {activeTab === 'pyq' && (
            <div className="space-y-3">
              <div className="font-bold text-white flex items-center justify-between">
                <span>[PYQ Model] Unit 8 — History, Culture & Heritage of Tamil Nadu</span>
                <span className="text-[11px] font-mono text-amber-400">Group 1 & Group 2</span>
              </div>
              <p className="text-neutral-300">
                <strong>Q1:</strong> Which of the following excavations provided the earliest recorded epigraphic evidence of Tamil-Brahmi script associated with maritime trade?
              </p>
              <div className="space-y-1.5 pl-3 border-l-2 border-amber-500/40 text-neutral-400 text-xs">
                <div>(A) Adichanallur</div>
                <div className="text-amber-300 font-semibold">(B) Keeladi & Kodumanal [Official Answer]</div>
                <div>(C) Arikamedu</div>
                <div>(D) Korkai</div>
              </div>
              <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
                <span className="text-amber-400 font-bold">Analysis Insight:</span> Questions on Keeladi, Kodumanal, and Sangam maritime trade have appeared in 4 out of the last 5 TNPSC exams.
              </div>
            </div>
          )}

          {activeTab === 'analysis' && (
            <div className="space-y-3">
              <div className="font-bold text-white">
                Exam Blueprint: Recurring Weightage Matrix
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center bg-neutral-900 p-2 rounded">
                  <span>Unit 8 (Tamil Culture & Heritage)</span>
                  <span className="font-mono text-amber-400 font-bold">40–45 Questions</span>
                </div>
                <div className="flex justify-between items-center bg-neutral-900 p-2 rounded">
                  <span>Unit 9 (Tamil Nadu Administration)</span>
                  <span className="font-mono text-amber-400 font-bold">25–30 Questions</span>
                </div>
                <div className="flex justify-between items-center bg-neutral-900 p-2 rounded">
                  <span>Indian Polity & Constitution</span>
                  <span className="font-mono text-amber-400 font-bold">20–22 Questions</span>
                </div>
                <div className="flex justify-between items-center bg-neutral-900 p-2 rounded">
                  <span>Aptitude & Mental Ability</span>
                  <span className="font-mono text-amber-400 font-bold">25 Fixed Questions</span>
                </div>
              </div>
              <p className="text-[11px] text-neutral-400 italic">
                *The system guides you to prioritize Units 8, 9 & Aptitude first to secure over 60% of total qualifying marks.
              </p>
            </div>
          )}

          {activeTab === 'revision' && (
            <div className="space-y-3">
              <div className="font-bold text-white">
                High-Yield Fast Revision Sheet: Core Constitutional Articles
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800">
                  <div className="font-bold text-amber-400">Article 324</div>
                  <div className="text-neutral-300">Election Commission of India powers & duties</div>
                </div>
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800">
                  <div className="font-bold text-amber-400">Article 315–323</div>
                  <div className="text-neutral-300">Public Service Commissions (UPSC & TNPSC)</div>
                </div>
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800">
                  <div className="font-bold text-amber-400">Article 243K</div>
                  <div className="text-neutral-300">Panchayat Raj Elections & State Election Commission</div>
                </div>
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800">
                  <div className="font-bold text-amber-400">73rd & 74th Amend.</div>
                  <div className="text-neutral-300">Local self-government constitutional status (1992)</div>
                </div>
              </div>
              <p className="text-xs text-neutral-400">
                All 6 pillars are curated in this clean, no-clutter format so you can revise within 15 minutes before the exam hall.
              </p>
            </div>
          )}
        </div>

        {/* Modal Bottom CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800">
          <div>
            <div className="text-xs text-neutral-400">Get complete unlimited access today</div>
            <div className="font-bold text-white text-base">
              ₹999 <span className="text-xs text-neutral-400 line-through">₹4,999</span>
            </div>
          </div>

          <a
            href="https://www.ambedkaracademy.in/courses/648764"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] hover:from-[#FFE28A] hover:via-[#F5D061] hover:to-[#E5B83B] px-5 sm:px-6 py-3 text-xs sm:text-sm font-black text-black shadow-[0_0_20px_rgba(229,184,59,0.35)] transition whitespace-nowrap cursor-pointer"
          >
            <span className="whitespace-nowrap">👉 GET COMPLETE SYSTEM – ₹999</span>
            <ArrowRight className="h-4 w-4 stroke-[3] shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
};

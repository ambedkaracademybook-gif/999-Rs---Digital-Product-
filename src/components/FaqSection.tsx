import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs = [
    {
      q: 'What do I get for ₹999?',
      a: 'You get the complete TNPSC preparation system with previous-year papers, guidance, test practices, revision and analysis materials.',
    },
    {
      q: 'Which exams is this useful for?',
      a: 'Materials are organized for Group 1, Group 2/2A and Group 4 preparation.',
    },
    {
      q: 'Is this beginner-friendly?',
      a: 'Yes. The system follows a simple Learn → Practice → Analyse → Revise approach.',
    },
    {
      q: 'How do I access it?',
      a: 'After payment, you can access the available course/materials digitally.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-24 bg-neutral-900/30 border-b border-neutral-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase mb-2">
            GOT QUESTIONS?
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400">
            Quick, straight-to-the-point answers before you join.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-neutral-800 bg-neutral-950/70 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left text-base sm:text-lg font-bold text-white hover:text-amber-400 transition"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-neutral-800/60 bg-neutral-900/20">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

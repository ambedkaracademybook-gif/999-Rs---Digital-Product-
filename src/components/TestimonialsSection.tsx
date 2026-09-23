import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote, ArrowRight, Smartphone } from 'lucide-react';

const CTA_URL = 'https://www.ambedkaracademy.in/courses/648764';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  scoreOrExam: string;
  quote: string;
  tamilQuote?: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'M. Vignesh Kumar',
    role: 'Group 4 Aspirant (Cleared 2024)',
    location: 'Madurai',
    scoreOrExam: 'Score: 168/200 in Final Exam',
    quote: 'Before this system, I wasted 6 months reading random School books without knowing what TNPSC actually asks. The PYQ breakdown and Unit 8 Keeladi notes gave me 22 direct hits!',
    tamilQuote: 'நேரம் வீணடிக்காமல் முறைப்படி படிக்க சிறந்த வழி. ₹999-க்கு இவ்வளவு content எதிர்பாரல!',
    rating: 5,
  },
  {
    id: 2,
    name: 'S. Divya Bharathi',
    role: 'Working Professional (Evening Study)',
    location: 'Chennai (OMR)',
    scoreOrExam: 'Group 2/2A Prelims Qualified',
    quote: 'Being in an IT job, I only get 2.5 hours every evening. The 4-step system (Learn → Practice → Analyse → Revise) helped me stay consistent. The mobile app format makes revising during commute super easy.',
    tamilQuote: 'வேலைக்கு போயிட்டே படிக்கிறவங்களுக்கு இந்த Pocket App ரொம்ப பயனுள்ளதாக இருக்கிறது.',
    rating: 5,
  },
  {
    id: 3,
    name: 'R. Karthi Keyan',
    role: 'Full-Time Aspirant (2nd Attempt)',
    location: 'Coimbatore',
    scoreOrExam: 'Mock Score: Jumped from 118 to 164',
    quote: 'I failed my first attempt by 8 marks because I neglected Aptitude and Unit 9. The topic-wise question analysis pinpointed my exact weak spots. Today I can solve 25 aptitude questions in under 20 minutes.',
    tamilQuote: 'Analytic matrix மூலம் எனது தவறுகளை எளிதாக திருத்த முடிந்தது.',
    rating: 5,
  },
  {
    id: 4,
    name: 'P. Meenakshi Sundaram',
    role: 'Housewife & Mother',
    location: 'Tiruchirappalli',
    scoreOrExam: 'Group 4 VAO Aimed (Rank 34 in State Mock)',
    quote: 'No expensive ₹25,000 coaching center in Chennai was possible for me from home. This single app gave me structured question banks and bilingual answer keys. Pure gold for self-study aspirants.',
    tamilQuote: 'வீட்டில் இருந்தே பயிற்சி பெற எனக்கு மிகச் சிறந்த வழிகாட்டி.',
    rating: 5,
  },
  {
    id: 5,
    name: 'A. Sathish Raja',
    role: 'Tamil Medium Student',
    location: 'Salem',
    scoreOrExam: 'Group 2 Prelims Scored 154',
    quote: 'General Tamil 100 questions and Unit 8 Thirukkural summaries are curated with extreme clarity. No confusing jargon, just pure exam-relevant questions with official key references.',
    tamilQuote: 'பொதுத்தமிழ் வினாக்கள் மற்றும் திருக்குறள் குறிப்புகள் தேர்வு நோக்கில் மிக துல்லியம்!',
    rating: 5,
  },
  {
    id: 6,
    name: 'K. Anitha',
    role: 'First-Time Aspirant (B.Com Grad)',
    location: 'Tirunelveli',
    scoreOrExam: 'Group 4 Preparation Batch',
    quote: 'Syllabus was looking like an endless mountain. The zero-guesswork roadmap told me exactly which 30 chapters give 70% of questions. Finished my first revision in just 45 days.',
    tamilQuote: 'எங்கிருந்து தொடங்குவது என்று குழம்பிய எனக்கு சரியான பாதையை காட்டியது.',
    rating: 5,
  },
  {
    id: 7,
    name: 'G. Naveen Prasanth',
    role: 'Engineering Graduate shifting to TNPSC',
    location: 'Erode',
    scoreOrExam: 'Group 1 Prelims Aspirant',
    quote: 'Polity and Indian Economy were tough for me as an engineer. The high-yield fast revision sheets with Article shortcuts and timeline charts made remembering constitutional articles effortless.',
    tamilQuote: 'Polity Articles மற்றும் Economy பகுதிகள் எளிமையாக புரியும் படி உள்ளது.',
    rating: 5,
  },
  {
    id: 8,
    name: 'T. Subhashini',
    role: 'Group 4 VAO Aspirant',
    location: 'Vellore',
    scoreOrExam: 'Regular Practice User',
    quote: 'The timed test drills feel identical to the actual OMR pressure. My negative marking dropped drastically after following the mistake analysis protocol.',
    tamilQuote: 'தேர்வு பயம் குறைந்து அதிக தன்னம்பிக்கை கிடைத்துள்ளது.',
    rating: 5,
  },
  {
    id: 9,
    name: 'J. Praveen Kumar',
    role: 'Self-Study Aspirant',
    location: 'Thanjavur',
    scoreOrExam: 'Group 2/2A Mock Top 5%',
    quote: 'The 10-year question paper trend analysis opened my eyes. Instead of blindly memorizing everything, I prepared the recurring core themes and saved hundreds of study hours.',
    tamilQuote: 'வினாத்தாள் போக்கு பகுப்பாய்வு (Analysis) மூலம் மிகக் குறைந்த நேரத்தில் அதிக மதிப்பெண்!',
    rating: 5,
  },
  {
    id: 10,
    name: 'B. Revathi',
    role: 'Group 1 & 2 Dual Aspirant',
    location: 'Dindigul',
    scoreOrExam: 'Overall Syllabus Completed',
    quote: 'Accessing all 6 pillars — PYQs, Guidance, Test Series, Revision, Pattern Analysis, and Group-wise segregation on my mobile phone for ₹999 is the best investment I ever made for my government job dream.',
    tamilQuote: 'ஒரே மொபைல் செயலியில் அனைத்து பாடங்களும் கிடைப்பது மிகப்பெரிய வரப்பிரசாதம்.',
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-black border-b border-neutral-900 overflow-hidden relative">
      {/* Subtle background glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full bg-[#E5B83B]/5 blur-[120px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5B83B] tracking-wider uppercase mb-2 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
              <Star className="h-3.5 w-3.5 fill-[#E5B83B]" />
              <span>REAL SUCCESS STORIES • தேர்வர்களின் கருத்துகள்</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Trusted by 10,000+ TNPSC Aspirants Across Tamil Nadu
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl">
              See how serious aspirants across Tamil Nadu are replacing confusion with a structured, step-by-step preparation plan.
            </p>
          </div>

          {/* Desktop Left/Right Controls */}
          <div className="flex items-center gap-2 self-start md:self-end shrink-0">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#E5B83B] transition cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#E5B83B] transition cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container with 10 Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="w-[85vw] sm:w-[360px] md:w-[380px] shrink-0 snap-start rounded-2xl bg-neutral-950 border border-neutral-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-[#E5B83B]/50 transition-all shadow-xl hover:shadow-[0_0_25px_rgba(229,184,59,0.15)] group"
            >
              <div>
                {/* Header: Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#E5B83B] text-[#E5B83B]" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="h-3 w-3 stroke-[2.5]" />
                    <span>Verified Aspirant</span>
                  </span>
                </div>

                {/* Score / Exam Highlight Badge */}
                <div className="mb-3 inline-block rounded-md bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-[11px] font-mono font-bold text-[#E5B83B]">
                  🎯 {t.scoreOrExam}
                </div>

                {/* English Review Quote */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  "{t.quote}"
                </p>

                {/* Tamil Snippet */}
                {t.tamilQuote && (
                  <p className="mt-3 text-[11px] sm:text-xs text-amber-300/90 font-medium italic border-l-2 border-[#E5B83B]/60 pl-2.5 leading-normal">
                    {t.tamilQuote}
                  </p>
                )}
              </div>

              {/* Author Lockup */}
              <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F5D061] to-[#E5B83B] text-black font-black text-sm shadow-md">
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-bold text-white truncate">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-neutral-400 truncate">
                    {t.role} • <span className="text-[#E5B83B]">{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe Hint on Mobile */}
        <div className="mt-2 text-center text-xs text-neutral-400 flex items-center justify-center gap-1.5 md:hidden">
          <span>👈 Swipe horizontally to view all 10 reviews 👉</span>
        </div>

        {/* CTA Bar below Testimonials */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">
              Join 10,000+ TNPSC Aspirants Studying Smarter Today
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Start with the ₹999 All-In-One Mobile App • Save ₹4,000 • Instant Access
            </p>
          </div>

          <a
            href={CTA_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] hover:from-[#FFE28A] hover:via-[#F5D061] hover:to-[#E5B83B] px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-black text-black shadow-[0_0_20px_rgba(229,184,59,0.35)] transition whitespace-nowrap cursor-pointer"
          >
            <span className="whitespace-nowrap">👉 GET COMPLETE ACCESS – ₹999</span>
            <ArrowRight className="h-4 w-4 stroke-[3] shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};

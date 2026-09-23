import React from 'react';
import { ArrowRight, CheckCircle2, Smartphone, Sparkles } from 'lucide-react';
import tnpscLogo from '../assets/images/tnpsc_official_emblem_1790184894876.jpg';
import { WistiaPlayerComponent } from './WistiaPlayerComponent';

const CTA_URL = 'https://www.ambedkaracademy.in/courses/648764';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-5 pb-10 sm:pt-8 sm:pb-14 md:pt-10 md:pb-16 border-b border-neutral-900 bg-black text-neutral-100">
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[350px] w-[500px] rounded-full bg-[#E5B83B]/10 blur-[130px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-6xl px-3.5 sm:px-6 lg:px-8">
        
        {/* Solution-focused Hero Layout: Mobile App Type All-In-One */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* LEFT: Reduced, Punchy Solution for the Visitor (10% Tamil) */}
          <div className="lg:col-span-6 text-left">
            {/* Top Badge: All-In-One Mobile App */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[11px] sm:text-xs font-bold text-[#E5B83B] mb-2.5">
              <img
                src={tnpscLogo}
                alt="TNPSC Official Logo"
                className="h-4 w-4 rounded-full object-cover shrink-0"
              />
              <span className="flex items-center gap-1">
                <Smartphone className="h-3 w-3 inline text-[#E5B83B]" />
                TNPSC ALL-IN-ONE MOBILE APP • முழு தீர்வு
              </span>
            </div>

            {/* Reduced Title (Only ~10% Tamil as requested) */}
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              Crack TNPSC With All-In-One Mobile Prep App —{' '}
              <span className="bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] bg-clip-text text-transparent">
                ஒரே தீர்வு!
              </span>
            </h1>

            {/* Reduced Subtitle: Direct solution to visitor pain point (~10% Tamil) */}
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
              Stop wasting hours searching across books and telegram groups. Get PYQ papers, test series, syllabus roadmap & fast revision right inside your pocket app — <span className="text-white font-semibold">இன்றே தொடங்குங்கள்!</span>
            </p>

            {/* Quick 3-Point Solution Badges */}
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] sm:text-xs font-semibold text-neutral-300">
              <span className="flex items-center gap-1 bg-neutral-900/80 px-2.5 py-1 rounded-md border border-neutral-800">
                <CheckCircle2 className="h-3 w-3 text-[#E5B83B] shrink-0" />
                <span>All-In-One Pocket App</span>
              </span>
              <span className="flex items-center gap-1 bg-neutral-900/80 px-2.5 py-1 rounded-md border border-neutral-800">
                <CheckCircle2 className="h-3 w-3 text-[#E5B83B] shrink-0" />
                <span>Group 1, 2/2A & 4</span>
              </span>
              <span className="flex items-center gap-1 bg-neutral-900/80 px-2.5 py-1 rounded-md border border-neutral-800">
                <CheckCircle2 className="h-3 w-3 text-[#E5B83B] shrink-0" />
                <span>Tamil & English Medium</span>
              </span>
            </div>

            {/* Guaranteed Single-Line Gold CTA on Mobile & Desktop */}
            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href={CTA_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] hover:from-[#FFE28A] hover:via-[#F5D061] hover:to-[#E5B83B] px-5 sm:px-7 py-3 text-xs sm:text-sm font-black text-black shadow-[0_0_20px_rgba(229,184,59,0.4)] hover:shadow-[0_0_30px_rgba(229,184,59,0.6)] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap text-center"
              >
                <span className="whitespace-nowrap">👉 GET APP ACCESS – ₹999</span>
                <ArrowRight className="h-4 w-4 stroke-[3] shrink-0" />
              </a>
            </div>

            {/* Quick Pricing Micro-line */}
            <div className="mt-2.5 flex items-center gap-2 text-[11px] text-neutral-400">
              <span className="line-through text-neutral-500 font-mono">₹4,999</span>
              <span className="font-black text-white text-xs font-mono">Offer ₹999</span>
              <span className="text-emerald-400 font-bold">• Save ₹4,000 Today</span>
            </div>
          </div>

          {/* RIGHT: Wistia Video with Warning and Full Audio Control */}
          <div className="lg:col-span-6">
            <WistiaPlayerComponent mediaId="46umdi0fy9" />
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, Sparkles } from 'lucide-react';

interface RecentBuyer {
  name: string;
  location: string;
  timeAgo: string;
  course: string;
}

const BUYERS: RecentBuyer[] = [
  { name: 'Karthik R.', location: 'Madurai', timeAgo: '2 minutes ago', course: '₹999 Complete System' },
  { name: 'Priya S.', location: 'Chennai', timeAgo: '4 minutes ago', course: 'Group 1 & 2 Complete System' },
  { name: 'Anbarasan M.', location: 'Coimbatore', timeAgo: 'Just now', course: '₹999 Complete Preparation' },
  { name: 'Divya K.', location: 'Salem', timeAgo: '6 minutes ago', course: 'Group 4 VAO System' },
  { name: 'Saravanan V.', location: 'Tirunelveli', timeAgo: '1 minute ago', course: '₹999 Complete System' },
  { name: 'Meenakshi N.', location: 'Tiruchirappalli', timeAgo: '3 minutes ago', course: 'Full Preparation Kit' },
  { name: 'Vignesh P.', location: 'Vellore', timeAgo: '5 minutes ago', course: '₹999 Complete System' },
  { name: 'Sangeetha T.', location: 'Erode', timeAgo: 'Just now', course: '4-Step Preparation System' },
];

export const RecentBuyerPopup: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Initial delay before first popup
    const initialTimer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 2500);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    const cycleInterval = setInterval(() => {
      // Hide
      setIsVisible(false);

      // Switch to next buyer after 800ms fade-out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % BUYERS.length);
        setIsVisible(true);
      }, 800);
    }, 6500);

    return () => clearInterval(cycleInterval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const currentBuyer = BUYERS[currentIndex];

  return (
    <aside
      aria-label="Recent Enrollments"
      className={`fixed bottom-20 sm:bottom-24 left-4 z-40 max-w-xs sm:max-w-sm transition-all duration-300 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
    >
      <div className="relative flex items-center gap-3 rounded-2xl bg-neutral-900/95 border border-neutral-700/80 p-3.5 shadow-2xl backdrop-blur-md text-left">
        {/* Buyer avatar initial */}
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-neutral-950 font-black text-sm shadow-sm">
          {currentBuyer.name.charAt(0)}
          <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white ring-2 ring-neutral-900">
            <CheckCircle2 className="h-3 w-3 stroke-[3]" />
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 pr-4 min-w-0">
          <div className="flex items-center gap-1.5 text-xs text-white font-bold truncate">
            <span className="truncate">{currentBuyer.name}</span>
            <span className="text-neutral-400 font-normal">from</span>
            <span className="text-amber-400 font-semibold">{currentBuyer.location}</span>
          </div>

          <div className="text-[11px] text-neutral-300 font-medium truncate mt-0.5">
            Enrolled in <span className="text-white font-semibold">{currentBuyer.course}</span>
          </div>

          <div className="flex items-center gap-2 mt-1 text-[10px] text-neutral-400">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Aspirant
            </span>
            <span aria-hidden="true">·</span>
            <span>{currentBuyer.timeAgo}</span>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 p-1 text-neutral-500 hover:text-white rounded-md transition"
          aria-label="Dismiss notification"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </aside>
  );
};

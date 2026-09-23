import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-900 bg-black py-8 text-neutral-400 text-xs sm:text-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} TNPSC Complete Preparation System. All rights reserved.</p>
          <p className="text-[11px] text-neutral-400 max-w-xl text-center md:text-right">
            Disclaimer: This preparation system is an independent educational training resource and is not officially affiliated with or endorsed by the Tamil Nadu Public Service Commission (TNPSC).
          </p>
        </div>
      </div>
    </footer>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { SimpleProcessSection } from './components/SimpleProcessSection';
import { WhoIsThisForSection } from './components/WhoIsThisForSection';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { SamplePreviewModal } from './components/SamplePreviewModal';
import { StickyFooterCta } from './components/StickyFooterCta';
import { RecentBuyerPopup } from './components/RecentBuyerPopup';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [sampleCategory, setSampleCategory] = useState<string | undefined>();

  const handleOpenCheckout = () => {
    // Also opens checkout or directs to Ambedkar Academy course link
    window.location.href = 'https://www.ambedkaracademy.in/courses/648764';
  };

  const handleOpenSampleModal = (category?: string) => {
    setSampleCategory(category);
    setIsSampleModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 flex flex-col antialiased selection:bg-[#E5B83B] selection:text-black pb-20 sm:pb-24">
      {/* Scrollable Header (Non-sticky) with 2-Minute Timer Offer Strip */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section (Left Text with 20% Tamil, Right Wistia Video with Tap to Unmute) */}
        <HeroSection
          onOpenSampleModal={() => handleOpenSampleModal('General')}
        />

        {/* 2. What You Get Section */}
        <WhatYouGetSection
          onOpenCheckout={handleOpenCheckout}
          onOpenSampleModal={handleOpenSampleModal}
        />

        {/* 3. Simple Process (4-Step System: LEARN → PRACTICE → ANALYSE → REVISE) */}
        <SimpleProcessSection onOpenCheckout={handleOpenCheckout} />

        {/* 4. Who Is This For? Section */}
        <WhoIsThisForSection onOpenCheckout={handleOpenCheckout} />

        {/* 5. Offer Section (₹999 Anchor, Regular ₹4,999, Value Stack & Countdown) */}
        <OfferSection onOpenCheckout={handleOpenCheckout} />

        {/* 6. FAQ Section */}
        <FaqSection />

        {/* 7. Final CTA Section */}
        <FinalCtaSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Recent Buyer Social Proof Popup in Below Left Corner */}
      <RecentBuyerPopup />

      {/* Sticky Footer with Prominent Single-Line ₹999 Gold CTA */}
      <StickyFooterCta
        onOpenSampleModal={() => handleOpenSampleModal('General')}
      />

      {/* Instant Checkout / Enrollment Modal (Fallback) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Sample Material Preview Modal */}
      <SamplePreviewModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        onOpenCheckout={handleOpenCheckout}
        initialCategory={sampleCategory}
      />
    </div>
  );
}

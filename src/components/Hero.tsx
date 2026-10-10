import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/products';

interface HeroProps {
  onShopClick: () => void;
  onDiscoverClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onDiscoverClick }) => {
  return (
    <section className="relative w-full min-h-[92vh] flex items-end justify-start overflow-hidden bg-[#111111]">
      {/* Background Campaign Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="IUREA performance activewear campaign featuring athletic model in fitted obsidian training apparel"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured Contrast Scrims for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/85 via-[#111111]/40 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
        <div className="max-w-3xl">
          {/* Subtle Category Kicker */}
          <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B7FF4A]">
            <span className="inline-block w-2 h-2 bg-[#B7FF4A]" aria-hidden="true" />
            <span>Autumn / Winter Activewear Capsule</span>
          </div>

          {/* Primary Headline */}
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-[-0.03em] leading-[0.92] text-[#F5F4F0] mb-6 drop-shadow-sm">
            TRAIN HARD.<br />
            <span className="text-[#B7FF4A]">LOOK POWERFUL.</span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#F5F4F0]/90 font-normal max-w-xl leading-relaxed mb-8">
            Performance-driven essentials designed to move with you. Engineered silhouettes that command the room from warm-up to final set.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onShopClick}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#B7FF4A] text-[#111111] font-bold text-xs sm:text-sm uppercase tracking-[0.16em] hover:bg-[#a5ef3a] active:scale-[0.98] transition-all duration-150 shadow-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Shop The Collection</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onDiscoverClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#F5F4F0] border border-white/20 hover:border-white/60 hover:bg-white/5 active:scale-[0.98] transition-all duration-150 font-bold text-xs sm:text-sm uppercase tracking-[0.16em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF4A]"
            >
              <span>Discover IUREA</span>
            </button>
          </div>
        </div>

        {/* Bottom Strip: Subtle scroll indicator & editorial tag */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono uppercase text-[#777777]">
          <div className="flex items-center gap-6">
            <span>DROP 01 // CORE ESSENTIALS</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="hidden sm:inline">AUTHENTIC ATHLETIC CUT</span>
          </div>

          <button
            onClick={onShopClick}
            className="flex items-center gap-2 text-[#F5F4F0]/60 hover:text-[#B7FF4A] transition-colors cursor-pointer group"
            aria-label="Scroll to featured collection"
          >
            <span className="tracking-widest">SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#B7FF4A]" />
          </button>
        </div>
      </div>
    </section>
  );
};

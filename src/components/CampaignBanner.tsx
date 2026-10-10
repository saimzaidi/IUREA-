import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/products';

interface CampaignBannerProps {
  onShopClick: () => void;
}

export const CampaignBanner: React.FC<CampaignBannerProps> = ({ onShopClick }) => {
  return (
    <section id="campaign-section" className="relative w-full py-28 md:py-36 bg-[#111111] overflow-hidden scroll-mt-20">
      {/* Background Campaign Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.banner}
          alt="IUREA training campaign in brutalist athletic gym space"
          className="w-full h-full object-cover object-center scale-100 filter brightness-75 contrast-110"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Measured Contrast Scrims */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/70 to-[#111111]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/60 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#B7FF4A] mb-6 backdrop-blur-sm">
            <span>EDITORIAL CAMPAIGN · 2026</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.03em] leading-[0.95] text-[#F5F4F0] mb-6">
            NO COMPROMISE ON <br />
            <span className="text-[#B7FF4A]">FORM OR FUNCTION.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#F5F4F0]/80 leading-relaxed mb-8 max-w-lg">
            Built for heavy deadlifts, high box jumps, and long endurance intervals. When your clothing moves seamlessly with your body, your focus stays purely on the standard you set for yourself.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onShopClick}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#B7FF4A] text-[#111111] font-bold text-xs sm:text-sm uppercase tracking-[0.16em] hover:bg-[#a5ef3a] active:scale-[0.98] transition-all duration-150 shadow-xl group"
            >
              <span>Explore The Drop</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <span className="text-xs font-mono text-[#777777] uppercase tracking-wider pl-2">
              LIMITED QUANTITIES · WORLDWIDE SHIPPING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

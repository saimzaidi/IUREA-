import React from 'react';
import { BRAND_CONFIG } from '../data/products';
import { BrandLogo } from './BrandLogo';

export const BrandStory: React.FC = () => {
  return (
    <section id="brand-story" className="w-full py-28 bg-[#111111] border-b border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Brand Lockup & Tag */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B7FF4A] mb-4">
              <span>OUR ORIGIN & ETHOS</span>
            </div>

            <div className="mb-6">
              <BrandLogo size="lg" />
            </div>

            <p className="text-xl sm:text-2xl font-display font-bold uppercase text-[#F5F4F0] leading-tight">
              {BRAND_CONFIG.storyHeadline}
            </p>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs font-mono uppercase text-[#777777]">
                [ Editable Founder Note Space ]
              </p>
              <p className="text-xs text-[#777777] mt-1 italic">
                Reserved for the official IUREA™ founder statement and brand genesis upon brand release.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Story Body */}
          <div className="lg:col-span-7 space-y-6 text-[#F5F4F0]/85 text-base sm:text-lg leading-relaxed">
            {BRAND_CONFIG.storyBody.map((paragraph, index) => (
              <p key={index} className={index === 0 ? 'text-lg sm:text-xl font-medium text-[#F5F4F0]' : 'text-sm sm:text-base text-[#777777]'}>
                {paragraph}
              </p>
            ))}

            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/10 font-mono text-xs">
              <div>
                <p className="text-[#B7FF4A] font-bold uppercase">FOCUS</p>
                <p className="text-[#777777] mt-1">Weight Training & Conditioning</p>
              </div>
              <div>
                <p className="text-[#B7FF4A] font-bold uppercase">FIT PROFILE</p>
                <p className="text-[#777777] mt-1">Sculpted Athletic Taper</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-[#B7FF4A] font-bold uppercase">IDENTITY</p>
                <p className="text-[#777777] mt-1">Minimalist Obsidian</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

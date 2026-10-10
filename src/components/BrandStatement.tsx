import React from 'react';
import { IMAGES } from '../data/products';
import { ArrowUpRight } from 'lucide-react';

interface BrandStatementProps {
  onShopClick: () => void;
}

export const BrandStatement: React.FC<BrandStatementProps> = ({ onShopClick }) => {
  return (
    <section className="relative w-full py-28 bg-[#111111] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery (Asymmetrical 5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#181818] border border-white/10 group">
              <img
                src={IMAGES.statement}
                alt="IUREA athlete mid-movement showcasing athletic silhouette and focus"
                className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Editorial Caption Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#F5F4F0]/80">
                <span>MOVEMENT NO. 04</span>
                <span className="text-[#B7FF4A]">DISCIPLINE IN SILENCE</span>
              </div>
            </div>

            {/* Subtle decorative offset border box */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-white/5 -z-10 pointer-events-none" />
          </div>

          {/* Right Column: Statement & Copy (Asymmetrical 7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6 text-xs font-mono uppercase tracking-[0.25em] text-[#B7FF4A]">
              <span className="w-8 h-[1px] bg-[#B7FF4A]" />
              <span>THE IUREA PHILOSOPHY</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.03em] leading-[0.98] text-[#F5F4F0] mb-8">
              BUILT FOR THE WORK.<br />
              <span className="text-[#F5F4F0]/60">DESIGNED TO </span>
              <span className="text-[#B7FF4A]">STAND OUT.</span>
            </h2>

            <div className="space-y-6 text-[#F5F4F0]/80 text-base sm:text-lg leading-relaxed max-w-xl">
              <p>
                True presence in the gym isn’t about loud graphics or empty hype. It comes from the quiet certainty of putting in the work and wearing activewear built to reflect that intensity.
              </p>
              <p className="text-sm sm:text-base text-[#777777]">
                We engineer our pieces with deliberate proportions — accentuating shoulders and chest while maintaining natural torso drape. Minimalist aesthetic, unwavering confidence, and absolute freedom of movement for your demanding routines.
              </p>
            </div>

            {/* Tri-metric brand pillar row */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/10 text-left">
              <div>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F4F0]">01</p>
                <p className="text-xs font-mono uppercase text-[#777777] mt-1">Sculpted Taper</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-[#B7FF4A]">02</p>
                <p className="text-xs font-mono uppercase text-[#777777] mt-1">Obsidian Palette</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F4F0]">03</p>
                <p className="text-xs font-mono uppercase text-[#777777] mt-1">Zero Distraction</p>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onShopClick}
                className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#B7FF4A] hover:text-white transition-colors group"
              >
                <span>EXPLORE THE ACTIVEWEAR COLLECTION</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck, Dumbbell, Sparkles } from 'lucide-react';

export const ProductHighlights: React.FC = () => {
  const highlights = [
    {
      num: '01',
      title: 'Fit & Silhouette',
      subtitle: 'Athletic Proportion Engineering',
      description: 'Cut with precision to complement upper-body definition. A tailored shoulder and lat drape paired with a relaxed waistline ensures you feel athletic and confident throughout every session.',
      icon: Dumbbell,
      tag: 'STRUCTURE'
    },
    {
      num: '02',
      title: 'Everyday Versatility',
      subtitle: 'From Compound Lifts to Recovery',
      description: 'Balanced garment weight and clean finish allow for effortless transition from high-effort barbell work to outdoor conditioning and relaxed daily wear without losing form.',
      icon: ShieldCheck,
      tag: 'MOBILITY'
    },
    {
      num: '03',
      title: 'Style & Expression',
      subtitle: 'Understated Obsidian Presence',
      description: 'A disciplined palette of obsidian blacks, warm bone, and steel tones. Minimalist typography and discreet insignia let your physique and hard work speak for themselves.',
      icon: Sparkles,
      tag: 'AESTHETIC'
    }
  ];

  return (
    <section id="highlights" className="w-full py-24 bg-[#0d0d0d] border-b border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B7FF4A] mb-3">
            <span>DESIGN INTEGRITY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-[-0.02em] text-[#F5F4F0]">
            Engineered For The Athlete
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#777777] leading-relaxed">
            Every seam, cut, and panel is intentionally curated for natural movement, refined drape, and lasting gym presence.
          </p>
        </div>

        {/* 3 Visually Distinct Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="relative p-8 bg-[#141414] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Index & Tag */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                    <span className="font-mono text-2xl font-black text-[#B7FF4A] group-hover:translate-x-1 transition-transform">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#777777] uppercase px-2 py-0.5 border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 mb-6 flex items-center justify-center bg-white/5 text-[#F5F4F0] border border-white/10 group-hover:border-[#B7FF4A] group-hover:text-[#B7FF4A] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F0] mb-2 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#B7FF4A] uppercase tracking-wider mb-4">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#777777] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line indicator */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center text-[11px] font-mono text-[#777777] group-hover:text-[#F5F4F0] transition-colors">
                  <span>UNCOMPROMISING ACTIVEWEAR STANDARD</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

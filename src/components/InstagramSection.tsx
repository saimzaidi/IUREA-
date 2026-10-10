import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG, IMAGES } from '../data/products';

export const InstagramSection: React.FC = () => {
  const posts = [
    {
      id: 1,
      image: IMAGES.sculptTee,
      caption: 'Drop 01: Sculpt Performance Tee in Obsidian.',
      tag: '@weariurea'
    },
    {
      id: 2,
      image: IMAGES.formFitTop,
      caption: 'Form-Fit Active Top engineered for movement.',
      tag: '@weariurea'
    },
    {
      id: 3,
      image: IMAGES.statement,
      caption: 'Movement No. 04. Discipline in silence.',
      tag: '@weariurea'
    },
    {
      id: 4,
      image: IMAGES.coreTee,
      caption: 'Core Training Tee. Essential gym rotation.',
      tag: '@weariurea'
    }
  ];

  return (
    <section className="w-full py-24 bg-[#0d0d0d] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B7FF4A] mb-2">
              <Instagram className="w-4 h-4" />
              <span>COMMUNITY & CAMPAIGN</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl uppercase text-[#F5F4F0]">
              Wear The Movement
            </h2>
          </div>

          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#B7FF4A]/50 text-xs font-mono font-bold uppercase tracking-wider text-[#F5F4F0] hover:text-[#B7FF4A] transition-colors shrink-0 group"
          >
            <Instagram className="w-4 h-4 text-[#B7FF4A]" />
            <span>Follow {BRAND_CONFIG.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 4-Item Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-[#181818] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-1.5 bg-[#111111] text-[#B7FF4A] rounded-xs">
                    <Instagram className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <p className="text-[11px] font-mono text-[#B7FF4A]">{post.tag}</p>
                  <p className="text-xs text-[#F5F4F0] font-medium mt-1 line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-xs font-mono text-[#777777]">
          Connect on Instagram at <a href={BRAND_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#F5F4F0] hover:text-[#B7FF4A] underline underline-offset-4">{BRAND_CONFIG.instagramHandle}</a>
        </p>
      </div>
    </section>
  );
};

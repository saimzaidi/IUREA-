import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product, ProductColor, PRODUCTS } from '../data/products';
import { Info, Sparkles } from 'lucide-react';

interface FeaturedCollectionProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: ProductColor) => void;
  onOpenSizeGuide: () => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  onQuickView,
  onAddToCart,
  onOpenSizeGuide,
}) => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'SHORT_SLEEVE' | 'LONG_SLEEVE'>('ALL');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeCategory === 'SHORT_SLEEVE') return p.category.includes('SHORT SLEEVE');
    if (activeCategory === 'LONG_SLEEVE') return p.category.includes('LONG SLEEVE') || p.category.includes('COMPRESSION');
    return true;
  });

  return (
    <section id="featured-collection" className="w-full py-24 bg-[#111111] border-b border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#B7FF4A] uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Activewear Drop</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-[-0.02em] text-[#F5F4F0]">
              Featured Collection
            </h2>
            <p className="mt-3 text-sm text-[#777777] max-w-xl">
              Engineered activewear essentials built for intense output. Consistent ergonomic drape, obsidian tones, and premium athletic cuts.
            </p>
          </div>

          {/* Sizing & Filter Affordances */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter buttons */}
            <div className="flex items-center p-1 bg-[#181818] border border-white/10 rounded-sm">
              <button
                onClick={() => setActiveCategory('ALL')}
                className={`px-3 py-1.5 text-xs font-mono font-medium transition-colors ${
                  activeCategory === 'ALL'
                    ? 'bg-[#F5F4F0] text-[#111111]'
                    : 'text-[#777777] hover:text-[#F5F4F0]'
                }`}
              >
                All (4)
              </button>
              <button
                onClick={() => setActiveCategory('SHORT_SLEEVE')}
                className={`px-3 py-1.5 text-xs font-mono font-medium transition-colors ${
                  activeCategory === 'SHORT_SLEEVE'
                    ? 'bg-[#F5F4F0] text-[#111111]'
                    : 'text-[#777777] hover:text-[#F5F4F0]'
                }`}
              >
                Short Sleeve
              </button>
              <button
                onClick={() => setActiveCategory('LONG_SLEEVE')}
                className={`px-3 py-1.5 text-xs font-mono font-medium transition-colors ${
                  activeCategory === 'LONG_SLEEVE'
                    ? 'bg-[#F5F4F0] text-[#111111]'
                    : 'text-[#777777] hover:text-[#F5F4F0]'
                }`}
              >
                Long Sleeve
              </button>
            </div>

            {/* Size guide trigger */}
            <button
              onClick={onOpenSizeGuide}
              className="px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-[#F5F4F0]/70 hover:text-[#B7FF4A] border border-white/10 hover:border-[#B7FF4A]/40 transition-colors"
            >
              Size Guide
            </button>
          </div>
        </div>

        {/* Demo Store Notice Bar */}
        <div className="mb-10 p-3 bg-[#181818]/60 border border-white/5 flex items-center justify-between gap-4 text-xs font-mono text-[#777777]">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#B7FF4A] shrink-0" />
            <span>
              Demonstration activewear inventory. Product specs and prices are for presentation purposes.
            </span>
          </div>
          <span className="hidden sm:inline text-[#B7FF4A] text-[11px] font-bold">
            EDITABLE DATASET
          </span>
        </div>

        {/* Products Grid: 4 coordinated cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

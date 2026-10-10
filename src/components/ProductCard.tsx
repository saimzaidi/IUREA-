import React, { useState } from 'react';
import { Eye, Plus, Check } from 'lucide-react';
import { Product, ProductColor } from '../data/products';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: ProductColor) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[1] || product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [addedJustNow, setAddedJustNow] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize, selectedColor);
    setAddedJustNow(true);
    setTimeout(() => setAddedJustNow(false), 1600);
  };

  return (
    <div className="group relative flex flex-col bg-[#141414] border border-white/5 hover:border-white/20 transition-all duration-300">
      {/* Product Media Container */}
      <div
        className="relative w-full aspect-[4/3] bg-[#181818] overflow-hidden cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        <img
          src={product.image}
          alt={`IUREA ${product.name}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Tag Pill / Label (Restrained single tag) */}
        {product.tag && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 uppercase ${
                product.tag === 'NEW'
                  ? 'bg-[#B7FF4A] text-[#111111]'
                  : 'bg-[#111111]/85 text-[#F5F4F0] border border-white/10'
              }`}
            >
              {product.tag}
            </span>
          </div>
        )}

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#111111] text-[#F5F4F0] text-xs font-bold uppercase tracking-wider border border-white/20 hover:border-[#B7FF4A] hover:text-[#B7FF4A] transition-colors shadow-xl"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Category */}
          <p className="text-[11px] font-mono text-[#777777] uppercase tracking-wider mb-1">
            {product.category}
          </p>

          {/* Name & Price */}
          <div className="flex items-baseline justify-between gap-2">
            <h3
              onClick={() => onQuickView(product)}
              className="font-display font-bold text-base sm:text-lg text-[#F5F4F0] hover:text-[#B7FF4A] transition-colors cursor-pointer"
            >
              {product.name}
            </h3>
            <span className="font-mono text-sm sm:text-base font-semibold text-[#F5F4F0] tabular-nums shrink-0">
              ${product.price}
            </span>
          </div>

          <p className="text-xs text-[#777777] line-clamp-2 mt-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Variant Selectors: Size & Color */}
        <div className="pt-3 border-t border-white/5 flex flex-col gap-3">
          {/* Color Swatches */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-[11px] text-[#777777] font-mono uppercase">Color</span>
            <div className="flex items-center gap-1.5">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(color);
                  }}
                  className={`w-4 h-4 rounded-full border transition-transform ${
                    selectedColor.name === color.name
                      ? 'scale-125 border-[#B7FF4A] ring-1 ring-[#B7FF4A]'
                      : 'border-white/20 hover:scale-110'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Select color ${color.name}`}
                />
              ))}
            </div>
          </div>

          {/* Size Selector Buttons */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-[11px] text-[#777777] font-mono uppercase">Size</span>
            <div className="flex items-center gap-1">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(size);
                  }}
                  className={`px-2 py-0.5 text-[11px] font-mono font-medium transition-colors ${
                    selectedSize === size
                      ? 'bg-[#F5F4F0] text-[#111111] font-bold'
                      : 'text-[#F5F4F0]/60 hover:text-[#F5F4F0] bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add To Bag Primary Card Action */}
          <button
            onClick={handleAdd}
            className={`w-full mt-1 py-2.5 px-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
              addedJustNow
                ? 'bg-[#B7FF4A] text-[#111111]'
                : 'bg-white/5 hover:bg-[#B7FF4A] text-[#F5F4F0] hover:text-[#111111] border border-white/10 hover:border-[#B7FF4A]'
            }`}
          >
            {addedJustNow ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

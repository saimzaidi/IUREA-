import React, { useState } from 'react';
import { X, Plus, Minus, Check, Ruler } from 'lucide-react';
import { Product, ProductColor } from '../data/products';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: ProductColor, quantity: number) => void;
  onOpenSizeGuide: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizeGuide,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-[#141414] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#111111]/80 text-[#777777] hover:text-[#F5F4F0] border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Frame */}
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-[#181818] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {product.tag && (
              <span className="absolute top-4 left-4 z-10 text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 uppercase bg-[#111111]/90 text-[#B7FF4A] border border-white/10">
                {product.tag}
              </span>
            )}
          </div>

          {/* Product Details & Selection */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <p className="text-[11px] font-mono text-[#777777] uppercase tracking-widest mb-1">
                {product.category}
              </p>
              <h2 className="font-display font-extrabold text-2xl uppercase text-[#F5F4F0] tracking-tight">
                {product.name}
              </h2>
              <p className="font-mono text-xl font-bold text-[#B7FF4A] tabular-nums mt-1">
                ${product.price}
              </p>

              <p className="text-xs text-[#777777] leading-relaxed mt-4">
                {product.description}
              </p>

              {/* Bullet Details */}
              <ul className="mt-4 space-y-1.5 text-xs text-[#F5F4F0]/80">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B7FF4A] mt-0.5">·</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customization Options */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              {/* Color selection */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-[#777777] uppercase">Color:</span>
                  <span className="text-[#F5F4F0] font-semibold">{selectedColor.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className={`w-7 h-7 rounded-full border-2 transition-transform ${
                        selectedColor.name === c.name
                          ? 'border-[#B7FF4A] scale-110'
                          : 'border-white/20 hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size selection */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-[#777777] uppercase">Size:</span>
                  <button
                    onClick={onOpenSizeGuide}
                    className="flex items-center gap-1 text-[#B7FF4A] hover:underline"
                  >
                    <Ruler className="w-3 h-3" />
                    <span>Size Guide</span>
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`py-2 text-xs font-mono font-bold uppercase transition-colors ${
                        selectedSize === s
                          ? 'bg-[#F5F4F0] text-[#111111]'
                          : 'bg-white/5 text-[#F5F4F0]/70 hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Bag */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center border border-white/10 bg-[#111111] h-12 px-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-[#777777] hover:text-[#F5F4F0]"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-mono font-bold text-[#F5F4F0]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-[#777777] hover:text-[#F5F4F0]"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex-1 h-12 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest transition-all ${
                    added
                      ? 'bg-emerald-400 text-[#111111]'
                      : 'bg-[#B7FF4A] text-[#111111] hover:bg-[#a5ef3a]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <span>Add to Bag · ${(product.price * quantity).toFixed(2)}</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CartItem } from '../types/cart';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  isOpen: _isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 100;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div className="w-screen max-w-md bg-[#111111] border-l border-white/10 shadow-2xl flex flex-col justify-between">
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-lg uppercase tracking-wider text-[#F5F4F0]">
                  Shopping Bag
                </span>
                <span className="text-xs font-mono bg-[#181818] text-[#B7FF4A] px-2 py-0.5 border border-white/10">
                  {items.reduce((sum, item) => sum + item.quantity, 0)} Items
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-[#777777] hover:text-[#F5F4F0] border border-white/5 hover:border-white/20 transition-colors"
                aria-label="Close shopping bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="px-6 py-3 bg-[#161616] border-b border-white/5 text-xs font-mono">
              <div className="flex justify-between text-[11px] mb-1.5">
                <span className="text-[#F5F4F0]/80">
                  {remainingForFreeShipping > 0
                    ? `Add $${remainingForFreeShipping.toFixed(2)} for free shipping`
                    : 'Complimentary shipping unlocked'}
                </span>
                <span className="text-[#B7FF4A] font-bold">
                  {progressPercent.toFixed(0)}%
                </span>
              </div>
              <div className="w-full h-1 bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-[#B7FF4A] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-[#777777] mb-4 border border-white/10">
                    <Sparkles className="w-6 h-6 text-[#B7FF4A]" />
                  </div>
                  <p className="font-display font-bold text-base uppercase text-[#F5F4F0]">
                    Your bag is empty
                  </p>
                  <p className="text-xs text-[#777777] max-w-xs mt-1">
                    Discover performance activewear built for heavy training.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2.5 bg-[#B7FF4A] text-[#111111] text-xs font-bold uppercase tracking-wider hover:bg-[#a5ef3a] transition-colors"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-[#161616] border border-white/5 hover:border-white/15 transition-colors"
                  >
                    {/* Item Thumbnail */}
                    <div className="w-20 h-20 bg-[#202020] shrink-0 overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-display font-bold text-xs uppercase text-[#F5F4F0] line-clamp-1">
                            {item.product.name}
                          </h4>
                          <span className="font-mono text-xs font-semibold text-[#F5F4F0] tabular-nums">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-[#777777]">
                          <span>Size: <strong className="text-[#F5F4F0]">{item.size}</strong></span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block border border-white/20"
                              style={{ backgroundColor: item.color.hex }}
                            />
                            {item.color.name}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Stepper & Remove */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-white/10 bg-[#111111]">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 text-[#777777] hover:text-[#F5F4F0] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-mono font-medium text-[#F5F4F0]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 text-[#777777] hover:text-[#F5F4F0] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1 text-[#777777] hover:text-red-400 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout CTA */}
            {items.length > 0 && (
              <div className="p-6 bg-[#0f0f0f] border-t border-white/10 space-y-4">
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between text-[#777777]">
                    <span>Subtotal</span>
                    <span className="text-[#F5F4F0] tabular-nums">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#777777]">
                    <span>Shipping</span>
                    <span className="text-[#F5F4F0]">
                      {remainingForFreeShipping === 0 ? 'FREE' : '$9.00 (Standard)'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold pt-2 border-t border-white/10 text-[#F5F4F0]">
                    <span>Total</span>
                    <span className="font-mono text-base text-[#B7FF4A] tabular-nums">
                      ${(subtotal + (remainingForFreeShipping === 0 ? 0 : 9)).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowCheckoutModal(true)}
                  className="w-full py-4 bg-[#B7FF4A] text-[#111111] font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#a5ef3a] transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Proceed to Demo Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#777777]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B7FF4A]" />
                  <span>DEMO ENVIRONMENT · NO ACTUAL PAYMENTS PROCESSED</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Demo Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#141414] border border-white/10 max-w-md w-full p-6 text-left shadow-2xl relative">
            <button
              onClick={() => setShowCheckoutModal(false)}
              className="absolute top-4 right-4 text-[#777777] hover:text-[#F5F4F0]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-10 h-10 bg-[#B7FF4A]/10 text-[#B7FF4A] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="font-display font-black text-xl uppercase text-[#F5F4F0] mb-2">
              Concept Demo Store
            </h3>

            <p className="text-xs text-[#777777] leading-relaxed mb-4">
              This website is an interactive portfolio and brand demonstration for <strong className="text-[#F5F4F0]">IUREA™</strong>. No real payment gateways or credit card processors are attached to prevent test charges.
            </p>

            <div className="p-3 bg-[#111111] border border-white/5 mb-6 text-xs font-mono space-y-1">
              <div className="flex justify-between">
                <span className="text-[#777777]">Items:</span>
                <span className="text-[#F5F4F0]">{items.reduce((s, i) => s + i.quantity, 0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777777]">Calculated Demo Subtotal:</span>
                <span className="text-[#B7FF4A] font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777777]">Status:</span>
                <span className="text-emerald-400">DEMO VERIFIED</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  onClearCart();
                  setShowCheckoutModal(false);
                  onClose();
                }}
                className="flex-1 py-3 bg-[#B7FF4A] text-[#111111] font-bold text-xs uppercase tracking-wider hover:bg-[#a5ef3a] transition-colors text-center"
              >
                Clear Demo Bag
              </button>
              <button
                onClick={() => setShowCheckoutModal(false)}
                className="flex-1 py-3 bg-white/5 border border-white/10 text-[#F5F4F0] font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors text-center"
              >
                Keep Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React from 'react';
import { ArrowUpRight, Instagram, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONFIG } from '../data/products';

interface FooterProps {
  onShopClick: () => void;
  onOpenPolicyModal: (type: 'shipping' | 'returns' | 'faq' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onShopClick, onOpenPolicyModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0a0a] text-[#F5F4F0] border-t border-white/10">
      {/* Pre-Footer Action Banner */}
      <div className="border-b border-white/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7FF4A] mb-2">
              JOIN THE CADENCE
            </p>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase text-[#F5F4F0] tracking-tight">
              ELEVATE YOUR STANDARD.
            </h2>
            <p className="mt-2 text-sm text-[#777777] max-w-md">
              Train with intention. Discover activewear made to amplify athletic presence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <button
              onClick={onShopClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B7FF4A] text-[#111111] font-bold text-xs sm:text-sm uppercase tracking-[0.16em] hover:bg-[#a5ef3a] transition-colors"
            >
              <span>Shop Collection</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#F5F4F0] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#B7FF4A]" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <BrandLogo size="lg" className="mb-4" />
            <p className="text-sm text-[#777777] max-w-sm leading-relaxed mb-6">
              Performance activewear designed with obsidian discipline. Minimalist silhouettes engineered for heavy training and aesthetic power.
            </p>

            <div className="text-xs font-mono text-[#777777] space-y-1">
              <p>Inquiries: <span className="text-[#F5F4F0]">{BRAND_CONFIG.contactPlaceholder}</span></p>
              <p>Brand Concept: <span className="text-[#B7FF4A]">DEMO STORE PREVIEW</span></p>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#B7FF4A] mb-4">
              COLLECTION
            </p>
            <ul className="space-y-3 text-sm text-[#777777]">
              <li>
                <button onClick={onShopClick} className="hover:text-[#F5F4F0] transition-colors text-left">
                  Sculpt Performance Tee
                </button>
              </li>
              <li>
                <button onClick={onShopClick} className="hover:text-[#F5F4F0] transition-colors text-left">
                  Essential Training Shirt
                </button>
              </li>
              <li>
                <button onClick={onShopClick} className="hover:text-[#F5F4F0] transition-colors text-left">
                  Form-Fit Active Top
                </button>
              </li>
              <li>
                <button onClick={onShopClick} className="hover:text-[#F5F4F0] transition-colors text-left">
                  Core Training Tee
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care / Policy Links Col */}
          <div className="md:col-span-4">
            <p className="text-xs font-mono uppercase tracking-widest text-[#B7FF4A] mb-4">
              INFORMATION & CARE
            </p>
            <ul className="space-y-3 text-sm text-[#777777]">
              <li>
                <button onClick={() => onOpenPolicyModal('shipping')} className="hover:text-[#F5F4F0] transition-colors">
                  Shipping Policy (Placeholder)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicyModal('returns')} className="hover:text-[#F5F4F0] transition-colors">
                  Returns & Exchanges (Demo)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicyModal('faq')} className="hover:text-[#F5F4F0] transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicyModal('privacy')} className="hover:text-[#F5F4F0] transition-colors">
                  Privacy & Terms of Service
                </button>
              </li>
            </ul>

            <div className="mt-6 p-3 bg-white/5 border border-white/5 text-[11px] font-mono text-[#777777]">
              <span>Notice: This is a preview frontend for IUREA™. All items, pricing, and policies are demonstration placeholders.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#777777]">
          <p>© {new Date().getFullYear()} IUREA™. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#777777] hover:text-[#B7FF4A] transition-colors"
            >
              Instagram @weariurea
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#F5F4F0]/60 hover:text-[#B7FF4A] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

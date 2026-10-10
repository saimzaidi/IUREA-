import React, { useState } from 'react';
import { X, Shield, RefreshCw, Truck, HelpCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export type PolicyType = 'shipping' | 'returns' | 'faq' | 'privacy';

interface PolicyModalProps {
  initialType: PolicyType;
  isOpen: boolean;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  initialType,
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<PolicyType>(initialType);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#141414] border border-white/10 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#777777] hover:text-[#F5F4F0] border border-white/5 transition-colors"
          aria-label="Close information modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 mb-6 overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab('shipping')}
            className={`flex items-center gap-2 pb-3 px-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'shipping'
                ? 'border-[#B7FF4A] text-[#F5F4F0]'
                : 'border-transparent text-[#777777] hover:text-[#F5F4F0]'
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Shipping</span>
          </button>

          <button
            onClick={() => setActiveTab('returns')}
            className={`flex items-center gap-2 pb-3 px-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'returns'
                ? 'border-[#B7FF4A] text-[#F5F4F0]'
                : 'border-transparent text-[#777777] hover:text-[#F5F4F0]'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Returns</span>
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`flex items-center gap-2 pb-3 px-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'faq'
                ? 'border-[#B7FF4A] text-[#F5F4F0]'
                : 'border-transparent text-[#777777] hover:text-[#F5F4F0]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 pb-3 px-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'privacy'
                ? 'border-[#B7FF4A] text-[#F5F4F0]'
                : 'border-transparent text-[#777777] hover:text-[#F5F4F0]'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy & Terms</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="text-xs text-[#777777] space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {activeTab === 'shipping' && (
            <div>
              <h3 className="font-display font-bold text-lg uppercase text-[#F5F4F0] mb-2">
                Shipping Information (Placeholder)
              </h3>
              <p className="leading-relaxed mb-4">
                This is a placeholder policy for demonstration purposes. Official rates, fulfillment partners, and international delivery timeframes will be defined upon client launch.
              </p>
              <div className="p-3 bg-[#111111] border border-white/5 space-y-2 font-mono text-[11px]">
                <p><strong className="text-[#F5F4F0]">Standard Domestic:</strong> 3–5 Business Days (Complimentary over $100)</p>
                <p><strong className="text-[#F5F4F0]">Express Dispatch:</strong> 1–2 Business Days</p>
                <p><strong className="text-[#F5F4F0]">Worldwide Fulfillment:</strong> Available to select regions upon full launch</p>
              </div>
            </div>
          )}

          {activeTab === 'returns' && (
            <div>
              <h3 className="font-display font-bold text-lg uppercase text-[#F5F4F0] mb-2">
                Returns & Exchange Guidelines (Demo)
              </h3>
              <p className="leading-relaxed mb-4">
                In production, IUREA™ items can be returned or exchanged within 30 days of delivery, provided the pieces are unworn, unwashed, and in their original packaging with tags attached.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complimentary size exchanges for unworn activewear.</li>
                <li>Items marked as final archive or limited drops may be exchange-only.</li>
                <li>Contact <strong className="text-[#F5F4F0]">{BRAND_CONFIG.contactPlaceholder}</strong> for demo inquiries.</li>
              </ul>
            </div>
          )}

          {activeTab === 'faq' && (
            <div>
              <h3 className="font-display font-bold text-lg uppercase text-[#F5F4F0] mb-3">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#F5F4F0] mb-1">What is the fit of IUREA activewear?</h4>
                  <p>Our tops feature an athletic taper designed to accentuate shoulder and chest lines without feeling tight through the abdomen.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#F5F4F0] mb-1">Where is IUREA based?</h4>
                  <p>IUREA™ is an independent fitness-inspired activewear brand. Follow <strong className="text-[#B7FF4A]">@weariurea</strong> on Instagram for upcoming collection releases.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#F5F4F0] mb-1">How can I edit the product catalog?</h4>
                  <p>All demo products, prices, sizes, and colors are defined in <code className="text-[#B7FF4A]">src/data/products.ts</code> for effortless editing.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div>
              <h3 className="font-display font-bold text-lg uppercase text-[#F5F4F0] mb-2">
                Terms & Privacy Disclaimer
              </h3>
              <p className="leading-relaxed mb-3">
                This website is a demonstration prototype created for design review. No personal data, tracking cookies, or payment information is collected or processed.
              </p>
              <p className="leading-relaxed">
                All brand identity, typography, and photography placeholders are prepared for review by the brand owners of IUREA™.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-white/5 hover:bg-white/10 text-[#F5F4F0] text-xs font-mono font-bold uppercase tracking-wider border border-white/10"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

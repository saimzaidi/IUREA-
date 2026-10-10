import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONFIG } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onScrollToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', id: 'featured-collection' },
    { label: 'Collection', id: 'campaign-section' },
    { label: 'Highlights', id: 'highlights' },
    { label: 'Our Story', id: 'brand-story' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="relative bg-[#181818] border-b border-white/5 py-2 px-4 text-center">
          <div className="max-w-7xl mx-auto flex items-center justify-center text-[11px] md:text-xs font-medium tracking-widest text-[#F5F4F0]/80 uppercase">
            <span className="text-[#B7FF4A] mr-2 text-[10px]" aria-hidden="true">■</span>
            <span>{BRAND_CONFIG.announcement}</span>
          </div>
          <button
            onClick={() => setShowAnnouncement(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#777777] hover:text-[#F5F4F0] transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
            : 'bg-[#111111]/60 backdrop-blur-sm border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Brand Left */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B7FF4A] text-left"
            aria-label="IUREA Home"
          >
            <BrandLogo size="md" />
          </button>

          {/* Navigation Links Center */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F4F0]/70 hover:text-[#F5F4F0] hover:text-white transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B7FF4A] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Actions Right */}
          <div className="flex items-center gap-4">
            {/* Quick Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-[#F5F4F0] bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B7FF4A]"
              aria-label={`Shopping bag with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-[#B7FF4A]" />
              <span className="hidden sm:inline font-sans">Bag</span>
              <span className="bg-[#B7FF4A] text-[#111111] font-mono text-[11px] font-bold px-1.5 py-0.2 rounded-xs min-w-[20px] text-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#F5F4F0] hover:text-[#B7FF4A] border border-white/10 rounded-sm transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-auto bg-[#111111] border-b border-white/10 shadow-2xl p-6 transition-all animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="flex items-center justify-between text-sm font-bold uppercase tracking-[0.2em] text-[#F5F4F0] hover:text-[#B7FF4A] py-3 border-b border-white/5 transition-colors text-left"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#777777]" />
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#B7FF4A] text-[#111111] font-bold text-xs uppercase tracking-widest hover:bg-[#a5ef3a] transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Bag ({cartCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollection } from './components/FeaturedCollection';
import { BrandStatement } from './components/BrandStatement';
import { ProductHighlights } from './components/ProductHighlights';
import { CampaignBanner } from './components/CampaignBanner';
import { BrandStory } from './components/BrandStory';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { Product, ProductColor } from './data/products';
import { CartItem } from './types/cart';

export default function App() {
  // Shopping Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modal States
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [policyModalType, setPolicyModalType] = useState<PolicyType | null>(null);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 2500);
  };

  const handleAddToCart = (
    product: Product,
    size: string,
    color: ProductColor,
    quantity = 1
  ) => {
    const itemKey = `${product.id}-${size}-${color.name}`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemKey);
      if (existing) {
        return prev.map((item) =>
          item.id === itemKey ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: itemKey, product, size, color, quantity }];
    });
    showToast(`Added ${product.name} (${size}) to bag`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F4F0] flex flex-col font-sans selection:bg-[#B7FF4A] selection:text-[#111111]">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161616] text-[#F5F4F0] border border-[#B7FF4A] px-4 py-3 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 bg-[#B7FF4A] rounded-full" />
          <span className="text-xs font-mono font-medium">{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-xs font-mono text-[#B7FF4A] underline font-bold ml-2 hover:text-white"
          >
            View Bag
          </button>
        </div>
      )}

      {/* A. Sticky Navigation Bar & Announcement */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToSection={handleScrollTo}
      />

      <main className="flex-1 w-full">
        {/* B. Cinematic Hero */}
        <Hero
          onShopClick={() => handleScrollTo('featured-collection')}
          onDiscoverClick={() => handleScrollTo('brand-story')}
        />

        {/* C. Featured Collection Grid */}
        <FeaturedCollection
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={(p, s, c) => handleAddToCart(p, s, c, 1)}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        />

        {/* D. Brand Statement */}
        <BrandStatement
          onShopClick={() => handleScrollTo('featured-collection')}
        />

        {/* E. Product & Detail Highlights */}
        <ProductHighlights />

        {/* F. Editorial Campaign Banner */}
        <CampaignBanner
          onShopClick={() => handleScrollTo('featured-collection')}
        />

        {/* G. Brand Story */}
        <BrandStory />

        {/* H. Instagram Section */}
        <InstagramSection />
      </main>

      {/* I. Final CTA & Footer */}
      <Footer
        onShopClick={() => handleScrollTo('featured-collection')}
        onOpenPolicyModal={(type) => setPolicyModalType(type)}
      />

      {/* Interactive Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      <PolicyModal
        initialType={policyModalType || 'shipping'}
        isOpen={policyModalType !== null}
        onClose={() => setPolicyModalType(null)}
      />
    </div>
  );
}

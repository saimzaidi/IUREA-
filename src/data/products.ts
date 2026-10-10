// Image assets generated for IUREA™
import heroImage from '@/src/assets/images/hero_athletic_campaign_1791626385913.jpg';
import productSculptTee from '@/src/assets/images/product_sculpt_tee_1791626398751.jpg';
import productEssentialTraining from '@/src/assets/images/product_essential_training_1791626411222.jpg';
import productFormFitTop from '@/src/assets/images/product_form_fit_top_1791626426477.jpg';
import productCoreTee from '@/src/assets/images/product_core_tee_1791626438776.jpg';
import brandStatementImage from '@/src/assets/images/brand_statement_editorial_1791626449262.jpg';
import campaignBannerImage from '@/src/assets/images/campaign_banner_1791626461912.jpg';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  tag?: 'NEW' | 'FEATURED' | 'LIMITED RUN';
  description: string;
  details: string[];
  sizes: string[];
  colors: ProductColor[];
  image: string;
  category: string;
}

export const BRAND_CONFIG = {
  name: 'IUREA™',
  tagline: 'Train hard. Look powerful.',
  announcement: 'COMPLIMENTARY DOMESTIC SHIPPING ON ORDERS OVER $100 · NEW DROP AVAILABLE NOW',
  instagramUrl: 'https://www.instagram.com/weariurea/',
  instagramHandle: '@weariurea',
  storyHeadline: 'FORGED AT THE INTERSECTION OF MOVEMENT & AESTHETICS',
  storyBody: [
    'IUREA™ was founded with a singular purpose: to craft activewear that honors the relentless effort of training while maintaining an uncompromising, modern design language.',
    'We believe activewear should feel like second nature under heavy iron, on the road, and in daily life. Clean lines, intentional drape, and obsidian tones designed to elevate the athlete within.',
    'Every piece is created for those who measure progress in sweat, discipline, and aesthetic mastery.'
  ],
  contactPlaceholder: 'press@weariurea.com · Melbourne & Global',
};

export const PRODUCTS: Product[] = [
  {
    id: 'sculpt-performance-tee',
    name: 'Sculpt Performance Tee',
    price: 68,
    tag: 'FEATURED',
    category: 'TOPS / SHORT SLEEVE',
    description: 'Precision cut to accentuate the upper body silhouette while providing natural, unconstrained mobility across heavy compound sessions.',
    details: [
      'Tailored athletic taper through chest and lats',
      'Minimalist bonded hem and neckline',
      'Subtle tonal IUREA micro-insignia',
      'Designed for resistance training & functional conditioning'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Obsidian Black', hex: '#111111' },
      { name: 'Muted Steel', hex: '#63656A' },
      { name: 'Bone White', hex: '#EDECE6' }
    ],
    image: productSculptTee
  },
  {
    id: 'essential-training-shirt',
    name: 'Essential Training Shirt',
    price: 64,
    tag: 'NEW',
    category: 'TOPS / SHORT SLEEVE',
    description: 'An elevated daily training staple crafted in warm bone tones. Engineered drape that moves effortlessly with every rep and drop set.',
    details: [
      'Ergonomic raglan-adjacent shoulder construction',
      'Breathable light-hand feel for high-heat sessions',
      'Reinforced collar that retains structure after wash',
      'Engineered for daily heavy rotation'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Bone White', hex: '#EDECE6' },
      { name: 'Obsidian Black', hex: '#111111' },
      { name: 'Steel Gray', hex: '#777777' }
    ],
    image: productEssentialTraining
  },
  {
    id: 'form-fit-active-top',
    name: 'Form-Fit Active Top',
    price: 72,
    tag: 'FEATURED',
    category: 'TOPS / COMPRESSION & LONG SLEEVE',
    description: 'Sculpted long-sleeve performance silhouette designed for optimal body awareness, temperature balance, and disciplined focus.',
    details: [
      'Contoured ergonomic paneling with low-profile seams',
      'Extended sleeve coverage with thumb articulation',
      'High-recovery stretch profile',
      'Ideal for warmup sets, running, and cool climates'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Charcoal Steel', hex: '#44464B' },
      { name: 'Obsidian Black', hex: '#111111' }
    ],
    image: productFormFitTop
  },
  {
    id: 'core-training-tee',
    name: 'Core Training Tee',
    price: 58,
    tag: 'LIMITED RUN',
    category: 'TOPS / SHORT SLEEVE',
    description: 'The archetype athletic gym shirt in graphite. Minimalist luxury meets relentless durability for everyday gym performance.',
    details: [
      'Relaxed yet tapered modern athletic fit',
      'Matte finish with soft tactile hand feel',
      'Engineered split-side hem for full hip drive clearance',
      'Understated branding for a clean aesthetic'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Deep Graphite', hex: '#2B2D31' },
      { name: 'Obsidian Black', hex: '#111111' },
      { name: 'Electric Accent', hex: '#8FB838' }
    ],
    image: productCoreTee
  }
];

export const IMAGES = {
  hero: heroImage,
  statement: brandStatementImage,
  banner: campaignBannerImage,
  sculptTee: productSculptTee,
  essentialTee: productEssentialTraining,
  formFitTop: productFormFitTop,
  coreTee: productCoreTee,
};

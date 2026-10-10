import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showMark?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showMark = true,
}) => {
  const sizeClasses = {
    sm: 'text-base tracking-[0.2em]',
    md: 'text-xl tracking-[0.22em]',
    lg: 'text-2xl tracking-[0.24em]',
    xl: 'text-3xl md:text-4xl tracking-[0.26em]',
  };

  const markSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  return (
    <div className={`flex items-center gap-2.5 font-display font-extrabold select-none ${className}`}>
      {showMark && (
        <span className={`inline-flex items-center justify-center text-[#B7FF4A] ${markSizes[size]}`} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Modern athletic chevron / monogram mark */}
            <path d="M4 18L12 5L20 18" />
            <path d="M7.5 13H16.5" />
            <circle cx="12" cy="11.5" r="1.5" fill="#B7FF4A" />
          </svg>
        </span>
      )}
      <span className={`font-black uppercase text-[#F5F4F0] leading-none ${sizeClasses[size]}`}>
        IUREA<span className="text-[#B7FF4A] text-[0.65em] font-bold align-super ml-0.5">™</span>
      </span>
    </div>
  );
};

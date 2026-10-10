import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');

  if (!isOpen) return null;

  const sizeChart = [
    {
      size: 'XS',
      chestInches: '34 - 36',
      chestCm: '86 - 91',
      lengthInches: '27.5',
      lengthCm: '70',
      sleeveInches: '8.0',
      sleeveCm: '20.5',
    },
    {
      size: 'S',
      chestInches: '36 - 38',
      chestCm: '91 - 96',
      lengthInches: '28.5',
      lengthCm: '72',
      sleeveInches: '8.5',
      sleeveCm: '21.5',
    },
    {
      size: 'M',
      chestInches: '39 - 41',
      chestCm: '99 - 104',
      lengthInches: '29.5',
      lengthCm: '75',
      sleeveInches: '9.0',
      sleeveCm: '23.0',
    },
    {
      size: 'L',
      chestInches: '42 - 44',
      chestCm: '106 - 112',
      lengthInches: '30.5',
      lengthCm: '77',
      sleeveInches: '9.5',
      sleeveCm: '24.0',
    },
    {
      size: 'XL',
      chestInches: '45 - 48',
      chestCm: '114 - 122',
      lengthInches: '31.5',
      lengthCm: '80',
      sleeveInches: '10.0',
      sleeveCm: '25.5',
    },
    {
      size: 'XXL',
      chestInches: '49 - 52',
      chestCm: '124 - 132',
      lengthInches: '32.5',
      lengthCm: '82',
      sleeveInches: '10.5',
      sleeveCm: '26.5',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#141414] border border-white/10 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#777777] hover:text-[#F5F4F0] border border-white/5 transition-colors"
          aria-label="Close size guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B7FF4A] mb-2">
          <span>FIT SPECIFICATIONS</span>
        </div>

        <h2 className="font-display font-black text-2xl uppercase text-[#F5F4F0] mb-2">
          Activewear Sizing Matrix
        </h2>

        <p className="text-xs text-[#777777] leading-relaxed mb-6">
          IUREA pieces are tailored with an athletic taper — sculpted across the delts and chest with natural torso clearance. If you prefer a relaxed oversized fit, we suggest ordering one size up.
        </p>

        {/* Unit Selector */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-[#777777] uppercase">Measurements:</span>
          <div className="flex items-center bg-[#111111] border border-white/10 p-1">
            <button
              onClick={() => setUnit('inches')}
              className={`px-3 py-1 text-xs font-mono font-medium transition-colors ${
                unit === 'inches'
                  ? 'bg-[#F5F4F0] text-[#111111]'
                  : 'text-[#777777] hover:text-[#F5F4F0]'
              }`}
            >
              Inches (in)
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 text-xs font-mono font-medium transition-colors ${
                unit === 'cm'
                  ? 'bg-[#F5F4F0] text-[#111111]'
                  : 'text-[#777777] hover:text-[#F5F4F0]'
              }`}
            >
              Centimeters (cm)
            </button>
          </div>
        </div>

        {/* Sizing Table */}
        <div className="overflow-x-auto border border-white/10 bg-[#111111]">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-[#F5F4F0]">
                <th className="py-3 px-4 font-bold">Size</th>
                <th className="py-3 px-4 font-bold">Chest Circumference</th>
                <th className="py-3 px-4 font-bold">Body Length</th>
                <th className="py-3 px-4 font-bold">Sleeve Length</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-[#777777]">
              {sizeChart.map((row) => (
                <tr key={row.size} className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-bold text-[#F5F4F0]">{row.size}</td>
                  <td className="py-3 px-4 tabular-nums">
                    {unit === 'inches' ? `${row.chestInches}"` : `${row.chestCm} cm`}
                  </td>
                  <td className="py-3 px-4 tabular-nums">
                    {unit === 'inches' ? `${row.lengthInches}"` : `${row.lengthCm} cm`}
                  </td>
                  <td className="py-3 px-4 tabular-nums">
                    {unit === 'inches' ? `${row.sleeveInches}"` : `${row.sleeveCm} cm`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fit recommendations */}
        <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-xs text-[#777777]">
          <div className="flex items-start gap-2">
            <Check className="w-3.5 h-3.5 text-[#B7FF4A] mt-0.5 shrink-0" />
            <span>Athletic Fit: Form-fitting across chest & arms with uninhibited mobility.</span>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-3.5 h-3.5 text-[#B7FF4A] mt-0.5 shrink-0" />
            <span>Care: Machine wash cold with like colors. Air dry or tumble dry low.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

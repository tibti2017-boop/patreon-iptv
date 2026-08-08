import React from 'react';
import { ShieldCheck, Lock, RefreshCw, Headphones } from 'lucide-react';

interface GuaranteeProps {
  onOpenOrder: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeProps> = ({ onOpenOrder }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/10">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
              <div className="text-xs font-black text-orange-400 uppercase tracking-widest mb-1">
                100% RISK-FREE GUARANTEE
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                7-Day 100% Money-Back Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
                Test our service completely risk-free. If you are not 100% satisfied with the streaming quality or server stability, we will refund your order immediately—no questions asked.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenOrder}
            className="w-full lg:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shrink-0 shadow-xl shadow-orange-500/25 hover:scale-105 transition-all"
          >
            ORDER RISK-FREE NOW
          </button>

        </div>
      </div>
    </section>
  );
};

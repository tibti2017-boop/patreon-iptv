import React from 'react';
import { Users, TrendingUp, Zap, Server, ChevronRight, Calculator, ShieldCheck } from 'lucide-react';

interface ResellerSectionProps {
  onOpenReseller: () => void;
}

export const ResellerSection: React.FC<ResellerSectionProps> = ({ onOpenReseller }) => {
  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                JOIN OUR RESELLER NETWORK
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Start Your Own IPTV Business & Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Up To 300% Profit Margin</span>
              </h2>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Get full access to our <strong>Xtream UI Reseller Panel</strong>. Create sub-resellers, 24H free trials, and sell 25,000+ live channels with 99.9% Anti-Freeze™ servers under your own brand name.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-bold text-zinc-200">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span>High ROI Profits</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-bold text-zinc-200">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Server className="w-4 h-4" />
                  </div>
                  <span>Xtream UI Panel</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-bold text-zinc-200">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span>Unlimited Trials</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenReseller}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all group"
                >
                  <Calculator className="w-4 h-4" />
                  <span>EXPLORE RESELLER PACKAGES & CALCULATOR</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column Stat Box Preview */}
            <div className="lg:col-span-5 bg-zinc-950/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="text-xs font-black text-white uppercase tracking-wider">Xtream Panel Active</span>
                </div>
                <span className="text-[10px] font-extrabold text-cyan-400 uppercase bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  White Label Ready
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="bg-zinc-900/80 p-3.5 rounded-xl border border-zinc-800 flex justify-between items-center">
                  <span className="text-zinc-400 font-semibold">Average Profit / Client:</span>
                  <span className="text-emerald-400 font-black text-sm">$35.00 – $60.00 / yr</span>
                </div>

                <div className="bg-zinc-900/80 p-3.5 rounded-xl border border-zinc-800 flex justify-between items-center">
                  <span className="text-zinc-400 font-semibold">Credit Validity:</span>
                  <span className="text-white font-black text-sm">NEVER EXPIRE</span>
                </div>

                <div className="bg-zinc-900/80 p-3.5 rounded-xl border border-zinc-800 flex justify-between items-center">
                  <span className="text-zinc-400 font-semibold">Panel Setup Time:</span>
                  <span className="text-cyan-400 font-black text-sm">10 – 15 Minutes</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-zinc-400 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>24/7 Dedicated Support Engineer Included</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

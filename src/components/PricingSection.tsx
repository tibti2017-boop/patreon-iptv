import React, { useState } from 'react';
import { BASE_PLANS } from '../data/mockData';
import { Check, Flame, Tv, ArrowRight, MessageCircle } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planId: string, screensCount: number) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [screensCount, setScreensCount] = useState<number>(1);

  // Price multiplier for multi-screens
  const getScreenMultiplier = (count: number) => {
    switch (count) {
      case 2: return 1.35;
      case 3: return 1.65;
      case 4: return 1.90;
      case 5: return 2.20;
      default: return 1.0;
    }
  };

  const multiplier = getScreenMultiplier(screensCount);

  return (
    <section id="pricing" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            EXCLUSIVE US NO-CONTRACT DEALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 mb-4">
            Choose Your <span className="text-cyan-400">PATREON IPTV Package</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-medium">
            Instant automatic setup • 7-Day Money-Back Guarantee • No hidden contract or renewal fees.
          </p>

          {/* Multi-Screen Selector Controls */}
          <div className="mt-8 bg-zinc-900/90 border border-zinc-800 p-2 sm:p-3 rounded-2xl inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 shadow-xl">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider px-3 flex items-center gap-1.5">
              <Tv className="w-4 h-4 text-cyan-400" />
              SIMULTANEOUS SCREENS:
            </span>
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => setScreensCount(num)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
                  screensCount === num
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30'
                    : 'bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700'
                }`}
              >
                {num} {num === 1 ? 'Device' : 'Devices'}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Plans Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {BASE_PLANS.map((plan) => {
            const adjustedTotalPriceNum = plan.totalPrice * multiplier;
            const adjustedTotalPrice = adjustedTotalPriceNum.toFixed(2);
            const [priceInt, priceDec] = adjustedTotalPrice.split('.');

            const isBluePopularCard = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 overflow-hidden shadow-2xl ${
                  isBluePopularCard
                    ? 'bg-gradient-to-b from-blue-600 via-blue-600 to-indigo-800 text-white border-2 border-cyan-400 shadow-2xl shadow-blue-500/30 ring-4 ring-cyan-500/20 scale-102 z-20'
                    : 'bg-zinc-900/90 text-white border border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900'
                }`}
              >
                {/* POPULAR Diagonal Black Ribbon for 1 Year Diamond Plan */}
                {isBluePopularCard && (
                  <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden rounded-tl-2xl pointer-events-none z-30">
                    <div className="bg-black text-white text-[10px] font-black uppercase tracking-widest py-1.5 text-center absolute -left-10 top-6 w-36 -rotate-45 shadow-xl border-y border-zinc-800">
                      POPULAR
                    </div>
                  </div>
                )}

                <div>
                  {/* Title Header */}
                  <div className="text-center pt-2">
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                      {plan.durationMonths === 12 ? '1 Year' : `${plan.durationMonths} ${plan.durationMonths === 1 ? 'Month' : 'Months'}`}
                    </h3>
                    <p className={`text-sm font-semibold mt-1 ${
                      isBluePopularCard ? 'text-blue-100' : 'text-zinc-400'
                    }`}>
                      {plan.name}
                    </p>
                  </div>

                  {/* Large Price Display */}
                  <div className="my-6 text-center flex items-start justify-center">
                    <span className="text-xl sm:text-2xl font-extrabold mt-1 mr-0.5 text-white">$</span>
                    <span className="text-5xl sm:text-6xl font-black tracking-tight leading-none text-white">{priceInt}</span>
                    <span className="text-xl sm:text-2xl font-extrabold leading-none mt-1 ml-0.5 text-white">{priceDec}</span>
                  </div>

                  {/* Devices Sub-badge */}
                  {screensCount > 1 && (
                    <div className="text-center -mt-3 mb-4">
                      <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        isBluePopularCard ? 'bg-blue-700/80 text-white' : 'bg-zinc-800 text-zinc-300 border border-zinc-700/60'
                      }`}>
                        Included for {screensCount} Devices
                      </span>
                    </div>
                  )}

                  {/* Features List */}
                  <ul className={`space-y-3 text-xs font-medium mb-8 pt-4 border-t ${
                    isBluePopularCard ? 'border-blue-500/60 text-blue-50' : 'border-zinc-800 text-zinc-300'
                  }`}>
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isBluePopularCard ? 'text-white' : 'text-cyan-400'
                        }`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Buttons */}
                <div className="space-y-2.5 mt-auto">
                  <button
                    onClick={() => onSelectPlan(plan.id, screensCount)}
                    className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 ${
                      isBluePopularCard
                        ? 'bg-white hover:bg-zinc-100 text-blue-800 shadow-xl'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20'
                    }`}
                  >
                    <span>SUBSCRIBE NOW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      const msg = `Hello PATREON IPTV! 👋\n\nI want to order the following Package:\n📦 Package: ${plan.name} (${plan.durationMonths === 12 ? '1 Year' : plan.durationMonths + ' Months'})\n📺 Simultaneous Screens: ${screensCount} Device(s)\n💰 Total Price: $${adjustedTotalPrice} USD\n\nPlease send me activation details & payment options.`;
                      window.open(`https://wa.me/447707762059?text=${encodeURIComponent(msg)}`, '_blank');
                    }}
                    className={`w-full py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                      isBluePopularCard
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-md'
                        : 'bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>ORDER VIA WHATSAPP</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

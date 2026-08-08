import React from 'react';
import { ArrowRight, Star, MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  const openWhatsApp = () => {
    const text = 'Hello PATREON IPTV, I would like to get a subscription or request a 24h free trial.';
    window.open(`https://wa.me/447707762059?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-zinc-950">
      {/* Background Glows & Subtle Pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-600/15 blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          BEST PATREON IPTV 4K • LIVE STREAMING NOW
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6">
          The Ultimate <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-sm">
            PATREON IPTV
          </span>{' '}
          in 4K Ultra HD
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300 font-medium leading-relaxed mb-10">
          Stream 25,000+ US & Global Live Channels, NFL Sunday Ticket, NBA, MLB, NHL, PPV, and 60,000+ VOD Movies & Series with <span className="text-cyan-400 font-bold">99.9% Anti-Freeze Uptime</span> and 24/7 Live Support.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenOrder}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
          >
            <span>GET PATREON IPTV ACCESS</span>
            <ArrowRight className="w-5 h-5 text-cyan-200 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={openWhatsApp}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-emerald-900/30 transition-all flex items-center justify-center gap-2.5 hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>24/7 WHATSAPP HELP</span>
          </button>
        </div>

        {/* Rating & Social Proof */}
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-zinc-400 font-semibold mb-16">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="text-white font-bold">4.9/5 Rating</span>
          <span className="text-zinc-500">•</span>
          <span>Over 100,000+ Happy Customers in the US & Worldwide</span>
        </div>

        {/* 4 Metric Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-zinc-800/80">
          <div className="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-center hover:border-cyan-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
              $3.74<span className="text-cyan-400">/mo</span>
            </div>
            <div className="text-[11px] sm:text-xs font-bold text-zinc-400 uppercase tracking-widest">
              STARTING AT
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-center hover:border-cyan-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
              25,000<span className="text-cyan-400">+</span>
            </div>
            <div className="text-[11px] sm:text-xs font-bold text-zinc-400 uppercase tracking-widest">
              LIVE TV CHANNELS
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-center hover:border-cyan-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
              99.9<span className="text-cyan-400">%</span>
            </div>
            <div className="text-[11px] sm:text-xs font-bold text-zinc-400 uppercase tracking-widest">
              ANTI-FREEZE UPTIME
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-center hover:border-cyan-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
              60,000<span className="text-cyan-400">+</span>
            </div>
            <div className="text-[11px] sm:text-xs font-bold text-zinc-400 uppercase tracking-widest">
              MOVIES & TV SHOWS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

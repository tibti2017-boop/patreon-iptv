import React from 'react';
import { Trophy, Flame, CheckCircle2, Play, Radio } from 'lucide-react';
import { handlePosterImageError } from '../utils/imageUtils';

interface SportsSectionProps {
  onOpenOrder: () => void;
}

export const SportsSection: React.FC<SportsSectionProps> = ({ onOpenOrder }) => {
  const featuredPosters = [
    {
      title: 'UEFA Champions League',
      subtitle: 'Europe\'s Premier Club Tournament',
      image: '/sports/champions-league.jpg',
      fallback: '/sports/champions-league.jpg',
      badge: 'LIVE 4K ULTRA HD',
      channels: 'beIN SPORTS 1-3 / Canal+ 4K',
      tag: 'CHAMPIONS LEAGUE'
    },
    {
      title: 'UEFA Europa League',
      subtitle: 'Thursday Night European Drama',
      image: '/sports/europa-league.jpg',
      fallback: '/sports/europa-league.jpg',
      badge: 'LIVE 4K ULTRA HD',
      channels: 'beIN SPORTS / Canal+ Foot',
      tag: 'EUROPA LEAGUE'
    },
    {
      title: '2026 FIFA World Cup',
      subtitle: 'The Ultimate Global Football Stage',
      image: '/sports/world-cup-2026.jpg',
      fallback: '/sports/world-cup-2026.jpg',
      badge: 'EXCLUSIVE 60 FPS',
      channels: 'TF1 4K / beIN 4K / FOX Sports',
      tag: 'WORLD CUP 2026'
    },
    {
      title: 'Ligue 1 McDonald\'s',
      subtitle: 'French Top Tier League Matches',
      image: '/sports/ligue-1.jpg',
      fallback: '/sports/ligue-1.jpg',
      badge: 'LIVE 4K MULTI-CAM',
      channels: 'DAZN 1-4 / beIN SPORTS FR',
      tag: 'LIGUE 1 4K'
    }
  ];

  const competitions = [
    { name: 'Premier League', channel: 'Canal+ Sport / Sky Sports' },
    { name: 'LaLiga / Serie A / Bundesliga', channel: 'beIN SPORTS / Eleven' },
    { name: 'Formule 1 & MotoGP 4K', channel: 'Canal+ / Canal+ Sport 360' },
    { name: 'UFC & Main Card PPV', channel: 'RMC Sport / Fight Pass' },
    { name: 'NBA & EuroLeague', channel: 'beIN SPORTS / NBA TV' },
    { name: 'Rugby Top 14 & Six Nations', channel: 'Canal+ / France TV' },
  ];

  return (
    <section id="sports" className="py-20 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-md">
            <Trophy className="w-4 h-4 text-red-500 animate-bounce" />
            PREMIUM LIVE SPORTS ACCESS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            All <span className="text-orange-500">Major Matches</span> Live in 4K Zero-Lag
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Never miss a live sporting event worldwide. Enjoy top US and international sports networks in crisp 4K Ultra HD at 60 FPS.
          </p>
        </div>

        {/* Featured Live Sports Banner Card */}
        <div className="mb-12 relative rounded-3xl overflow-hidden border border-orange-500/30 bg-zinc-900 shadow-2xl group cursor-pointer" onClick={onOpenOrder}>
          <div className="absolute inset-0 z-0">
            <img
              src="/sports/champions-league.jpg"
              alt="Premium Live Sports Access 4K Stadium"
              referrerPolicy="no-referrer"
              onError={(e) => handlePosterImageError(e, 'UEFA Champions League 4K')}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                LIVE 4K 60FPS
              </span>
              <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-[11px] font-black uppercase tracking-wider">
                ANTI-FREEZE SERVER V5.0
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              UEFA, Premier League, NBA, UFC PPV & NFL Sunday Ticket
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
              Stream live matches with multi-audio feeds (English, French, Arabic, Spanish). Zero buffering, 99.9% uptime, instant channel switching on all Smart TVs, Firestick, Android, and iOS.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenOrder();
                }}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-orange-950/60 flex items-center gap-2 group/btn"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>START WATCHING LIVE SPORTS NOW</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Featured Sports Posters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {featuredPosters.map((poster, index) => (
            <div
              key={index}
              onClick={onOpenOrder}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:border-orange-500/80 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-orange-500/20 flex flex-col"
            >
              {/* Poster Image Container */}
              <div
                itemScope
                itemType="https://schema.org/ImageObject"
                className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-950"
              >
                <img
                  src={poster.image}
                  alt={`${poster.title} Live Match 4K Streaming Poster - PATREON IPTV`}
                  title={`Watch ${poster.title} Live in 4K Ultra HD on ${poster.channels} with PATREON IPTV`}
                  itemProp="contentUrl"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  width="300"
                  height="450"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => handlePosterImageError(e, poster.title)}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                {/* Live Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-lg z-10">
                  <Radio className="w-3 h-3 animate-pulse" />
                  <span>{poster.badge}</span>
                </div>

                {/* Hover Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] z-20">
                  <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Poster Info Footer */}
              <div className="p-4 bg-zinc-900/95 border-t border-zinc-800/80 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-orange-400 transition-colors line-clamp-1">
                    {poster.title}
                  </h3>
                  <p className="text-[11px] font-medium text-zinc-400 mt-0.5">
                    {poster.channels}
                  </p>
                </div>
                <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-bold text-orange-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Flame className="w-3.5 h-3.5 fill-emerald-400" />
                    Live 4K 60FPS
                  </span>
                  <span className="text-white group-hover:text-orange-400 flex items-center gap-1 text-[10px] uppercase font-black">
                    Watch Live <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features & More Competitions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8">
          
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-black text-white">
              Why Choose <span className="text-orange-500">PATREON IPTV</span> for Live Sports?
            </h3>
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Latency (Anti-Delay Sync for live broadcasting)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pay-Per-View (PPV) UFC, Boxing & Wrestling Included</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-Language Audio (English, French, Spanish, Arabic)</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenOrder}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 hover:scale-105 transition-all"
              >
                SUBSCRIBE NOW & ACCESS MATCHES
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {competitions.map((comp, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-orange-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-black text-orange-400 uppercase tracking-wider">LIVE 4K</span>
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <h4 className="text-xs font-extrabold text-white">{comp.name}</h4>
                <p className="text-[10px] font-semibold text-zinc-400 mt-0.5">{comp.channel}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};


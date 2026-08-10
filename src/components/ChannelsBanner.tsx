import React from 'react';
import { Tv, Radio, Sparkles } from 'lucide-react';
import { handleChannelImageError } from '../utils/imageUtils';

export const ChannelsBanner: React.FC = () => {
  const channelLogos = [
    { name: 'CANAL+', logo: '/channels/canal-plus.svg', badge: '4K HDR' },
    { name: 'DAZN', logo: '/channels/dazn.svg', badge: 'LIVE 60FPS' },
    { name: 'ESPN', logo: '/channels/espn.svg', badge: 'SPORTS 4K' },
    { name: 'NFL NETWORK', logo: '/channels/nfl-network.svg', badge: 'LIVE PPV' },
    { name: 'HBO', logo: '/channels/hbo.svg', badge: 'CINEMA 4K' },
    { name: 'BBC ONE', logo: '/channels/bbc-one.svg', badge: 'UK LIVE' },
    { name: 'EUROSPORT', logo: '/channels/eurosport.svg', badge: '4K SPORTS' },
    { name: 'SHOWTIME', logo: '/channels/showtime.svg', badge: 'PREMIUM' },
    { name: 'TF1', logo: '/channels/tf1.svg', badge: 'FRANCE 4K' },
    { name: 'ITV 1', logo: '/channels/itv1.svg', badge: 'UK 4K' },
    { name: 'RTL', logo: '/channels/rtl.svg', badge: 'GERMANY 4K' },
    { name: 'EURONEWS', logo: '/channels/euronews.svg', badge: 'NEWS 24/7' },
    { name: 'ARD 1', logo: '/channels/ard1.svg', badge: 'GERMANY' },
    { name: 'DAS ERSTE', logo: '/channels/das-erste.svg', badge: 'GERMANY 4K' },
    { name: 'DR 1', logo: '/channels/dr1.svg', badge: 'DENMARK' },
  ];

  return (
    <div className="bg-zinc-950 border-y border-zinc-800/80 py-10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center">
              <Tv className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight flex items-center gap-2">
                <span>25,000+ LIVE TV CHANNELS</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
                  <Radio className="w-3 h-3 animate-pulse" />
                  FHD / 4K STREAMS
                </span>
              </h3>
              <p className="text-xs text-zinc-400 font-medium">
                Included: USA, Canada, UK, France, Germany, Spain, Italy & International packages
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Anti-Freeze™ 99.9% Stability</span>
          </div>
        </div>

        {/* Channels Grid / Pill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {channelLogos.map((ch, idx) => (
            <div
              key={idx}
              itemScope
              itemType="https://schema.org/ImageObject"
              className="group relative p-3 rounded-xl bg-zinc-900/90 border border-zinc-800/80 hover:border-orange-500/50 hover:bg-zinc-900 transition-all duration-300 shadow-lg flex items-center gap-3"
            >
              {/* Logo Box */}
              <div className="w-12 h-10 rounded-lg bg-zinc-950 p-1.5 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src={ch.logo}
                  alt={`${ch.name} 4K Live TV Channel Logo - PATREON IPTV Stream`}
                  title={`Watch ${ch.name} 4K Ultra HD Live Streaming on PATREON IPTV`}
                  itemProp="contentUrl"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  width="48"
                  height="40"
                  className="max-h-full max-w-full object-contain filter drop-shadow"
                  onError={(e) => handleChannelImageError(e, ch.name)}
                />
              </div>

              {/* Title & Badge */}
              <div className="min-w-0 flex-1">
                <div itemProp="name" className="text-xs font-extrabold text-white group-hover:text-orange-400 transition-colors truncate">
                  {ch.name}
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[9px] font-black tracking-wider text-zinc-400 uppercase truncate">
                    {ch.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

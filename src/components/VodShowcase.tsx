import React, { useState } from 'react';
import { VOD_CATALOGUE } from '../data/mockData';
import { VodItem } from '../types';
import { Play, Star, Film, Search, Info } from 'lucide-react';
import { handlePosterImageError } from '../utils/imageUtils';

interface VodShowcaseProps {
  onOpenCatalogue: () => void;
}

export const VodShowcase: React.FC<VodShowcaseProps> = ({ onOpenCatalogue }) => {
  const [selectedVod, setSelectedVod] = useState<VodItem | null>(null);

  return (
    <section id="vod" className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-extrabold uppercase tracking-widest mb-3">
            <Film className="w-3.5 h-3.5" />
            MOVIES & TV SERIES VOD
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            60,000+ <span className="text-orange-500">Movies & TV Series</span> in 4K HDR
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-medium">
            Access the latest hits from Netflix, Prime Video, Disney+, Apple TV+, HBO Max, and Hulu in 4K Ultra HD with Dolby Digital audio.
          </p>
        </div>

        {/* Clean Showcase Container matching user sample image */}
        <div className="bg-white/95 text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
                Trending Movies & 4K Series Showcase
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5">
                Swipe or scroll to explore 60,000+ top rated titles
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 font-extrabold text-xs">
                4K Ultra HD
              </span>
            </div>
          </div>

          {/* Horizontal Poster Slider matching user sample layout */}
          <div className="flex items-center gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
            {VOD_CATALOGUE.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedVod(item)}
                className="flex-none w-36 sm:w-44 md:w-48 snap-start cursor-pointer group"
              >
                {/* Clean Poster Card */}
                <div className="aspect-[2/3] w-full rounded-2xl overflow-hidden bg-slate-200 shadow-md group-hover:shadow-xl transition-all duration-300 relative">
                  <img
                    src={item.poster}
                    alt={`${item.title} (${item.year}) Poster - PATREON IPTV`}
                    title={`${item.title} - PATREON IPTV`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                    onError={(e) => handlePosterImageError(e, item.title)}
                  />
                  {/* Subtle 4K Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white font-black text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md tracking-wider">
                    4K
                  </div>
                </div>
                {/* Poster Title */}
                <div className="mt-2.5 px-0.5">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mt-0.5">
                    <span>{item.genre}</span>
                    <span className="text-orange-600 font-bold">★ {item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Open Searchable Catalogue */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenCatalogue}
            className="px-8 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-zinc-700 hover:border-orange-500/50 shadow-xl transition-all inline-flex items-center gap-2.5"
          >
            <Search className="w-4 h-4 text-orange-400" />
            <span>BROWSE FULL VOD CATALOGUE (60,000+ TITLES)</span>
          </button>
        </div>
      </div>

      {/* Selected VOD Details Modal */}
      {selectedVod && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={selectedVod.poster}
                alt={`${selectedVod.title} (${selectedVod.year}) ${selectedVod.quality} Full HD Movie Poster - PATREON IPTV`}
                title={`${selectedVod.title} (${selectedVod.year}) - Stream VOD in 4K HDR on PATREON IPTV`}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => handlePosterImageError(e, selectedVod.title)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
              <button
                onClick={() => setSelectedVod(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-zinc-300 hover:text-white flex items-center justify-center font-extrabold text-sm"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-block px-2 py-0.5 rounded bg-orange-500 text-white font-black text-[10px] uppercase tracking-wider mb-1">
                  {selectedVod.quality} • {selectedVod.genre}
                </div>
                <h3 className="text-2xl font-black text-white">{selectedVod.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-zinc-400 border-b border-zinc-800 pb-3">
                <span className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  {selectedVod.rating} / 10
                </span>
                <span>Year: {selectedVod.year}</span>
                <span className="uppercase text-orange-400 font-extrabold">Included in PATREON IPTV</span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {selectedVod.synopsis}
              </p>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => setSelectedVod(null)}
                  className="flex-1 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20"
                >
                  Stream Now on PATREON IPTV
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

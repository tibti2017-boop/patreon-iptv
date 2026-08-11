import React, { useState } from 'react';
import { TV_CHANNELS_LIST, VOD_CATALOGUE } from '../data/mockData';
import { X, Search, Tv, Film, Star, CheckCircle } from 'lucide-react';
import { handleChannelImageError, handlePosterImageError } from '../utils/imageUtils';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'channels' | 'vod'>('channels');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  if (!isOpen) return null;

  const filteredChannels = TV_CHANNELS_LIST.filter(ch => {
    const matchesSearch = ch.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || ch.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const filteredVod = VOD_CATALOGUE.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.genre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-4xl w-full h-[85vh] flex flex-col overflow-hidden relative shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between gap-4 bg-zinc-900/50">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Full Catalogue <span className="text-orange-500">PATREON IPTV</span>
            </h2>
            <p className="text-xs text-zinc-400">
              Search through 25,000+ live channels and 60,000+ movies & TV series.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center font-bold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls: Search & Tabs */}
        <div className="p-4 sm:p-6 border-b border-zinc-800/80 space-y-4 bg-zinc-900/20">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Tabs */}
            <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('channels')}
                className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs font-black uppercase transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'channels'
                    ? 'bg-orange-500 text-white shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Tv className="w-4 h-4" />
                <span>Live Channels (25,000+)</span>
              </button>
              <button
                onClick={() => setActiveTab('vod')}
                className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs font-black uppercase transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'vod'
                    ? 'bg-orange-500 text-white shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Film className="w-4 h-4" />
                <span>VOD Movies & Series (60,000+)</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search channels, movies, series..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* Category Filter for Channels */}
          {activeTab === 'channels' && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold scrollbar-none">
              {[
                { id: 'all', label: 'All Channels' },
                { id: 'usa', label: 'USA & US Local' },
                { id: 'sports', label: 'Sports & PPV' },
                { id: 'cinema', label: 'Cinema & HBO' },
                { id: 'kids', label: 'Kids & Family' },
                { id: 'international', label: 'International / UK' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-3 py-1.5 rounded-lg border text-[11px] font-bold whitespace-nowrap transition-all ${
                    categoryFilter === cat.id
                      ? 'bg-orange-500/20 border-orange-500 text-orange-400'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content List Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activeTab === 'channels' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {filteredChannels.map((ch) => (
                <div
                  key={ch.id}
                  className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-950 p-1.5 flex items-center justify-center border border-zinc-800 shrink-0 overflow-hidden">
                      {ch.logoImage ? (
                        <div itemScope itemType="https://schema.org/ImageObject" className="w-full h-full flex items-center justify-center">
                          <img
                            src={ch.logoImage}
                            alt={`${ch.name} 4K Live TV Channel Stream Logo - PATREON IPTV`}
                            title={`Watch ${ch.name} Live in 4K Ultra HD - PATREON IPTV`}
                            itemProp="contentUrl"
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer"
                            className="max-h-full max-w-full object-contain"
                            onError={(e) => handleChannelImageError(e, ch.name)}
                          />
                        </div>
                      ) : (
                        <div className="text-orange-400 font-black text-[10px]">TV</div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{ch.name}</h4>
                      <span className="text-[10px] text-zinc-400 uppercase font-semibold">{ch.category}</span>
                    </div>
                  </div>
                  {ch.is4k && (
                    <span className="text-[9px] font-black bg-orange-500 text-black px-1.5 py-0.5 rounded uppercase">
                      4K Ultra
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {filteredVod.map((item) => (
                <div key={item.id} className="select-none">
                  <div itemScope itemType="https://schema.org/ImageObject" className="aspect-[2/3] w-full relative overflow-hidden rounded-2xl bg-zinc-800 shadow-lg">
                    <img
                      src={item.poster}
                      alt={`${item.title} (${item.year}) ${item.quality} Movie & TV Series Poster - PATREON IPTV`}
                      title={`Stream ${item.title} (${item.year}) in ${item.quality} HDR - PATREON IPTV VOD`}
                      itemProp="contentUrl"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-2xl pointer-events-none"
                      onError={(e) => handlePosterImageError(e, item.title)}
                    />
                    {/* 4K Top-Left Badge */}
                    <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white font-black text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md tracking-wider pointer-events-none">
                      4K
                    </div>
                  </div>
                  <div className="mt-2 px-0.5">
                    <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
                    <div className="text-[10px] text-zinc-400 flex items-center justify-between mt-0.5">
                      <span className="truncate max-w-[70%]">{item.genre}</span>
                      <span className="text-orange-400 font-bold">★ {item.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900/50 flex items-center justify-between text-xs font-bold text-zinc-400">
          <span>Included at no extra charge in all PATREON IPTV subscriptions.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold uppercase"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

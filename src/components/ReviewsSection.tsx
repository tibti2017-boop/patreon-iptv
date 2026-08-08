import React from 'react';
import { REVIEWS_LIST } from '../data/mockData';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            VERIFIED CUSTOMER REVIEWS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            What Our <span className="text-orange-500">100,000+ Subscribers</span> Say
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-medium">
            Read honest feedback from our subscribers across the US, Canada, UK, and worldwide.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_LIST.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500 font-semibold">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* User Avatar & Location */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
                <img
                  src={rev.avatar}
                  alt={`${rev.name} - Verified PATREON IPTV Subscriber Review (${rev.location})`}
                  title={`${rev.name} (${rev.location}) - Verified Subscriber`}
                  loading="lazy"
                  decoding="async"
                  width="40"
                  height="40"
                  className="w-10 h-10 rounded-full object-cover border border-orange-500/30"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(rev.name)}&background=f97316&color=fff&bold=true`;
                  }}
                />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </div>
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                    {rev.location} • VERIFIED PURCHASE
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

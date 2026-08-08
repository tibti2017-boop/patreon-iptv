import React from 'react';
import { ShieldCheck, Zap, Tv, Globe, Film, Award, CheckCircle2 } from 'lucide-react';

export const SeoContentSection: React.FC = () => {
  return (
    <section id="seo-info" className="py-20 bg-zinc-950 border-t border-zinc-800/80 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SEO Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            #1 PREMIER IPTV PROVIDER 2026
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Why PATREON IPTV Is The <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">Best IPTV Service</span> In 2026
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Discover the #1 recommended IPTV subscription for Smart TV, Amazon Firestick, Android Box, Apple TV, PC, and Smartphones with 25,000+ live channels and 60,000+ VOD movies and TV series in 4K.
          </p>
        </div>

        {/* 3 Main Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <article className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">
                25,000+ Live TV Channels in 4K & Full HD
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                Access all your favorite channel packages in 4K Ultra HD at 60 FPS. Enjoy live sports (DAZN, Canal+, ESPN, NFL RedZone, beIN Sports, Eurosport) and local networks from USA, Canada, UK, France, Germany, and worldwide.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300 font-medium border-t border-zinc-800/80 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>US & France Local Networks in 4K</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>US Sports (NFL, NBA, MLB, NHL, UFC PPV)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UK, Europe & International Packages</span>
              </li>
            </ul>
          </article>

          <article className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">
                Anti-Freeze™ 99.9% Server Uptime
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                Our high-speed dedicated servers are powered by Anti-Freeze™ v5.0 technology to ensure uninterrupted, buffer-free live streams even during peak sporting events (Super Bowl, Champions League, Formula 1).
              </p>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300 font-medium border-t border-zinc-800/80 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Buffering / Zero Freezing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Load-Balanced High-Speed Servers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ultra-fast 10 Gbps Bandwidth Network</span>
              </li>
            </ul>
          </article>

          <article className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">
                60,000+ VOD Movies & TV Series
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                Enjoy a daily-updated VOD library with top releases from Netflix, HBO Max, Disney+, Amazon Prime Video, Apple TV+, and Paramount+. Available with multi-language audio and subtitles in 4K HDR.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300 font-medium border-t border-zinc-800/80 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-Language Audio & Subtitles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily Updates for New Releases</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>4K Ultra, 1080p Full HD & HEVC H.265</span>
              </li>
            </ul>
          </article>

        </div>

        {/* Deep SEO Article Text Box for Crawler Rich Indexing */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-zinc-800/80 space-y-6 text-zinc-300 text-xs sm:text-sm leading-relaxed">
          <h3 className="text-xl sm:text-2xl font-black text-white border-b border-zinc-800 pb-4 flex items-center gap-3">
            <Globe className="w-6 h-6 text-orange-400 shrink-0" />
            <span>Premium IPTV Guide: Device Compatibility & Quick Setup</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-white text-base">How to Install PATREON IPTV on Your Device</h4>
              <p>
                Setting up your PATREON IPTV subscription takes under 3 minutes. We provide ultra-stable <strong>M3U Playlist</strong> links and <strong>Xtream Codes API</strong> login credentials compatible with all top streaming apps:
              </p>
              <ul className="list-disc list-inside space-y-1 text-zinc-400 pl-2">
                <li><strong>Amazon Firestick / Fire TV:</strong> IPTV Smarters Pro, Tivimate, IBO Player, XCIPTV.</li>
                <li><strong>Smart TV (Samsung & LG):</strong> Smart ONE IPTV, IBO Player, NET IPTV, SS IPTV.</li>
                <li><strong>Android TV & Box:</strong> Tivimate Premium, IPTV Smarters Pro, Sparkle TV.</li>
                <li><strong>Apple TV / iOS (iPhone, iPad):</strong> GSE Smart IPTV, IPTV Smarters, Purple Player.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white text-base">24-Hour Free IPTV Trial & 24/7 Live WhatsApp Support</h4>
              <p>
                Want to test the quality first? Request a <strong>24-Hour Free IPTV Trial</strong> directly from our live support team via <strong>WhatsApp</strong>.
              </p>
              <p>
                Our <strong>7-Day 100% Money-Back Guarantee</strong> gives you complete peace of mind. Our support team guides you step-by-step through configuration on all your screens.
              </p>
              <div className="pt-2 flex items-center gap-2 text-orange-400 font-bold">
                <ShieldCheck className="w-5 h-5" />
                <span>Instant Delivery via Email & WhatsApp in under 5 minutes</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

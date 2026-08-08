import React from 'react';
import { ShoppingBag, Key, Download, Tv } from 'lucide-react';

export const StepsSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Package',
      desc: 'Select your preferred plan (1, 3, 6, 12, 24 months or Lifetime Access) and number of simultaneous devices.',
      icon: ShoppingBag
    },
    {
      num: '02',
      title: 'Receive Credentials',
      desc: 'In under 3 minutes, your Xtream API credentials & M3U playlist link are sent automatically via email & WhatsApp.',
      icon: Key
    },
    {
      num: '03',
      title: 'Install Streaming App',
      desc: 'Download IPTV Smarters Pro, Tivimate, or IBO Player on your device using our step-by-step setup guides.',
      icon: Download
    },
    {
      num: '04',
      title: 'Stream in 4K Ultra HD',
      desc: 'Launch your live sports, movies, and favorite TV series instantly in buffer-free 4K Ultra HD quality.',
      icon: Tv
    }
  ];

  return (
    <section className="py-20 bg-zinc-900/40 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
            3-MINUTE EASY SETUP
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 mb-4">
            How It <span className="text-orange-500">Works</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-medium">
            4 simple steps to unlock the ultimate high-definition digital television experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 transition-all group"
              >
                <div className="text-4xl font-black text-orange-500/30 group-hover:text-orange-500/50 transition-colors absolute top-4 right-4">
                  {s.num}
                </div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

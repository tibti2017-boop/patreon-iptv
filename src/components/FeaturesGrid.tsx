import React from 'react';
import { Tv, ShieldCheck, RefreshCw, Zap, Cpu, Headphones, Smartphone, Monitor } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: Tv,
      title: '4K Ultra HD & 60 FPS Quality',
      description: 'Enjoy crystal-clear High Definition and 4K Real HDR without aggressive compression.'
    },
    {
      icon: ShieldCheck,
      title: '99.9% Anti-Freeze Technology',
      description: 'Our load-balanced high-speed server clusters guarantee uninterrupted streaming during major games and live events.'
    },
    {
      icon: RefreshCw,
      title: '7-Day Replay & Full TV Guide (EPG)',
      description: 'Integrated Electronic Program Guide (EPG) and up to 7-day catchup replay so you never miss your favorite shows.'
    },
    {
      icon: Zap,
      title: 'Instant Automatic Activation',
      description: 'Your secure Xtream API credentials and M3U playlist link are sent automatically via email and WhatsApp in under 3 minutes.'
    },
    {
      icon: Smartphone,
      title: '100% Device Compatibility',
      description: 'Works seamlessly on Amazon Firestick, Smart TVs, Android Box, Apple TV, iPhone, iPad, PC, and MAG boxes.'
    },
    {
      icon: Headphones,
      title: '24/7 VIP Live Customer Support',
      description: 'Our dedicated technical support team is available 24/7 on WhatsApp and Email to assist with setup.'
    }
  ];

  return (
    <section className="py-20 bg-zinc-900/50 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
            EXCLUSIVE ADVANTAGES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 mb-4">
            Why Choose <span className="text-orange-500">PATREON IPTV</span>?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-medium">
            Premium high-speed IPTV infrastructure engineered for ultra-stable 4K streaming worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

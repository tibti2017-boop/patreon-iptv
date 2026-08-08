import React, { useState } from 'react';
import { DEVICE_GUIDES } from '../data/mockData';
import { DeviceGuide } from '../types';
import { Tv, Smartphone, Monitor, Laptop, Box, Download, CheckCircle, ArrowRight } from 'lucide-react';

interface DevicesSectionProps {
  onOpenInstallGuide: (guide: DeviceGuide) => void;
}

export const DevicesSection: React.FC<DevicesSectionProps> = ({ onOpenInstallGuide }) => {
  return (
    <section id="devices" className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
            100% MULTI-DEVICE COMPATIBILITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 mb-4">
            Supported on All Your <span className="text-orange-500">Favorite Devices</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-medium">
            Install PATREON IPTV in under 3 minutes with our step-by-step setup guides for every streaming platform.
          </p>
        </div>

        {/* Devices Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEVICE_GUIDES.map((dev) => (
            <div
              key={dev.id}
              onClick={() => onOpenInstallGuide(dev)}
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 transition-all cursor-pointer group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black text-orange-400 uppercase tracking-wider bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20">
                    {dev.category}
                  </span>
                  {dev.downloaderCode && (
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      Downloader Code: {dev.downloaderCode}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {dev.name}
                </h3>

                <p className="text-xs text-zinc-400 mb-4">
                  Recommended App: <strong className="text-zinc-200">{dev.recommendedApp}</strong>
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-bold text-orange-400 group-hover:text-orange-300">
                <span>VIEW INSTALLATION GUIDE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

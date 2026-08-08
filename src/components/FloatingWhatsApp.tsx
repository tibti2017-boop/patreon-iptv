import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => {
    const text = 'Hello PATREON IPTV, I would like information about subscription plans.';
    window.open(`https://wa.me/447707762059?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Popover Tooltip */}
      {isOpen && (
        <div className="bg-zinc-900 border border-zinc-700 p-4 rounded-2xl shadow-2xl max-w-xs w-64 text-xs space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="font-extrabold text-white">Direct IPTV Support</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-zinc-300">
            Need setup assistance or want a 24h free trial? Chat with our technical agent live on WhatsApp!
          </p>
          <button
            onClick={openChat}
            className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold uppercase tracking-wider text-[11px] shadow-md flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>START CHAT NOW</span>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all group relative border border-emerald-400/30"
        aria-label="WhatsApp Support"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-orange-500 border-2 border-zinc-950"></span>
      </button>
    </div>
  );
};

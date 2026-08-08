import React, { useState } from 'react';
import { FAQ_LIST } from '../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-zinc-900/40 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Everything You Need to <span className="text-orange-500">Know</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-medium">
            Have questions? Explore answers to the most common queries about our PATREON IPTV service.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-orange-400 transition-colors"
                >
                  <span>{item.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-orange-500 text-white' : 'text-zinc-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 mt-1">
                    <p className="pt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

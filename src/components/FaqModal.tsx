import React, { useState } from 'react';
import { X, HelpCircle, Search, ChevronDown, ChevronUp, MessageCircle, Tv, Zap, ShieldCheck, Download } from 'lucide-react';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrder: () => void;
  onOpenTrial: () => void;
}

interface FaqItem {
  id: string;
  category: 'general' | 'setup' | 'channels' | 'billing';
  question: string;
  answer: string;
}

export const FaqModal: React.FC<FaqModalProps> = ({ isOpen, onClose, onOpenOrder, onOpenTrial }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'setup' | 'channels' | 'billing'>('all');
  const [openId, setOpenId] = useState<string | null>('q1');

  if (!isOpen) return null;

  const faqs: FaqItem[] = [
    {
      id: 'q1',
      category: 'general',
      question: 'What is PATREON IPTV and how does it work?',
      answer: 'PATREON IPTV is a premier digital streaming service providing access to over 25,000 live TV channels and 60,000+ VOD movies and series in 4K Ultra HD and 1080p. It streams directly over your internet connection without dish or cable installation.'
    },
    {
      id: 'q2',
      category: 'setup',
      question: 'Which devices and streaming apps are supported?',
      answer: 'PATREON IPTV is 100% compatible with Amazon Firestick, Fire TV, Smart TVs (Samsung, LG, Sony, TCL), Android TV Boxes, Apple TV, iPhone, iPad, Windows, Mac, MAG, and Formuler. Popular compatible apps include IPTV Smarters Pro, Tivimate, IBO Player, and XCIPTV.'
    },
    {
      id: 'q3',
      category: 'setup',
      question: 'How fast will I receive my login credentials after ordering?',
      answer: 'Delivery is automated and instant! You will receive your Xtream Codes API login (Username, Password, Server URL) and M3U playlist link via Email and WhatsApp within 3 minutes of completing your order.'
    },
    {
      id: 'q4',
      category: 'channels',
      question: 'Are Pay-Per-View (PPV) and Live Sports events included?',
      answer: 'Yes! All major live sports packages—including NFL Game Pass, NBA League Pass, MLB, NHL, UFC PPV, Boxing, Formula 1, UEFA Champions League, and Premier League—are included at no extra cost in 4K HDR at 60 FPS.'
    },
    {
      id: 'q5',
      category: 'general',
      question: 'Does PATREON IPTV feature Anti-Freeze™ technology?',
      answer: 'Yes, our infrastructure utilizes high-speed dedicated servers with load balancing and Anti-Freeze™ v5.0 technology to guarantee 99.9% uptime with zero buffering, even during high-traffic sports matches.'
    },
    {
      id: 'q6',
      category: 'billing',
      question: 'Do you offer a free trial before purchasing?',
      answer: 'Yes! We offer a 24-Hour Free Trial so you can evaluate the channel selection and picture quality risk-free. You can request a trial anytime via WhatsApp or our online trial form.'
    },
    {
      id: 'q7',
      category: 'billing',
      question: 'What is your refund policy?',
      answer: 'We provide a 7-Day 100% Money-Back Guarantee. If our support team cannot resolve a technical issue with your subscription within 7 days, you will receive a full refund immediately.'
    },
    {
      id: 'q8',
      category: 'setup',
      question: 'Can I use my subscription on multiple devices simultaneously?',
      answer: 'Yes! While standard plans cover 1 device at a time, you can select multi-device options (2, 3, or 4 screens) during checkout to stream simultaneously in different rooms.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-zinc-100 my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Frequently Asked Questions (FAQ)
              </h2>
              <p className="text-xs text-zinc-400">Find answers about setup, channels, devices, and billing</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filters */}
        <div className="py-4 border-b border-zinc-800 space-y-3 shrink-0">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search FAQ questions (e.g., Firestick, trial, sports, M3U)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'general', label: 'General' },
              { id: 'setup', label: 'Setup & Devices' },
              { id: 'channels', label: 'Channels & Sports' },
              { id: 'billing', label: 'Billing & Guarantee' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-all ${
                  activeCategory === tab.id
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="overflow-y-auto py-4 pr-1 space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map(faq => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-zinc-900/80 border border-zinc-800/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-orange-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-orange-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/50 bg-zinc-950/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-zinc-500 text-xs">
              No matching questions found for "{searchTerm}".
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-zinc-400 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Still have questions? Chat live 24/7</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenTrial();
              }}
              className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-bold text-xs uppercase"
            >
              24H Free Trial
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenOrder();
              }}
              className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider"
            >
              Get Access
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

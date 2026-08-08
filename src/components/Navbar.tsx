import React, { useState, useEffect } from 'react';
import { Menu, X, Tv, Zap } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  onOpenOrder: (planId?: string) => void;
  onOpenTrial: () => void;
  onOpenCatalogue: () => void;
  onOpenContact?: () => void;
  onOpenFaq?: () => void;
  onOpenBlog?: () => void;
  onOpenReseller?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrder,
  onOpenTrial,
  onOpenCatalogue,
  onOpenContact,
  onOpenFaq,
  onOpenBlog,
  onOpenReseller,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                <Tv className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white flex items-center gap-1">
                PATREON <span className="text-cyan-400 font-extrabold">IPTV</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
                USA 4K ULTRA HD
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => scrollToSection('sports')}
              className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors"
            >
              LIVE SPORTS
            </button>
            <button
              onClick={() => scrollToSection('vod')}
              className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors"
            >
              MOVIES & SHOWS
            </button>
            <button
              onClick={onOpenCatalogue}
              className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              CHANNELS <span className="bg-cyan-500/20 text-cyan-400 text-[9px] px-1.5 py-0.5 rounded font-extrabold border border-cyan-500/30">25K+</span>
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors"
            >
              PRICING
            </button>
            <button
              onClick={() => onOpenFaq ? onOpenFaq() : scrollToSection('faq')}
              className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('devices')}
              className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors"
            >
              SETUP GUIDES
            </button>
            {onOpenBlog && (
              <button
                onClick={onOpenBlog}
                className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors"
              >
                BLOG & GUIDES
              </button>
            )}
            {onOpenReseller && (
              <button
                onClick={onOpenReseller}
                className="text-xs font-black uppercase tracking-wider text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                RESELLER
              </button>
            )}
            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors"
              >
                CONTACT
              </button>
            )}
          </nav>

          {/* Right Action CTA & Language Selector */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageSelector variant="navbar" />
            <button
              onClick={onOpenTrial}
              className="text-xs font-bold px-3.5 py-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 transition-all flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              24H Free Trial
            </button>
            <button
              onClick={() => onOpenOrder()}
              className="relative group overflow-hidden rounded-lg p-[1px] font-bold text-xs"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-lg group-hover:opacity-90 transition-opacity"></span>
              <span className="relative block px-5 py-2.5 rounded-[7px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold tracking-wider uppercase transition-all group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                GET INSTANT ACCESS
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3 font-medium">
            <button
              onClick={() => scrollToSection('sports')}
              className="text-left py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50"
            >
              LIVE SPORTS & PPV
            </button>
            <button
              onClick={() => scrollToSection('vod')}
              className="text-left py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50"
            >
              MOVIES & SERIES 4K
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCatalogue();
              }}
              className="text-left py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50 flex items-center justify-between"
            >
              <span>CHANNEL LIST</span>
              <span className="bg-cyan-500 text-zinc-950 text-xs px-2 py-0.5 rounded font-extrabold">25,000+</span>
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-left py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50"
            >
              PRICING & PLANS
            </button>
            <button
              onClick={() => scrollToSection('devices')}
              className="text-left py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50"
            >
              INSTALLATION GUIDES
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenFaq) onOpenFaq();
                else scrollToSection('faq');
              }}
              className="text-left py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50"
            >
              FREQUENTLY ASKED QUESTIONS (FAQ)
            </button>
            {onOpenBlog && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBlog();
                }}
                className="text-left py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50"
              >
                BLOG & TUTORIALS
              </button>
            )}
            {onOpenReseller && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReseller();
                }}
                className="text-left py-2 text-sm font-black text-cyan-400 hover:text-cyan-300 border-b border-zinc-800/50 flex items-center justify-between"
              >
                <span>RESELLER PROGRAM</span>
                <span className="bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs px-2 py-0.5 rounded font-extrabold uppercase">300% PROFIT</span>
              </button>
            )}
            {onOpenContact && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="text-left py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50"
              >
                CONTACT SUPPORT
              </button>
            )}

            <LanguageSelector variant="mobile" />

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial();
                }}
                className="w-full py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm flex items-center justify-center gap-2 border border-zinc-700"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                Get 24H Free Trial
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/20"
              >
                GET INSTANT ACCESS NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

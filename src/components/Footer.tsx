import React from 'react';
import { Tv, ShieldCheck, MessageCircle } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

interface FooterProps {
  onOpenOrder: () => void;
  onOpenCatalogue: () => void;
  onOpenContact?: () => void;
  onOpenFaq?: () => void;
  onOpenPrivacy?: () => void;
  onOpenRefund?: () => void;
  onOpenBlog?: () => void;
  onOpenReseller?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenOrder,
  onOpenCatalogue,
  onOpenContact,
  onOpenFaq,
  onOpenPrivacy,
  onOpenRefund,
  onOpenBlog,
  onOpenReseller,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-0.5">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <Tv className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-black text-white">
                PATREON <span className="text-cyan-400">IPTV</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              PATREON IPTV is the leading provider of 4K Ultra HD IPTV subscriptions for the USA & worldwide. Stream NFL, NBA, MLB, NHL, PPV, local live TV, and VOD on all devices.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>256-Bit SSL Encrypted & Anti-Freeze™ Server Network</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">NAVIGATION</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => scrollTo('sports')} className="hover:text-cyan-400 transition-colors">
                  Live Sports & PPV
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('vod')} className="hover:text-cyan-400 transition-colors">
                  Movies & TV Series 60K+
                </button>
              </li>
              <li>
                <button onClick={onOpenCatalogue} className="hover:text-cyan-400 transition-colors">
                  Full 25,000+ Channel List
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-cyan-400 transition-colors">
                  Pricing & Subscription Packages
                </button>
              </li>
              {onOpenBlog && (
                <li>
                  <button onClick={onOpenBlog} className="hover:text-cyan-400 transition-colors">
                    IPTV Blog & Setup Guides
                  </button>
                </li>
              )}
              {onOpenReseller && (
                <li>
                  <button onClick={onOpenReseller} className="text-cyan-400 font-extrabold hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    IPTV Reseller Program (300% Profit)
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Devices */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">COMPATIBLE DEVICES</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>Amazon Firestick & Fire TV 4K</li>
              <li>Smart TV (Samsung, LG, Sony, TCL)</li>
              <li>Android TV Boxes & Phones</li>
              <li>Apple TV & iPhone / iPad</li>
              <li>MAG Box & Formuler</li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">24/7 CUSTOMER SUPPORT</h4>
            <p className="text-xs text-zinc-400">Instant setup help & assistance via WhatsApp live chat and email.</p>
            <a
              href="https://wa.me/447707762059?text=Hello%20PATREON%20IPTV!%20I%20would%20like%20information%20about%20subscriptions."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-bold text-xs hover:bg-emerald-600 hover:text-white transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Live WhatsApp Support</span>
            </a>
          </div>

        </div>

        {/* Legal Disclaimer & Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-medium">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} PATREON IPTV USA 4K. All rights reserved.</p>
            <LanguageSelector variant="footer" />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {onOpenContact && (
              <button onClick={onOpenContact} className="hover:text-cyan-400 transition-colors">
                Contact Us
              </button>
            )}
            {onOpenFaq ? (
              <button onClick={onOpenFaq} className="hover:text-cyan-400 transition-colors">
                FAQ
              </button>
            ) : (
              <button onClick={() => scrollTo('faq')} className="hover:text-cyan-400 transition-colors">
                FAQ
              </button>
            )}
            {onOpenPrivacy && (
              <button onClick={onOpenPrivacy} className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </button>
            )}
            {onOpenRefund && (
              <button onClick={onOpenRefund} className="hover:text-cyan-400 transition-colors">
                Refund Policy
              </button>
            )}
            {onOpenReseller && (
              <button onClick={onOpenReseller} className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                Reseller Program
              </button>
            )}
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              Sitemap
            </a>
            <button onClick={onOpenOrder} className="hover:text-cyan-400 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

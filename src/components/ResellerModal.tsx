import React, { useState } from 'react';
import {
  X,
  Zap,
  Check,
  MessageCircle,
  TrendingUp,
  Server,
  Users,
  ShieldCheck,
  Settings,
  HelpCircle,
  ChevronRight,
  Calculator,
  Sparkles,
  Lock,
  Award,
  Globe
} from 'lucide-react';

interface ResellerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

export const ResellerModal: React.FC<ResellerModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [selectedPack, setSelectedPack] = useState('250-credits');
  const [clientCount, setClientCount] = useState(50);
  const [pricePerYear, setPricePerYear] = useState(60);
  const [customPackageName, setCustomPackageName] = useState('');
  const [customPhone, setCustomPhone] = useState('');
  const [customEmail, setCustomEmail] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  if (!isOpen) return null;

  // Reseller Credit Packs matching the screenshot design
  const packs = [
    {
      id: '120-credits',
      name: 'Starter',
      credits: '120 Credits',
      dollars: '279',
      cents: '.95',
      price: '$279.95',
      pricePerCredit: '$2.33/credit',
      popular: false,
      features: [
        'Your own Reseller Panel',
        'Credits Never Expire',
        'Add Credits Anytime',
        'Add, Edit, and Delete Users',
        'Create Sub Resellers',
        'Works On All Devices',
        '24/7 Live Chat Support',
        'Ability to add your own DNS',
      ],
    },
    {
      id: '240-credits',
      name: 'Pro',
      credits: '240 Credits',
      dollars: '499',
      cents: '.95',
      price: '$499.95',
      pricePerCredit: '$2.08/credit',
      popular: true,
      features: [
        'Your own Reseller Panel',
        'Credits Never Expire',
        'Add Credits Anytime',
        'Add, Edit, and Delete Users',
        'Create Sub Resellers',
        'Works On All Devices',
        '24/7 Live Chat Support',
        'Ability to add your own DNS',
      ],
    },
    {
      id: '600-credits',
      name: 'Business',
      credits: '600 Credits',
      dollars: '1239',
      cents: '.95',
      price: '$1239.95',
      pricePerCredit: '$2.06/credit',
      popular: false,
      features: [
        'Your own Reseller Panel',
        'Credits Never Expire',
        'Add Credits Anytime',
        'Add, Edit, and Delete Users',
        'Create Sub Resellers',
        'Works On All Devices',
        '24/7 Live Chat Support',
        'Ability to add your own DNS',
      ],
    },
  ];

  // Profit Calculator Math
  const currentPackObj = packs.find((p) => p.id === selectedPack) || packs[1];
  const unitCreditCost =
    selectedPack === '120-credits'
      ? 2.33
      : selectedPack === '240-credits'
      ? 2.08
      : 2.06;

  const costPerYearClient = unitCreditCost * 10;
  const netProfitPerYearClient = Math.max(0, pricePerYear - costPerYearClient);
  const totalMonthlyProfit = Math.round((clientCount * netProfitPerYearClient) / 12);
  const totalAnnualProfit = Math.round(clientCount * netProfitPerYearClient);

  const handleOrderPackWhatsApp = (packName: string, packPrice: string) => {
    const msg = `Hello PATREON IPTV!\n\nI want to join the RESELLER PROGRAM and order:\n- Credit Package: ${packName} (${packPrice})\n- Phone/WhatsApp: ${customPhone || 'Not specified'}\n- Email: ${customEmail || 'Not specified'}\n\nPlease activate my Xtream UI Reseller Panel credentials.`;
    window.open(
      `https://wa.me/447707762059?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  const faqs = [
    {
      q: 'What is an IPTV Reseller Panel and how does it work?',
      a: 'An IPTV Reseller Panel is a web-based management dashboard (Xtream UI) that allows you to sell IPTV subscriptions under your own business name. You buy credits in bulk at wholesale prices, create trial accounts, 1/3/6/12-month subscriptions, and manage your clients with 100% control over pricing and profit.',
    },
    {
      q: 'Do reseller credits ever expire?',
      a: 'No! Your credits never expire. You can keep them in your Xtream panel as long as you want and use them whenever you make a sale to a customer.',
    },
    {
      q: 'How many credits does a subscription cost?',
      a: 'Our credit deduction rate is standard and simple:\n• 1 Month Subscription = 1 Credit\n• 3 Months Subscription = 3 Credits\n• 6 Months Subscription = 6 Credits\n• 12 Months (1 Year) Subscription = 10 Credits\n• 24-Hour Trial Line = FREE (0 Credits)',
    },
    {
      q: 'Can I create Free Trial lines for my prospective clients?',
      a: 'Yes! All reseller packages come with UNLIMITED 24-Hour Free Test Lines. You can generate trial lines anytime from your panel to showcase 4K streams to potential buyers before converting them to paid clients.',
    },
    {
      q: 'Can I create Sub-Resellers under my panel?',
      a: 'Yes! On packages starting at 250 credits and above, you can create sub-reseller accounts under your main panel and sell credits to them at your own custom prices.',
    },
    {
      q: 'How fast do I receive my Reseller Panel credentials after payment?',
      a: 'Reseller panel setups are prioritized! Once you complete your credit pack order on WhatsApp, your panel is activated and delivered within 10 to 15 minutes along with a video setup tutorial.',
    },
    {
      q: 'Is the panel white-labeled?',
      a: 'Yes! Your clients will only see your own portal links or custom DNS if configured. Our brand name PATREON IPTV is completely invisible to your end users.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md overflow-y-auto flex justify-center items-start p-3 sm:p-6 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-6xl w-full relative shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200 text-zinc-100">
        
        {/* Top Header Bar */}
        <div className="sticky top-0 z-30 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                <Users className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                IPTV RESELLER PROGRAM
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-[10px] font-extrabold border border-cyan-500/30 uppercase">
                  Xtream Panel
                </span>
              </h2>
              <p className="text-xs text-zinc-400">
                Start your IPTV business today with up to 300% profit margin
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center justify-center transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 space-y-12">
          
          {/* Hero Banner Section */}
          <div className="relative rounded-2xl bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-zinc-900 border border-cyan-500/30 p-6 sm:p-10 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                OFFICIAL XTREAM CODES RESELLER PANEL
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Become an IPTV Reseller & Build Your Own <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">High-Profit Business</span>
              </h1>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Join hundreds of successful IPTV resellers worldwide. Gain instant access to our powerful <strong>Xtream UI Management Panel</strong> with 25,000+ live channels, 60,000+ VOD movies, and 99.9% Anti-Freeze™ servers. You keep 100% of your customer sales!
              </p>

              {/* Quick Specs Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 flex items-center gap-2.5">
                  <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">300% Margin</div>
                    <div className="text-[10px] text-zinc-400">High Profit Return</div>
                  </div>
                </div>

                <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 flex items-center gap-2.5">
                  <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Instant Setup</div>
                    <div className="text-[10px] text-zinc-400">Panel in 15 mins</div>
                  </div>
                </div>

                <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 flex items-center gap-2.5">
                  <Server className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Anti-Freeze 5.0</div>
                    <div className="text-[10px] text-zinc-400">99.9% Server Uptime</div>
                  </div>
                </div>

                <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 flex items-center gap-2.5">
                  <Lock className="w-5 h-5 text-indigo-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">100% White Label</div>
                    <div className="text-[10px] text-zinc-400">Your Own Brand</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profit Calculator Component */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Calculator className="w-3.5 h-3.5" />
                  RESELLER EARNINGS CALCULATOR
                </div>
                <h3 className="text-xl font-black text-white">
                  Estimate Your Monthly & Annual Earnings
                </h3>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Credits Never Expire</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-zinc-300 uppercase">
                      Number of Annual Clients Sold:
                    </label>
                    <span className="text-sm font-black text-cyan-400 bg-zinc-950 px-3 py-1 rounded-lg border border-zinc-800">
                      {clientCount} Clients
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    step="5"
                    value={clientCount}
                    onChange={(e) => setClientCount(Number(e.target.value))}
                    className="w-full accent-cyan-400 bg-zinc-800 rounded-lg cursor-pointer h-2"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-500 font-semibold mt-1">
                    <span>10 Clients</span>
                    <span>100 Clients</span>
                    <span>300 Clients</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-zinc-300 uppercase">
                      Your Price Charged Per Year (USD):
                    </label>
                    <span className="text-sm font-black text-emerald-400 bg-zinc-950 px-3 py-1 rounded-lg border border-zinc-800">
                      ${pricePerYear} / year
                    </span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="120"
                    step="5"
                    value={pricePerYear}
                    onChange={(e) => setPricePerYear(Number(e.target.value))}
                    className="w-full accent-emerald-400 bg-zinc-800 rounded-lg cursor-pointer h-2"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-500 font-semibold mt-1">
                    <span>$40 / year</span>
                    <span>$60 / year (Standard)</span>
                    <span>$120 / year</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-xs text-zinc-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Wholesale Cost Per 1-Year Line (10 Credits):</span>
                    <span className="text-white font-bold">${costPerYearClient.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Your Net Profit Per 1-Year Line:</span>
                    <span className="text-emerald-400 font-bold">${netProfitPerYearClient.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Result Box */}
              <div className="lg:col-span-5 bg-gradient-to-b from-zinc-950 to-zinc-900 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-5 shadow-xl">
                <div className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                  YOUR ESTIMATED EARNINGS
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-emerald-400 font-extrabold uppercase">Monthly Net Profit</div>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                    ${totalMonthlyProfit.toLocaleString()} <span className="text-xs font-bold text-zinc-400">/ mo</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800 space-y-1">
                  <div className="text-[11px] text-zinc-400 font-extrabold uppercase">Annual Net Profit</div>
                  <div className="text-2xl font-black text-white">
                    ${totalAnnualProfit.toLocaleString()} <span className="text-xs text-zinc-400">/ year</span>
                  </div>
                </div>

                <button
                  onClick={() => handleOrderPackWhatsApp(currentPackObj.name, currentPackObj.price)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>START EARNING ON WHATSAPP</span>
                </button>
              </div>
            </div>
          </div>

          {/* Reseller Credit Pricing Packages - PRX Design */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                WHOLESALE CREDIT PACKAGES
              </div>
              <h3 className="text-2xl font-black text-white">
                Choose Your Reseller Package
              </h3>
              <p className="text-xs text-zinc-400">
                Purchase reseller credits in bulk. No hidden fees, instant activation, and lifetime credit validity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packs.map((pack) => {
                const isSelected = selectedPack === pack.id;
                const isPopular = pack.popular;

                return (
                  <div
                    key={pack.id}
                    onClick={() => setSelectedPack(pack.id)}
                    className={`relative rounded-2xl transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-2xl ${
                      isPopular
                        ? 'bg-blue-600 text-white border-2 border-blue-500 ring-4 ring-blue-500/20 scale-[1.03] z-10 p-7 sm:p-8'
                        : 'bg-white text-zinc-900 border border-zinc-200 hover:border-blue-400 p-7 sm:p-8'
                    }`}
                  >
                    {/* Diagonal Popular Ribbon */}
                    {isPopular && (
                      <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden pointer-events-none">
                        <div className="bg-zinc-950 text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-10 transform -rotate-45 -translate-x-9 translate-y-5 shadow-lg text-center">
                          POPULAR
                        </div>
                      </div>
                    )}

                    <div className="space-y-6 text-center">
                      {/* Header: Credits Title & Subtitle */}
                      <div className="pt-2">
                        <h4 className={`text-2xl font-extrabold tracking-tight ${isPopular ? 'text-white' : 'text-zinc-900'}`}>
                          {pack.credits}
                        </h4>
                        <div className={`text-xs font-medium mt-1 ${isPopular ? 'text-blue-100' : 'text-zinc-500'}`}>
                          {pack.name}
                        </div>
                      </div>

                      {/* Price Section */}
                      <div className="space-y-1">
                        <div className="flex items-start justify-center font-black tracking-tight">
                          <span className={`text-xl mt-1.5 mr-0.5 ${isPopular ? 'text-blue-100' : 'text-zinc-700'}`}>$</span>
                          <span className={`text-5xl font-extrabold ${isPopular ? 'text-white' : 'text-zinc-950'}`}>
                            {pack.dollars}
                          </span>
                          <span className={`text-lg font-bold mt-1 ${isPopular ? 'text-blue-100' : 'text-zinc-700'}`}>
                            {pack.cents}
                          </span>
                        </div>
                        <div className={`text-xs font-semibold ${isPopular ? 'text-blue-100' : 'text-zinc-500'}`}>
                          {pack.pricePerCredit}
                        </div>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-3.5 text-left pt-2 text-xs font-medium">
                        {pack.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                              isPopular 
                                ? 'border-white/80 text-white bg-white/10' 
                                : 'border-indigo-500/80 text-indigo-600 bg-indigo-50'
                            }`}>
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className={isPopular ? 'text-blue-50 font-medium' : 'text-zinc-700'}>
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="pt-8 mt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOrderPackWhatsApp(pack.name, pack.price);
                        }}
                        className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 ${
                          isPopular
                            ? 'bg-[#f43f5e] hover:bg-rose-600 text-white shadow-rose-900/40 hover:scale-[1.02]'
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20 hover:scale-[1.02]'
                        }`}
                      >
                        <MessageCircle className="w-4.5 h-4.5" />
                        <span>Get Started</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Credit Deduction Table */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              CREDIT DEDUCTION RATE BREAKDOWN
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
              <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                <div className="text-zinc-400 font-bold">24H Trial Line</div>
                <div className="text-emerald-400 font-black text-base mt-1">0 Credits (FREE)</div>
              </div>
              <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                <div className="text-zinc-400 font-bold">1 Month Sub</div>
                <div className="text-cyan-400 font-black text-base mt-1">1 Credit</div>
              </div>
              <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                <div className="text-zinc-400 font-bold">3 Months Sub</div>
                <div className="text-cyan-400 font-black text-base mt-1">3 Credits</div>
              </div>
              <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                <div className="text-zinc-400 font-bold">6 Months Sub</div>
                <div className="text-cyan-400 font-black text-base mt-1">6 Credits</div>
              </div>
              <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 col-span-2 sm:col-span-1">
                <div className="text-zinc-400 font-bold">12 Months (1 Year)</div>
                <div className="text-orange-400 font-black text-base mt-1">10 Credits</div>
              </div>
            </div>
          </div>

          {/* Xtream UI Panel Features Grid */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                XTREAM UI DASHBOARD
              </div>
              <h3 className="text-2xl font-black text-white">
                Everything You Need To Manage Your IPTV Business
              </h3>
              <p className="text-xs text-zinc-400">
                Our reseller management portal is packed with advanced features so you can manage thousands of subscribers effortlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Manage Lines & Devices</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Generate M3U playlists, Xtream Codes username/password, and MAC address lines (MAG, Formuler, Enigma2) in seconds.
                </p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Sub-Reseller Management</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Create sub-reseller accounts under your panel. Sell wholesale credits to your sub-agents and earn passive revenue.
                </p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <Settings className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Custom Bouquets & Packages</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Filter channels by country or category (USA, Sports, UK, Arabic, Adult ON/OFF) tailored specifically to your client's desires.
                </p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Unlimited Free 24H Test Lines</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Never lose a sale. Provide instant 24-hour test codes to prospective buyers with 0 credit deduction from your account.
                </p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">100% White-Label / Custom DNS</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Hide all brand references. Point your customers to your custom domain DNS server for total brand ownership.
                </p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">24/7 Dedicated Server Engineers</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Get direct access to our senior reseller support engineers on WhatsApp & Telegram for line extensions, troubleshooting, and advice.
                </p>
              </div>
            </div>
          </div>

          {/* How to Start in 4 Easy Steps */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-black text-white text-center">
              How To Start Your Reseller Business In 4 Steps
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 relative">
                <div className="w-8 h-8 rounded-full bg-cyan-500 text-zinc-950 font-black text-sm flex items-center justify-center mb-3">
                  1
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Pick Your Credit Pack</h4>
                <p className="text-xs text-zinc-400">
                  Select a package (100, 250, 500, or 1000 credits) based on your budget.
                </p>
              </div>

              <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 relative">
                <div className="w-8 h-8 rounded-full bg-cyan-500 text-zinc-950 font-black text-sm flex items-center justify-center mb-3">
                  2
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Receive Panel Access</h4>
                <p className="text-xs text-zinc-400">
                  Get your Xtream UI username, password, and portal URL via WhatsApp in 15 mins.
                </p>
              </div>

              <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 relative">
                <div className="w-8 h-8 rounded-full bg-cyan-500 text-zinc-950 font-black text-sm flex items-center justify-center mb-3">
                  3
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Create Trials & Subscriptions</h4>
                <p className="text-xs text-zinc-400">
                  Log in, generate free test lines or 1/3/6/12 month codes for your clients.
                </p>
              </div>

              <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 relative">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-zinc-950 font-black text-sm flex items-center justify-center mb-3">
                  4
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Keep 100% Sales Profit</h4>
                <p className="text-xs text-zinc-400">
                  Collect payments directly via PayPal, CashApp, Crypto, or Bank and re-order credits anytime!
                </p>
              </div>
            </div>
          </div>

          {/* Reseller FAQ Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-black text-white">
                Frequently Asked Questions For Resellers
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpenFaq = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpenFaq ? null : index)}
                      className="w-full text-left p-4 sm:p-5 text-xs sm:text-sm font-bold text-white flex items-center justify-between gap-4 hover:bg-zinc-800/50"
                    >
                      <span>{faq.q}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          isOpenFaq ? 'rotate-90 text-cyan-400' : ''
                        }`}
                      />
                    </button>
                    {isOpenFaq && (
                      <div className="p-4 sm:p-5 pt-0 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/50 bg-zinc-950/40 whitespace-pre-line">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Call To Action Banner */}
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-10 text-center space-y-4 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-black">
              Ready To Launch Your Own IPTV Brand Today?
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100 max-w-xl mx-auto">
              Our team is available 24/7 on WhatsApp to answer your questions and set up your reseller panel in under 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => handleOrderPackWhatsApp('Reseller Program General Inquiry', '$300 (250 Credits)')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-white font-extrabold text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 border border-zinc-800"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>CHAT WITH RESELLER AGENT ON WHATSAPP</span>
              </button>
              {onOpenContact && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20"
                >
                  Contact Form
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

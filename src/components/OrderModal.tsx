import React, { useState, useEffect } from 'react';
import { BASE_PLANS } from '../data/mockData';
import { X, Check, ShieldCheck, Tv, CreditCard, MessageCircle, Lock, Sparkles } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
  initialScreensCount?: number;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialPlanId = '6-months',
  initialScreensCount = 1
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialPlanId);
  const [screensCount, setScreensCount] = useState<number>(initialScreensCount);
  const [device, setDevice] = useState<string>('firestick');
  const [app, setApp] = useState<string>('smarters');
  const [paymentMethod, setPaymentMethod] = useState<string>('whatsapp');
  const [email, setEmail] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (initialPlanId) setSelectedPlanId(initialPlanId);
    if (initialScreensCount) setScreensCount(initialScreensCount);
  }, [initialPlanId, initialScreensCount]);

  if (!isOpen) return null;

  // Calculate pricing
  const currentPlan = BASE_PLANS.find(p => p.id === selectedPlanId) || BASE_PLANS[2];
  const isLifetime = selectedPlanId === 'lifetime';

  const getScreenMultiplier = (count: number) => {
    switch (count) {
      case 2: return 1.35;
      case 3: return 1.65;
      case 4: return 1.90;
      case 5: return 2.20;
      default: return 1.0;
    }
  };

  const multiplier = getScreenMultiplier(screensCount);
  const totalPrice = isLifetime ? (149.99 * multiplier).toFixed(2) : (currentPlan.totalPrice * multiplier).toFixed(2);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const paymentLabel = paymentMethod === 'card' ? 'Credit Card / Apple Pay' : paymentMethod === 'paypal' ? 'PayPal / Crypto' : 'WhatsApp direct order';
    const msg = `Hello PATREON IPTV! 👋\n\nNEW ORDER RECEIVED:\n-------------------------\n👤 Client Name: ${name || 'Not provided'}\n📧 Email: ${email}\n📲 Client WhatsApp: ${whatsapp || 'Not provided'}\n\n📦 Package: ${isLifetime ? 'LIFETIME VIP PASS' : currentPlan.name + ' (' + currentPlan.durationMonths + ' Months)'}\n📺 Simultaneous Screens: ${screensCount} Device(s)\n💻 Primary Device: ${device}\n📱 Streaming App: ${app}\n💳 Selected Payment Method: ${paymentLabel}\n💰 Total Price: $${totalPrice} USD\n-------------------------\n\nPlease send me the activation credentials and payment instructions.`;
    
    window.open(`https://wa.me/447707762059?text=${encodeURIComponent(msg)}`, '_blank');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl my-8 my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center font-bold text-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-black uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                SECURE 1-CLICK ORDER
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Complete Your <span className="text-cyan-400">PATREON IPTV</span> Subscription
              </h2>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-6">
              
              {/* Step 1: Select Plan */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  1. Select Package Plan:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {BASE_PLANS.map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => setSelectedPlanId(p.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        selectedPlanId === p.id
                          ? 'bg-cyan-500/10 border-cyan-500 text-white shadow-md'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <div className="text-[11px] font-bold uppercase">{p.name}</div>
                      <div className="text-sm font-black text-white">{p.durationMonths} Months</div>
                      <div className="text-xs text-cyan-400 font-bold mt-1">${(p.totalPrice * multiplier).toFixed(2)}</div>
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelectedPlanId('lifetime')}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      selectedPlanId === 'lifetime'
                        ? 'bg-amber-500/20 border-amber-500 text-white shadow-md'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="text-[11px] font-bold uppercase text-amber-400">LIFETIME VIP</div>
                    <div className="text-sm font-black text-white">Lifetime Pass</div>
                    <div className="text-xs text-amber-400 font-bold mt-1">${(149.99 * multiplier).toFixed(2)}</div>
                  </button>
                </div>
              </div>

              {/* Step 2: Select Screens */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center justify-between">
                  <span>2. Simultaneous Screens:</span>
                  <span className="text-cyan-400 font-extrabold">{screensCount} {screensCount === 1 ? 'Device' : 'Devices'}</span>
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setScreensCount(num)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        screensCount === num
                          ? 'bg-cyan-500 text-zinc-950 font-black border-cyan-400'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {num} {num === 1 ? 'Screen' : 'Screens'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Device & App Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    3. Primary Device:
                  </label>
                  <select
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="firestick">Amazon Firestick / Fire TV</option>
                    <option value="android-tv">Android TV / TV Box</option>
                    <option value="smart-tv">Smart TV (Samsung, LG, Sony)</option>
                    <option value="apple-tv">Apple TV / iPhone / iPad</option>
                    <option value="pc-mac">Windows PC / Mac</option>
                    <option value="mag">MAG Box / Formuler</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    4. Streaming App:
                  </label>
                  <select
                    value={app}
                    onChange={(e) => setApp(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="smarters">IPTV Smarters Pro</option>
                    <option value="tivimate">Tivimate Player</option>
                    <option value="ibo">IBO Player Pro</option>
                    <option value="xcipTV">XCIPTV Player</option>
                    <option value="m3u">M3U Playlist / Other</option>
                  </select>
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Email (for activation): *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    WhatsApp Number:
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Step 5: Payment Method */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center justify-between">
                  <span>5. Select Payment Gateway:</span>
                  <span className="text-emerald-400 font-bold text-[11px] flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" /> Direct WhatsApp Checkout
                  </span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all text-center ${
                      paymentMethod === 'card'
                        ? 'bg-cyan-500/20 border-cyan-400 text-white ring-2 ring-cyan-500/50 shadow-lg shadow-cyan-500/20'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-cyan-400" />
                    <span className="text-[11px] font-bold leading-tight">Credit Card / Apple Pay</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all text-center ${
                      paymentMethod === 'paypal'
                        ? 'bg-blue-500/20 border-blue-400 text-white ring-2 ring-blue-500/50 shadow-lg shadow-blue-500/20'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    <Lock className="w-5 h-5 text-blue-400" />
                    <span className="text-[11px] font-bold leading-tight">PayPal / Crypto</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('whatsapp')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all text-center ${
                      paymentMethod === 'whatsapp'
                        ? 'bg-emerald-500/20 border-emerald-400 text-white ring-2 ring-emerald-500/50 shadow-lg shadow-emerald-500/20'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-[11px] font-bold leading-tight">WhatsApp Direct</span>
                  </button>
                </div>
                <p className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-2 flex items-center gap-1.5 mt-2">
                  <Check className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                  <span>All payments (Credit Card, PayPal, Crypto, Apple Pay) are safely completed via 24/7 WhatsApp support.</span>
                </p>
              </div>

              {/* Price Summary & Submit Button */}
              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-zinc-400 font-bold uppercase">Total Due Today:</div>
                  <div className="text-3xl font-black text-white">${totalPrice} USD</div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 text-white animate-bounce" />
                  <span>PAY VIA WHATSAPP ({paymentMethod === 'card' ? 'CREDIT CARD' : paymentMethod === 'paypal' ? 'PAYPAL/CRYPTO' : 'DIRECT'})</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>256-Bit SSL Encrypted • 7-Day 100% Money-Back Guarantee</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">Order Sent to WhatsApp!</h3>
            <p className="text-zinc-300 text-sm max-w-md mx-auto">
              Thank you for choosing <strong className="text-cyan-400">PATREON IPTV USA</strong>. Your order summary and selected payment gateway details have been opened in WhatsApp.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  const paymentLabel = paymentMethod === 'card' ? 'Credit Card / Apple Pay' : paymentMethod === 'paypal' ? 'PayPal / Crypto' : 'WhatsApp direct order';
                  const msg = `Hello PATREON IPTV! 👋\n\nNEW ORDER RECEIVED:\n-------------------------\n👤 Client Name: ${name || 'Not provided'}\n📧 Email: ${email}\n📲 Client WhatsApp: ${whatsapp || 'Not provided'}\n\n📦 Package: ${isLifetime ? 'LIFETIME VIP PASS' : currentPlan.name + ' (' + currentPlan.durationMonths + ' Months)'}\n📺 Simultaneous Screens: ${screensCount} Device(s)\n💻 Primary Device: ${device}\n📱 Streaming App: ${app}\n💳 Selected Payment Method: ${paymentLabel}\n💰 Total Price: $${totalPrice} USD\n-------------------------\n\nPlease send me the activation credentials and payment instructions.`;
                  window.open(`https://wa.me/447707762059?text=${encodeURIComponent(msg)}`, '_blank');
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Re-open WhatsApp Chat</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

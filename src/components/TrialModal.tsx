import React, { useState } from 'react';
import { X, Zap, Check, MessageCircle } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [device, setDevice] = useState('firestick');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleRequestTrial = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello PATREON IPTV!\n\nI would like to request a 24H FREE TRIAL:\n- Device: ${device}\n- Email: ${email}\n- WhatsApp: ${whatsapp}`;
    window.open(`https://wa.me/447707762059?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center font-bold"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-black uppercase tracking-wider mb-2">
                <Zap className="w-3.5 h-3.5" />
                NO COMMITMENT FREE TRIAL
              </div>
              <h2 className="text-2xl font-black text-white">
                Request a <span className="text-orange-500">24H Free Trial</span>
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Experience 4K picture quality and buffer-free streaming free for 24 hours.
              </p>
            </div>

            <form onSubmit={handleRequestTrial} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                  Your Primary Device:
                </label>
                <select
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="firestick">Amazon Firestick / Fire TV</option>
                  <option value="smart-tv">Smart TV (Samsung / LG / Sony)</option>
                  <option value="android-box">Android Box / Smartphone</option>
                  <option value="apple">Apple TV / iPhone / iPad</option>
                  <option value="mag">MAG Box / Formuler</option>
                  <option value="pc">PC / Mac</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                  Email Address:
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                  WhatsApp Number:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>GET FREE TRIAL ON WHATSAPP</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">Trial Request Sent!</h3>
            <p className="text-zinc-300 text-xs sm:text-sm">
              Our support team will activate your 24-hour access code shortly on WhatsApp and Email.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider mt-4"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

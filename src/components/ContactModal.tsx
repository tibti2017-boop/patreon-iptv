import React, { useState } from 'react';
import { X, Mail, MessageCircle, Send, CheckCircle2, Clock, ShieldCheck, HelpCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFaq?: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onOpenFaq }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [device, setDevice] = useState('Firestick');
  const [subject, setSubject] = useState('General Query');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `Name: ${name}\nEmail: ${email}\nDevice: ${device}\nSubject: ${subject}\n\nMessage:\n${message}`;
    window.open(`https://wa.me/447707762059?text=${encodeURIComponent(`Hello PATREON IPTV Support!\n\n${formattedMsg}`)}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-zinc-100 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-wider mb-2">
            <MessageCircle className="w-3.5 h-3.5" />
            24/7 VIP SUPPORT CENTER
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Contact <span className="text-cyan-400">PATREON IPTV</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Have a question or need instant setup help? Our technical support team is online 24/7.
          </p>
        </div>

        {!isSubmitted ? (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            {/* Quick Contact Info Column */}
            <div className="md:col-span-2 space-y-4">
              <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                  <span>LIVE WHATSAPP CHAT</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Fastest response time (<strong className="text-zinc-200">under 3 minutes</strong>).
                </p>
                <a
                  href="https://wa.me/447707762059?text=Hello%20PATREON%20IPTV!%20I%20need%20assistance."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-900/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800/80 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                  <Mail className="w-4 h-4" />
                  <span>EMAIL SUPPORT</span>
                </div>
                <p className="text-xs text-zinc-300 font-mono">support@patreon-iptv.com</p>
                <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 pt-1">
                  <Clock className="w-3 h-3" />
                  <span>Average response time: &lt; 1 hour</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-xs text-zinc-400 space-y-1.5">
                <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-[11px]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>SSL Encrypted</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Your details are protected with 256-bit encryption and never shared.
                </p>
              </div>

              {onOpenFaq && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenFaq();
                  }}
                  className="w-full py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>View FAQ Section</span>
                </button>
              )}
            </div>

            {/* Contact Form Column */}
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold text-zinc-300 uppercase mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-300 uppercase mb-1">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-300 uppercase mb-1">
                    Device Type
                  </label>
                  <select
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Firestick">Amazon Firestick</option>
                    <option value="Smart TV">Smart TV (Samsung/LG)</option>
                    <option value="Android Box">Android Box / TV</option>
                    <option value="Apple TV">Apple TV / iOS</option>
                    <option value="MAG / Formuler">MAG / Formuler</option>
                    <option value="PC / Mac">PC / Mac</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-300 uppercase mb-1">
                    Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="General Query">General Query</option>
                    <option value="24H Free Trial">24H Free Trial</option>
                    <option value="Installation Help">Installation Help</option>
                    <option value="Billing & Orders">Billing & Orders</option>
                    <option value="Renew Subscription">Renew Subscription</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-300 uppercase mb-1">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="How can we assist you today?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>SEND MESSAGE NOW</span>
              </button>
            </form>

          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">Message Dispatched!</h3>
            <p className="text-zinc-300 text-xs sm:text-sm max-w-md mx-auto">
              Thank you for contacting PATREON IPTV. Our technical team has received your message and will connect with you shortly on WhatsApp and Email.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider mt-2"
            >
              Back to Home
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

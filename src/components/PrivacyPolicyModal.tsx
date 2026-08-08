import React from 'react';
import { X, Shield, Lock, EyeOff, Server, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-zinc-100 my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Privacy Policy & Security
              </h2>
              <p className="text-xs text-zinc-400">Last updated: January 2026 • PATREON IPTV USA</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto py-6 pr-2 space-y-6 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
          
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase">
              <Lock className="w-4 h-4" />
              <span>Summary of Data Protection</span>
            </div>
            <p className="text-xs text-zinc-300">
              At PATREON IPTV, we respect your privacy. We strictly operate a <strong>zero-log policy</strong> concerning your streaming habits, channel selections, and personal activity. Data collected is strictly limited to fulfilling your order and providing customer support.
            </p>
          </div>

          <section className="space-y-2">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <span className="text-cyan-400">1.</span> Information We Collect
            </h3>
            <p>
              When you purchase an IPTV subscription or request a 24-hour free trial, we collect minimal necessary operational data:
            </p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400 pl-2">
              <li><strong>Contact Information:</strong> Email address and WhatsApp number for delivering credentials.</li>
              <li><strong>Technical Metadata:</strong> Primary device type (e.g. Firestick, Smart TV) to optimize M3U formats.</li>
              <li><strong>Transaction Records:</strong> Payment confirmation identifiers (we do NOT store raw credit card numbers).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <span className="text-cyan-400">2.</span> How We Use Your Information
            </h3>
            <p>Your information is exclusively utilized for the following purposes:</p>
            <ul className="space-y-1.5 text-zinc-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instantly generating and transmitting your M3U link & Xtream API codes.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Providing technical setup support and resolving subscription queries.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sending subscription expiration reminders and renewal offers upon request.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <span className="text-cyan-400">3.</span> Zero Streaming Logs & Encryption
            </h3>
            <p>
              We enforce strict 256-Bit SSL encryption across all website interactions. We do NOT monitor, record, store, or log video playback history, IP addresses, or bandwidth utilization. Your streaming activity remains entirely private to you.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <span className="text-cyan-400">4.</span> Third-Party Disclosure
            </h3>
            <p>
              PATREON IPTV strictly guarantees that your personal information will never be sold, rented, traded, or shared with external third-party advertisers, market research agencies, or data brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <span className="text-cyan-400">5.</span> Data Erasure Rights
            </h3>
            <p>
              You maintain the absolute right to request total deletion of your customer record at any time. Simply message our WhatsApp support or email support@patreon-iptv.com with the subject "Data Erasure Request" and your record will be purged immediately.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-zinc-800 flex items-center justify-between shrink-0">
          <div className="text-xs text-zinc-400 flex items-center gap-1.5">
            <EyeOff className="w-4 h-4 text-cyan-400" />
            <span>100% Confidential & Secure</span>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider"
          >
            Close Policy
          </button>
        </div>

      </div>
    </div>
  );
};

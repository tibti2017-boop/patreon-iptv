import React from 'react';
import { X, RefreshCcw, ShieldCheck, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';

interface RefundPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrder: () => void;
}

export const RefundPolicyModal: React.FC<RefundPolicyModalProps> = ({ isOpen, onClose, onOpenOrder }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-zinc-100 my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center">
              <RefreshCcw className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                7-Day Money-Back Guarantee & Refund Policy
              </h2>
              <p className="text-xs text-zinc-400">PATREON IPTV 100% Risk-Free Commitment</p>
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
          
          <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 space-y-2">
            <div className="flex items-center gap-2 text-orange-400 font-black text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Our 100% Satisfaction Promise</span>
            </div>
            <p className="text-xs text-zinc-200">
              We stand behind the stability and quality of PATREON IPTV. If you encounter technical issues that our 24/7 technical team cannot resolve within 7 days of purchase, you are entitled to a full 100% refund.
            </p>
          </div>

          <section className="space-y-2">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <span className="text-orange-500">1.</span> Eligibility for a Full Refund
            </h3>
            <p>You can request a 100% refund within 7 calendar days of purchase if:</p>
            <ul className="space-y-1.5 text-zinc-400 pl-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Major server outages or playlist failures that persist and cannot be corrected by support.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Failure to receive your active playlist/Xtream credentials within 24 hours of payment.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Incompatibility with your listed streaming device that our technical team cannot resolve.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <span className="text-orange-500">2.</span> How to Submit a Refund Request
            </h3>
            <p>
              Submitting a refund request is simple and direct. You do not need to fill out complex dispute forms:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-zinc-400 pl-2">
              <li>Contact our live support team via WhatsApp (<strong className="text-white">+44 7707 762059</strong>) or Email (<strong className="text-white">support@patreon-iptv.com</strong>).</li>
              <li>Provide your order number or payment email address.</li>
              <li>State the technical issue you experienced. Our team will verify and process your full refund immediately.</li>
            </ol>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <span className="text-orange-500">3.</span> Refund Processing Time
            </h3>
            <p>
              Once approved, refunds are processed within <strong>24 to 48 hours</strong>. Funds will be returned directly to the original payment method used during checkout (Credit/Debit Card, Crypto, PayPal, or Crypto).
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <span className="text-orange-500">4.</span> Free 24H Trial Option
            </h3>
            <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-400">
                To prevent any dissatisfaction, we strongly encourage all prospective users to test our <strong>24-Hour Free Trial</strong> before ordering a long-term plan.
              </p>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <a
            href="https://wa.me/447707762059?text=Hello%20PATREON%20IPTV!%20I%20have%20a%20refund%20or%20billing%20question."
            target="_blank"
            rel="noreferrer"
            className="text-xs text-emerald-400 hover:underline flex items-center gap-1.5 font-bold"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact Support on WhatsApp</span>
          </a>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenOrder();
              }}
              className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20"
            >
              Subscribe Risk-Free
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

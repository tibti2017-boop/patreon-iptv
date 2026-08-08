import React from 'react';
import { DeviceGuide } from '../types';
import { X, Download, CheckCircle, Smartphone, Tv, Monitor, Laptop, Box } from 'lucide-react';

interface InstallGuideModalProps {
  guide: DeviceGuide | null;
  onClose: () => void;
}

export const InstallGuideModal: React.FC<InstallGuideModalProps> = ({ guide, onClose }) => {
  if (!guide) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center font-bold"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[10px] font-black text-orange-400 uppercase tracking-wider bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20 inline-block mb-2">
            INSTALLATION GUIDE • {guide.category}
          </span>
          <h2 className="text-2xl font-black text-white">
            Install on <span className="text-orange-500">{guide.name}</span>
          </h2>
        </div>

        {guide.downloaderCode && (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 mb-6 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                FIRESTICK DOWNLOADER QUICK CODE:
              </div>
              <div className="text-2xl font-black">{guide.downloaderCode}</div>
            </div>
            <Download className="w-8 h-8 text-amber-400" />
          </div>
        )}

        <div className="space-y-4 mb-6">
          <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
            Recommended Setup Steps:
          </div>

          <div className="space-y-3">
            {guide.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 leading-relaxed font-medium">
                <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-6 flex items-center justify-between">
          <span>Recommended App: <strong className="text-white">{guide.recommendedApp}</strong></span>
          <CheckCircle className="w-4 h-4 text-emerald-400" />
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20"
        >
          Got It, Close
        </button>

      </div>
    </div>
  );
};

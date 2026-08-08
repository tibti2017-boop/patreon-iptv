import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
            layout?: number;
          },
          elementId: string
        ) => void;
      };
    };
  }
}

interface LanguageSelectorProps {
  variant?: 'navbar' | 'footer' | 'mobile';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'navbar' }) => {
  const [currentLang, setCurrentLang] = useState<Language>(LANGUAGES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load Google Translate script once
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById('google-translate-script')) return;

      const googleTranslateElement = document.createElement('div');
      googleTranslateElement.id = 'google_translate_element';
      googleTranslateElement.style.display = 'none';
      document.body.appendChild(googleTranslateElement);

      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,fr,es,de,it,pt,nl,ar,sv,tr',
              autoDisplay: false,
            },
            'google_translate_element'
          );
        }
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    addGoogleTranslateScript();

    // Read stored language or cookie
    const getCookie = (name: string) => {
      const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return v ? v[2] : null;
    };

    const googTrans = getCookie('googtrans');
    if (googTrans) {
      const code = googTrans.split('/')[2];
      const found = LANGUAGES.find((l) => l.code === code);
      if (found) setCurrentLang(found);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang);
    setIsOpen(false);

    // Update googtrans cookie for domain & path
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/${lang.code}; path=/;`;

    // Trigger google translate select change if available
    const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElem) {
      selectElem.value = lang.code;
      selectElem.dispatchEvent(new Event('change'));
    } else {
      window.location.reload();
    }
  };

  if (variant === 'mobile') {
    return (
      <div className="py-2 border-b border-zinc-800/80">
        <div className="text-xs font-black text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span>SELECT LANGUAGE / LANGUE</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {LANGUAGES.map((lang) => {
            const isSelected = currentLang.code === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-all text-left ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800 border border-zinc-800/60'
                }`}
              >
                <span className="text-base leading-none">{lang.flag}</span>
                <span className="truncate">{lang.nativeName}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400 ml-auto shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
          variant === 'footer'
            ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700 text-zinc-200'
            : 'bg-zinc-900/80 backdrop-blur-md border-zinc-800 hover:border-cyan-500/40 text-zinc-200 shadow-md'
        }`}
        aria-label="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        <span className="text-sm leading-none">{currentLang.flag}</span>
        <span className="font-extrabold uppercase tracking-wide">{currentLang.code.toUpperCase()}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl z-50 p-1.5 space-y-1 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 text-[10px] font-black uppercase text-zinc-400 border-b border-zinc-800/80 flex items-center justify-between">
            <span>Choose Language</span>
            <span className="text-cyan-400 font-bold">10 Languages</span>
          </div>
          <div className="max-h-64 overflow-y-auto space-y-0.5 custom-scrollbar">
            {LANGUAGES.map((lang) => {
              const isSelected = currentLang.code === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div className="flex flex-col text-left">
                      <span className="leading-tight">{lang.nativeName}</span>
                      <span className="text-[10px] text-zinc-400 font-normal">{lang.name}</span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

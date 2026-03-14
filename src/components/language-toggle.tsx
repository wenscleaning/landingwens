"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/src/i18n/navigation";
import { Globe, ChevronDown } from "lucide-react";
import type { Locale } from "@/src/i18n/routing";

const locales: { code: Locale; label: string; flag: string }[] = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  function onChange(newLocale: Locale) {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1B3A6B]/15 text-[#1B3A6B] text-sm font-semibold hover:bg-[#F4FAFD] transition-colors"
        aria-label="Language selector"
      >
        <Globe className="w-4 h-4 text-[#2E9CCA]" />
        <span>{current.flag} {current.code.toUpperCase()}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute top-full right-0 mt-2 w-[220px] bg-white rounded-2xl p-5 z-50 animate-[fadeDown_0.15s_ease-out]"
          style={{
            boxShadow: "0 8px 30px rgba(27,58,107,0.12)",
          }}
        >
          <p className="text-base font-bold text-[#1B3A6B] mb-4">
            Choose language
          </p>

          <div className="flex flex-col gap-1">
            {locales.map((l) => {
              const isActive = l.code === locale;
              return (
                <button
                  key={l.code}
                  onClick={() => onChange(l.code)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                    isActive
                      ? "bg-[#F4FAFD] text-[#2E9CCA]"
                      : "text-[#1B3A6B] hover:bg-[#F4FAFD] hover:text-[#2E9CCA]"
                  }`}
                >
                  <span className="text-lg">{l.flag}</span>
                  <span className="text-sm font-semibold flex-1">{l.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#2DC4A4] flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

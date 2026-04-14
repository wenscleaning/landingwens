"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useBooking } from "@/components/ui/BookingContext";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1FjAzoTqh6/",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/wenscleaningservices?igsh=cWpveWNlNTE2ZGdu",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@wenscleaning?_r=1&_t=ZN-94yaNGkSRj5",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navbar");
  const { openBooking } = useBooking();
  const [footerEmail, setFooterEmail] = useState("");

  const navLinks = [
    { label: tNav("home"), href: "#hero" },
    { label: tNav("service"), href: "#services" },
    { label: tNav("reviews"), href: "#reviews" },
    { label: tNav("about"), href: "#about" },
    { label: tNav("faq"), href: "#faq" },
  ];

  return (
    <footer id="contact" className="bg-white text-[#0F2347] pt-12 pb-0 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 mb-10 divide-y md:divide-y-0 md:divide-x divide-gray-200">

          {/* Column 1: Logo + tagline + stars + social icons */}
          <div className="flex flex-col items-start py-6 md:py-0 md:pr-10">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 mb-2 cursor-pointer"
            >
              <Image src="/images/services/logo.png" alt="WEN'S Logo" width={44} height={44} />
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-[#1B396A]">WEN&apos;S</span>
                <span className="text-lg font-bold text-[#C9A84C]">CLEANING</span>
              </div>
            </a>

            {/* Stars */}
            <div className="flex items-center gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#C9A84C] text-base">★</span>
              ))}
            </div>

            {/* Tagline */}
            <p className="text-[#1B396A] font-bold text-sm tracking-wide mb-4">
              {t("tagline")}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#C9A84C] flex items-center justify-center text-[#0F2347] hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation links */}
          <div className="py-6 md:py-0 md:px-10">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={link.href === "#hero" ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } : undefined}
                    className="text-sm text-[#0F2347] hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact info + email form */}
          <div className="py-6 md:py-0 md:pl-10">
            <h4 className="text-[#C9A84C] uppercase tracking-widest text-xs font-bold mb-4">
              {t("findUsTitle")}
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 mb-5">
              <li className="flex items-center gap-2">
                <span className="text-red-500 text-base">📍</span>
                <span>{t("address")}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a
                  href="https://wa.me/41778102004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A84C] transition-colors duration-200"
                >
                  {t("phone")}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C9A84C] text-base">✉️</span>
                <span>{t("email")}</span>
              </li>
            </ul>

            {/* Email form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (footerEmail.trim()) {
                  openBooking({ email: footerEmail });
                  setFooterEmail("");
                }
              }}
              className="flex"
            >
              <input
                type="email"
                required
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
                className="flex-1 bg-gray-100 text-[#0F2347] placeholder:text-slate-400 text-sm px-4 py-2.5 rounded-l-lg border border-gray-200 outline-none focus:bg-gray-50 transition-colors"
              />
              <button
                type="submit"
                className="bg-[#C9A84C] hover:bg-[#b8943d] px-4 py-2.5 rounded-r-lg transition-colors"
                aria-label={t("subscribe")}
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-4 text-center text-xs text-slate-400">
          <p>&copy; 2024 Wen&apos;s Cleaning. {t("allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
}

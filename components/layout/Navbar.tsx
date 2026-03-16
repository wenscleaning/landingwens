"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";
import LanguageToggle from "@/src/components/language-toggle";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("home"), href: "#" },
    { label: t("service"), href: "#services" },
    { label: t("reviews"), href: "#reviews" },
    { label: t("faq"), href: "#faq" },
    { label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b-2 border-[#1B396A]/20 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/services/logo.png" alt="WEN'S Logo" width={36} height={36} />
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-extrabold text-[#1B396A]">
              WEN&apos;S
            </span>
            <span className="text-lg font-bold text-[#C9A84C]">
              CLEANING
            </span>
          </div>
        </Link>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.href === "#") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="text-[#1B396A] font-semibold hover:text-[#C9A84C] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Language Toggle */}
        <div className="hidden md:flex items-center">
          <LanguageToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#1B396A]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={t("toggleMenu")}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#1B396A]/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-[#1B396A] font-semibold hover:text-[#C9A84C] transition-colors duration-200"
              onClick={(e) => {
                setMobileOpen(false);
                if (link.href === "#") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
}

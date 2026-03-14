"use client";

import { useState, useEffect } from "react";
import { Droplets, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";
import LanguageToggle from "@/src/components/language-toggle";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("home"), href: "#home" },
    { label: t("about"), href: "#about" },
    { label: t("service"), href: "#service" },
    { label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-sky-100/50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Droplets className="w-7 h-7 text-[#2E9CCA]" />
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-extrabold text-[#1B3A6B] font-heading">
              WEN&apos;S
            </span>
            <span className="text-lg font-bold text-[#2E9CCA] font-heading">
              CLEANING
            </span>
          </div>
        </Link>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#1B3A6B]/80 font-semibold hover:text-[#2E9CCA] transition-colors"
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
          className="md:hidden text-[#1B3A6B]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={t("toggleMenu")}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-sky-100/50 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-[#1B3A6B]/80 font-semibold hover:text-[#2E9CCA] transition-colors"
              onClick={() => setMobileOpen(false)}
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

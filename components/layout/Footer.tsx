"use client";

import { Droplets, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  const serviceLinks = [
    t("regularCleaning"),
    t("deepCleaning"),
    t("moveInOut"),
    t("officeCleaning"),
    t("specialEvents"),
  ];

  const quickLinks = [
    { label: t("home"), href: "#home" },
    { label: t("aboutUs"), href: "#about" },
    { label: t("blog"), href: "#blog" },
    { label: t("services"), href: "#services" },
    { label: t("contactUs"), href: "#contact" },
  ];

  return (
    <footer className="bg-[#1B3A6B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Logo + description + newsletter */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Droplets className="w-7 h-7 text-[#2E9CCA]" />
              <span className="text-2xl font-extrabold text-white font-heading">
                WEN&apos;S
              </span>
            </Link>
            <p className="text-sky-100/60 text-sm leading-relaxed mb-6">
              {t("description")}
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1 bg-white/10 text-white placeholder:text-sky-100/40 text-sm px-4 py-2.5 rounded-l-xl border-none outline-none focus:bg-white/15 transition-colors"
              />
              <button
                className="bg-[#2E9CCA] hover:bg-[#2E9CCA]/90 px-4 py-2.5 rounded-r-xl transition-colors"
                aria-label={t("subscribe")}
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white font-heading">
              {t("servicesTitle")}
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-sm text-sky-100/60 hover:text-[#2DC4A4] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white font-heading">
              {t("quickLinksTitle")}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-sky-100/60 hover:text-[#2DC4A4] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Find Us */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white font-heading">
              {t("findUsTitle")}
            </h4>
            <ul className="space-y-3 text-sm text-sky-100/60">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{t("address")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <span>{t("phone")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <span>{t("email")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sky-100/50">
          <p>
            &copy; {new Date().getFullYear()} WEN&apos;S Cleaning. {t("allRightsReserved")}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              {t("privacyPolicy")}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t("termsOfService")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

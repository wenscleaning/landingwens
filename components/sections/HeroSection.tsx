"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useBooking } from "@/components/ui/BookingContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  const t = useTranslations("Hero");
  const { openBooking } = useBooking();

  const bullets = [t("bullet1"), t("bullet2"), t("bullet3")];

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image — fully visible */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/hero-home.jpg"
          alt="WEN'S Professional Cleaning"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Left-side gradient so text stays readable without hiding the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        {/* Subtle top gradient for navbar contrast */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      {/* Content — left aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="max-w-xl">
          {/* Main title */}
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-md"
          >
            {t("bgTitle")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg md:text-xl text-white/90 font-semibold mb-8 drop-shadow-sm"
          >
            {t("bgSubtitle")}
          </motion.p>

          {/* Bullets */}
          <motion.ul
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col gap-3 mb-10"
          >
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-3 text-white text-base font-medium drop-shadow-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 10" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M1 5l3 3 7-7" />
                  </svg>
                </span>
                {bullet}
              </li>
            ))}
          </motion.ul>

          {/* CTA button */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-navy-light text-white rounded-lg px-8 py-4 font-bold text-base transition-colors duration-200 shadow-lg"
            >
              {t("cta")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

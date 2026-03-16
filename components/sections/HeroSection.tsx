"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const avatarGradients = [
  "from-[#C9A84C] to-[#1B396A]",
  "from-[#1B396A] to-[#C9A84C]",
  "from-[#24508A] to-[#C9A84C]",
  "from-[#C9A84C] to-[#24508A]",
];

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative bg-gradient-to-br from-[#0F2347] to-[#24508A] min-h-[85vh] pt-16 pb-32 overflow-hidden flex flex-col justify-center">
      {/* Decorative circle — top-right */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
      {/* Decorative circle — bottom-left */}
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#C9A84C]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* LEFT column */}
          <div>
            {/* Badge */}
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm mb-6"
            >
              {t("badge")}
            </motion.span>

            {/* Heading */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-extrabold text-white font-heading leading-tight mb-6"
            >
              {t("titleLine1")}{" "}
              <span className="text-[#C9A84C] italic">{t("titleHighlight")}</span>{" "}
              {t("titleLine2")}
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg text-slate-200 max-w-lg mb-8"
            >
              {t("description")}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button className="bg-[#C9A84C] hover:bg-[#b8943d] text-[#0F2347] rounded-lg px-8 py-4 font-bold uppercase tracking-wider transition-colors duration-200 shadow-gold">
                {t("bookingCta")}
              </button>
              <button className="border-2 border-white/30 text-white rounded-lg px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 transition-colors duration-200">
                {t("howItWorksCta")}
              </button>
            </motion.div>

          </div>

          {/* RIGHT column — image placeholder with gold frame */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-full max-w-md"
            >
              {/* Gold shadow frame */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#C9A84C] translate-x-4 translate-y-4" />
              {/* Hero image */}
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/services/hero-home.jpg"
                  alt="WEN'S Professional Cleaning"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SprayCan } from "lucide-react";
import { useTranslations } from "next-intl";
import WaveDivider from "@/components/ui/WaveDivider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const avatarGradients = [
  "from-[#2E9CCA] to-[#2DC4A4]",
  "from-[#2DC4A4] to-[#1B3A6B]",
  "from-[#1B3A6B] to-[#2E9CCA]",
  "from-[#2E9CCA] to-[#1B3A6B]",
];

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative bg-white pt-16 pb-32 overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#2DC4A4]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left column — 55% */}
          <div className="w-full lg:w-[55%]">
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-block py-1 px-4 rounded-full bg-sky-100 text-[#2E9CCA] font-bold text-sm mb-6"
            >
              {t("badge")}
            </motion.span>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-extrabold text-[#1B3A6B] font-heading leading-tight mb-6"
            >
              {t("titleLine1")}{" "}
              <span className="text-[#2DC4A4]">{t("titleHighlight")}</span>{" "}
              {t("titleLine2")}
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg text-[#1B3A6B]/70 max-w-lg mb-8"
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
              <button className="bg-[#2DC4A4] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#1F9E84] transition-colors duration-200">
                {t("bookingCta")}
              </button>
              <button className="border-2 border-[#1B3A6B]/20 text-[#1B3A6B] px-8 py-3.5 rounded-full font-bold hover:border-[#2E9CCA] transition-colors duration-200">
                {t("howItWorksCta")}
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {avatarGradients.map((gradient, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} border-2 border-white`}
                  />
                ))}
              </div>
              <span className="text-[#1B3A6B]/70 text-sm font-medium">
                {t("socialProof")}
              </span>
            </motion.div>
          </div>

          {/* Right column — 45% */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:w-[45%] flex justify-center"
          >
            <div className="w-full max-w-md aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#2DC4A4]/20 to-[#2E9CCA]/20 flex items-center justify-center">
              <SprayCan className="w-24 h-24 text-[#2E9CCA]/40" strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <WaveDivider fillColor="#F4FAFD" />
    </section>
  );
}

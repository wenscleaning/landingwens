"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

const features = [
  { titleKey: "feature1Title", descKey: "feature1Desc" },
  { titleKey: "feature2Title", descKey: "feature2Desc" },
] as const;

export default function WhyChooseSection() {
  const t = useTranslations("WhyChoose");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1B3A6B] leading-tight mb-10">
              {t("title")}
            </h2>

            <div className="space-y-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#2DC4A4]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="text-[#2DC4A4]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#1B3A6B] text-lg mb-1">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-[#1B3A6B]/60 text-sm leading-relaxed">
                      {t(feature.descKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — overlapping image placeholders */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 relative min-h-[380px] w-full"
          >
            {/* Main image placeholder */}
            <div className="rounded-2xl w-4/5 ml-auto aspect-[4/3] bg-gradient-to-br from-[#2E9CCA]/30 to-[#2DC4A4]/20 overflow-hidden" />

            {/* Secondary image placeholder */}
            <div className="absolute bottom-0 left-0 w-2/5 aspect-square rounded-2xl border-4 border-white shadow-xl bg-gradient-to-br from-[#2DC4A4]/30 to-[#2E9CCA]/20 overflow-hidden" />

            {/* Decorative sparkle */}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4 text-[#2DC4A4] text-3xl select-none"
            >
              &#10022;
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

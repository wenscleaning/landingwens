"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, Star, Sparkles } from "lucide-react";
import Image from "next/image";

const features = [
  { titleKey: "feature1Title", descKey: "feature1Desc" },
  { titleKey: "feature2Title", descKey: "feature2Desc" },
] as const;

export default function WhyChooseSection() {
  const t = useTranslations("WhyChoose");

  return (
    <section className="py-24 bg-[#0F2347]">
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
            <h2 className="text-white font-heading text-3xl md:text-4xl font-extrabold leading-tight mb-3">
              {t("title")}
            </h2>

            {/* Gold divider — left-aligned, NOT centered */}
            <div className="w-16 h-1 bg-[#C9A84C] mb-8" />

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
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                    <Check className="text-[#C9A84C]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-extrabold text-lg mb-1">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t(feature.descKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — image placeholder with gold frame + floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 relative min-h-[380px] w-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Gold frame offset layer */}
              <div className="absolute inset-0 border-2 border-[#C9A84C] rounded-xl translate-x-3 translate-y-3" />

              {/* Main image */}
              <div className="relative rounded-xl aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/services/why-choose.jpg"
                  alt="Professional cleaning results"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="absolute -bottom-5 -left-5 bg-[#0F2347] border border-[#C9A84C]/30 rounded-xl shadow-lg p-4 flex items-center gap-3"
              >
                <Star className="text-[#C9A84C] fill-[#C9A84C] w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="text-white font-extrabold text-lg leading-none">4.9/5</p>
                  <p className="text-slate-400 text-xs mt-0.5">+800 avis</p>
                </div>
              </motion.div>

              {/* Decorative sparkle */}
              <div className="absolute -top-4 -right-4">
                <Sparkles className="text-[#C9A84C]" size={28} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

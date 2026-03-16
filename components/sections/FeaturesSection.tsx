"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const features = [
  {
    emoji: "🛡️",
    titleKey: "feature1Title" as const,
    descKey: "feature1Desc" as const,
  },
  {
    emoji: "⭐",
    titleKey: "feature2Title" as const,
    descKey: "feature2Desc" as const,
  },
  {
    emoji: "🌿",
    titleKey: "feature3Title" as const,
    descKey: "feature3Desc" as const,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function FeaturesSection() {
  const t = useTranslations("Features");

  return (
    <section className="py-24 bg-[#1B396A]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-6">
            {t("title")}
          </h2>
          {/* Gold divider — centered */}
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-6" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.titleKey}
              className="group bg-white/5 border border-[#C9A84C]/20 rounded-xl p-8 text-center hover:border-[#C9A84C]/50 transition-all duration-300 backdrop-blur-sm"
              variants={cardVariants}
            >
              <div className="w-16 h-16 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C9A84C]/25 transition-colors duration-300">
                <span className="text-2xl leading-none">{feature.emoji}</span>
              </div>
              <h3 className="text-white font-extrabold text-xl font-heading mb-3">
                {t(feature.titleKey)}
              </h3>
              <p className="text-slate-400">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

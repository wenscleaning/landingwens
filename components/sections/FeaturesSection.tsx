"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, Clock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    color: "#2E9CCA",
    bg: "rgba(46,156,202,0.10)",
    titleKey: "feature1Title" as const,
    descKey: "feature1Desc" as const,
  },
  {
    icon: CheckCircle,
    color: "#2DC4A4",
    bg: "rgba(45,196,164,0.10)",
    titleKey: "feature2Title" as const,
    descKey: "feature2Desc" as const,
  },
  {
    icon: Clock,
    color: "#2E9CCA",
    bg: "rgba(46,156,202,0.10)",
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
    <section className="py-24 bg-[#F4FAFD]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-[#1B3A6B] font-heading mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("title")}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.titleKey}
                className="bg-white p-8 rounded-2xl text-center card-shadow"
                variants={cardVariants}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: feature.bg }}
                >
                  <Icon
                    className="w-8 h-8"
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="text-xl font-extrabold text-[#1B3A6B] font-heading mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-[#1B3A6B]/60">
                  {t(feature.descKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

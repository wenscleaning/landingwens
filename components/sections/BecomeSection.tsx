"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BecomeSection() {
  const t = useTranslations("Become");

  return (
    <section id="career" className="bg-white py-24 overflow-hidden relative">
      <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 400" className="h-full w-auto ml-auto opacity-100" fill="#EEE9F9">
          <polygon points="120,0 180,160 130,160 190,400 60,220 110,220 50,0" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-purple-pale rounded-2xl h-80 flex items-center justify-center"
        >
          <div className="text-center text-brand-purple/40">
            <Users className="w-20 h-20 mx-auto mb-4" strokeWidth={1} />
            <p className="font-semibold">{t("teamPlaceholder")}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-brand-dark font-bold text-4xl md:text-6xl mb-4">
            {t("title")}
          </h2>
          <p className="text-brand-muted text-lg mb-8 max-w-md">
            {t("subtitle")}
          </p>
          <button className="bg-brand-purple text-white px-8 py-4 rounded font-semibold text-lg hover:bg-brand-purple-dark hover:scale-[1.01] active:scale-[0.99] transition-all duration-150 flex items-center gap-2">
            {t("cta")}
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

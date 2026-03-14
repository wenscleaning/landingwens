"use client";

import { motion } from "framer-motion";
import { Sparkles, Wind, Shirt } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ExtraServices() {
  const t = useTranslations("ExtraServices");

  const extras = [
    { title: t("deepCleaning"), desc: t("deepCleaningDesc"), icon: Sparkles },
    { title: t("windowCleaning"), desc: t("windowCleaningDesc"), icon: Wind },
    { title: t("ironing"), desc: t("ironingDesc"), icon: Shirt },
  ];

  return (
    <section className="bg-brand-purple py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-xl">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {extras.map((e) => (
            <motion.div
              key={e.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-200"
            >
              <e.icon className="w-10 h-10 text-brand-purple mb-4" strokeWidth={1.5} />
              <h3 className="text-brand-dark font-bold text-xl mb-2">{e.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

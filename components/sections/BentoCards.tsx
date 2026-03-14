"use client";

import { motion } from "framer-motion";
import { Headphones, Smartphone, Smile } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BentoCards() {
  const t = useTranslations("Bento");

  const cards = [
    { bg: "bg-brand-purple-light", icon: Headphones, label: t("card1") },
    { bg: "bg-brand-yellow", icon: Smartphone, label: t("card2") },
    { bg: "bg-brand-purple", icon: Smile, label: t("card3"), textWhite: true },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-section font-bold text-brand-dark text-center mb-14 max-w-4xl mx-auto text-balance"
        >
          {t("title")}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className={`${card.bg} rounded-2xl h-72 flex flex-col items-center justify-center gap-6 hover:scale-[1.02] transition-transform duration-200`}
            >
              <card.icon
                className={`w-16 h-16 ${card.textWhite ? "text-white" : "text-brand-dark"}`}
                strokeWidth={1.5}
              />
              <p className={`text-xl font-semibold ${card.textWhite ? "text-white" : "text-brand-dark"}`}>
                {card.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

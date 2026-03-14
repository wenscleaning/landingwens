"use client";

import { motion } from "framer-motion";
import { Heart, Baby, GraduationCap, Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";

export default function LifeMilestones() {
  const t = useTranslations("Milestones");

  const milestones = [
    { icon: GraduationCap, label: t("students") },
    { icon: Baby, label: t("newParents") },
    { icon: Heart, label: t("recovering") },
    { icon: Briefcase, label: t("busyProfessionals") },
  ];

  return (
    <section className="bg-brand-blue-soft pt-20 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white font-bold text-4xl md:text-6xl mb-6">
            {t("title")}
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mb-12">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {milestones.map((m) => (
            <motion.div
              key={m.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <m.icon className="w-10 h-10 text-white mx-auto mb-3" strokeWidth={1.5} />
              <p className="text-white font-semibold">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl h-64 rounded-t-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
            <div className="text-center text-white/40">
              <div className="flex justify-center gap-4 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium">{t("happyCustomers")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CalendarDays, UserCheck, Armchair } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    { icon: CalendarDays, text: t("step1") },
    { icon: UserCheck, text: t("step2") },
    { icon: Armchair, text: t("step3") },
  ];

  return (
    <section className="bg-brand-teal py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 flex-1 w-full"
        >
          <h2 className="text-brand-dark font-bold text-4xl md:text-5xl mb-10">
            {t("title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 md:divide-x md:divide-gray-200">
            {steps.map((step, i) => (
              <div key={i} className="md:px-6 first:md:pl-0 last:md:pr-0">
                <div className="w-12 h-12 rounded-full bg-brand-purple-pale flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-brand-purple" />
                </div>
                <p className="text-brand-dark text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-shrink-0 hidden lg:block"
        >
          <div className="w-56 h-[420px] bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-200 p-3 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-200 rounded-b-2xl" />
            <div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-brand-purple to-brand-purple-dark flex flex-col items-center justify-center gap-4 text-white">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <CalendarDays className="w-8 h-8" />
              </div>
              <p className="text-sm font-semibold">{t("appName")}</p>
              <p className="text-xs text-white/60 px-6 text-center">{t("appDesc")}</p>
              <div className="mt-4 bg-brand-green rounded-full px-6 py-2 text-sm font-semibold">
                {t("bookNow")}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

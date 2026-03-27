"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useBooking } from "@/components/ui/BookingContext";

export default function CTASection() {
  const t = useTranslations("CTA");
  const { openBooking } = useBooking();

  return (
    <section className="bg-[#1B396A] py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.h2
          className="text-[#C9A84C] font-heading text-4xl md:text-5xl font-extrabold italic mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("title")}
        </motion.h2>

        <motion.p
          className="text-slate-300 text-xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => openBooking()}
            className="inline-block bg-[#C9A84C] hover:bg-[#b8943d] text-[#0F2347] px-12 py-4 rounded-full text-base font-bold uppercase tracking-wider shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:scale-105 transition-all duration-300"
          >
            {t("bookCta")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

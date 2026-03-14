"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function CTASection() {
  const t = useTranslations("CTA");

  return (
    <section className="py-20 bg-[#F4FAFD]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="bg-[#2E9CCA] rounded-[2rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-[#2E9CCA]/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2DC4A4]/20 rounded-full -ml-20 -mb-20" />

          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold font-heading mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("title")}
            </motion.h2>

            <motion.p
              className="text-xl text-sky-50/90 max-w-xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t("description")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#"
                className="bg-white text-[#2E9CCA] px-10 py-4 rounded-full font-extrabold text-lg shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                {t("bookCta")}
              </a>
              <a
                href="#"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-extrabold text-lg hover:bg-white/10 transition-all duration-300"
              >
                {t("pricingCta")}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CleaningProductsSection() {
  const t = useTranslations("CleaningProducts");

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-[#1B396A] font-heading text-3xl md:text-4xl font-extrabold leading-tight">
            {t("title")}
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mt-5" />
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image — left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/5 flex-shrink-0"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/services/seccion3.jpeg"
                alt={t("imageAlt")}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text — right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full md:w-3/5 space-y-5"
          >
            {/* Paragraph 1 */}
            <p className="text-slate-600 text-base leading-relaxed">
              {t.rich("paragraph1", {
                brand: (chunks) => (
                  <span className="font-bold text-[#1B396A]">{chunks}</span>
                ),
                strong: (chunks) => (
                  <span className="font-semibold text-slate-800">{chunks}</span>
                ),
              })}
            </p>

            {/* Paragraph 2 */}
            <p className="text-slate-600 text-base leading-relaxed">
              {t.rich("paragraph2intro", {
                strong: (chunks) => (
                  <span className="font-semibold text-slate-800">{chunks}</span>
                ),
              })}
            </p>

            {/* Bullet items */}
            <ul className="space-y-2 pl-1">
              <li className="flex items-start gap-2 text-slate-600 text-base">
                {/* <Leaf className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /> */}
                <span>
                  {t.rich("bullet1", {
                    strong: (chunks) => (
                      <span className="font-semibold text-slate-800">{chunks}</span>
                    ),
                  })}
                </span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-base">
                {/* <Leaf className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /> */}
                <span>
                  {t.rich("bullet2", {
                    strong: (chunks) => (
                      <span className="font-semibold text-slate-800">{chunks}</span>
                    ),
                  })}
                </span>
              </li>
            </ul>

            {/* Paragraph 3 */}
            <p className="text-slate-600 text-base leading-relaxed">
              {t.rich("paragraph3", {
                strong: (chunks) => (
                  <span className="font-semibold text-slate-800">{chunks}</span>
                ),
              })}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

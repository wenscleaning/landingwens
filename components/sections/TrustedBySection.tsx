"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function TrustedBySection() {
  const t = useTranslations("Reviews");
  const reviews = [
    {
      text: t("review1Text"),
      author: t("review1Author"),
      role: t("review1Role"),
    },
    {
      text: t("review2Text"),
      author: t("review2Author"),
      role: t("review2Role"),
    },
    {
      text: t("review3Text"),
      author: t("review3Author"),
      role: t("review3Role"),
    },
  ];

  const gradients = [
    "from-[#2E9CCA] to-[#2DC4A4]",
    "from-[#1B3A6B] to-[#2E9CCA]",
    "from-[#2DC4A4] to-[#1B3A6B]",
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-center justify-between mb-14">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1B3A6B] max-w-lg leading-tight"
          >
            {t("title")}{" "}
            <span className="text-[#2DC4A4]">{t("titleHighlight")}</span>{" "}
            {t("titleEnd")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-3"
          >
            <button
              onClick={() => {}}
              className="w-10 h-10 rounded-full border-2 border-[#1B3A6B]/20 flex items-center justify-center text-[#1B3A6B]/60 hover:border-[#2E9CCA] hover:text-[#2E9CCA] transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => {}}
              className="w-10 h-10 rounded-full border-2 border-[#1B3A6B]/20 flex items-center justify-center text-[#1B3A6B]/60 hover:border-[#2E9CCA] hover:text-[#2E9CCA] transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Review cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {reviews.map((review, i) => {
            const isHighlighted = i === 1;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border transition-transform ${
                  isHighlighted
                    ? "shadow-[0_20px_60px_rgba(46,156,202,0.15)] border-[#2E9CCA]/20 scale-[1.02]"
                    : "shadow-sm border-gray-100"
                }`}
              >
                <p className="italic text-[#1B3A6B]/70 leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradients[i]} flex-shrink-0`}
                  />
                  <div>
                    <p className="font-extrabold text-sm text-[#1B3A6B]">
                      {review.author}
                    </p>
                    <p className="text-xs text-[#1B3A6B]/50">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-[#2DC4A4] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#2DC4A4]/90 transition-colors">
            {t("seeMore")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import StarRating from "@/components/ui/StarRating";
import BoltPattern from "@/components/ui/BoltPattern";

export default function ReviewsSection() {
  const t = useTranslations("Reviews");

  const reviews = [
    {
      id: 1, score: 5,
      date: t("review1Date"), title: t("review1Title"),
      text: t("review1Text"), author: t("review1Author"),
    },
    {
      id: 2, score: 5,
      date: t("review2Date"), title: t("review2Title"),
      text: t("review2Text"), author: t("review2Author"),
    },
    {
      id: 3, score: 5,
      date: t("review3Date"), title: t("review3Title"),
      text: t("review3Text"), author: t("review3Author"),
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#3D6B5A]">
      <BoltPattern />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {reviews.map((r) => (
              <motion.div
                key={r.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <StarRating score={r.score} />
                  <span className="text-xs text-gray-400">{r.date}</span>
                </div>
                <h4 className="font-bold text-brand-dark mt-2">{r.title}</h4>
                <p className="text-sm text-brand-muted mt-1 line-clamp-4">{r.text}</p>
                <p className="text-xs text-gray-400 mt-3">{r.author}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white shrink-0"
          >
            <div className="flex justify-center gap-2 text-brand-yellow text-5xl mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
            <div className="text-7xl lg:text-[96px] font-bold leading-none">4.6 / 5</div>
            <p className="text-sm mt-4 text-brand-text-light">{t("verifiedReviews")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

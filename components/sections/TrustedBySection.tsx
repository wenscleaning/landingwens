"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const REVIEWS_PER_PAGE = 3;
const TOTAL_REVIEWS = 6;

export default function TrustedBySection() {
  const t = useTranslations("Reviews");
  const [page, setPage] = useState(0);

  const allReviews = Array.from({ length: TOTAL_REVIEWS }, (_, i) => ({
    text: t(`review${i + 1}Text` as Parameters<typeof t>[0]),
    author: t(`review${i + 1}Author` as Parameters<typeof t>[0]),
    role: t(`review${i + 1}Role` as Parameters<typeof t>[0]),
  }));

  const totalPages = Math.ceil(allReviews.length / REVIEWS_PER_PAGE);
  const currentReviews = allReviews.slice(
    page * REVIEWS_PER_PAGE,
    page * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE
  );

  const goNext = useCallback(() => {
    setPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setPage((p) => (p - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  const formatAuthorName = (name: string) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0];
    return `${parts[0]} ${parts[parts.length - 1][0]}.`;
  };

  return (
    <section id="reviews" className="py-24 bg-[#0F2347] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl font-extrabold text-white max-w-lg leading-tight"
          >
            {t("title")}{" "}
            <span className="text-[#C9A84C]">{t("titleHighlight")}</span>{" "}
            {t("titleEnd")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 sm:mt-2 flex-shrink-0"
          >
            {/* Page indicator */}
            <div className="flex gap-1.5 mr-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === page
                      ? "bg-[#C9A84C] w-6"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center text-white/60 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center text-white/60 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Review cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="grid gap-6 md:grid-cols-3 mb-14 items-stretch"
          >
            {currentReviews.map((review, i) => {
              const isCenter = i === 1;
              return (
                <motion.div
                  key={`${page}-${i}`}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`rounded-xl p-8 flex flex-col transition-all duration-300 ${
                    isCenter
                      ? "bg-white/[0.08] border-2 border-[#C9A84C]/60 scale-[1.03] shadow-[0_0_30px_rgba(201,168,76,0.20)]"
                      : "bg-white/5 border border-[#C9A84C]/30 hover:border-[#C9A84C]/60"
                  }`}
                >
                  {/* Gold stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        size={16}
                        className="text-[#C9A84C] fill-[#C9A84C]"
                      />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-slate-200 italic leading-relaxed mb-8 flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Author row */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#C9A84C] text-xs font-bold">
                        {getInitials(review.author)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">
                        {formatAuthorName(review.author)}
                      </p>
                      <p className="text-[#C9A84C] text-xs uppercase tracking-widest">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-[#C9A84C] hover:bg-[#b8943d] text-[#0F2347] font-bold px-8 py-3 rounded-full shadow-[0_4px_24px_rgba(201,168,76,0.35)] transition-colors">
            {t("seeMore")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

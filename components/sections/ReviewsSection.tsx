"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CfXQlSNpnF2SEAE/review";
const GOOGLE_REVIEWS_VIEW_URL = "https://g.page/r/CfXQlSNpnF2SEAE";

const REVIEWS_PER_PAGE = 3;
const TOTAL_REVIEWS = 9;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ReviewsSection() {
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
    <section id="reviews" className="py-24 bg-[#0F2347] text-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C9A84C]/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              {/* Google logo */}
              <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-white/50 text-sm font-medium uppercase tracking-widest">Google Reviews</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {t("title")}{" "}
              <span className="text-[#C9A84C]">{t("titleHighlight")}</span>{" "}
              {t("titleEnd")}
            </h2>
          </motion.div>

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
            className="grid gap-6 md:grid-cols-3 mb-14"
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
                  className={`rounded-xl p-8 flex flex-col h-[300px] transition-all duration-300 ${
                    isCenter
                      ? "bg-white/[0.08] border-2 border-[#C9A84C]/60 scale-[1.03] shadow-[0_0_30px_rgba(201,168,76,0.20)]"
                      : "bg-white/5 border border-[#C9A84C]/30 hover:border-[#C9A84C]/60"
                  }`}
                >
                  {/* Stars + Google icon */}
                  <div className="flex items-center justify-between mb-5 flex-shrink-0">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star
                          key={si}
                          size={16}
                          className="text-[#C9A84C] fill-[#C9A84C]"
                        />
                      ))}
                    </div>
                    <svg className="w-5 h-5 opacity-60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>

                  {/* Review text — scrollable when overflows */}
                  <div className="flex-1 overflow-y-auto mb-5 [scrollbar-width:thin] [scrollbar-color:#C9A84C33_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#C9A84C]/25 [&::-webkit-scrollbar-thumb]:rounded-full">
                    <p className="text-slate-200 italic leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Author row — always pinned to bottom */}
                  <div className="flex items-center gap-3 flex-shrink-0">
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

        {/* Bottom: Score summary + Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8 bg-white/5 border border-[#C9A84C]/20 rounded-2xl px-8 py-6"
        >
          {/* Left: Google score */}
          <div className="flex items-center gap-5">
            <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-extrabold text-white">5.0</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="text-[#C9A84C] fill-[#C9A84C]" />
                  ))}
                </div>
              </div>
              <p className="text-white/50 text-sm mt-0.5">Google Reviews</p>
            </div>
          </div>

          {/* Right: CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b8943d] text-[#0F2347] px-7 py-3 rounded-full font-bold text-sm shadow-[0_4px_24px_rgba(201,168,76,0.35)] transition-colors duration-200"
            >
              <Star className="w-4 h-4" />
              {t("leaveReview")}
            </a>
            <a
              href={GOOGLE_REVIEWS_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] px-7 py-3 rounded-full font-semibold text-sm transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              {t("seeAllGoogle")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

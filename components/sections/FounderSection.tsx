"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Award, ChevronDown, Play, X } from "lucide-react";

export default function FounderSection() {
  const t = useTranslations("Founder");
  const [awardOpen, setAwardOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [videoOpen]);

  return (
    <>
      <section id="about" className="bg-[#1B396A] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#C9A84C] text-sm font-bold uppercase tracking-widest mb-4">
              {t("sectionTag")}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
              {t("name")}
            </h2>
            <div className="w-16 h-1 bg-[#C9A84C] mx-auto mt-5" />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            {/* LEFT — Portrait (larger) + Award photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-5/12 w-full flex flex-col items-center"
            >
              {/* Portrait — made larger */}
              <div className="relative mb-8">
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#C9A84C]/25" />
                <div className="absolute inset-0 rounded-full bg-[#C9A84C]/10 blur-2xl" />
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-[4px] border-[#C9A84C]/60 bg-[#1B396A]">
                  <Image
                    src="/images/services/creator.jpg"
                    alt={t("name")}
                    fill
                    className="object-cover scale-[1.05] object-[center_20%]"
                  />
                </div>
                <div className="absolute -bottom-1 -right-2 w-7 h-7 rounded-full bg-[#C9A84C] border-4 border-[#1B396A]" />
              </div>

              {/* Role under portrait (mobile) */}
              <div className="text-center lg:hidden mb-6">
                <p className="text-[#C9A84C] font-bold text-sm uppercase tracking-widest">
                  {t("role")}
                </p>
              </div>

            </motion.div>

            {/* RIGHT — Bio + Award accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:w-7/12 w-full"
            >
              {/* Role (desktop) */}
              <p className="hidden lg:block text-[#C9A84C] font-bold text-sm uppercase tracking-widest mb-3">
                {t("role")}
              </p>

              {/* Bio — new longer text */}
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                {t("newBio")}
              </p>

              {/* SINGA Award accordion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="bg-white/5 rounded-xl border border-white/10 hover:border-[#C9A84C]/30 transition-colors duration-300"
              >
                {/* Accordion header */}
                <button
                  onClick={() => setAwardOpen((o) => !o)}
                  className="w-full flex items-center gap-4 p-4 text-left"
                  aria-expanded={awardOpen}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-extrabold text-white text-sm">
                      {t("awardTitle")}
                    </h4>
                    <p className="text-slate-400 text-xs mt-0.5">{t("achievement1Desc")}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C9A84C] flex-shrink-0 transition-transform duration-300 ${
                      awardOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion body */}
                <AnimatePresence initial={false}>
                  {awardOpen && (
                    <motion.div
                      key="award-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 space-y-4">
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {t("awardText")}
                        </p>

                        {/* Award photo */}
                        <div className="relative rounded-lg overflow-hidden h-56">
                          <Image
                            src="/images/services/creator-2.jpg"
                            alt={t("awardTitle")}
                            fill
                            className="object-cover object-center"
                          />
                        </div>

                        {/* Watch video button */}
                        <button
                          onClick={() => setVideoOpen(true)}
                          className="flex items-center gap-3 bg-[#C9A84C] hover:bg-[#b8943d] text-[#0F2347] font-bold px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm w-full justify-center"
                        >
                          <Play className="w-4 h-4" fill="#0F2347" />
                          {t("achievement1Title")}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setVideoOpen(false)}
            />
            <motion.div
              className="relative w-full max-w-3xl z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="rounded-xl overflow-hidden border-2 border-[#C9A84C]/30 shadow-2xl bg-black">
                <video
                  ref={videoRef}
                  src="/images/video/singa.mp4"
                  controls
                  autoPlay
                  className="w-full aspect-video"
                />
              </div>
              <p className="text-center text-slate-400 text-sm mt-3">
                {t("awardTitle")} — SINGA Stories, Meyrin, Genève
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

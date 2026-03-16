"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Award, Heart, Users, Play, X } from "lucide-react";

const achievements = [
  { key: "achievement1", icon: Award, hasVideo: true },
  { key: "achievement2", icon: Heart, hasVideo: false },
  { key: "achievement3", icon: Users, hasVideo: false },
] as const;

export default function FounderSection() {
  const t = useTranslations("Founder");
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
      <section className="bg-[#1B396A] py-24 overflow-hidden">
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
            {/* LEFT — Portrait + Award */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-5/12 w-full flex flex-col items-center"
            >
              {/* Portrait */}
              <div className="relative mb-8">
                <div className="absolute -inset-3 rounded-full border-2 border-dashed border-[#C9A84C]/25" />
                <div className="absolute inset-0 rounded-full bg-[#C9A84C]/10 blur-2xl" />
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-[3px] border-[#C9A84C]/50 bg-[#1B396A]">
                  <Image
                    src="/images/services/creator.jpg"
                    alt={t("name")}
                    fill
                    className="object-cover scale-[1.05] object-[center_20%]"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#C9A84C] border-4 border-[#1B396A]" />
              </div>

              {/* Name + Role under portrait (mobile) */}
              <div className="text-center lg:hidden mb-6">
                <p className="text-[#C9A84C] font-bold text-sm uppercase tracking-widest">
                  {t("role")}
                </p>
              </div>

              {/* Award photo */}
              <div className="relative rounded-xl overflow-hidden max-w-xs w-full group">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C]/50 rounded-tl-xl z-10" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C]/50 rounded-br-xl z-10" />

                <Image
                  src="/images/services/creator-2.jpg"
                  alt={t("achievement1Title")}
                  width={400}
                  height={250}
                  className="object-cover w-full rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2347]/80 via-transparent to-transparent rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                    <p className="text-white text-xs font-bold">
                      {t("achievement1Title")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Bio + Achievements */}
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

              {/* Bio */}
              <p className="text-slate-300 text-base leading-relaxed mb-10">
                {t("bio")}
              </p>

              {/* Achievements */}
              <div className="space-y-5">
                {achievements.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                      className={`flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#C9A84C]/30 transition-colors duration-300 ${
                        item.hasVideo ? "cursor-pointer" : ""
                      }`}
                      onClick={item.hasVideo ? () => setVideoOpen(true) : undefined}
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#C9A84C]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading font-extrabold text-white text-sm mb-0.5">
                          {t(`${item.key}Title`)}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {t(`${item.key}Desc`)}
                        </p>
                      </div>
                      {/* Play button for video */}
                      {item.hasVideo && (
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center shadow-gold hover:scale-110 transition-transform duration-200 self-center">
                          <Play className="w-4 h-4 text-[#0F2347] ml-0.5" fill="#0F2347" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
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
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setVideoOpen(false)}
            />

            {/* Modal content */}
            <motion.div
              className="relative w-full max-w-3xl z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Close button */}
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Video */}
              <div className="rounded-xl overflow-hidden border-2 border-[#C9A84C]/30 shadow-2xl bg-black">
                <video
                  ref={videoRef}
                  src="/images/video/singa.mp4"
                  controls
                  autoPlay
                  className="w-full aspect-video"
                />
              </div>

              {/* Caption */}
              <p className="text-center text-slate-400 text-sm mt-3">
                {t("achievement1Title")} — SINGA Stories, Meyrin, Genève
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

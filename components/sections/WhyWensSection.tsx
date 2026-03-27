"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Sparkles, Shield, Sliders, BadgeCheck } from "lucide-react";

const cards = [
  { icon: Sparkles, titleKey: "card1Title", descKey: "card1Desc" },
  { icon: Shield,   titleKey: "card2Title", descKey: "card2Desc" },
  { icon: Sliders,  titleKey: "card3Title", descKey: "card3Desc" },
  { icon: BadgeCheck, titleKey: "card4Title", descKey: "card4Desc" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyWensSection() {
  const t = useTranslations("WhyWens");

  return (
    <section id="why-wens" className="bg-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1B396A] font-heading text-3xl md:text-4xl font-extrabold">
            {t("title")}
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto my-5" />
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* 4 cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {cards.map(({ icon: Icon, titleKey, descKey }) => (
            <motion.div
              key={titleKey}
              variants={cardVariants}
              className="bg-[#F6F7F8] rounded-2xl p-6 flex flex-col items-start gap-4 border border-slate-100 hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1B396A]/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#1B396A]" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-[#1B396A] text-base mb-1">
                  {t(titleKey as Parameters<typeof t>[0])}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {t(descKey as Parameters<typeof t>[0])}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-[#C9A84C] font-heading text-xl md:text-2xl font-bold italic">
            &ldquo;{t("closingQuote")}&rdquo;
          </p>
        </motion.div>

        {/* Image + text side by side */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <div className="flex gap-2 h-[440px]">
              {/* Left: large tall image */}
              <div className="relative w-[58%] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services/collage1.jpeg"
                  alt="Clean interior with staircase"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Right: two stacked images */}
              <div className="flex flex-col gap-2 w-[42%]">
                <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/services/collage2.jpeg"
                    alt="Clean bathroom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/services/collage3.jpeg"
                    alt="Clean office"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-1/2 w-full"
          >
            <span className="inline-block text-[#C9A84C] text-sm font-bold uppercase tracking-widest mb-3">
              {t("sideTag")}
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-[#1B396A] mb-4">
              {t("sideTitle")}
            </h3>
            <p className="text-slate-500 text-base leading-relaxed mb-4">
              {t("sideText1")}
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              {t("sideText2")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

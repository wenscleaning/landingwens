"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const logos = [
  { src: "/images/services/image12.jpg", alt: "L&L Déménagements S.A", darkBg: false },
  { src: "/images/services/image17.jpg", alt: "COMETE", darkBg: true },
  { src: "/images/services/image28.jpg", alt: "SINGA Switzerland", darkBg: false },
];

export default function TrustedLogosSection() {
  const t = useTranslations("TrustedLogos");

  return (
    <section className="bg-[#F6F7F8] py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Title with gold decorators */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <div className="h-0.5 w-8 sm:w-12 bg-[#C9A84C]/50" />
          <h1 className="text-base sm:text-2xl  font-black uppercase tracking-[0.12em] sm:tracking-[0.2em] text-[#0F2347]/70 text-center">
            {t("title")}
          </h1>
          <div className="h-0.5 w-8 sm:w-12 bg-[#C9A84C]/50" />
        </motion.div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.alt}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className={`
                relative w-56 h-24 rounded-xl overflow-hidden
                border border-gray-200 shadow-sm
                transition-all duration-300 hover:shadow-md hover:-translate-y-0.5
                ${logo.darkBg ? "bg-black" : "bg-white"}
              `}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain p-4"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

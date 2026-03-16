"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqKeys = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export default function FAQSection() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-[#F6F7F8] py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1B396A] font-heading text-3xl md:text-4xl font-extrabold">
            {t("title")}
          </h2>
          {/* Gold divider */}
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mt-4 mb-2" />
          <p className="mt-2 text-[#1B396A]/60 text-lg font-sans">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="divide-y divide-[#1B396A]/10">
          {faqKeys.map((key) => {
            const isOpen = openIndex === key;

            return (
              <div key={key} className="py-5">
                <button
                  type="button"
                  onClick={() => toggle(key)}
                  aria-expanded={isOpen}
                  className="flex justify-between items-center w-full text-left group"
                >
                  <span className="font-bold text-[#1B396A] text-lg font-heading group-hover:text-[#C9A84C] transition-colors">
                    {t(`q${key}` as const)}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C9A84C] flex-shrink-0 ml-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`answer-${key}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#1B396A]/70 text-base leading-relaxed pt-3 font-sans">
                        {t(`a${key}` as const)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

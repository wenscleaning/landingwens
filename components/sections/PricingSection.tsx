"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const plans = [
  {
    nameKey: "basic",
    feature3Key: "feature3_basic",
    feature4Key: "feature4_basic",
    feature5Key: "feature5_basic",
  },
  {
    nameKey: "standard",
    feature3Key: "feature3_standard",
    feature4Key: "feature4_standard",
    feature5Key: "feature5_standard",
  },
  {
    nameKey: "premium",
    feature3Key: "feature3_premium",
    feature4Key: "feature4_premium",
    feature5Key: "feature5_premium",
  },
];

export default function PricingSection() {
  const t = useTranslations("Pricing");

  return (
    <section id="pricing" className="bg-[#1B396A] py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {t("title")}
          </h2>
          {/* Gold divider */}
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto my-5" />
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-3 items-center">
          {plans.map((plan, i) => {
            const isCenter = i === 1;
            const features = [
              t("feature1"),
              t("feature2"),
              t(plan.feature3Key as Parameters<typeof t>[0]),
              t(plan.feature4Key as Parameters<typeof t>[0]),
              t(plan.feature5Key as Parameters<typeof t>[0]),
            ];

            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`rounded-2xl p-8 flex flex-col transition-all duration-300 relative ${
                  isCenter
                    ? "bg-[#C9A84C] scale-[1.04] shadow-[0_20px_60px_rgba(201,168,76,0.35)] z-10"
                    : "bg-white/5 border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 backdrop-blur-sm"
                }`}
              >
                {/* Recommended badge (center only) */}
                {isCenter && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F2347] text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    {t("recommended")}
                  </span>
                )}

                {/* Plan name */}
                <p
                  className={`uppercase tracking-wide text-sm font-bold mb-4 ${
                    isCenter ? "text-[#0F2347]/60" : "text-[#C9A84C]"
                  }`}
                >
                  {t(plan.nameKey as Parameters<typeof t>[0])}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span
                    className={`text-3xl font-extrabold ${
                      isCenter ? "text-[#0F2347]" : "text-white"
                    }`}
                  >
                    {t("price")}
                  </span>
                  <span
                    className={`text-sm ml-2 ${
                      isCenter ? "text-[#0F2347]/70" : "text-white/50"
                    }`}
                  >
                    {t("perMonth")}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm">
                      <Check
                        size={16}
                        className={`flex-shrink-0 ${
                          isCenter ? "text-[#0F2347]" : "text-[#C9A84C]"
                        }`}
                      />
                      <span
                        className={
                          isCenter ? "text-[#0F2347]/90" : "text-slate-300"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <button
                  className={`w-full py-3 rounded-full font-semibold text-sm transition-colors ${
                    isCenter
                      ? "bg-[#0F2347] text-white hover:bg-[#1B396A]"
                      : "border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0F2347]"
                  }`}
                >
                  {t("bookingNow")}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

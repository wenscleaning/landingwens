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

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  highlighted: boolean;
}

export default function PricingSection() {
  const t = useTranslations("Pricing");

  const plans: PricingPlan[] = [
    {
      name: t("basic"),
      price: "$99",
      features: [
        t("feature1"),
        t("feature2"),
        "1x " + t("feature3"),
        t("feature4"),
        t("feature5"),
      ],
      highlighted: false,
    },
    {
      name: t("standard"),
      price: "$159",
      features: [
        t("feature1"),
        t("feature2"),
        "5x " + t("feature3"),
        t("feature4"),
        t("feature5"),
      ],
      highlighted: true,
    },
    {
      name: t("premium"),
      price: "$249",
      features: [
        t("feature1"),
        t("feature2"),
        "10x " + t("feature3"),
        t("feature4"),
        t("feature5"),
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#F4FAFD]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1B3A6B] mb-4">
            {t("title")}
          </h2>
          <p className="text-[#1B3A6B]/60 text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-3 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-[#2DC4A4] text-white shadow-2xl scale-[1.03] relative z-10"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              <p
                className={`uppercase tracking-wide text-sm font-bold mb-4 ${
                  plan.highlighted ? "text-white/80" : "text-[#2DC4A4]"
                }`}
              >
                {plan.name}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span
                  className={`text-sm ml-1 ${
                    plan.highlighted ? "text-white/70" : "text-[#1B3A6B]/50"
                  }`}
                >
                  /{t("perMonth")}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm">
                    <Check
                      size={16}
                      className={
                        plan.highlighted
                          ? "text-white flex-shrink-0"
                          : "text-[#2DC4A4] flex-shrink-0"
                      }
                    />
                    <span
                      className={
                        plan.highlighted ? "text-white/90" : "text-[#1B3A6B]/70"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold text-sm transition-colors ${
                  plan.highlighted
                    ? "bg-white text-[#2DC4A4] hover:bg-white/90"
                    : "border-2 border-[#2DC4A4] text-[#2DC4A4] hover:bg-[#2DC4A4] hover:text-white"
                }`}
              >
                {t("bookingNow")}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

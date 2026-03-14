"use client";

import { motion } from "framer-motion";
import { Building2, TreePine, CookingPot, SquareStack, Bath, Sofa } from "lucide-react";
import { useTranslations } from "next-intl";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  key: string;
  icon: LucideIcon;
  gradient: string;
}

const services: ServiceCard[] = [
  { key: "office", icon: Building2, gradient: "from-[#2E9CCA]/60 to-[#1B3A6B]/80" },
  { key: "garden", icon: TreePine, gradient: "from-[#2DC4A4]/60 to-[#1B3A6B]/80" },
  { key: "kitchen", icon: CookingPot, gradient: "from-[#1B3A6B]/60 to-[#2E9CCA]/80" },
  { key: "window", icon: SquareStack, gradient: "from-[#2E9CCA]/60 to-[#2DC4A4]/80" },
  { key: "bathroom", icon: Bath, gradient: "from-[#1B3A6B]/60 to-[#2DC4A4]/80" },
  { key: "sofa", icon: Sofa, gradient: "from-[#2DC4A4]/60 to-[#2E9CCA]/80" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="bg-[#F4FAFD] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B3A6B] font-heading mb-4">
            {t("title")}
          </h2>
          <p className="text-[#1B3A6B]/60 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                variants={cardVariants}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer"
              >
                {/* Background gradient placeholder */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-transform duration-300 group-hover:scale-105`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-white/30" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Label */}
                <span className="absolute bottom-4 left-4 text-white font-extrabold text-lg font-heading">
                  {t(service.key)}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <button className="border-2 border-[#2DC4A4] text-[#2DC4A4] px-8 py-3.5 rounded-full font-bold hover:bg-[#2DC4A4] hover:text-white transition-colors duration-200">
            {t("viewAll")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ServiceCard {
  key: string;
  descKey: string;
  image: string;
}

const services: ServiceCard[] = [
  { key: "office",   descKey: "officeDesc",   image: "/images/services/office.jpg" },
  { key: "garden",   descKey: "gardenDesc",   image: "/images/services/concierge.jpg" },
  { key: "kitchen",  descKey: "kitchenDesc",  image: "/images/services/home.jpg" },
  { key: "window",   descKey: "windowDesc",   image: "/images/services/windows.jpg" },
  { key: "bathroom", descKey: "bathroomDesc", image: "/images/services/construction.jpg" },
  { key: "sofa",     descKey: "sofaDesc",     image: "/images/services/image7.jpg" },
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
  const tCta = useTranslations("globalCta");

  return (
    <section id="services" className="bg-[#F6F7F8] py-24">
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

        {/* Grid 3×2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
        >
          {services.map((service) => (
            <motion.div
              key={service.key}
              variants={cardVariants}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.key}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark gradient overlay — bottom only */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              </div>

              {/* Text overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading font-extrabold text-white text-lg mb-1 drop-shadow-sm">
                  {t(service.key)}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                  {t(service.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <button className="bg-[#C9A84C] hover:bg-[#b8943d] text-[#0F2347] px-10 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-gold hover:shadow-gold-lg">
            {tCta("bookNow")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

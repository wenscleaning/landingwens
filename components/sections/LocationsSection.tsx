"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

const locations = [
  { name: "Zurich", color: "from-blue-400 to-blue-600" },
  { name: "Bern", color: "from-green-400 to-green-600" },
  { name: "Geneva", color: "from-purple-400 to-purple-600" },
  { name: "Basel", color: "from-orange-400 to-orange-600" },
  { name: "Lausanne", color: "from-pink-400 to-pink-600" },
  { name: "Lucerne", color: "from-teal-400 to-teal-600" },
];

export default function LocationsSection() {
  const t = useTranslations("Locations");

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-brand-yellow"
        style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-brand-dark font-bold text-4xl md:text-5xl mb-4 text-center"
        >
          {t("title")}
        </motion.h2>
        <p className="text-brand-muted text-lg text-center mb-14 max-w-xl mx-auto">
          {t("subtitle")}
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {locations.map((loc) => (
            <motion.a
              key={loc.name}
              href="#"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="group relative h-40 rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-200"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${loc.color}`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                <MapPin className="w-8 h-8 mb-2" />
                <span className="font-bold text-lg">{loc.name}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

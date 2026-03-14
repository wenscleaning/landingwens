"use client";

import { motion } from "framer-motion";
import { SprayCan, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AppSection() {
  const t = useTranslations("App");

  return (
    <section className="bg-brand-yellow py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-60 h-[460px] bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-800 p-3 relative z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-800 rounded-b-2xl" />
              <div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-brand-purple to-brand-purple-dark flex flex-col items-center justify-center gap-4 text-white">
                <Smartphone className="w-12 h-12" />
                <p className="text-lg font-bold">{t("phoneName")}</p>
                <p className="text-xs text-white/60 text-center px-4">{t("phoneDesc")}</p>
              </div>
            </div>
            <div className="absolute -top-8 -right-12 w-24 h-24 bg-brand-purple rounded-2xl flex items-center justify-center rotate-12 shadow-lg">
              <SprayCan className="w-12 h-12 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-brand-dark font-bold text-4xl md:text-6xl leading-tight mb-6">
            {t("title")}
          </h2>
          <p className="text-brand-dark text-lg mb-8">{t("subtitle")}</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-3 hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-tight">{t("downloadOn")}</div>
                <div className="text-sm font-bold leading-tight">{t("appStore")}</div>
              </div>
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-3 hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.2l2.807 1.626a1 1 0 010 1.734l-2.807 1.626L15.206 12l2.492-2.493zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-tight">{t("getItOn")}</div>
                <div className="text-sm font-bold leading-tight">{t("googlePlay")}</div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

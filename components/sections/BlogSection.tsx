"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const blogs = [
  {
    titleKey: "blog1Title" as const,
    dateKey: "blog1Date" as const,
    authorKey: "blog1Author" as const,
    excerptKey: "blog1Excerpt" as const,
    gradient: "from-[#1B396A] to-[#24508A]",
  },
  {
    titleKey: "blog2Title" as const,
    dateKey: "blog2Date" as const,
    authorKey: "blog2Author" as const,
    excerptKey: "blog2Excerpt" as const,
    gradient: "from-[#24508A] to-[#1B396A]",
  },
  {
    titleKey: "blog3Title" as const,
    dateKey: "blog3Date" as const,
    authorKey: "blog3Author" as const,
    excerptKey: "blog3Excerpt" as const,
    gradient: "from-[#1B396A] to-[#24508A]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function BlogSection() {
  const t = useTranslations("Blog");

  return (
    <section id="blog" className="bg-[#0F2347] py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white font-heading text-3xl md:text-4xl font-extrabold mb-4">
            {t("title")}
          </h2>
          {/* Gold divider */}
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.titleKey}
              className="bg-white/5 rounded-xl overflow-hidden border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 shadow-sm hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              variants={cardVariants}
            >
              {/* Image placeholder */}
              <div
                className={`aspect-video bg-gradient-to-br ${blog.gradient}`}
              />
              <div className="p-6">
                <div className="flex gap-4 mb-3">
                  <span className="text-slate-500 text-xs">
                    {t(blog.dateKey)}
                  </span>
                  <span className="text-slate-500 text-xs">
                    {t(blog.authorKey)}
                  </span>
                </div>
                <h3 className="text-white font-extrabold text-lg font-heading mb-2">
                  {t(blog.titleKey)}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {t(blog.excerptKey)}
                </p>
                <a
                  href="#"
                  className="text-[#C9A84C] font-bold text-sm hover:text-[#b8943d] transition-colors"
                >
                  {t("readMore")}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#"
            className="inline-block border-2 border-[#C9A84C] text-[#C9A84C] rounded-full px-8 py-3 font-bold text-sm uppercase tracking-wide hover:bg-[#C9A84C] hover:text-[#0F2347] transition-all duration-300"
          >
            {t("viewAll")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

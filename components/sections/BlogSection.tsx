"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const blogs = [
  {
    titleKey: "blog1Title" as const,
    dateKey: "blog1Date" as const,
    authorKey: "blog1Author" as const,
    excerptKey: "blog1Excerpt" as const,
    gradient: "from-[#2E9CCA]/40 to-[#2DC4A4]/40",
  },
  {
    titleKey: "blog2Title" as const,
    dateKey: "blog2Date" as const,
    authorKey: "blog2Author" as const,
    excerptKey: "blog2Excerpt" as const,
    gradient: "from-[#2DC4A4]/40 to-[#1B3A6B]/30",
  },
  {
    titleKey: "blog3Title" as const,
    dateKey: "blog3Date" as const,
    authorKey: "blog3Author" as const,
    excerptKey: "blog3Excerpt" as const,
    gradient: "from-[#1B3A6B]/30 to-[#2E9CCA]/40",
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
    <section id="blog" className="py-24 bg-[#F4FAFD]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B3A6B] font-heading mb-4">
            {t("title")}
          </h2>
          <p className="text-[#1B3A6B]/60 text-lg max-w-2xl mx-auto">
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
              className="bg-white rounded-2xl overflow-hidden card-shadow hover:-translate-y-1 transition-all duration-300"
              variants={cardVariants}
            >
              <div
                className={`aspect-video bg-gradient-to-br ${blog.gradient}`}
              />
              <div className="p-6">
                <div className="flex gap-4 mb-3">
                  <span className="text-xs text-[#1B3A6B]/40">
                    {t(blog.dateKey)}
                  </span>
                  <span className="text-xs text-[#1B3A6B]/40">
                    {t(blog.authorKey)}
                  </span>
                </div>
                <h3 className="font-extrabold text-[#1B3A6B] text-lg font-heading mb-2">
                  {t(blog.titleKey)}
                </h3>
                <p className="text-[#1B3A6B]/60 text-sm mb-4">
                  {t(blog.excerptKey)}
                </p>
                <a
                  href="#"
                  className="text-[#2DC4A4] font-bold text-sm hover:text-[#1F9E84] transition-colors"
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
            className="inline-block border-2 border-[#2DC4A4] text-[#2DC4A4] hover:bg-[#2DC4A4] hover:text-white rounded-full px-8 py-3 font-bold transition-all duration-300"
          >
            {t("viewAll")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  CheckCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "41778102004";

const staggerContainer = { visible: { transition: { staggerChildren: 0.06 } } };
const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function WorkWithUsSection() {
  const t = useTranslations("WorkWithUs");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const lines = [
      t("whatsappTemplate"),
      ``,
      `*${t("labelName")}:* ${name}`,
      `*${t("labelPhone")}:* ${phone}`,
      email ? `*${t("labelEmail")}:* ${email}` : "",
      message ? `*${t("labelMessage")}:* ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <section id="contact-cta" className="bg-[#F6F7F8] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* <span className="inline-block text-[#C9A84C] text-sm font-bold uppercase tracking-widest mb-3">
            {t("sectionTag")}
          </span> */}
          <h2 className="text-[#1B396A] font-heading text-3xl md:text-4xl font-extrabold">
            {t("title")}
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mt-5" />
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

          {/* LEFT — Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-full flex flex-col">
              {/* Form header */}
              <div className="bg-[#0F2347] px-6 py-5 shrink-0">
                <h3 className="text-white font-heading text-lg font-extrabold">
                  {t("formTitle")}
                </h3>
                <p className="text-slate-300 text-sm mt-0.5">{t("formSubtitle")}</p>
              </div>

              <div className="flex-1 flex flex-col">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex-1 flex flex-col items-center justify-center p-10 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.1 }}
                      >
                        <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-[#0F2347] font-heading text-xl font-bold mb-2">
                        {t("successTitle")}
                      </h3>
                      <p className="text-slate-500 text-sm">{t("successMessage")}</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="flex-1 flex flex-col p-6 gap-4"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Trust items — compact */}
                      {/* <motion.ul variants={fadeInUp} className="space-y-1.5 pb-2 border-b border-slate-100">
                        {(["trust1", "trust2", "trust3", "trust4"] as const).map((key) => (
                          <li key={key} className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0" />
                            <span className="text-slate-500 text-xs">{t(key)}</span>
                          </li>
                        ))}
                      </motion.ul> */}

                      {/* Name */}
                      <motion.div variants={fadeInUp} className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t("placeholderName")}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0F2347] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                        />
                      </motion.div>

                      {/* Email */}
                      <motion.div variants={fadeInUp} className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t("placeholderEmail")}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0F2347] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                        />
                      </motion.div>

                      {/* Phone */}
                      <motion.div variants={fadeInUp} className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={t("placeholderPhone")}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0F2347] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                        />
                      </motion.div>

                      {/* Message */}
                      <motion.div variants={fadeInUp} className="relative flex-1">
                        <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder={t("placeholderMessage")}
                          rows={3}
                          className="w-full h-full min-h-[90px] pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0F2347] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all resize-none"
                        />
                      </motion.div>

                      {/* Submit */}
                      <motion.div variants={fadeInUp} className="mt-auto">
                        <button
                          type="submit"
                          className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white py-4 rounded-xl font-bold text-base uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                        >
                          <Send className="w-5 h-5" />
                          {t("submitBtn")}
                        </button>
                        <p className="text-center text-slate-400 text-xs mt-2">
                          {t("whatsappNote")}
                        </p>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative min-h-[480px] lg:min-h-0"
          >
            {/* Decorative gold frame offset behind image */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#C9A84C]/40 pointer-events-none z-0" />

            {/* Image fills the full column height */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl z-10">
              <Image
                src="/images/services/image6.jpg"
                alt={t("imageAlt")}
                fill
                className="object-cover"
              />
              {/* Subtle gradient at bottom for the badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2347]/70 via-transparent to-transparent" />

              {/* Bottom badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                  <p className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-1">
                    {t("sectionTag")}
                  </p>
                  <p className="text-white font-heading font-extrabold text-base leading-snug">
                    {t("badgeQuote")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

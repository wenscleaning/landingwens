"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  X,
  User,
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";
import { useBooking } from "./BookingContext";

const WHATSAPP_NUMBER = "41778102004";

const services = [
  { key: "office", image: "/images/services/image7.jpg" },
  { key: "garden", image: "/images/services/image.jpeg" },
  { key: "kitchen", image: "/images/services/construction.jpeg" },
  { key: "window", image: "/images/services/office.jpg" },
  { key: "bathroom", image: "/images/services/windows.jpg" },
  { key: "sofa", image: "/images/services/concierge.jpg" },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 25, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.04 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function BookingModal() {
  const { isOpen, preselectedService, prefillEmail, closeBooking } = useBooking();
  const t = useTranslations("BookingForm");
  const tServices = useTranslations("Services");
  const modalRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Sync preselected service & prefill email
  useEffect(() => {
    if (preselectedService) setSelectedService(preselectedService);
    if (prefillEmail) setEmail(prefillEmail);
  }, [preselectedService, prefillEmail]);

  // Reset form on close
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setName("");
        setPhone("");
        setEmail("");
        setSelectedService(null);
        setMessage("");
        setSubmitted(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, closeBooking]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const serviceName = selectedService ? tServices(selectedService as Parameters<typeof tServices>[0]) : "";

    const lines = [
      `${t("whatsappGreeting")}`,
      ``,
      `*${t("labelName")}:* ${name}`,
      `*${t("labelPhone")}:* ${phone}`,
      email ? `*${t("labelEmail")}:* ${email}` : "",
      serviceName ? `*${t("labelService")}:* ${serviceName}` : "",
      message ? `*${t("labelMessage")}:* ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#0F2347]/80 backdrop-blur-sm"
            onClick={closeBooking}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col"
          >
            {/* Header — fixed */}
            <div className="bg-[#0F2347] px-6 py-5 rounded-t-2xl flex items-center justify-between shrink-0">
              <div>
                <h2 className="text-white font-heading text-xl md:text-2xl font-extrabold">
                  {t("title")}
                </h2>
                <p className="text-slate-300 text-sm mt-1">{t("subtitle")}</p>
              </div>
              <button
                onClick={closeBooking}
                className="text-white/70 hover:text-white transition-colors p-1"
                aria-label={t("close")}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto overscroll-contain min-h-0 flex-1 rounded-b-2xl [scrollbar-width:thin] [scrollbar-color:#C9A84C33_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#C9A84C]/25 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#C9A84C]/40">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-[#0F2347] font-heading text-2xl font-bold mb-2">
                    {t("successTitle")}
                  </h3>
                  <p className="text-slate-500 mb-6">{t("successMessage")}</p>
                  <button
                    onClick={closeBooking}
                    className="bg-[#0F2347] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1B396A] transition-colors"
                  >
                    {t("successClose")}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="p-6 space-y-5"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Service selection */}
                  <motion.div variants={fadeInUp}>
                    <label className="text-[#0F2347] font-bold text-sm uppercase tracking-wider mb-3 block">
                      {t("selectService")}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {services.map((service) => {
                        const isSelected = selectedService === service.key;
                        return (
                          <button
                            type="button"
                            key={service.key}
                            onClick={() =>
                              setSelectedService(isSelected ? null : service.key)
                            }
                            className={`relative rounded-xl overflow-hidden aspect-[4/3] group transition-all duration-300 ${
                              isSelected
                                ? "ring-3 ring-[#C9A84C] shadow-lg scale-[1.02]"
                                : "ring-1 ring-slate-200 hover:ring-[#C9A84C]/50"
                            }`}
                          >
                            <Image
                              src={service.image}
                              alt={tServices(service.key as Parameters<typeof tServices>[0])}
                              fill
                              className={`object-cover transition-all duration-500 ${
                                isSelected
                                  ? "scale-105"
                                  : "group-hover:scale-105"
                              }`}
                            />
                            <div
                              className={`absolute inset-0 transition-colors duration-300 ${
                                isSelected
                                  ? "bg-[#0F2347]/60"
                                  : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                              }`}
                            />
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-2 right-2 bg-[#C9A84C] rounded-full p-1"
                              >
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              </motion.div>
                            )}
                            <span className="absolute bottom-2 left-2 right-2 text-white font-bold text-xs sm:text-sm drop-shadow-lg leading-tight">
                              {tServices(service.key as Parameters<typeof tServices>[0])}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Service description */}
                  {(() => {
                    const descKeyMap: Record<string, string> = {
                      kitchen: "appartements_desc",
                      office: "bureaux_desc",
                      bathroom: "bail_desc",
                      sofa: "evenements_desc",
                      window: "vitres_desc",
                      garden: "conciergerie_desc",
                    };
                    const descKey = selectedService ? descKeyMap[selectedService] : null;
                    return (
                      <AnimatePresence>
                        {descKey && (
                          <motion.div
                            key="service-desc"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-slate-500 text-sm leading-relaxed bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                              {tServices(descKey as Parameters<typeof tServices>[0])}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    );
                  })()}

                  {/* Personal info */}
                  <motion.div variants={fadeInUp} className="space-y-3">
                    <h3 className="text-[#0F2347] font-bold text-sm uppercase tracking-wider">
                      {t("personalInfo")}
                    </h3>

                    {/* Name */}
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t("placeholderName")}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0F2347] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t("placeholderPhone")}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0F2347] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                      />
                    </div>

                    {/* Email (optional) */}
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("placeholderEmail")}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0F2347] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t("placeholderMessage")}
                        rows={2}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0F2347] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all resize-none"
                      />
                    </div>
                  </motion.div>

                  {/* Submit */}
                  <motion.div variants={fadeInUp}>
                    <button
                      type="submit"
                      className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white py-4 rounded-xl font-bold text-base uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Send className="w-5 h-5" />
                      {t("submitWhatsapp")}
                    </button>
                    <p className="text-center text-slate-400 text-xs mt-2">
                      {t("whatsappNote")}
                    </p>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, X, User, Phone, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

interface ServiceCard {
  key: string;
  descKey: string;
  expandDescKey: string;
  image: string;
  beforeImage: string;
  afterImage: string;
}

const services: ServiceCard[] = [
  { key: "kitchen",  descKey: "kitchenDesc",  expandDescKey: "appartements_desc", image: "/images/services/image7.jpg",          beforeImage: "/images/services/sucio2.png", afterImage: "/images/services/image7.jpg" },
  { key: "office",   descKey: "officeDesc",   expandDescKey: "bureaux_desc",       image: "/images/services/image.jpeg",          beforeImage: "/images/services/sucio3.jpeg", afterImage: "/images/services/image.jpeg" },
  { key: "bathroom", descKey: "bathroomDesc", expandDescKey: "bail_desc",          image: "/images/services/construction.jpeg",   beforeImage: "/images/services/construction.jpg", afterImage: "/images/services/image6.jpg" },
  { key: "sofa",     descKey: "sofaDesc",     expandDescKey: "evenements_desc",    image: "/images/services/office.jpg",          beforeImage: "/images/services/sucio5.jpeg", afterImage: "/images/services/office.jpg" },
  { key: "window",   descKey: "windowDesc",   expandDescKey: "vitres_desc",        image: "/images/services/windows.jpg",         beforeImage: "/images/services/sucio1.jpeg", afterImage: "/images/services/windows.jpg" },
  { key: "garden",   descKey: "gardenDesc",   expandDescKey: "conciergerie_desc",  image: "/images/services/concierge.jpg",       beforeImage: "/images/services/sucio4.jpeg", afterImage: "/images/services/concierge.jpg" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WHATSAPP_NUMBER = "41778102004";

interface ServiceModalProps {
  serviceKey: string;
  t: ReturnType<typeof useTranslations>;
  tForm: ReturnType<typeof useTranslations>;
  onClose: () => void;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, damping: 25, stiffness: 300 } },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
};

const staggerContainer = { visible: { transition: { staggerChildren: 0.04 } } };
const fadeInUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

function ServiceModal({ serviceKey, t, tForm, onClose }: ServiceModalProps) {
  const service = services.find((s) => s.key === serviceKey)!;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const lines = [
      t("whatsapp_template").replace("{serviceName}", t(service.key)),
      ``,
      `*${tForm("labelName")}:* ${name}`,
      `*${tForm("labelPhone")}:* ${phone}`,
      email ? `*${tForm("labelEmail")}:* ${email}` : "",
      message ? `*${tForm("labelMessage")}:* ${message}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-[#0F2347]/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh] z-10"
      >
        {/* Title bar — navy, at the top */}
        <div className="bg-[#0F2347] px-6 py-5 rounded-t-2xl flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-white font-heading text-xl font-extrabold">{t(service.key)}</h2>
            <p className="text-slate-300 text-sm mt-0.5">{tForm("subtitle")}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable body — image lives here */}
        <div className="overflow-y-auto overscroll-contain flex-1 rounded-b-2xl [scrollbar-width:thin] [scrollbar-color:#C9A84C33_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#C9A84C]/25 [&::-webkit-scrollbar-thumb]:rounded-full">
          {/* Before/After slider */}
          <BeforeAfterSlider
            beforeImage={service.beforeImage}
            afterImage={service.afterImage}
            beforeLabel={tForm("before")}
            afterLabel={tForm("after")}
            alt={t(service.key)}
          />
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 text-center"
              >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}>
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-[#0F2347] font-heading text-2xl font-bold mb-2">{tForm("successTitle")}</h3>
                <p className="text-slate-500 mb-6">{tForm("successMessage")}</p>
                <button
                  onClick={onClose}
                  className="bg-[#0F2347] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1B396A] transition-colors"
                >
                  {tForm("successClose")}
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
                {/* Service description */}
                <motion.div variants={fadeInUp}>
                  <p className="text-slate-500 text-sm leading-relaxed bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                    {t(service.expandDescKey)}
                  </p>
                </motion.div>

                {/* Personal info */}
                <motion.div variants={fadeInUp} className="space-y-3">
                  <h3 className="text-[#0F2347] font-bold text-sm uppercase tracking-wider">
                    {tForm("personalInfo")}
                  </h3>

                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={tForm("placeholderName")}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0F2347] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={tForm("placeholderPhone")}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0F2347] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={tForm("placeholderEmail")}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0F2347] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={tForm("placeholderMessage")}
                      rows={3}
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
                    {tForm("submitWhatsapp")}
                  </button>
                  <p className="text-center text-slate-400 text-xs mt-2">{tForm("whatsappNote")}</p>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const t = useTranslations("Services");
  const tForm = useTranslations("BookingForm");
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <>
      <section id="services" className="bg-white py-24">
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
              {t("homeSubtitle")}
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
                className="relative rounded-xl overflow-hidden group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={t(service.key)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* Title + read-more button overlaid at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-end justify-between gap-3">
                  <h3 className="font-heading font-extrabold text-white text-lg drop-shadow-sm leading-tight">
                    {t(service.key)}
                  </h3>
                  <button
                    onClick={() => setActiveService(service.key)}
                    className="flex-shrink-0 inline-flex items-center gap-1 text-[10px] font-bold text-[#C9A84C] bg-black/40 hover:bg-[#C9A84C]/20 rounded-full px-2.5 py-1 backdrop-blur-sm transition-colors duration-200 whitespace-nowrap"
                  >
                    {t("readmore")}
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service modal */}
      <AnimatePresence>
        {activeService && (
          <ServiceModal
            key={activeService}
            serviceKey={activeService}
            t={t}
            tForm={tForm}
            onClose={() => setActiveService(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

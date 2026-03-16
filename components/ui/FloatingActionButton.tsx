"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Bot } from "lucide-react";

interface FloatingActionButtonProps {
  whatsappNumber: string;
  whatsappMessage?: string;
  onChatbotOpen?: () => void;
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function FloatingActionButton({
  whatsappNumber,
  whatsappMessage = "Hello! I'd like to book a cleaning service.",
  onChatbotOpen,
}: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleToggle = () => {
    if (showNotification) setShowNotification(false);
    setIsOpen((prev) => !prev);
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const subButtons = [
    {
      key: "chatbot",
      label: "AI Assistant",
      bg: "bg-[#1B396A]",
      icon: <Bot className="w-6 h-6 text-white" />,
      onClick: () => {
        setIsOpen(false);
        onChatbotOpen?.();
      },
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      bg: "bg-[#25D366]",
      icon: <span className="text-white"><WhatsAppIcon /></span>,
      onClick: () => {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Sub-buttons */}
        <AnimatePresence>
          {isOpen &&
            subButtons.map((btn, i) => (
              <motion.div
                key={btn.key}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{
                  duration: 0.25,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
              >
                {/* Label pill */}
                <motion.span
                  className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-[#1B396A] shadow-lg whitespace-nowrap"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2, delay: i * 0.08 + 0.05 }}
                >
                  {btn.label}
                </motion.span>

                {/* Sub-button */}
                <button
                  onClick={btn.onClick}
                  className={`${btn.bg} w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer`}
                  aria-label={btn.label}
                >
                  {btn.icon}
                </button>
              </motion.div>
            ))}
        </AnimatePresence>

        {/* Main FAB */}
        <button
          onClick={handleToggle}
          className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-colors duration-300 cursor-pointer ${
            isOpen ? "bg-[#0F2347]" : "bg-[#C9A84C]"
          }`}
          aria-label={isOpen ? "Close menu" : "Open contact menu"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-7 h-7 text-white" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-7 h-7 text-white" />
              </motion.span>
            )}
          </AnimatePresence>

          {/* Notification dot — gold instead of red */}
          {showNotification && !isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9A84C]/80 border-2 border-white rounded-full animate-pulse" />
          )}
        </button>
      </div>
    </>
  );
}

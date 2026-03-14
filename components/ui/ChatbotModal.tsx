"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send } from "lucide-react";

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
}

const QUICK_REPLIES = [
  { emoji: "\uD83D\uDCCB", label: "Book a clean" },
  { emoji: "\uD83D\uDCB0", label: "Pricing" },
  { emoji: "\uD83D\uDCDE", label: "Call us" },
];

const BOT_RESPONSES: Record<string, string> = {
  "Book a clean":
    "Great choice! You can book a cleaning session through our website or call us at +1 (555) 123-4567. Would you like me to help with anything else?",
  Pricing:
    "Our pricing starts at $25/hour for standard cleaning. Deep cleaning starts at $35/hour. We also offer weekly and monthly packages with discounts up to 20%!",
  "Call us":
    "You can reach us at +1 (555) 123-4567, Monday to Saturday from 8 AM to 8 PM. Would you like to know anything else?",
};

const DEFAULT_RESPONSE =
  "Thanks for your message! One of our team members will get back to you shortly. In the meantime, feel free to use the quick options below.";

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  text: "Hi there! \uD83D\uDC4B I'm WEN'S virtual assistant. How can I help you today?",
};

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-3">
      <div className="w-7 h-7 rounded-full bg-[#2E9CCA] flex items-center justify-center flex-shrink-0">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="bg-[#F4FAFD] rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block w-2 h-2 rounded-full bg-[#1B3A6B]/40"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ChatbotModal({ isOpen, onClose }: ChatbotModalProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const addBotResponse = (responseText: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          text: responseText,
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      text,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    addBotResponse(DEFAULT_RESPONSE);
  };

  const handleQuickReply = (label: string) => {
    if (isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      text: label,
    };
    setMessages((prev) => [...prev, userMsg]);

    addBotResponse(BOT_RESPONSES[label] ?? DEFAULT_RESPONSE);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[480px] flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="bg-[#2E9CCA] px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm leading-tight">
                    WEN&apos;S Assistant
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-white/80 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-white/60 text-[10px] mt-1 ml-12">
              Powered by AI
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-white px-4 py-3 space-y-3 min-h-[240px] max-h-[320px]">
            {messages.map((msg) =>
              msg.role === "assistant" ? (
                <div key={msg.id} className="flex items-end gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#2E9CCA] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-[#F4FAFD] text-[#1B3A6B] rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm max-w-[75%]">
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div key={msg.id} className="flex justify-end">
                  <div className="bg-[#2DC4A4] text-white rounded-2xl rounded-br-sm px-4 py-2.5 text-sm max-w-[75%]">
                    {msg.text}
                  </div>
                </div>
              )
            )}

            {isTyping && <TypingIndicator />}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="bg-white px-4 py-2 flex gap-2 border-t border-gray-100">
            {QUICK_REPLIES.map((qr) => (
              <button
                key={qr.label}
                onClick={() => handleQuickReply(qr.label)}
                disabled={isTyping}
                className="text-xs bg-[#F4FAFD] text-[#1B3A6B] rounded-full px-3 py-1.5 hover:bg-[#2E9CCA]/10 transition-colors whitespace-nowrap disabled:opacity-50 cursor-pointer"
              >
                {qr.emoji} {qr.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="bg-white px-3 py-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 bg-[#F4FAFD] rounded-full px-4 py-2.5 text-sm text-[#1B3A6B] placeholder:text-[#1B3A6B]/40 outline-none focus:ring-2 focus:ring-[#2E9CCA]/30"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-full bg-[#2DC4A4] flex items-center justify-center text-white hover:bg-[#2DC4A4]/90 transition-colors disabled:opacity-50 cursor-pointer flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

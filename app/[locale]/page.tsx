"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import PricingSection from "@/components/sections/PricingSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import FloatingActionButton from "@/components/ui/FloatingActionButton";
import ChatbotModal from "@/components/ui/ChatbotModal";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustedBySection />
        <PricingSection />
        <WhyChooseSection />
        <FeaturesSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />

      <FloatingActionButton
        whatsappNumber="1234567890"
        whatsappMessage="Hello! I'd like to book a cleaning service with WEN'S."
        onChatbotOpen={() => setChatOpen(true)}
      />
      <ChatbotModal isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}

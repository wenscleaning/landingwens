"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
// import PricingSection from "@/components/sections/PricingSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import FounderSection from "@/components/sections/FounderSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import WhyWensSection from "@/components/sections/WhyWensSection";
import WorkWithUsSection from "@/components/sections/WorkWithUsSection";
import FloatingActionButton from "@/components/ui/FloatingActionButton";
import ChatbotModal from "@/components/ui/ChatbotModal";
import { BookingProvider } from "@/components/ui/BookingContext";
import BookingModal from "@/components/ui/BookingModal";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <BookingProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustedBySection />
        {/* <PricingSection /> */}
        <WhyChooseSection />
        <FounderSection />
        <WhyWensSection />
        <FAQSection />
        <CTASection />
        <WorkWithUsSection />
      </main>
      <Footer />

      <FloatingActionButton
        whatsappNumber="1234567890"
        whatsappMessage="Hello! I'd like to book a cleaning service with WEN'S."
        onChatbotOpen={() => setChatOpen(true)}
      />
      <ChatbotModal isOpen={chatOpen} onClose={() => setChatOpen(false)} />
      <BookingModal />
    </BookingProvider>
  );
}

import React from "react";
import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import Services from "../components/landing/Services";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import Vision from "../components/landing/Vision";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-dvh bg-[#E7DDF2] text-[#220326]">
      <Hero />
      <HowItWorks />
      <Services />
      <WhyChooseUs />
      <Vision />
      <Footer />
    </div>
  );
}


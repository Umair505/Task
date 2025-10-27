import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MarqueeSection from "@/components/MarqueeSection";
import Navbar from "@/components/Navbar";
import PaymentCTA from "@/components/PaymentCTA";
import PricingSection from "@/components/PricingSection";
import SecuritySection from "@/components/SecuritySection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="font-inter">
      <div className="rounded-[24px] w-[96%] h-auto mx-auto my-5 bg-gradient-to-r from-[#DCEBFF] via-[#FFF5D6] to-[#EEDBFF] px-[11px] overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <FeaturesSection/>
      <MarqueeSection/>
      <HowItWorks/>
      <SecuritySection/>
      <PricingSection/>
      <TestimonialSection/>
      <PaymentCTA />
      <Footer />
    </div>
  );
}

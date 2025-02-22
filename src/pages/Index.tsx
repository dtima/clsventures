
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Impact from "@/components/Impact";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import InAction from "@/components/InAction";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import FlashInfo from "@/components/FlashInfo";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Sustainable Solutions for a Better Future"
        description="CLS Ventures transforms waste materials into valuable products, leading the revolution towards a zero-waste society through innovative recycling solutions in Africa and Europe."
      />
      <FlashInfo />
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <InAction />
      <Impact />
      <CTA />
      <Clients />
      <Footer />
    </div>
  );
};

export default Index;

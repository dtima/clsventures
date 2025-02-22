
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Impact from "@/components/Impact";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Impact />
      <CTA />
    </div>
  );
};

export default Index;

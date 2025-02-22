
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Impact from "@/components/Impact";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import InAction from "@/components/InAction";
import Clients from "@/components/Clients";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <InAction />
      <Impact />
      <CTA />
      <Clients />
    </div>
  );
};

export default Index;

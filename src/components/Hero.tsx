
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(22,101,52,0.15),rgba(255,255,255,0))]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-8 animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
          <span className="text-sm font-medium">Innovation in Sustainability</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-secondary-dark mb-6 tracking-tight animate-fadeIn opacity-0" style={{ animationDelay: "0.4s" }}>
          Valorising Waste for a
          <span className="block text-primary">Sustainable Future</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8 animate-fadeIn opacity-0" style={{ animationDelay: "0.6s" }}>
          We transform waste materials into valuable products, leading the revolution towards a zero-waste society through innovative recycling solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn opacity-0" style={{ animationDelay: "0.8s" }}>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors duration-200 group"
          >
            Explore Products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          
          <Link
            to="/showroom"
            className="inline-flex items-center px-6 py-3 rounded-full border border-gray-300 text-secondary-dark font-medium hover:bg-gray-50 transition-colors duration-200"
          >
            Visit Showroom
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

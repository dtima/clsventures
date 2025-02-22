
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-6">
            Join the Waste Revolution
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you're a business looking to partner, or an individual wanting to make
            a difference, there's a place for you in our mission for a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-involved"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors duration-200 group"
            >
              Get Involved
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full border border-gray-300 text-secondary-dark font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

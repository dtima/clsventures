
import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Partners = () => {
  const partners = [
    {
      name: "EcoTech Solutions",
      category: "Technology",
      description: "Leading provider of recycling technology and automation solutions.",
      logo: "/lovable-uploads/121ac237-a7e8-4f01-84f0-d398f6ec17a6.png"
    },
    {
      name: "Green Materials Co.",
      category: "Supplier",
      description: "Sustainable materials supplier specializing in recycled composites.",
      logo: "/lovable-uploads/799ff2a5-11fa-475f-9dfb-0d23a4f7034a.png"
    },
    {
      name: "Sustainable Designs",
      category: "Design",
      description: "Award-winning sustainable furniture design studio.",
      logo: "/lovable-uploads/84f34935-927e-4f30-b64d-c5b7a42673f5.png"
    }
  ];

  return (
    <>
      <SEO 
        title="Our Partners" 
        description="Meet the innovative companies and organizations working with CLS Ventures to create a more sustainable future."
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Handshake className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-8">Our Partners</h1>
            <p className="text-lg text-center text-gray-600 mb-12">
              We collaborate with industry leaders and innovative companies to create sustainable solutions and drive positive change.
            </p>

            {/* Partners Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partners.map((partner) => (
                <div key={partner.name} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-32 h-32 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <span className="text-sm text-primary mb-3">{partner.category}</span>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <Button variant="outline" className="mt-auto">Learn More</Button>
                </div>
              ))}
            </div>

            {/* Partnership CTA */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
              <p className="text-gray-600 mb-6">
                Join us in our mission to create a more sustainable future. We're always looking for innovative partners who share our values.
              </p>
              <Button size="lg">Contact Us About Partnership</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Partners;

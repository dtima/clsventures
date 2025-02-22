
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, MapPin, Info } from "lucide-react";

const Showroom = () => {
  const locations = [
    {
      city: "Yaoundé",
      address: "Mimboman château, Yaoundé, Cameroon",
      hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-2PM",
      image: "/lovable-uploads/36e1a494-dd8a-4d84-b16b-851ed339123f.png",
    },
    {
      city: "Aalen",
      address: "Primelweg 1, 73433 Aalen, Deutschland",
      hours: "Mon-Fri: 10AM-7PM, Sat: 10AM-4PM",
      image: "/lovable-uploads/3a71af9e-5ec7-415b-8bf7-b5f73ba1b645.png",
    },
  ];

  const featuredProducts = [
    {
      name: "Eco-Chic Tire Chairs",
      description: "Stylish chairs crafted from recycled tires with colorful rope designs.",
      image: "/lovable-uploads/86010ae7-7b47-453c-b8c0-24898b77884f.png",
    },
    {
      name: "Woven Tire Ottoman",
      description: "Contemporary ottomans made from recycled materials with elegant woven patterns.",
      image: "/lovable-uploads/8b3b574f-8701-4131-ad5c-e09e8cf30c5d.png",
    },
    {
      name: "Artisan Tire Seating",
      description: "Unique seating solutions combining recycled tires with traditional craftsmanship.",
      image: "/lovable-uploads/24dec0ed-f9fc-458d-8372-13b2586391ca.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">
              Visit Our Showroom
            </h1>
            <p className="text-xl text-gray-600">
              Experience our innovative furniture collection in person and discover how we transform waste 
              materials into beautiful, functional pieces for your space.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary-dark text-center mb-16">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div key={location.city} className="group">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                  <img
                    src={location.image}
                    alt={`${location.city} Showroom`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-secondary-dark mb-4">
                  {location.city}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    {location.address}
                  </p>
                  <p className="flex items-center">
                    <CalendarDays className="h-5 w-5 mr-2 text-primary" />
                    {location.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary-dark text-center mb-16">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-xl overflow-hidden shadow-sm group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button
                    variant="outline"
                    className="w-full group"
                    onClick={() => window.location.href = '/products'}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Visit Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary-dark mb-6">
              Book a Visit
            </h2>
            <p className="text-gray-600 mb-8">
              Schedule a guided tour of our showroom and learn more about our sustainable furniture collection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto group"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Tour
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto group"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
                <Info className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Showroom;

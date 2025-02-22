
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Impact = () => {
  const stats = [
    { value: "200+", label: "Tires Recycled" },
    { value: "10kg", label: "Textiles Repurposed" },
    { value: "50+", label: "Products Created" },
    { value: "100%", label: "Sustainable Materials" },
  ];

  const impactAreas = [
    {
      title: "Environmental",
      description: "Reducing waste in landfills and minimizing carbon footprint.",
      metrics: [
        "50% reduction in local tire waste",
        "30% decrease in textile waste",
        "100% sustainable material usage",
      ],
    },
    {
      title: "Social",
      description: "Creating jobs and empowering local communities.",
      metrics: [
        "20 local jobs created",
        "5 community partnerships",
        "3 educational programs launched",
      ],
    },
    {
      title: "Economic",
      description: "Generating sustainable economic opportunities.",
      metrics: [
        "Support for local businesses",
        "Cost-effective waste solutions",
        "Circular economy promotion",
      ],
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
              Our Impact
            </h1>
            <p className="text-xl text-gray-600">
              Measuring our contribution to environmental sustainability and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary-dark text-center mb-16">
            Areas of Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area) => (
              <div key={area.title} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-secondary-dark mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <ul className="space-y-3">
                  {area.metrics.map((metric) => (
                    <li key={metric} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-600">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary-dark mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-gray-600 mb-8">
              Together, we can create lasting positive change for our environment and communities.
            </p>
            <Button
              size="lg"
              className="group"
              onClick={() => window.location.href = '/get-involved'}
            >
              Get Involved
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;

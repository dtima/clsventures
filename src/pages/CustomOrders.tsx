
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import SEO from "@/components/SEO";

const CustomOrders = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDescription: "",
    budget: "",
    timeline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", projectDescription: "", budget: "", timeline: "" });
  };

  return (
    <>
      <SEO
        title="Custom Orders"
        description="Request custom sustainable furniture tailored to your specific needs. We transform waste materials into unique, personalized pieces."
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Custom Orders</h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Tell us about your dream furniture, and we'll create a sustainable masterpiece just for you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Description</label>
                <Textarea
                  required
                  rows={6}
                  placeholder="Tell us about your project, including dimensions, materials preferences, and any specific requirements..."
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <Input
                  placeholder="e.g., $1,000 - $5,000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Desired Timeline</label>
                <Input
                  placeholder="e.g., Within 3 months"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full">Submit Custom Order Request</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CustomOrders;

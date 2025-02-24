
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Sustainable Materials Specialist",
      department: "Research & Development",
      location: "Yaoundé, Cameroon",
      type: "Full-time",
      description: "Looking for an expert in sustainable materials to lead our research initiatives in waste transformation.",
    },
    {
      title: "Production Manager",
      department: "Manufacturing",
      location: "Aalen, Germany",
      type: "Full-time",
      description: "Seeking an experienced production manager to oversee our sustainable furniture manufacturing processes.",
    },
    {
      title: "Environmental Impact Analyst",
      department: "Sustainability",
      location: "Remote",
      type: "Full-time",
      description: "Join our team to analyze and optimize the environmental impact of our products and processes.",
    },
  ];

  return (
    <>
      <SEO
        title="Careers"
        description="Join CLS Ventures and be part of our mission to create sustainable furniture solutions. Explore career opportunities in our innovative company."
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Briefcase className="w-12 h-12 text-primary mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-6">Join Our Mission</h1>
              <p className="text-xl text-gray-600">
                Be part of a team transforming waste into beautiful, sustainable furniture.
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              {jobOpenings.map((job) => (
                <div key={job.title} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                      <div className="space-x-4">
                        <span className="text-gray-600">{job.department}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{job.location}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{job.type}</span>
                      </div>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                  <p className="text-gray-600">{job.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Don't see the right role?</h2>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals who are passionate about sustainability.
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button variant="outline" size="lg">
                Submit Open Application
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Careers;

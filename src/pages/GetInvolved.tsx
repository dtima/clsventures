
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Mail, HandHeart, Users, GraduationCap } from "lucide-react";
import VolunteerForm from "@/components/VolunteerForm";
import DonationForm from "@/components/DonationForm";
import EducationalProgramForm from "@/components/EducationalProgramForm";

const GetInvolved = () => {
  const programs = [
    {
      title: "Sustainable Design",
      description: "Learn the principles of sustainable design and upcycling.",
      duration: "3 months",
      schedule: "Weekends",
    },
    {
      title: "Waste Management",
      description: "Master modern waste management techniques and recycling.",
      duration: "3 months",
      schedule: "Weekday evenings",
    },
    {
      title: "Eco-Entrepreneurship",
      description: "Build a sustainable business from recycled materials.",
      duration: "3 months",
      schedule: "Flexible",
    },
    {
      title: "Community Leadership",
      description: "Lead environmental initiatives in your community.",
      duration: "3 months",
      schedule: "Hybrid",
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
              Get Involved
            </h1>
            <p className="text-xl text-gray-600">
              Join us in our mission to create a more sustainable future. There are many 
              ways you can contribute and make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Volunteer",
                description: "Join our volunteer program and help with various projects.",
                icon: Users,
                action: "Apply Now",
                form: VolunteerForm,
              },
              {
                title: "Donate",
                description: "Support our mission through financial contributions.",
                icon: HandHeart,
                action: "Donate",
                form: DonationForm,
              },
              {
                title: "Partner With Us",
                description: "Explore business partnership opportunities.",
                icon: Mail,
                action: "Contact Us",
                link: "/contact",
              },
              {
                title: "Educational Programs",
                description: "Learn about our workshops and training sessions.",
                icon: GraduationCap,
                action: "Learn More",
                form: EducationalProgramForm,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-xl shadow-sm">
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-secondary-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                {item.form ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="group">
                        {item.action}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{item.title}</DialogTitle>
                        <DialogDescription>
                          Fill out the form below to get started
                        </DialogDescription>
                      </DialogHeader>
                      <item.form />
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button
                    className="group"
                    onClick={() => window.location.href = item.link}
                  >
                    {item.action}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Programs Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-dark mb-6">
              Educational Programs
            </h2>
            <p className="text-xl text-gray-600">
              Join our quarterly cohorts and learn sustainable practices from industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-secondary-dark mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>{program.duration}</span>
                  <span>•</span>
                  <span>{program.schedule}</span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full group">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{program.title}</DialogTitle>
                      <DialogDescription>
                        Apply for our educational program
                      </DialogDescription>
                    </DialogHeader>
                    <EducationalProgramForm />
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Community Impact"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary-dark mb-6">
                Make an Impact
              </h2>
              <p className="text-gray-600 mb-6">
                Your involvement directly contributes to our mission of creating a more 
                sustainable future. Together, we can make a significant impact on waste 
                reduction and environmental preservation.
              </p>
              <Button
                size="lg"
                className="group"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;

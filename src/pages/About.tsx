
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Github, Linkedin, Twitter } from "lucide-react";
import SEO from "@/components/SEO";

const About = () => {
  const team = [
    {
      name: "Patu Ndango Fen",
      title: "Founder/CEO",
      image: "/lovable-uploads/4fc69110-a3bc-4785-8807-1c2d802a4068.png",
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
      ],
    },
    {
      name: "Edoa Nkodo Raphaël",
      title: "Chief Operation Officer",
      image: "/lovable-uploads/2121428f-f16c-47f3-888c-7a28bbae186d.png",
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
      ],
    },
    {
      name: "Andziah Martina Ayeah",
      title: "Communication Manager",
      image: "/lovable-uploads/c2f5f795-d306-441a-9d31-eb20753cfadb.png",
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
      ],
    },
    {
      name: "Maryam N. Bih",
      title: "Production Manager",
      image: "/lovable-uploads/e5806995-46bd-41ff-81cb-3570287aa51a.png",
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
      ],
    },
    {
      name: "Maimuna Mambo N.",
      title: "Production Executive",
      image: "/lovable-uploads/f88e5f08-8e33-4ba9-ba7c-8cedb6148a21.png",
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
      ],
    },
    {
      name: "Ismaila N. Ngu",
      title: "Field Operation Coordinator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
      ],
    },
    {
      name: "Mairo Mama Epse Akenji",
      title: "Facilities Manager",
      image: "/lovable-uploads/bd2ad458-2b44-448c-bec1-d70e309f09d1.png",
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="About CLS Ventures"
        description="Learn about our mission, values, and the team behind CLS Ventures' sustainable innovation in waste management and furniture creation."
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">
              About CLS Ventures
            </h1>
            <p className="text-xl text-gray-600">
              Transforming waste into opportunity, creating a sustainable future for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-dark mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At CLS Ventures, we're committed to revolutionizing waste management through 
                innovative solutions that benefit both the environment and communities. Our 
                mission is to transform discarded materials into valuable products while 
                promoting sustainable practices.
              </p>
              <p className="text-gray-600">
                We believe in the power of circular economy principles to create positive 
                change and build a more sustainable future for everyone.
              </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src="/lovable-uploads/799ff2a5-11fa-475f-9dfb-0d23a4f7034a.png"
                alt="Our Mission in Action"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary-dark text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Constantly seeking new ways to transform waste into valuable resources.",
              },
              {
                title: "Sustainability",
                description: "Making decisions that benefit both the environment and future generations.",
              },
              {
                title: "Community",
                description: "Building strong partnerships and empowering local communities.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-xl shadow-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-secondary-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to transforming waste management and 
              creating sustainable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-xl p-6 text-center"
              >
                <div className="relative mb-6 aspect-square overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.title}</p>
                <div className="flex items-center justify-center space-x-3">
                  {member.social.map((platform) => (
                    <a
                      key={platform.label}
                      href={platform.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s ${platform.label}`}
                    >
                      <platform.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
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
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Our Mission"
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

      <Footer />
    </div>
  );
};

export default About;


import { Leaf, Package, HeartHandshake, Recycle } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Sustainable Innovation",
      description: "Transforming waste materials into valuable products through cutting-edge recycling technology.",
      icon: Recycle,
    },
    {
      title: "Eco-Friendly Products",
      description: "Premium quality products that contribute to environmental preservation.",
      icon: Package,
    },
    {
      title: "Environmental Impact",
      description: "Reducing landfill waste while creating beautiful, functional items.",
      icon: Leaf,
    },
    {
      title: "Community Engagement",
      description: "Building partnerships for a cleaner, more sustainable future.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Leading the Waste Revolution
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're pioneering innovative solutions to transform waste into valuable resources,
            creating a sustainable future for generations to come.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

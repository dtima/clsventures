
import { ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Collection",
      description: "We gather waste materials from various sources through our network of partners.",
    },
    {
      number: "02",
      title: "Sorting",
      description: "Materials are carefully sorted and categorized for optimal processing.",
    },
    {
      number: "03",
      title: "Processing",
      description: "Using innovative techniques, we transform waste into usable materials.",
    },
    {
      number: "04",
      title: "Creation",
      description: "The processed materials become beautiful, functional products.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Our Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From waste collection to final product creation, every step in our process is designed
            for maximum environmental impact and product quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white p-6 rounded-xl relative z-10">
                <span className="text-4xl font-bold text-primary/10">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-secondary-dark mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/20 h-8 w-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

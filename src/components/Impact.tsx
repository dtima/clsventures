
const Impact = () => {
  const stats = [
    {
      value: "200+",
      label: "Tires Recycled",
    },
    {
      value: "10kg",
      label: "Textiles Repurposed",
    },
    {
      value: "50+",
      label: "Products Created",
    },
    {
      value: "100%",
      label: "Sustainable Materials",
    },
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Environmental Impact
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Every product we create contributes to reducing waste and building a more
            sustainable future. Here's our impact so far:
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;

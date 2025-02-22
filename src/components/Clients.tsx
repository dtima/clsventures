
const Clients = () => {
  const partners = [
    {
      id: 1,
      name: "The Tony Elumelu Foundation",
      logo: "/lovable-uploads/4ba66a12-9e93-4929-9153-dbab67edf8e6.png"
    },
    {
      id: 2,
      name: "British High Commission Yaoundé",
      logo: "/lovable-uploads/1851ec3f-2534-443f-83d2-3b32b0c1bd8a.png"
    },
    {
      id: 3,
      name: "UNDP",
      logo: "/lovable-uploads/eff0cc20-bfb2-46b1-a52c-21d2d3b88f1a.png"
    },
    {
      id: 4,
      name: "One Young World",
      logo: "/lovable-uploads/2a4c9333-4840-4fee-a92a-b907fd877c05.png"
    },
    {
      id: 5,
      name: "Tech Women",
      logo: "/lovable-uploads/6e761360-5114-4f4b-ac8f-8df2372038a7.png"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Our Partners and Supporters
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proud to collaborate with leading organizations committed to sustainable development and social impact
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="aspect-square bg-white rounded-lg flex items-center justify-center p-4 hover:bg-gray-50 transition-colors duration-200 border border-gray-100"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

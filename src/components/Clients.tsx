
const Clients = () => {
  // Note: Since we don't have actual client logos yet, 
  // we'll create placeholder blocks that can be replaced with real logos later
  const clientPlaceholders = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Client ${i + 1}`,
  }));

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Our Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proud to work with organizations committed to sustainable practices
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {clientPlaceholders.map((client) => (
            <div
              key={client.id}
              className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center p-4 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-200 rounded">
                <span className="text-gray-400 text-sm">Logo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

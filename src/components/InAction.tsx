
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const InAction = () => {
  const photos = [
    {
      src: "/lovable-uploads/d68e613d-badf-4542-9207-bc988769f3d4.png",
      title: "Abu Dhabi Global Healthcare Week",
      description: "Representing Africa's innovations in sustainable healthcare solutions",
    },
    {
      src: "/lovable-uploads/f265f1a2-2aca-44eb-a16e-60f8afaa482a.png",
      title: "Young African Entrepreneurs Forum",
      description: "Empowering the next generation of sustainable business leaders",
    },
    {
      src: "/lovable-uploads/da426eb6-917e-410c-818f-768c2bd4764f.png",
      title: "Tokyo International Conference",
      description: "Showcasing African development initiatives at TICAD",
    },
    {
      src: "/lovable-uploads/d8e35f09-5f16-412b-93de-431f0c828534.png",
      title: "Africa Youth Conference",
      description: "Leading discussions on sustainable development at the UN",
    },
    {
      src: "/lovable-uploads/6599bfcd-7abb-44df-9efb-80d0dfbf5a68.png",
      title: "Women Empowerment Initiative",
      description: "Training and empowering women in bio-waste transformation",
    },
    {
      src: "/lovable-uploads/700be661-6a26-4658-a58e-a6859361d9c6.png",
      title: "TICAD Panel Discussion",
      description: "Participating in key policy discussions on African development",
    },
    {
      src: "/lovable-uploads/35fd8d64-18ab-46a7-8748-cf59764f8175.png",
      title: "Waste Management Innovation",
      description: "Showcasing our recycling and transformation processes",
    },
    {
      src: "/lovable-uploads/8e215b53-abf4-43c7-b1e0-11d12b716bed.png",
      title: "Circular Economy Summit",
      description: "Building partnerships for sustainable waste management",
    },
    {
      src: "/lovable-uploads/f786af66-13c4-4ab1-84af-119d0ecbbf0a.png",
      title: "Community Engagement",
      description: "Working with local leaders and stakeholders",
    },
    {
      src: "/lovable-uploads/11063dd6-c2b0-4871-aa09-9d52b025df0a.png",
      title: "Product Demonstration",
      description: "Presenting our innovative solutions to industry leaders",
    },
    {
      src: "/lovable-uploads/537fdd97-96f4-4feb-be73-acd5e0473bd2.png",
      title: "Product Showcase Event",
      description: "Demonstrating our eco-friendly furniture and sustainable solutions",
    },
    {
      src: "/lovable-uploads/05501476-c009-46ad-ab5b-8141e2adfb92.png",
      title: "Innovation Workshop",
      description: "Exploring new designs in sustainable furniture production",
    },
    {
      src: "/lovable-uploads/c7f4f1b1-7591-4fa3-8df0-b3734fe11a1f.png",
      title: "International Partnership Meeting",
      description: "Discussing global collaboration opportunities in sustainable development",
    },
    {
      src: "/lovable-uploads/5559fa50-93f9-4d0f-94fb-9e73e8cdb377.png",
      title: "Field Demonstration",
      description: "Showcasing our products to international stakeholders",
    },
    {
      src: "/lovable-uploads/2e395be8-f298-4675-a8c8-b53307b609f0.png",
      title: "Product Development Session",
      description: "Refining our sustainable furniture design process",
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            In Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Witness our impact through global conferences, community initiatives, and sustainable development programs across Africa and beyond.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel opts={{ loop: true }} className="relative">
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                      <p className="text-white/80">{photo.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2" />
            <CarouselNext className="absolute right-4 top-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InAction;

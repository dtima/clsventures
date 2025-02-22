
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
      src: "/photo-1605810230434-7631ac76ec81",
      title: "Community Workshop",
      description: "Engaging with local partners in sustainable practices",
    },
    {
      src: "/photo-1519389950473-47ba0277781c",
      title: "Team Collaboration",
      description: "Our team working on innovative solutions",
    },
    {
      src: "/photo-1487058792275-0ad4aaf24ca7",
      title: "Technology Integration",
      description: "Using advanced tech for waste transformation",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            In Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we're making a difference through our activities and events
            across communities.
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

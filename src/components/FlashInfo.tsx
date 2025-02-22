
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const FlashInfo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const newsItems = [
    "New showroom opening in Aalen, Germany!",
    "Join our next sustainable furniture workshop",
    "Latest impact report: 1000+ tires recycled this month"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white py-2 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center text-sm">
          <p className="animate-fadeIn">
            {newsItems[currentNewsIndex]}
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 hover:opacity-75 transition-opacity"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashInfo;

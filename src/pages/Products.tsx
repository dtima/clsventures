
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ShoppingCart,
  Heart,
  Share2,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { toast } from "sonner";
import SEO from "@/components/SEO";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

const Products = () => {
  const [cart, setCart] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const products: Product[] = [
    {
      id: "1",
      name: "Eco-Friendly Tire Ottoman",
      description: "Handcrafted ottoman made from recycled tires, featuring a unique woven design and sturdy metal feet. Perfect for sustainable living spaces.",
      price: 299.99,
      image: "/lovable-uploads/db8237a7-cb6e-4423-97c3-5f5d48c37ea4.png",
      category: "Furniture",
      inStock: true,
    },
    {
      id: "2",
      name: "Recycled Textile Pouf",
      description: "Comfortable pouf created from upcycled textiles, perfect for additional seating or as a footrest.",
      price: 199.99,
      image: "/lovable-uploads/36e1a494-dd8a-4d84-b16b-851ed339123f.png",
      category: "Furniture",
      inStock: true,
    },
    {
      id: "3",
      name: "Rose Pink Velvet Chair",
      description: "Elegant velvet chair with floral cushion detail and gold trim, featuring a comfortable curved design and brass-finish metal legs.",
      price: 449.99,
      image: "/lovable-uploads/21c672fe-7734-4147-b637-0b31a36503d6.png",
      category: "Furniture",
      inStock: true,
    },
    {
      id: "4",
      name: "Floral Pattern Chair - Purple",
      description: "Luxurious accent chair with delicate purple floral pattern and gold rope trim, perfect for adding elegance to any room.",
      price: 429.99,
      image: "/lovable-uploads/8dea0358-4442-4e75-970a-7dce9f0cdf81.png",
      category: "Furniture",
      inStock: true,
    },
    {
      id: "5",
      name: "Royal Blue Velvet Ottoman",
      description: "Plush velvet ottoman in royal blue with decorative rope trim, ideal for both seating and accent pieces.",
      price: 279.99,
      image: "/lovable-uploads/434c9910-b7aa-4007-932c-082a636ea51e.png",
      category: "Furniture",
      inStock: true,
    },
    {
      id: "6",
      name: "Eco-Friendly Woven Ottoman - Green",
      description: "Sustainable ottoman featuring a unique green and white woven pattern with gold-finished metal legs.",
      price: 249.99,
      image: "/lovable-uploads/66c1ce1f-c068-42f7-81a7-ed451c605df1.png",
      category: "Furniture",
      inStock: true,
    },
    {
      id: "7",
      name: "Woven Ottoman - Purple",
      description: "Artisanal ottoman with purple and white woven design, complete with metallic accents and sturdy construction.",
      price: 249.99,
      image: "/lovable-uploads/d4951e1a-3e0c-4ff3-ae28-f0b151c74b63.png",
      category: "Furniture",
      inStock: true,
    },
    {
      id: "8",
      name: "Premium Tire Ottoman - Gold",
      description: "Luxurious ottoman crafted from recycled tires with gold-tone finish and decorative braided trim.",
      price: 329.99,
      image: "/lovable-uploads/1c698f62-f465-4b84-b318-b57be7afe8f1.png",
      category: "Furniture",
      inStock: true,
    }
  ];

  const handleAddToCart = (productId: string) => {
    setCart([...cart, productId]);
    toast.success("Added to cart!");
  };

  const handleAddToWishlist = (productId: string) => {
    setWishlist([...wishlist, productId]);
    toast.success("Added to wishlist!");
  };

  const handleShare = (product: Product, platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this ${product.name} from CLS Ventures!`);
    const image = encodeURIComponent(product.image);
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&picture=${image}&title=${text}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}&image=${image}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}&image=${image}`,
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
    toast.success(`Shared on ${platform}!`);
  };

  // Use the first product's image as the default social sharing image
  const defaultShareImage = products[0].image;

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our Products"
        description="Discover our collection of sustainable products made from recycled materials."
        image={defaultShareImage}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600">
              Discover our collection of sustainable products made from recycled materials.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Action Buttons Overlay */}
                    <div className="absolute top-4 right-4 space-y-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="icon"
                              variant="secondary"
                              className="bg-white/90 hover:bg-white"
                              onClick={() => handleAddToWishlist(product.id)}
                            >
                              <Heart className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Add to Wishlist</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="relative group">
                              <Button
                                size="icon"
                                variant="secondary"
                                className="bg-white/90 hover:bg-white"
                              >
                                <Share2 className="h-4 w-4" />
                              </Button>
                              {/* Share Dropdown */}
                              <div className="absolute right-full top-0 mr-2 hidden group-hover:block">
                                <div className="bg-white rounded-lg shadow-lg p-2 space-y-2">
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => handleShare(product, "facebook")}
                                  >
                                    <Facebook className="h-4 w-4 text-blue-600" />
                                  </Button>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => handleShare(product, "twitter")}
                                  >
                                    <Twitter className="h-4 w-4 text-blue-400" />
                                  </Button>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => handleShare(product, "linkedin")}
                                  >
                                    <Linkedin className="h-4 w-4 text-blue-700" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>Share Product</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    className="w-full group"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add to Cart
                    <ShoppingCart className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;

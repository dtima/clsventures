
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
      name: "Rope Accent Stool - Green & White",
      description: "Stylish stool crafted from recycled rope with a distinctive green and white pattern. Features gold-finished metal legs.",
      price: 189.99,
      image: "/lovable-uploads/71fa1af4-2401-419c-8940-edba8be6e7ed.png",
      category: "Furniture",
      inStock: true,
    },
    {
      id: "3",
      name: "Rope Accent Stool - Purple & White",
      description: "Elegant stool made from recycled rope featuring a unique purple and white design. Includes gold-finished metal legs.",
      price: 189.99,
      image: "/lovable-uploads/575d0e1a-57e7-48fa-a8f2-9bc3f2260662.png",
      category: "Furniture",
      inStock: true,
    },
    {
      id: "4",
      name: "Royal Blue Velvet Chair",
      description: "Luxurious accent chair upholstered in royal blue velvet, featuring classic design with modern sustainability.",
      price: 399.99,
      image: "/lovable-uploads/12ff3971-71f4-46cb-a743-2cd144f3fbd0.png",
      category: "Furniture",
      inStock: true,
    },
    {
      id: "5",
      name: "Floral Pattern Accent Chair - Purple",
      description: "Elegant accent chair with purple floral pattern and gold trim detailing. Made with sustainable materials.",
      price: 449.99,
      image: "/lovable-uploads/2e8bea51-0b68-4374-a1e4-0969486eaf1d.png",
      category: "Furniture",
      inStock: true,
    },
    {
      id: "6",
      name: "Rose Velvet Accent Chair",
      description: "Sophisticated chair in rose velvet with floral cushion detail and gold trim. Perfect blend of comfort and style.",
      price: 429.99,
      image: "/lovable-uploads/23d79e2a-254c-4fc8-a7d9-58e981fa23a6.png",
      category: "Furniture",
      inStock: true,
    },
    {
      id: "7",
      name: "Tire Storage Ottoman - Gold",
      description: "Innovative storage ottoman made from recycled tires with gold finish and decorative trim.",
      price: 259.99,
      image: "/lovable-uploads/041c6d63-6096-444a-83f4-a74054d784bb.png",
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
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
    toast.success(`Shared on ${platform}!`);
  };

  return (
    <div className="min-h-screen bg-white">
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

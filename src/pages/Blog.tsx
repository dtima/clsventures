
import { useState } from "react";
import { Newspaper, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Furniture",
      excerpt: "Exploring how recycled materials are revolutionizing the furniture industry...",
      author: "Jane Smith",
      date: "2024-03-15",
      category: "Sustainability",
      image: "/lovable-uploads/2e395be8-f298-4675-a8c8-b53307b609f0.png"
    },
    {
      id: 2,
      title: "Innovative Recycling Techniques",
      excerpt: "Discover the latest methods in transforming waste into beautiful furniture...",
      author: "John Doe",
      date: "2024-03-10",
      category: "Innovation",
      image: "/lovable-uploads/8e215b53-abf4-43c7-b1e0-11d12b716bed.png"
    },
    {
      id: 3,
      title: "Eco-Friendly Home Decor Tips",
      excerpt: "Learn how to create a sustainable and stylish living space...",
      author: "Sarah Johnson",
      date: "2024-03-05",
      category: "Design",
      image: "/lovable-uploads/d68e613d-badf-4542-9207-bc988769f3d4.png"
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEO 
        title="Blog" 
        description="Stay updated with the latest news and insights about sustainable furniture and eco-friendly living."
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
            <p className="text-lg text-center text-gray-600 mb-12">
              Stay updated with our latest news, insights, and stories about sustainable furniture and eco-friendly living.
            </p>

            {/* Search */}
            <div className="mb-12">
              <Input
                type="search"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md mx-auto"
              />
            </div>

            {/* Blog Posts */}
            <div className="space-y-12">
              {filteredPosts.map((post) => (
                <article key={post.id} className="border-b border-gray-200 pb-12 last:border-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="rounded-lg object-cover w-full h-64"
                    />
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold">{post.title}</h2>
                      <p className="text-gray-600">{post.excerpt}</p>
                      <div className="pt-4">
                        <Button variant="outline">Read More</Button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <Newspaper className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No posts found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;

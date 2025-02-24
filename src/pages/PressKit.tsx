
import { Download, FileText, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PressKit = () => {
  const pressReleases = [
    {
      title: "CLS Ventures Launches New Sustainable Furniture Line",
      date: "2024-03-01",
      pdf: "#"
    },
    {
      title: "Partnership Announcement with EcoTech Solutions",
      date: "2024-02-15",
      pdf: "#"
    },
    {
      title: "Sustainability Impact Report 2023",
      date: "2024-01-30",
      pdf: "#"
    }
  ];

  const mediaAssets = [
    {
      title: "Company Logo Pack",
      description: "Logo files in various formats (PNG, SVG, EPS)",
      size: "5.2 MB",
      link: "#"
    },
    {
      title: "Product Photos",
      description: "High-resolution product images and lifestyle shots",
      size: "25.8 MB",
      link: "#"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand identity and usage guidelines",
      size: "3.7 MB",
      link: "#"
    }
  ];

  return (
    <>
      <SEO 
        title="Press Kit" 
        description="Access CLS Ventures press releases, media assets, and company information for press and media use."
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Camera className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-8">Press Kit</h1>
            <p className="text-lg text-center text-gray-600 mb-12">
              Access our press releases, media assets, and company information. For press inquiries, please contact our media relations team.
            </p>

            {/* Company Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Company Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  CLS Ventures is a leading sustainable furniture company that transforms waste materials into beautiful, functional pieces. Our mission is to create a more sustainable future through innovative design and responsible manufacturing.
                </p>
                <ul>
                  <li>Founded: 2020</li>
                  <li>Headquarters: Eco City, United States</li>
                  <li>Employees: 50+</li>
                  <li>Products: Sustainable furniture and home decor</li>
                </ul>
              </div>
            </section>

            {/* Press Releases */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Press Releases</h2>
              <div className="space-y-4">
                {pressReleases.map((release) => (
                  <div key={release.title} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{release.title}</h3>
                      <p className="text-sm text-gray-600">{release.date}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                ))}
              </div>
            </section>

            {/* Media Assets */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Media Assets</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaAssets.map((asset) => (
                  <div key={asset.title} className="border rounded-lg p-6">
                    <h3 className="font-semibold mb-2">{asset.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{asset.description}</p>
                    <div className="flex items-center justify-
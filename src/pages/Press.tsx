
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Link as LinkIcon } from "lucide-react";
import SEO from "@/components/SEO";

const Press = () => {
  const pressResources = [
    {
      title: "Company Logo Pack",
      description: "Download our logo in various formats",
      type: "download",
      url: "/press/cls-ventures-logos.zip"
    },
    {
      title: "Brand Guidelines",
      description: "Our brand identity and usage guidelines",
      type: "download",
      url: "/press/brand-guidelines.pdf"
    },
    {
      title: "Press Releases",
      description: "Latest news and announcements",
      type: "link",
      url: "/press/releases"
    }
  ];

  const partners = [
    {
      category: "Environmental Impact",
      organizations: [
        "The Tony Elumelu Foundation",
        "UNDP",
        "One Young World"
      ]
    },
    {
      category: "Government Support",
      organizations: [
        "British High Commission Yaoundé",
        "Tech Women"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Partners & Press Kit"
        description="Access CLS Ventures' press materials and learn about our partnerships. Download brand assets and find the latest news about our sustainable initiatives."
      />
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6 text-center">
            Partners & Press Kit
          </h1>
          
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-secondary-dark mb-8">Press Kit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressResources.map((resource) => (
                <div key={resource.title} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button variant="outline" className="w-full">
                    {resource.type === 'download' ? (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </>
                    ) : (
                      <>
                        <LinkIcon className="mr-2 h-4 w-4" />
                        View
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-24">
            <h2 className="text-2xl font-bold text-secondary-dark mb-8">Our Partners</h2>
            <div className="space-y-12">
              {partners.map((category) => (
                <div key={category.category}>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {category.category}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {category.organizations.map((org) => (
                      <li key={org}>{org}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;

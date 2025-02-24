
import { FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions" 
        description="Read our terms and conditions to understand your rights and responsibilities when using CLS Ventures services."
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <FileText className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-8">Terms & Conditions</h1>
            <div className="prose prose-lg max-w-none">
              <p>Last updated: {new Date().toLocaleDateString()}</p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on CLS Ventures's website for personal, non-commercial transitory viewing only.
              </p>

              <h2>3. Disclaimer</h2>
              <p>
                The materials on CLS Ventures's website are provided on an 'as is' basis. CLS Ventures makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2>4. Limitations</h2>
              <p>
                In no event shall CLS Ventures or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CLS Ventures's website.
              </p>

              <h2>5. Accuracy of Materials</h2>
              <p>
                The materials appearing on CLS Ventures's website could include technical, typographical, or photographic errors. CLS Ventures does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>

              <h2>6. Links</h2>
              <p>
                CLS Ventures has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CLS Ventures of the site.
              </p>

              <h2>7. Modifications</h2>
              <p>
                CLS Ventures may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;

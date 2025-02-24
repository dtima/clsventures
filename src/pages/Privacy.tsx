
import { Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy" 
        description="Learn about how CLS Ventures collects, uses, and protects your personal information."
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including when you:
              </p>
              <ul>
                <li>Create an account</li>
                <li>Make a purchase</li>
                <li>Sign up for our newsletter</li>
                <li>Contact us for support</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Process your orders and payments</li>
                <li>Communicate with you about our products and services</li>
                <li>Improve our website and customer service</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul>
                <li>Service providers who assist our operations</li>
                <li>Law enforcement when required by law</li>
                <li>Other parties with your consent</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>5. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to our use of your data</li>
              </ul>

              <h2>6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@clsventures.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;

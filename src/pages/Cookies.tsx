
import { Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Cookies = () => {
  return (
    <>
      <SEO 
        title="Cookie Policy" 
        description="Learn about how CLS Ventures uses cookies and similar technologies on our website."
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Lock className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-8">Cookie Policy</h1>
            <div className="prose prose-lg max-w-none">
              <p>Last updated: {new Date().toLocaleDateString()}</p>

              <h2>What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>

              <h2>How We Use Cookies</h2>
              <p>
                We use cookies for the following purposes:
              </p>
              <ul>
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Analytics cookies: To understand how visitors interact with our website</li>
                <li>Preference cookies: To remember your settings and preferences</li>
                <li>Marketing cookies: To deliver more relevant advertisements</li>
              </ul>

              <h2>Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3>Strictly Necessary Cookies</h3>
                  <p>These cookies are essential for you to browse the website and use its features.</p>
                </div>
                
                <div>
                  <h3>Performance Cookies</h3>
                  <p>These cookies collect information about how you use our website.</p>
                </div>
                
                <div>
                  <h3>Functionality Cookies</h3>
                  <p>These cookies allow the website to remember choices you make.</p>
                </div>
                
                <div>
                  <h3>Targeting Cookies</h3>
                  <p>These cookies are used to deliver advertisements more relevant to you and your interests.</p>
                </div>
              </div>

              <h2>Managing Cookies</h2>
              <p>
                Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The Help portion of your browser's toolbar can tell you how to manage your cookie settings.
              </p>

              <h2>Changes to This Cookie Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us:
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

export default Cookies;

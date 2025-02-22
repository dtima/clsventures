
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@clsventures.com", label: "Email" },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Impact", href: "/impact" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "All Products", href: "/products" },
        { label: "Showroom", href: "/showroom" },
        { label: "Custom Orders", href: "/custom-orders" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Partners", href: "/partners" },
        { label: "Press Kit", href: "/press-kit" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and social links */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/lovable-uploads/54ee334c-986e-4ab8-9b2d-87388226c277.png"
                alt="CLS Ventures Logo"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm">
              Transforming waste into valuable products for a sustainable future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-secondary-dark mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Donation button */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent-dark text-white font-semibold"
            onClick={() => window.location.href = '/donate'}
          >
            <Heart className="mr-2" /> Support Our Mission
          </Button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div>
              © {currentYear} CLS Ventures. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-primary transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

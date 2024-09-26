import Link from "next/link";
import ShinyButton from "../magicui/shiny-button";
import Marquee from "../magicui/marquee";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RaleighAI Solutions</h3>
            <p className="text-sm mb-4">AI-powered digital marketing solutions for your business growth.</p>
            <ShinyButton className="w-full md:w-auto">
              Get a Free Consultation
            </ShinyButton>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-gray-300">About Us</Link></li>
              <li><Link href="/services" className="text-sm hover:text-gray-300">Our Services</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-gray-300">Blog</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-gray-300">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm">123 Innovation Drive, Raleigh, NC 27601</p>
            <p className="text-sm">Email: info@raleighaisolutions.com</p>
            <p className="text-sm">Phone: (919) 555-1234</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <Marquee className="text-sm" pauseOnHover={true}>
            <span className="mx-4">AI Integration & Automation</span>
            <span className="mx-4">Cloud Infrastructure Setup</span>
            <span className="mx-4">Data Analytics & Business Intelligence</span>
            <span className="mx-4">Technical Training & AI Education</span>
            <span className="mx-4">508 Compliance Consulting</span>
          </Marquee>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; {currentYear} RaleighAI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
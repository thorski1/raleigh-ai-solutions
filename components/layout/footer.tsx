import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RaleighAI Solutions</h3>
            <p className="text-sm">AI-powered digital marketing solutions for your business growth.</p>
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
            <p className="text-sm">123 AI Street, Raleigh, NC 27601</p>
            <p className="text-sm">Email: info@raleighai.com</p>
            <p className="text-sm">Phone: (919) 555-0123</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2023 RaleighAI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
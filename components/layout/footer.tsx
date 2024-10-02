import Link from 'next/link';
import ShinyButton from '../magicui/shiny-button';
import Marquee from '../magicui/marquee';
import { Button } from '../ui/button';
import { Modal, ModalTrigger, ModalBody } from '../ui/animated-modal';
import CalendarModal from '../reusables/calendar-modal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Raleigh AI Solutions</h3>
            <p className="text-sm mb-4">
              AI-powered digital marketing solutions for your business growth.
            </p>
            <Modal>
              <ModalTrigger>
                <ShinyButton className="w-full md:w-auto">Get a Free Consultation</ShinyButton>
              </ModalTrigger>
              <ModalBody>
                <CalendarModal />
              </ModalBody>
            </Modal>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-gray-300">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-sm hover:text-gray-300">
                  Our Solutions
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="text-sm hover:text-gray-300">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="text-sm">Email: <a href="mailto:info@raleighai.solutions">info@raleighai.solutions</a></p>
            <Button variant="outline" className="bg-accent text-primary-light hover:bg-accent/80 hover:text-primary-light"><Link href="/contact">Contact Us</Link></Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <Marquee className="text-sm" pauseOnHover={true}>
            <Link  href="/services/ai-integration-automation" className="mx-4">
              AI Integration & Automation
            </Link>
            <Link href="/services/cloud-infrastructure-setup" className="mx-4">
              Cloud Infrastructure Setup
            </Link>
            <Link href="/services/data-analytics-business-intelligence" className="mx-4">
              Data Analytics & Business Intelligence
            </Link>
            <Link href="/services/technical-training-ai-education" className="mx-4">
              Technical Training & AI Education
            </Link>
            <Link href="/services/508-compliance-consulting" className="mx-4">
              508 Compliance Consulting
            </Link>
          </Marquee>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; {currentYear} Raleigh AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

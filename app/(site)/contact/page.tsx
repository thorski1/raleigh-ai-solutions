import ContactForm from '@/components/farmui/form';
import { BorderBeam } from '@/components/magicui/border-beam';
import SparklesText from '@/components/magicui/sparkles-text';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { Instagram, Linkedin } from 'lucide-react';
import FAQ from '@/components/sections/faq';
import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/components/ui/animated-modal';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 pt-28 md:pt-32 lg:pt-36 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
        <BorderBeam className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SparklesText
              text="Get in Touch"
              sparklesCount={4}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background/80"
            />
            <p className="text-xl mb-8 text-background/80">We're here to answer any questions you might have.</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4 text-primary-dark">Contact Us</h2>
          <p className="text-primary-dark/80 mb-6">
            We value your input and are committed to providing excellent service. Here's what you can expect when you reach out to us:
          </p>
          <ul className="space-y-4 text-primary-dark/80">
            <li>
              <strong className="text-primary-dark">Quick Response:</strong> We aim to respond to all inquiries within 24 hours.
            </li>
            <li>
              <strong className="text-primary-dark">Personalized Attention:</strong> Our team will carefully review your message and provide a tailored response.
            </li>
            <li>
              <strong className="text-primary-dark">Follow-up:</strong> If needed, we'll schedule a call or further correspondence to address your needs fully.
            </li>
          </ul>
          <div className="mt-8">
            <p className="text-primary-dark/80 mb-2">Don&apos;t hesitate to reach out to us at <a className="text-blue-600 hover:text-blue-500" href="mailto:info@raleighai.solutions">info@raleighai.solutions</a></p>
            <p className="text-primary-dark/80 mb-2">Or connect with us on social media:</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.linkedin.com/company/raleigh-ai-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/raleighaisolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark hover:text-accent transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8">
            <Modal>
              <ModalTrigger className="mx-0 px-0">
                <Button variant="outline" className="bg-accent/30 text-primary-dark hover:text-primary-light">
                  View FAQ
                </Button>
              </ModalTrigger>
              <ModalBody 
                className="bg-accent/20 backdrop-blur-xl shadow-xl md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] w-full"
                closeButtonColor="text-primary-light"
              >
                <ModalContent className="border-secondary">
                  <FAQ />
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
        </div>
        <div className="col-span-1">
          <ContactForm />
        </div>
      </div>

      {/* FAQ Section
      <section id="faq" className="py-16 bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
        <div className="container mx-auto px-4">
          <FAQ className="max-w-4xl mx-auto" />
        </div>
      </section> */}
    </>
  );
}

export const metadata: Metadata = {
  title: 'Contact Raleigh AI Solutions | Get in Touch with Our AI Experts',
  description: 'Contact Raleigh AI Solutions for expert AI consulting and support. Our team is ready to help you with your AI needs.',
  openGraph: {
    title: 'Contact Raleigh AI Solutions | Get in Touch with Our AI Experts',
    description: 'Contact Raleigh AI Solutions for expert AI consulting and support. Our team is ready to help you with your AI needs.',
    images: [
      {
        url: '/thumbnail-3.png',
        width: 1200,
        height: 630,
        alt: 'Raleigh AI Solutions Team',
      },
    ],
  },
  twitter: {

    card: 'summary_large_image',
    title: 'Contact Raleigh AI Solutions | Get in Touch with Our AI Experts',
    description: 'Contact Raleigh AI Solutions for expert AI consulting and support. Our team is ready to help you with your AI needs.',
    images: ['/thumbnail-3.png'],
  },
};
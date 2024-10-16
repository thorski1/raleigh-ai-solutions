'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionHeadline from '@/components/reusables/section-headline';

interface FAQ {
  question: string;
  answer: string;
}

interface ServicesFAQProps {
  faqs?: FAQ[];
}

const defaultFaqs = [
  {
    question: 'What types of businesses can benefit from your AI services?',
    answer:
      "Our AI services are designed to benefit businesses of all sizes across various industries. Whether you're a small startup, a mid-sized company, or a large enterprise, we can tailor our solutions to meet your specific needs and goals.",
  },
  {
    question: 'How long does it typically take to implement AI solutions?',
    answer:
      'The implementation timeline can vary depending on the complexity of the project and the specific needs of your business. Generally, basic implementations can take a few weeks, while more complex, enterprise-wide solutions may take several months. We work closely with you to establish a timeline that aligns with your business objectives.',
  },
  {
    question: 'What kind of ROI can I expect from implementing AI solutions?',
    answer:
      'ROI can vary based on the specific solutions implemented and your business context. However, many of our clients see significant improvements in efficiency, cost reduction, and revenue growth. We typically see ROI ranging from 20% to 200% within the first year of implementation.',
  },
  {
    question: 'Do you offer ongoing support after implementation?',
    answer:
      'Yes, we provide comprehensive ongoing support and maintenance for all our AI solutions. This includes regular updates, performance monitoring, and technical support to ensure your AI systems continue to operate at peak efficiency.',
  },
  {
    question: 'How do you ensure data security and privacy in your AI solutions?',
    answer:
      'Data security and privacy are top priorities in all our AI implementations. We adhere to industry best practices and compliance standards, including GDPR and CCPA. Our solutions incorporate robust encryption, access controls, and regular security audits to protect your sensitive information.',
  },
];

const ServicesFAQ: React.FC<ServicesFAQProps> = ({ faqs = defaultFaqs }) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeadline text="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="w-full mt-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServicesFAQ;

'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import BlurFade from '@/components/magicui/blur-fade';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    title: 'General Questions',
    items: [
      {
        question:
          'What is Raleigh AI Solutions, and what services do you offer to small businesses?',
        answer: (
          <>
            Raleigh AI Solutions provides tailored AI-driven tools that streamline your operations,
            boost efficiency, and reveal valuable insights. Whether it's automation or data
            analytics, our services are specifically designed for small businesses.{' '}
            <Link href="/about-us" className="text-blue-400 hover:underline">
              Learn more about us
            </Link>{' '}
            and discover how we can help achieve your business goals!
          </>
        ),
      },
      {
        question: 'How can I contact you, and where are you located?',
        answer: (
          <>
            Ready to explore how we can support your growth?{' '}
            <Link href="/contact" className="text-blue-400 hover:underline">
              Contact us here
            </Link>{' '}
            and find our Raleigh, NC location details.
          </>
        ),
      },
    ],
  },
  {
    title: 'Services',
    items: [
      {
        question: 'What types of AI solutions can you customize for small business needs?',
        answer: (
          <>
            Our customizable solutions include automated workflows, which streamline your team's
            repetitive tasks, and data analytics services that offer actionable insights to drive
            revenue. Discover our{' '}
            <Link href="/services#automated-workflows" className="text-blue-400 hover:underline">
              Automated Workflows
            </Link>{' '}
            and{' '}
            <Link href="/services#data-driven-insights" className="text-blue-400 hover:underline">
              Data-Driven Insights
            </Link>{' '}
            to see how we can address your unique challenges.
          </>
        ),
      },
      {
        question:
          'What industries do you serve, and how do your services benefit small businesses?',
        answer: (
          <>
            From retail to healthcare, we support industries by improving operational efficiency,
            reducing costs, and enhancing customer satisfaction. Check out our{' '}
            <Link href="/services" className="text-blue-400 hover:underline">
              Services page
            </Link>{' '}
            to see examples of the industries we've helped and learn how we can tailor our services
            to benefit your business.
          </>
        ),
      },
      {
        question: 'What is the onboarding process like for new small business clients?',
        answer: (
          <>
            Our onboarding process is smooth and efficient, allowing you to quickly integrate AI
            into your operations. We assess your current systems, discuss your goals, and create a
            tailored implementation plan.{' '}
            <Link href="/contact" className="text-blue-400 hover:underline">
              Contact us
            </Link>{' '}
            to get started and see results right away!
          </>
        ),
      },
      {
        question: 'Do you offer demonstrations of your AI solutions?',
        answer: (
          <>
            Yes! Our demos show firsthand how our solutions—like automation and analytics—can
            streamline your processes and improve decision-making.{' '}
            <Link href="/services#schedule-demo" className="text-blue-400 hover:underline">
              Schedule a demo today
            </Link>{' '}
            on our AI Integration & Automation page.
          </>
        ),
      },
      {
        question: 'What kind of technical training do you provide for small businesses?',
        answer: (
          <>
            Our training ensures your team can fully leverage AI tools, from best practices to
            mastering specific applications. Learn more on our{' '}
            <Link href="/services#technical-training" className="text-blue-400 hover:underline">
              Technical Training page
            </Link>{' '}
            and get your team AI-ready!
          </>
        ),
      },
    ],
  },
  {
    title: 'Pricing and Contracts',
    items: [
      {
        question:
          'What is the pricing structure for small businesses, and do you offer free consultations?',
        answer: (
          <>
            We offer competitive pricing plans tailored to small business budgets, plus a free
            consultation to help determine the best solutions for your needs.{' '}
            <Link href="/contact" className="text-blue-400 hover:underline">
              Contact us for a quote!
            </Link>
          </>
        ),
      },
      {
        question: 'What is your billing process, and are there any contract requirements?',
        answer: (
          <>
            Our flexible billing and contract options are designed to suit your budget and business
            needs.{' '}
            <Link href="/contact" className="text-blue-400 hover:underline">
              Get in touch
            </Link>{' '}
            to learn about our transparent and straightforward pricing model.
          </>
        ),
      },
    ],
  },
  {
    title: 'Implementation and Support',
    items: [
      {
        question:
          'How long does implementation take for small businesses, and what support do you provide?',
        answer: (
          <>
            We aim for quick deployment through our agile approach, so you can start benefiting from
            AI right away. We offer ongoing support to ensure long-term success.{' '}
            <Link href="/services#implementation" className="text-blue-400 hover:underline">
              Learn more about our timeline and support options.
            </Link>
          </>
        ),
      },
      {
        question:
          'Do you offer training for my team, and how do you handle post-implementation issues?',
        answer: (
          <>
            Yes! Our comprehensive training prepares your team for immediate application, and we
            provide ongoing support for post-implementation needs.{' '}
            <Link href="/services#training" className="text-blue-400 hover:underline">
              Explore our training services to learn more.
            </Link>
          </>
        ),
      },
    ],
  },
  {
    title: 'Data and Security',
    items: [
      {
        question:
          'How do you ensure data security for small businesses, and do you comply with data protection regulations?',
        answer: (
          <>
            We prioritize data security through advanced encryption and strict compliance standards,
            ensuring your business data is protected. Discover our commitment to security on our{' '}
            <Link href="/services#data-analytics" className="text-blue-400 hover:underline">
              Data Analytics & Business Intelligence page
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    title: 'Miscellaneous',
    items: [
      {
        question:
          'How can I stay updated on your offerings and access resources for small businesses?',
        answer: (
          <>
            Subscribe to our newsletter on our{' '}
            <Link href="/contact#newsletter" className="text-blue-400 hover:underline">
              Contact page
            </Link>{' '}
            to receive the latest updates, resources, and special offers designed for small
            businesses.
          </>
        ),
      },
      {
        question: 'What is your geographic service area, and do you offer remote services?',
        answer:
          'We proudly serve businesses both locally and remotely, ensuring you get the support you need, wherever you are. Reach out to discuss how we can assist your business.',
      },
      {
        question:
          'Are there any special packages or resources available specifically for small businesses?',
        answer: (
          <>
            Yes, we offer exclusive packages to help you make the most of our services. Visit our{' '}
            <Link href="/services#small-business" className="text-blue-400 hover:underline">
              Services page
            </Link>{' '}
            to explore our small business packages.
          </>
        ),
      },
    ],
  },
];

const FAQ = ({ className = '' }: { className?: string }) => {
  return (
    <BlurFade className={className}>
      <Card className="w-full bg-primary-dark/30 backdrop-blur-sm shadow-xl p-6">
        <h4 className="text-2xl font-bold mb-4 text-primary-light text-center">
          Frequently Asked Questions
        </h4>
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h5 className="text-xl font-semibold mb-3 text-primary-light">{section.title}</h5>
            <Accordion type="single" collapsible className="w-full">
              {section.items.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${sectionIndex}-${index}`}
                  className="border-b border-accent/90 text-primary-light"
                >
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </Card>
    </BlurFade>
  );
};

export default FAQ;

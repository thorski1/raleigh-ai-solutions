import React from 'react';
import { FaCheckCircle, FaChartLine, FaBrain, FaMicrochip } from 'react-icons/fa';
import SectionHeadline from '@/components/reusables/section-headline';
import { ServiceCard } from '@/components/reusables/service-card';

const ServicesWhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: 'Customized Solutions',
      description: 'We work closely with you to design and implement AI tools that align with your specific goals.',
    },
    {
      icon: <FaChartLine />,
      title: 'Measurable Results',
      description: 'From reducing costs to improving scalability, our solutions deliver tangible benefits to your business.',
    },
    {
      icon: <FaBrain />,
      title: 'Expertise',
      description: 'Our team of AI specialists brings deep knowledge and experience to every project.',
    },
    {
      icon: <FaMicrochip />,
      title: 'Cutting-edge Technology',
      description: 'We stay at the forefront of AI advancements to provide you with the most innovative solutions.',
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-0">
        <SectionHeadline text="Why Choose Raleigh AI Solutions?" className="mb-2 md:mb-2 lg:mb-4" />
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-center text-gray-600">
            At Raleigh AI Solutions, we are committed to delivering AI-powered innovations that
            drive measurable results. Our solutions are tailored to meet the unique needs of your
            business, ensuring seamless integration into your operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <ServiceCard key={index} {...reason} slug={reason.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesWhyChooseUs;

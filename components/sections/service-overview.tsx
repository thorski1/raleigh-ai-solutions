import { FaRobot, FaCloud, FaChartBar, FaGraduationCap, FaUniversalAccess } from 'react-icons/fa';
import { ServiceCard } from '@/components/reusables/service-card';

export function ServiceOverview() {
  const services = [
    {
      icon: <FaRobot />,
      title: "AI Integration & Automation",
      description: "Enhance business processes with custom AI models and workflow automation tools."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Infrastructure Setup",
      description: "Secure scalable cloud infrastructure solutions for SMEs."
    },
    {
      icon: <FaChartBar />,
      title: "Data Analytics & Business Intelligence",
      description: "Leverage AI-powered data analytics for data-driven decision-making."
    },
    {
      icon: <FaGraduationCap />,
      title: "Technical Training & AI Education",
      description: "Empower your team with AI training programs and technical training services."
    },
    {
      icon: <FaUniversalAccess />,
      title: "508 Compliance Consulting",
      description: "Ensure your AI systems meet government accessibility standards."
    }
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl font-bold text-center mb-12">Our AI and Automation Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
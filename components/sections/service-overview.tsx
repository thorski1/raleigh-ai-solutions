'use client';

import { FaRobot, FaCloud, FaChartBar, FaGraduationCap, FaUniversalAccess } from 'react-icons/fa';
import { ServiceCard } from '@/components/reusables/service-card';
import SectionHeadline from '../reusables/section-headline';
import { trpc } from '@/trpc/client';
import { Service } from '@/lib/services';
import { Skeleton } from '../ui/skeleton';

export function ServiceOverview() {
  const { data: services, isLoading } = trpc.getAllServices.useQuery();

  const iconMap = {
    'ai-integration-automation': <FaRobot />,
    'cloud-infrastructure-setup': <FaCloud />,
    'data-analytics-business-intelligence': <FaChartBar />,
    'technical-training-ai-education': <FaGraduationCap />,
    '508-compliance-consulting': <FaUniversalAccess />,
  };

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-0">
        <SectionHeadline text="Our AI and Automation Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {isLoading ? (
            [...Array(6)].map((_, index) => (
              <Skeleton key={index} className="h-48 w-full" />
            ))
          ) : (
            services?.map((service: Service) => (
              <ServiceCard
                key={service.slug.current}
              icon={iconMap[service.slug.current as keyof typeof iconMap]}
              title={service.title}
                description={service.hoverDescription}
                slug={service.slug.current}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

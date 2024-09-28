import React from 'react';
import { IconType } from 'react-icons';
import { MagicCard } from '@/components/magicui/magic-card';
import SectionHeadline from '@/components/reusables/section-headline';
import { cn } from '@/lib/utils';

interface KeyFeaturesProps {
  service: {
    features: Array<{
      title: string;
      description: string;
      icon: IconType;
    }>;
  };
}

export default function KeyFeatures({ service }: KeyFeaturesProps) {
  return (
    <section className="py-2 md:py-4 lg:py-8">
      <div className="container mx-auto px-4">
        <SectionHeadline text="Key Features" className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, index) => (
            <MagicCard
              key={index}
              className={cn(
                'p-6 bg-secondary-foreground shadow-lg rounded-lg flex flex-col items-center',
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              )}
            >
              <div className="text-4xl text-primary mb-4 flex items-center justify-center">
                {React.createElement(feature.icon)}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2 text-center">{feature.title}</h3>
              <p className="text-white/80 text-center">{feature.description}</p>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';

interface Feature {
  feature: string;
}

interface FeaturesSectionProps {
  featuresTitle: string;
  features: Feature[];
}

export default function FeaturesSection({
  featuresTitle,
  features,
}: FeaturesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative z-10 py-10">
      <div className="container mx-auto px-4">
        <h2>
          <TextGenerateEffect
            words={featuresTitle}
            color="text-slate-900"
            className="text-4xl font-bold text-center mb-12"
          />
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-6xl">
            {features.map((feature, index) => (
              <div key={index} className="flex justify-center">
                <NeonGradientCard className="w-full">
                  <p className="text-lg text-slate-900 text-center font-semibold">{feature.feature}</p>
                </NeonGradientCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { BorderBeam } from '@/components/magicui/border-beam';
import { SparklesCore } from '@/components/ui/sparkles';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

interface KeyFeature {
  feature: string;
}

interface KeyFeaturesSectionProps {
  keyFeatures: KeyFeature[];
  serviceName: string;
}

export default function KeyFeaturesSection({ keyFeatures, serviceName }: KeyFeaturesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative z-10 py-20 overflow-hidden">
      <SparklesCore
        id="keyFeaturesSparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={50}
        className="absolute inset-0 w-full h-full"
        particleColor="var(--primary)"
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Key Features
          </h2>
          <BorderBeam
            className="w-1/3 h-1 mx-auto mb-8"
            colorFrom="hsl(var(--primary))"
            colorTo="hsl(var(--secondary))"
          />
          <TextGenerateEffect
            words={`Discover the unique aspects of our ${serviceName} service that set us apart.`}
            className="text-lg text-secondary-dark/80 max-w-2xl mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className={cn(
                "h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105",
                index % 2 === 0 ? "border-primary/50 hover:border-primary" : "border-secondary/50 hover:border-secondary"
              )}>
                <CardContent className="p-6 flex items-start space-x-4">
                  <CheckCircle className={cn(
                    "w-6 h-6 flex-shrink-0 mt-1",
                    index % 2 === 0 ? "text-primary" : "text-secondary"
                  )} />
                  <p className="text-lg text-secondary-dark">{feature.feature}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

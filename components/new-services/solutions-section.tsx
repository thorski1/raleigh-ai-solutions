'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { BorderBeam } from '@/components/magicui/border-beam';
import { SparklesCore } from '@/components/ui/sparkles';
import { cn } from '@/lib/utils';

interface Solution {
  slug: string;
  title: string;
}

interface SolutionsSectionProps {
  serviceName: string;
  solutions: Solution[];
}

const SolutionsSection: React.FC<SolutionsSectionProps> = ({ serviceName, solutions }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const headerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section ref={ref} className="relative z-10 py-20 overflow-hidden bg-gradient-to-br from-primary-dark/10 via-secondary-dark/10 to-accent-dark/10">
      <SparklesCore
        id="solutionsparticles"
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={70}
        className="absolute inset-0 w-full h-full"
        particleColor="var(--secondary)"
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Our {serviceName} Solutions
          </h2>
          <BorderBeam
            className="w-1/3 h-1 mx-auto mb-8"
            colorFrom="hsl(var(--secondary))"
            colorTo="hsl(var(--primary))"
          />
          <TextGenerateEffect
            words={`Explore our comprehensive ${serviceName} solutions designed to meet your specific needs and drive innovation.`}
            className="text-lg text-secondary-dark/80 max-w-2xl mx-auto"
          />
        </motion.div>
        <motion.ul 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {solutions.map((solution, index) => (
            <motion.li 
              key={solution.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link href={`/new-solutions/${solution.slug}`} className="block h-full">
                <Card className={cn(
                  "h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105",
                  index % 3 === 0 && "border-primary/50 hover:border-primary",
                  index % 3 === 1 && "border-secondary/50 hover:border-secondary",
                  index % 3 === 2 && "border-accent/50 hover:border-accent",
                )}>
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <h3 className="text-xl font-semibold mb-4 text-secondary-dark">{solution.title}</h3>
                    <div className="mt-4 flex justify-end">
                      <span className={cn(
                        "text-sm font-semibold px-4 py-1 rounded-full",
                        index % 3 === 0 && "bg-primary/20 text-primary-dark",
                        index % 3 === 1 && "bg-secondary/20 text-secondary-dark",
                        index % 3 === 2 && "bg-accent/20 text-accent-dark",
                      )}>
                        Explore Solution
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default SolutionsSection;

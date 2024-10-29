"use client";

import { Service } from '@/sanity/types';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { IconArrowWaveRightUp, IconArrowRight } from "@tabler/icons-react";
import Link from 'next/link';

interface ServicesIntegrationSectionProps {
  services: Service[];
}

export function ServicesIntegrationSection({ services }: ServicesIntegrationSectionProps) {
  // Calculate the middle index
  const middleIndex = Math.floor(services.length / 2);
  
  return (
    <section className="py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-700 to-slate-600" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-primary-light mb-6"
          >
            How Our Solutions Integrate with Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary-light"
          >
            Each of our solutions is built on a foundation of core services that define our expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service: Service, index: number) => (
            <Link 
              href={`/new-services/${service.slug.current}`} 
              key={service.slug.current}
              className={cn(
                "block h-full group",
                // Make middle item span full width
                index === middleIndex && "md:col-span-2"
              )}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full relative"
              >
                {/* Gradient shadow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary via-accent to-accent-dark opacity-75 blur-lg group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt"></div>
                
                <Card className={cn(
                  "group relative overflow-hidden border-secondary bg-primary-dark p-8 hover:bg-primary-dark/70 transition-all duration-500 h-full flex flex-col backdrop-blur-sm",
                  // Add extra styles for middle card
                  index === middleIndex && "md:px-12"
                )}>
                  {/* Animated border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/20 to-transparent group-hover:via-slate-500/20 transition-all duration-500" />
                  
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <IconArrowWaveRightUp className="w-6 h-6 text-secondary shrink-0" />
                        <h3 className={cn(
                          "text-xl font-semibold text-secondary",
                          // Make middle card title larger
                          index === middleIndex && "md:text-2xl"
                        )}>
                          {service.title}
                        </h3>
                      </div>
                      <IconArrowRight className="w-5 h-5 text-secondary transform translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 shrink-0" />
                    </div>
                    
                    <p className={cn(
                      "text-white flex-1",
                      // Add special styling for middle card text
                      index === middleIndex && "md:text-lg"
                    )}>
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

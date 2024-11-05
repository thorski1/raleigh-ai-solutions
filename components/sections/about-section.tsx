'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { cn } from '@/lib/utils';
import { FaRocket, FaUsers, FaChartLine, FaBullseye } from 'react-icons/fa';

interface AboutSectionProps {
  title?: string;
  description?: string;
}

const features = [
  {
    title: 'AI-First Approach',
    description:
      'We leverage artificial intelligence to enhance efficiency, automate workflows, and drive innovation in every aspect of your business.',
    icon: FaRocket,
  },
  {
    title: 'Expert-Led Training',
    description:
      'Our expert-led training programs empower your team to understand and utilize advanced technologies, fostering a culture of continuous growth.',
    icon: FaUsers,
  },
  {
    title: 'Scalable Cloud Infrastructure',
    description:
      'We design and implement scalable, serverless cloud architectures that grow with your business, ensuring flexibility and reliability.',
    icon: FaChartLine,
  },
  {
    title: 'Customized Solutions',
    description:
      'We tailor our services to meet the unique needs of each client, ensuring every solution is relevant, effective, and aligned with business goals.',
    icon: FaBullseye,
  },
];

export function AboutSection({
  title = 'Who We Are',
  description = 'We are at the forefront of AI innovation, combining cutting-edge technology with practical business solutions. Our approach is rooted in understanding your unique challenges and delivering transformative results that drive real business value.',
}: AboutSectionProps) {
  return (
    <section className="relative py-10 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-secondary-foreground mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-secondary-foreground/80"
          >
            {description}
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={cn(
                    'group relative overflow-hidden border-secondary bg-primary-dark p-8 hover:bg-primary-dark/90 transition-all duration-500',
                  )}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <feature.icon className="w-8 h-8 text-secondary transition-colors duration-300 group-hover:text-accent" />
                    <h3 className="text-xl font-semibold text-secondary">{feature.title}</h3>
                  </div>
                  <p className="text-primary-light">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center max-w-6xl mx-auto"
          >
            <p className="text-xl text-secondary-foreground/80 mb-8">
              Our mission is to empower businesses with intelligent, scalable solutions that
              leverage AI and cloud technologies to solve real-world problems, optimize operations,
              and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

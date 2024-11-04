'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { MagicCard } from '@/components/magicui/magic-card';
import BlurFade from '@/components/magicui/blur-fade';
import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';
import { NewService } from '@/sanity/types';

interface Solution {
  title: string;
  description: string;
}

interface ServiceTab {
  title: string;
  value: string;
  heading: string;
  summary: string;
  link: string;
  solutions: Solution[];
}

const servicesData: ServiceTab[] = [
  {
    title: 'AI Integration',
    value: 'ai',
    heading: 'AI Integration & Automation',
    summary:
      'Enhance your business processes by integrating AI and deploying workflow automation tools that streamline operations. We combine a deep understanding of machine learning, natural language processing, and serverless architectures to create scalable and intelligent processes that align with your business goals.',
    link: 'Learn More About AI Integration & Automation',
    solutions: [
      {
        title: 'Tech Stack Modernization for AI Integration',
        description: 'Upgrade outdated technology to prepare for AI advancements.',
      },
      {
        title: 'End-to-End Workflow Automation',
        description: 'Streamline repetitive tasks and boost productivity.',
      },
      {
        title: 'Custom AI Integrations',
        description: 'Develop tailored AI solutions for unique business challenges.',
      },
    ],
  },
  {
    title: 'Cloud Setup',
    value: 'cloud',
    heading: 'Cloud Infrastructure Setup',
    summary:
      'Design and deploy a secure, scalable cloud environment tailored for small to medium-sized enterprises (SMEs). Our cloud-first approach minimizes operational overhead while maximizing reliability and scalability, ensuring your infrastructure is ready to support AI integration and future growth.',
    link: 'Learn More About Cloud Infrastructure Setup',
    solutions: [
      {
        title: 'Cloud Infrastructure Setup & Optimization',
        description: "Build a cloud environment that's scalable and cost-efficient.",
      },
      {
        title: 'Serverless Migration',
        description: 'Transition from legacy infrastructure to a dynamic serverless model.',
      },
      {
        title: 'Edge Computing for Enhanced Performance',
        description: 'Improve user experience with reduced latency.',
      },
    ],
  },
  {
    title: 'Data Analytics',
    value: 'data',
    heading: 'Data Analytics & Business Intelligence',
    summary:
      'Leverage AI-powered insights to make data-driven decisions and stay competitive. We gather, process, and visualize data to deliver actionable insights that help your business stay proactive. Our end-to-end data solutions include custom dashboards, predictive analytics, and real-time data visibility.',
    link: 'Learn More About Data Analytics & Business Intelligence',
    solutions: [
      {
        title: 'AI-Powered Business Intelligence',
        description: 'Transform data into valuable insights using AI-driven tools.',
      },
      {
        title: 'Predictive Analytics for Customer Behavior',
        description: 'Anticipate customer needs and personalize experiences.',
      },
      {
        title: 'Real-Time Data Dashboards',
        description: 'Gain immediate access to key business metrics.',
      },
    ],
  },
  {
    title: 'Training',
    value: 'training',
    heading: 'Technical Training & AI Education',
    summary:
      'Equip your team with the skills needed to leverage AI and cloud technologies effectively. Our hands-on training programs cover machine learning, cloud infrastructure, and automation, ensuring your team is ready to create and manage AI-driven projects independently.',
    link: 'Learn More About Technical Training & AI Education',
    solutions: [
      {
        title: 'AI Training Programs for In-House Teams',
        description: 'Provide team members with hands-on AI knowledge.',
      },
      {
        title: 'No-Code AI Tools Training',
        description: 'Empower non-technical staff to engage with AI tools.',
      },
      {
        title: 'Cloud and Serverless Architecture Workshops',
        description: 'Teach cloud-native concepts and best practices.',
      },
    ],
  },
  {
    title: 'Compliance',
    value: 'compliance',
    heading: '508 Compliance Consulting',
    summary:
      'Ensure your AI systems and digital assets are accessible and compliant with accessibility standards like Section 508 and WCAG. Our services include auditing, remediation, and training to create inclusive digital experiences that reduce legal risks and demonstrate your commitment to accessibility.',
    link: 'Learn More About 508 Compliance Consulting',
    solutions: [
      {
        title: 'AI System Accessibility Audits',
        description: 'Identify and remediate accessibility gaps in AI systems.',
      },
      {
        title: 'Accessible AI Model Development',
        description: 'Build accessible AI models that prioritize inclusivity.',
      },
      {
        title: 'Remediation and Training for Compliance',
        description: 'Address accessibility gaps and train your team to maintain compliance.',
      },
    ],
  },
];

const TabContent = ({ service }: { service: NewService }) => (
  <div className="w-full overflow-scroll relative h-full rounded-2xl bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-dark">
    <div className="absolute inset-0 w-full h-full ">
      <SparklesCore
        key={service._id}
        id={`sparkles-${service._id}`}
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full opacity-50"
        particleColor="#FFFFFF"
      />
    </div>
    <div className="relative z-10 p-10">
      <BlurFade>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">{service.title}</h3>
          <TextGenerateEffect
            words={service.introductionDescription}
            className="text-lg text-white/80 leading-relaxed"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {service.solutions.map((solution, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                href={`/solutions/${solution.slug}`}
                className="group h-full relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary via-accent to-accent-dark opacity-75 blur-lg group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt"></div>

                <Card className="group relative overflow-hidden border-secondary bg-primary-dark hover:bg-primary-dark/70 transition-all duration-500 h-full backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/20 to-transparent group-hover:via-slate-500/20 transition-all duration-500" />

                  <CardContent className="relative z-10 p-6 flex flex-col h-full">
                    <h4 className="text-xl font-semibold text-secondary min-h-[3.4rem] flex">
                      {solution.title}
                    </h4>
                    <p className="text-white/70 mt-2">{solution.heroSubtitle}</p>
                  </CardContent>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </Card>
              </motion.a>
            ))}
          </div>
          <Link
            href={`/services/${service.slug}`}
            className="inline-block mt-6 text-white hover:text-white/80 transition-colors font-medium"
          >
            Learn More About {service.title} →
          </Link>
        </div>
      </BlurFade>
    </div>
  </div>
);

export default function ServicesTabsSection({ newServices }: { newServices: NewService[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative z-10 py-20 overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-primary-dark/80 max-w-3xl mx-auto">
            Explore our comprehensive range of services designed to transform your business
          </p>
        </motion.div>

        <div className="h-[40rem] [perspective:1000px] relative flex flex-col w-full items-start justify-start">
          <Tabs
            tabs={newServices.map((service) => ({
              title: service.shortName,
              value: service.shortName,
              content: <TabContent service={service} />,
            }))}
            containerClassName="justify-center"
            tabClassName="font-medium text-primary-dark/70 hover:text-primary-dark transition-colors text-xs md:text-base lg:text-lg px-1 md:px-4"
            activeTabClassName="bg-accent text-primary-light"
            contentClassName="mt-12 h-full"
          />
        </div>
      </div>
    </section>
  );
}

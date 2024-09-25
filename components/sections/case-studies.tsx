import React from 'react';
import Link from 'next/link';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import PulsatingButton from '@/components/magicui/pulsating-button';
import Marquee from '@/components/magicui/marquee';

interface CaseStudy {
  title: string;
  industry: string;
  description: string;
  result: string;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Healthcare Innovation',
    industry: 'Healthcare',
    description: 'Implemented AI-driven patient management system',
    result: 'Reduced patient wait times by 40%',
    link: '/case-studies/healthcare-innovation',
  },
  {
    title: 'Retail Transformation',
    industry: 'Retail',
    description: 'Integrated AI-powered predictive analytics',
    result: 'Increased sales by 25%',
    link: '/case-studies/retail-transformation',
  },
  {
    title: 'Manufacturing Optimization',
    industry: 'Manufacturing',
    description: 'Deployed AI for process optimization',
    result: 'Enhanced efficiency by 30%',
    link: '/case-studies/manufacturing-optimization',
  },
  // ... (keep the other case studies)
];

export function CaseStudies() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">Case Studies & Success Stories</h2>
      <Marquee className="py-16 overflow-visible" pauseOnHover={true} speed={100}>
        {caseStudies.map((study, index) => (
          <div key={index} className="mx-4 w-80 group">
            <NeonGradientCard className="h-full transition-transform duration-300 group-hover:scale-105">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">Industry: {study.industry}</p>
                  <p className="mb-4">{study.description}</p>
                  <p className="font-bold mb-4">{study.result}</p>
                </div>
                <div className="mt-auto">
                  <PulsatingButton className="w-full">
                    <Link href={study.link} className="block w-full text-center">Read Case Study</Link>
                  </PulsatingButton>
                </div>
              </div>
            </NeonGradientCard>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

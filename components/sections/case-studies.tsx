'use client';

import React from 'react';
import Link from 'next/link';
import PulsatingButton from '@/components/magicui/pulsating-button';
import Marquee from '@/components/magicui/marquee';
import SectionHeadline from '../reusables/section-headline';

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
    <section className="py-8 md:py-12 lg:py-16 bg-gray-100 overflow-hidden">
      <SectionHeadline text="Case Studies & Success Stories" />
      <Marquee className="py-8 overflow-visible" pauseOnHover={true} speed={100}>
        {caseStudies.map((study, index) => (
          <div key={index} className="mx-2 w-80 h-[300px] group">
            <div
              className="relative p-[2px] rounded-xl h-full transition-all duration-300 ease-in-out group-hover:scale-105"
              style={
                {
                  '--neon-first-color': '#ff00aa',
                  '--neon-second-color': '#00FFF1',
                  '--card-width': '320px',
                  '--card-height': '300px',
                } as React.CSSProperties
              }
            >
              <div className="bg-primary-dark rounded-[10px] p-6 h-full flex flex-col relative z-10">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-secondary">{study.title}</h3>
                  <p className="text-sm text-primary-light mb-4">Industry: {study.industry}</p>
                  <p className="mb-4 text-primary-light">{study.description}</p>
                  <p className="font-bold mb-4 text-primary-light">{study.result}</p>
                </div>
                <div className="mt-auto">
                  <PulsatingButton className="w-full">
                    <Link href={study.link} className="block w-full text-center">
                      Read Case Study
                    </Link>
                  </PulsatingButton>
                </div>
              </div>
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--neon-first-color)] to-[var(--neon-second-color)] opacity-75 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 5s ease infinite',
                }}
              />
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--neon-first-color)] to-[var(--neon-second-color)] opacity-0 group-hover:opacity-20"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 5s ease infinite',
                }}
              />
            </div>
          </div>
        ))}
      </Marquee>
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}

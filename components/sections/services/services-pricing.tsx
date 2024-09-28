'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import SectionHeadline from '@/components/reusables/section-headline';
import ShimmerButton from '@/components/magicui/shimmer-button';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$5,000',
    description: 'Perfect for small businesses looking to implement basic AI tools.',
    features: [
      'Basic AI integration for workflow optimization',
      'Cloud setup and data migration (up to 500GB)',
      '10 hours of technical support',
    ],
  },
  {
    name: 'Growth',
    price: '$10,000',
    description: 'Ideal for mid-sized businesses needing advanced AI tools and automation.',
    features: [
      'Advanced AI integration and automation tools',
      'Full cloud infrastructure setup and management',
      'Data analytics and reporting tools',
      '20 hours of technical support and AI training',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored for large businesses or government agencies.',
    features: [
      'Custom AI model development',
      'End-to-end cloud infrastructure with advanced security',
      'Automation of business processes with 24/7 monitoring',
      'Unlimited technical support and training',
    ],
  },
];

const ServicesPricing = () => {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <SectionHeadline text="Pricing Plans" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold">{plan.price}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <ShimmerButton
                  borderRadius="12px"
                  background="hsl(var(--primary))"
                  className="w-full font-semibold"
                  onClick={() => console.log(`${plan.name} plan selected`)}
                >
                  Choose Plan
                </ShimmerButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPricing;
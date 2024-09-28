'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BorderBeam } from '@/components/magicui/border-beam';
import { FadeText } from '@/components/magicui/fade-text';
import BlurFade  from '@/components/magicui/blur-fade';
import FlickeringGrid from '@/components/magicui/flickering-grid';
import { cn } from '@/lib/utils';
import SectionHeadline from '@/components/reusables/section-headline';
import { MagicCard } from '@/components/magicui/magic-card';

const partnerships = [
  { name: 'Google Cloud Partner', color: 'bg-gradient-to-r from-blue-200 to-blue-400 text-secondary-foreground' },
  { name: 'AWS Partner', color: 'bg-gradient-to-r from-orange-200 to-orange-400 text-secondary-foreground' },
  { name: 'Microsoft Azure Partner', color: 'bg-gradient-to-r from-cyan-200 to-cyan-400 text-secondary-foreground' },
];

const certifications = [
  { name: 'Certified AI Professional', color: 'bg-gradient-to-r from-purple-200 to-purple-400 text-secondary-foreground' },
  { name: 'Cloud Solutions Architect', color: 'bg-gradient-to-r from-green-200 to-green-400 text-secondary-foreground' },
  { name: 'Data Security Specialist', color: 'bg-gradient-to-r from-red-200 to-red-400 text-secondary-foreground' },
  { name: 'Machine Learning Expert', color: 'bg-gradient-to-r from-yellow-200 to-yellow-400 text-secondary-foreground' },
];

const PartnersCertifications = () => {
  return (
    <section className="relative py-8 md:py-12 lg:py-16 overflow-hidden">
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="container mx-auto px-4 relative z-20">
              <div className="flex flex-col items-center justify-center mb-8">
          <SectionHeadline text="Partners & Certifications" />

        </div>
        <BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MagicCard className="bg-secondary-foreground backdrop-blur-sm shadow-xl relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-background">
                  Strategic Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {partnerships.map((partner, index) => (
                    <Badge
                      key={index}
                      className={cn('text-background text-sm py-1 px-2', partner.color)}
                    >
                      {partner.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </MagicCard>
            <MagicCard className="bg-secondary-foreground backdrop-blur-sm shadow-xl relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-background">
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <Badge
                      key={index}
                      className={cn('text-background text-sm py-1 px-2', cert.color)}
                    >
                      {cert.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </MagicCard>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default PartnersCertifications;

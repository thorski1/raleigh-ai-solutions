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

const partnerships = [
  { name: 'Google Cloud Partner', color: 'bg-blue-700' },
  { name: 'AWS Partner', color: 'bg-orange-700' },
  { name: 'Microsoft Azure Partner', color: 'bg-cyan-700' },
];

const certifications = [
  { name: 'Certified AI Professional', color: 'bg-purple-700' },
  { name: 'Cloud Solutions Architect', color: 'bg-green-700' },
  { name: 'Data Security Specialist', color: 'bg-red-700' },
  { name: 'Machine Learning Expert', color: 'bg-yellow-700' },
];

const PartnersCertifications = () => {
  return (
    <section className="relative py-8 md:py-12 lg:py-16 overflow-hidden">
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="container mx-auto px-4 relative z-20">
              <div className="flex flex-col items-center justify-center mb-8">
          <SectionHeadline text="Partners & Certifications" color="text-foreground" />

        </div>
        <BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background/80 backdrop-blur-sm shadow-xl relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
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
            </Card>
            <Card className="bg-background/80 backdrop-blur-sm shadow-xl relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
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
            </Card>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default PartnersCertifications;

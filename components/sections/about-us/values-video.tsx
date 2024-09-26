'use client';

import React from 'react';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import FlickeringGrid from '@/components/magicui/flickering-grid';
import { BorderBeam } from '@/components/magicui/border-beam';
import SectionHeadline from '@/components/reusables/section-headline';

const values = [
  {
    title: 'Innovation',
    description: 'Embracing cutting-edge artificial intelligence solutions.',
    color: 'bg-blue-700',
  },
  {
    title: 'Integrity',
    description: 'Upholding the highest ethical standards in AI consulting and automation.',
    color: 'bg-green-700',
  },
  {
    title: 'Excellence',
    description: 'Delivering outstanding results through AI integration services.',
    color: 'bg-purple-700',
  },
  {
    title: 'Collaboration',
    description: 'Working closely with clients to design customized AI solutions.',
    color: 'bg-yellow-700',
  },
];

const ValuesVideo = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <SectionHeadline text="Our Values" color="text-foreground" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="bg-background/80 backdrop-blur-sm shadow-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Badge className={cn('text-background', value.color)}>{value.title}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
              thumbnailSrc="/embrace-ai.svg"
              thumbnailAlt="AI Introduction Video"
              className="rounded-lg shadow-xl z-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesVideo;

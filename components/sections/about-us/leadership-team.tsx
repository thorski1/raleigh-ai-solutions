'use client';

import React from 'react';
import BlurFade from '@/components/magicui/blur-fade';
import AvatarCircles from '@/components/magicui/avatar-circles';
import FlickeringGrid from '@/components/magicui/flickering-grid';
import { BorderBeam } from '@/components/magicui/border-beam';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';

const LeadershipTeam = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
      <FlickeringGrid className="absolute inset-0 z-0 opacity-30" />
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="container mx-auto px-4 relative">
        <BlurFade>
          <div>
            <AnimatedShinyText as="h2" className="text-2xl md:text-3xl text-center text-background mb-8">
              Leadership Team
            </AnimatedShinyText>
            <div className="flex justify-center mt-4">
              <AvatarCircles avatarUrls={['/images/meghan.jpg', '/images/sam.jpg']} numPeople={2} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-primary/40 backdrop-blur-sm rounded-lg p-6 shadow-2xl">
                <AnimatedShinyText as="h3" className="text-xl font-semibold text-background">Meghan Barnes</AnimatedShinyText>
                <p className="mt-2 text-background">
                  Founder & AI Integration Specialist. A federally recognized Microsoft Subject
                  Matter Expert (SME) with extensive experience in AI-driven workflow optimization,
                  machine learning integration, and 508 compliance consulting.
                </p>
              </div>
              <div className="bg-primary/40 backdrop-blur-sm rounded-lg p-6 shadow-2xl">
                <AnimatedShinyText as="h3" className="text-xl font-semibold text-background">Sam Thoyre</AnimatedShinyText>
                <p className="mt-2 text-background">
                  Co-Founder & Operations Lead. Expert in operations management, project oversight,
                  and AI consulting ensuring smooth execution of AI solutions for businesses.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default LeadershipTeam;
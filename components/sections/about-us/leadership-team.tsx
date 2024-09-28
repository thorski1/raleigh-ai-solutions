'use client';

import React from 'react';
import Image from 'next/image';
import BlurFade from '@/components/magicui/blur-fade';
import AvatarCircles from '@/components/magicui/avatar-circles';
import { BorderBeam } from '@/components/magicui/border-beam';
import SectionHeadline from '@/components/reusables/section-headline';
import { MagicCard } from '@/components/magicui/magic-card';

interface LeaderCardProps {
  imageSrc: string;
  name: string;
  title: string;
  description: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ imageSrc, name, title, description }) => (
  <MagicCard className="p-6 bg-secondary-foreground shadow-lg rounded-lg flex flex-col items-center">
    <div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden mx-auto">
      <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" />
    </div>
    <h3 className="text-xl font-semibold text-secondary mb-2 text-center">{name}</h3>
    <h4 className="text-lg text-white mb-3 text-center">{title}</h4>
    <p className="text-white/80 text-center">{description}</p>
  </MagicCard>
);

const LeadershipTeam = () => {
  const leaders = [
    {
      imageSrc: '/logo.png',
      name: 'Meghan Barnes',
      title: 'Founder & AI Integration Specialist',
      description: 'A federally recognized Microsoft Subject Matter Expert (SME) with extensive experience in AI-driven workflow optimization, machine learning integration, and 508 compliance consulting.',
    },
    {
      imageSrc: '/logo.png',
      name: 'Sam Thoyre',
      title: 'Co-Founder & Operations Lead',
      description: 'Expert in operations management, project oversight, and AI consulting ensuring smooth execution of AI solutions for businesses.',
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-secondary/10">
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="container mx-auto px-4 relative">
        <BlurFade>
          <div>
            <SectionHeadline text="Leadership Team" className="mb-2 md:mb-2 lg:mb-4" />
            <div className="flex justify-center mt-4">
              <AvatarCircles avatarUrls={['/images/meghan.jpg', '/images/sam.jpg']} numPeople={2} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8 mt-8">
              {leaders.map((leader, index) => (
                <LeaderCard key={index} {...leader} />
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default LeadershipTeam;

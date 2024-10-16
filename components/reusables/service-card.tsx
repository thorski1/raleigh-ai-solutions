'use client';

import { ReactNode } from 'react';
import { BorderBeam } from '@/components/magicui/border-beam';
import { PinContainer } from '@/components/ui/3d-pin';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  slug: string;
}

export function ServiceCard({ icon, title, description, slug }: ServiceCardProps) {
  return (
    <PinContainer title={'Learn More'} href={`/services/${slug}`}>
      <div className="w-full h-full relative overflow-hidden bg-primary-dark rounded-2xl min-h-52">
        <BorderBeam
          className="absolute inset-0 pointer-events-none"
          duration={20}
          colorFrom="hsl(var(--primary))"
          colorTo="hsl(var(--secondary))"
        />
        <div className="p-6 flex flex-col items-center text-center h-full justify-between">
          <div className="text-4xl mb-4 text-primary">{icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
          <p className="text-white/80 text-sm">{description}</p>
        </div>
      </div>
    </PinContainer>
  );
}

import { ReactNode } from 'react';
import { MagicCard } from '@/components/magicui/magic-card';
import { BorderBeam } from '@/components/magicui/border-beam';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <MagicCard className="relative overflow-hidden">
      <BorderBeam
        className="absolute inset-0 pointer-events-none"
        duration={20}
        colorFrom="hsl(var(--primary))"
        colorTo="hsl(var(--secondary))"
      />
      <div className="p-6 flex flex-col items-center text-center">
        <div className="text-4xl mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-background">{description}</p>
      </div>
    </MagicCard>
  );
}
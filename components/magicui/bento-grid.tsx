import { ReactNode } from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn('grid w-full auto-rows-[28rem] sm:auto-rows-[22rem] grid-cols-3 gap-4', className)}>
      {children}
    </div>
  );
};

interface BentoCardProps {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string | ReactNode;
  href?: string;
  cta?: string;
  badge?: ReactNode;
  stats?: ReactNode;
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  badge,
  stats,
}: BentoCardProps) => (
  <div
    className={cn(
      'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl min-h-[28rem] sm:min-h-[22rem]',
      '[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      'transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] bg-primary-dark',
      'active:scale-[0.98] sm:active:scale-100',
      'transition-all duration-200',
      className,
    )}
  >
    <div>{background}</div>
    {badge}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 pt-16 sm:pt-6 transition-all duration-300 md:group-hover:-translate-y-10">
      <div className="flex items-center gap-4 pb-2">
        <Icon className="h-12 w-12 origin-left transform-gpu text-primary transition-all duration-300 ease-in-out group-hover:scale-75" />
        {stats && (
          <div className="h-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75 flex items-center">
            {stats}
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-secondary">{name}</h3>
      {typeof description === 'string' ? (
        <p className="max-w-lg text-primary-light">{description}</p>
      ) : (
        description
      )}
    </div>

    <div
      className={cn(
        'pointer-events-none flex w-full transform-gpu flex-row items-center p-4 md:absolute md:bottom-0 md:translate-y-10 md:opacity-0 transition-all duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100',
        'opacity-100 bg-black/5 dark:bg-white/5 md:bg-transparent',
        'mt-2 sm:mt-auto'
      )}
    >
      {href && cta && (
        <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
          <a className="text-secondary" href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      )}
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };

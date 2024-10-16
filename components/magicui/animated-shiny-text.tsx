import { CSSProperties, FC, ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  as: Component = 'p',
}) => {
  return (
    <Component
      style={
        {
          '--shimmer-width': `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        'mx-auto max-w-2xl text-primary-light/95 dark:text-primary-light/95',

        // Shimmer effect
        'animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',

        // Shimmer gradient
        'bg-gradient-to-r from-primary-light via-primary-dark via-50% to-primary-light  dark:via-primary-dark',

        className,
      )}
    >
      {children}
    </Component>
  );
};

export default AnimatedShinyText;

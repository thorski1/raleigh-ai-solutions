import AnimatedGradientText from '@/components/magicui/animated-gradient-text';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import { BorderBeam } from '@/components/magicui/border-beam';
import SparklesText from '@/components/magicui/sparkles-text';
import { Button } from '@/components/ui/button';

interface ServiceHeroProps {
  service: {
    title: string;
    description: string;
  };
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative w-full py-8 md:py-16 lg:py-20 pt-28 md:pt-32 lg:pt-36 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
      <BorderBeam className="absolute inset-0" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SparklesText
            text={service.title}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background/80"
          />
          <p className="text-xl mb-8 text-background/80">{service.description}</p>
          {/* <Button size="lg">Learn More</Button> */}
        </div>
      </div>
    </section>
  );
}
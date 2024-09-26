import { Metadata } from 'next';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import MissionVision from '@/components/sections/about-us/mission-vision';
import ValuesVideo from '@/components/sections/about-us/values-video';
import LeadershipTeam from '@/components/sections/about-us/leadership-team';
import PartnersCertifications from '@/components/sections/about-us/partners-certifications';
import WhyChooseUs from '@/components/sections/about-us/why-choose-us';
import FlickeringGrid from '@/components/magicui/flickering-grid';
import { BorderBeam } from '@/components/magicui/border-beam';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary pt-28">
        <FlickeringGrid className="absolute inset-0 z-0 opacity-30" />
        <BorderBeam className="absolute inset-0 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-12">
            <AnimatedShinyText className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              About Raleigh AI Solutions
            </AnimatedShinyText>
            <p className="mt-2 md:mt-4 text-lg text-white/80">
              Empowering Businesses Through Scalable AI Solutions
            </p>
          </div>

          {/* Mission Vision Section */}
          <MissionVision />
        </div>
      </section>

      <ValuesVideo />
      <LeadershipTeam />
      <PartnersCertifications />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUsPage;

export const metadata: Metadata = {
  title: 'About Us - Raleigh AI Solutions',
  description:
    'Learn more about Raleigh AI Solutions, our mission, vision, values, leadership team, and why you should choose us for your AI and automation needs.',
};

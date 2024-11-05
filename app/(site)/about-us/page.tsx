import { Metadata } from 'next';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import MissionVision from '@/components/sections/about-us/mission-vision';
import ValuesVideo from '@/components/sections/about-us/values-video';
import LeadershipTeam from '@/components/sections/about-us/leadership-team';
import PartnersCertifications from '@/components/sections/about-us/partners-certifications';
import WhyChooseUs from '@/components/sections/about-us/why-choose-us';
import FlickeringGrid from '@/components/magicui/flickering-grid';
import { BorderBeam } from '@/components/magicui/border-beam';
import FAQ from '@/components/sections/faq';
import Particles from '@/components/magicui/particles';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-8 md:py-16 lg:py-20 pt-28 md:pt-32 lg:pt-36 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
        <FlickeringGrid className="absolute inset-0 z-0 opacity-30" />
        <BorderBeam className="absolute inset-0 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              <AnimatedShinyText>About Raleigh AI Solutions</AnimatedShinyText>
            </h1>
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
      
      {/* FAQ Section */}
      <section id="faq" className="relative py-16 bg-gradient-to-br from-accent-dark via-accent-dark to-primary-dark">
        <div className="absolute inset-0 w-full h-full">
          <Particles className="w-full h-full" quantity={500} color="#ffffff" staticity={50} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FAQ className="max-w-4xl mx-auto" />
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
};

export default AboutUsPage;

export const metadata: Metadata = {
  title: 'About Raleigh AI Solutions | Leading AI Consulting Firm',
  description: 'Learn about Raleigh AI Solutions, a premier AI consulting firm providing AI integration, cloud infrastructure, and automation tools for businesses. Discover our mission, vision, leadership team, and why we\'re the right choice for your AI needs.',
  openGraph: {
    title: 'About Raleigh AI Solutions | Leading AI Consulting Firm',
    description: 'Discover how Raleigh AI Solutions empowers businesses with cutting-edge AI integration, cloud infrastructure, and automation tools. Learn about our mission, vision, and expert team.',
    images: [
      {
        url: '/thumbnail-4.png',
        width: 1200,
        height: 630,
        alt: 'Raleigh AI Solutions Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Raleigh AI Solutions | Leading AI Consulting Firm',
    description: 'Discover how Raleigh AI Solutions empowers businesses with cutting-edge AI integration, cloud infrastructure, and automation tools.',
    images: ['/thumbnail-4.png'],
  },
};

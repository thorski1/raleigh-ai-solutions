import HeroSection from '@/components/shared/hero-section';
import VideoContentSection from '@/components/shared/video-content-section';
import WhyChooseUsSection from '@/components/shared/why-choose-us-section';
import ServicesTabsSection from '@/components/shared/services-tabs-section';
import { trpc } from '@/trpc/server';
import CtaSection from '@/components/shared/cta-section';

export default async function NewServicesPage() {
  const newServices = await trpc.getAllNewServices();
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Our Services"
        subtitle="Empowering Businesses with Cutting-Edge AI, Cloud, and Compliance Expertise"
      />
      <VideoContentSection
        title="What We Offer"
        description="At the core of our offerings are services that leverage AI, cloud infrastructure, data analytics, and compliance solutions to help businesses thrive in a competitive landscape. Our services are designed to tackle broad areas of business needs, while our targeted solutions provide focused and actionable ways to address unique challenges. Explore our services to see how we can help you harness the power of technology to grow and succeed."
        videoUrl={null}
      />
      <ServicesTabsSection newServices={newServices} />
      <WhyChooseUsSection
        title="Why Choose Our Services?"
        description="We offer a holistic approach to business transformation that integrates AI, cloud technologies, data analytics, and accessibility solutions. Our services are tailored to your specific needs, and our expert team works closely with you to ensure successful adoption and measurable results. Partner with us to stay ahead of the curve and achieve lasting success in the digital age."
        className="mt-20"
      />
      <CtaSection
        ctaTitle="Find the Service That Fits Your Business Needs"
        ctaDescription="Our services are designed to empower your business by providing the expertise needed to navigate the complexities of AI, cloud infrastructure, data analytics, and compliance. Explore our services today and discover how we can help you achieve your business goals."
        ctaButton="Schedule a Consultation"
        className="mt-20"
      />
    </main>
  );
}

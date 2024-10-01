import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

import { getServiceBySlug, getAllServices, Service } from '@/lib/services';
import ServiceHero from '@/components/sections/services/service-hero';
import ServiceCTA from '@/components/sections/services/service-cta';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { BenefitsSection } from '@/components/sections/services/benefits-section';
import KeyFeatures from '@/components/sections/services/key-features';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: `${service.title} | Raleigh AI Solutions`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Raleigh AI Solutions`,
      description: service.description,
      images: [{ url: service.thumbnailSrc }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Raleigh AI Solutions`,
      description: service.description,
      images: [service.thumbnailSrc],
    },
    alternates: {
      canonical: `https://www.raleighai.com/services/${service.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service: Service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full max-w-full">
      <ServiceHero service={service} />
      <div className="w-full max-w-7xl py-4">
        <Breadcrumb className="container mx-auto px-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary-dark">{service.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <KeyFeatures service={service} />
      <BenefitsSection service={service} />
      <ServiceCTA service={service} />
    </main>
  );
}
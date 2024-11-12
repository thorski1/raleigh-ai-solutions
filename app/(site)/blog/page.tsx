import { Metadata } from 'next';
import { trpc } from '@/trpc/server';
import BlogHero from '@/components/blog/blog-hero';
import BlogGrid from '@/components/blog/blog-grid';
import AboutSection from '@/components/blog/about-section';
import NewsletterSection from '@/components/blog/newsletter-section';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'Blog | Raleigh AI Solutions',
  description:
    'Insights, trends, and news on Artificial Intelligence transforming businesses in Raleigh and beyond.',
  openGraph: {
    title: 'Blog | Raleigh AI Solutions',
    description:
      'Insights, trends, and news on Artificial Intelligence transforming businesses in Raleigh and beyond.',
    url: 'https://www.raleighai.solutions/blog',
    siteName: 'Raleigh AI Solutions',
    images: [
      {
        url: 'https://www.raleighai.solutions/thumbnail-1.png',
        width: 1200,
        height: 630,
        alt: 'Raleigh AI Solutions Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Raleigh AI Solutions',
    description:
      'Insights, trends, and news on Artificial Intelligence transforming businesses in Raleigh and beyond.',
    images: ['https://www.raleighai.solutions/thumbnail-1.png'],
  },
};

const CoolDivider = () => (
  <div className="flex items-center justify-center my-12">
    <div className="h-px bg-gradient-to-r from-transparent via-secondary to-secondary-light w-1/3" />
    <div className="mx-4">
      <AnimatedShinyText as="span" className="text-2xl">
        •
      </AnimatedShinyText>
    </div>
    <div className="h-px bg-gradient-to-r from-transparent via-secondary to-secondary-light w-1/3" />
  </div>
);

interface BlogPageProps {
  searchParams?: {
    q?: string;
    categories?: string | string[];
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  // Handle both single category and multiple categories from URL
  const categories = searchParams?.categories
    ? Array.isArray(searchParams.categories)
      ? searchParams.categories
      : [searchParams.categories]
    : [];

  return (
    <>
      <BlogHero
        headline="Innovative AI Solutions for a Smarter Raleigh"
        subheadline="Insights, trends, and news on Artificial Intelligence transforming businesses in Raleigh and beyond."
      />
      <Suspense
        fallback={
          <div className="container px-4 mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-[400px] rounded-xl" />
            ))}
          </div>
        }
      >
        <BlogGrid searchQuery={searchParams?.q} initialCategories={categories} />
      </Suspense>
      <CoolDivider />
      <AboutSection />
      <NewsletterSection />
    </>
  );
}

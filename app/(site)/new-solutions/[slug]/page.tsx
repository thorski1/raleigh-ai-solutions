import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { trpc } from '@/trpc/server';

interface NewSolutionPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: NewSolutionPageProps): Promise<Metadata> {
  const solution = await trpc.getNewSolutionBySlug({ slug: params.slug });

  if (!solution) {
    return {
      title: 'Solution Not Found',
    };
  }

  return {
    title: `${solution.title} | Raleigh AI Solutions`,
    description: solution.heroSubtitle,
    openGraph: {
      title: `${solution.title} | Raleigh AI Solutions`,
      description: solution.heroSubtitle,
      images: [{ url: '/thumbnail-3.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${solution.title} | Raleigh AI Solutions`,
      description: solution.heroSubtitle,
      images: ['/thumbnail-3.png'],
    },
  };
}

export default async function NewSolutionPage({ params }: NewSolutionPageProps) {
  const solution = await trpc.getNewSolutionBySlug({ slug: params.slug });

  if (!solution) {
    notFound();
  }

  // Log the solution data to the console
  console.log('New Solution Data:', solution);

  return (
    <main className="min-h-screen relative bg-secondary-light/10">
      <h1>New Solution Page</h1>
      <p>Solution data has been logged to the console.</p>
    </main>
  );
}


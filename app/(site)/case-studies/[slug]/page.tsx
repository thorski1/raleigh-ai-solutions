import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BorderBeam } from '@/components/magicui/border-beam';
import SparklesText from '@/components/magicui/sparkles-text';
import GatedAssetForm from '@/components/farmui/gated-asset-form';
import { trpc } from '@/trpc/server';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/lib/portable-text.config';
import DotPattern from '@/components/magicui/dot-pattern';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { CTASections } from '@/components/sections/cta-sections';

export default async function GatedAssetPage({ params }: { params: { slug: string } }) {
  const asset = await trpc.getGatedAsset({ slug: params.slug });

  if (!asset) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 pt-28 md:pt-32 lg:pt-36 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
        <BorderBeam className="absolute inset-0" />
        <AnimatedGridPattern />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SparklesText
              text={asset.title}
              sparklesCount={4}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background/80"
            />
            <p className="text-xl mb-8 text-background/80">{asset.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="col-span-1">
          <div className="prose text-primary-dark/80">
            <PortableText
              value={asset.teaserContent}
              // @ts-ignore
              components={portableTextComponents}
            />
          </div>
        </div>
        <div className="col-span-1">
          <GatedAssetForm assetSlug={params.slug} />
        </div>
      </div>
      <CTASections />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const asset = await trpc.getGatedAsset({ slug: params.slug });

  if (!asset) {
    return {};
  }

  return {
    title: `${asset.title} | Raleigh AI Solutions`,
    description: asset.description,
    openGraph: {
      title: `${asset.title} | Raleigh AI Solutions`,
      description: asset.description,
      images: [
        {
          url: '/thumbnail-3.png',
          width: 1200,
          height: 630,
          alt: asset.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${asset.title} | Raleigh AI Solutions`,
      description: asset.description,
      images: ['/thumbnail-3.png'],
    },
  };
}

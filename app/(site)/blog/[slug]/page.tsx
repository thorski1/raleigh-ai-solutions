import { Metadata, ResolvingMetadata } from 'next';
import { trpc } from '@/trpc/server';
import { urlFor } from '@/sanity/lib/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { Button } from '@/components/ui/button';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { portableTextComponents } from '@/lib/portable-text.config';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = await trpc.getPostBySlug({ slug: params.slug });

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${post.title} | Raleigh AI Solutions Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Raleigh AI Solutions Blog`,
      description: post.excerpt,
      url: `https://www.raleighai.solutions/blog/${post.slug.current}`,
      siteName: 'Raleigh AI Solutions',
      images: [
        {
          url: post.mainImage
            ? urlFor(post.mainImage).width(1200).height(630).url()
            : 'https://www.raleighai.solutions/thumbnail-1.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name || 'Raleigh AI Solutions'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Raleigh AI Solutions Blog`,
      description: post.excerpt,
      images: [
        post.mainImage
          ? urlFor(post.mainImage).width(1200).height(630).url()
          : 'https://www.raleighai.solutions/thumbnail-1.png',
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await trpc.getPostBySlug({ slug: params.slug });

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  return (
    <article>
      <div className="relative px-8 md:px-16 lg:px-24 py-8 flex flex-col items-center justify-center md:py-16 lg:py-20 pt-36 md:pt-32 lg:pt-36 bg-gradient-to-br from-secondary via-secondary-foreground to-primary text-white">
        <AnimatedGridPattern className="absolute inset-0 z-0 opacity-40" />

        <Link
          href="/blog"
          className="absolute top-24 left-4 md:top-20 lg:top-24 md:left-8 lg:left-20 z-10"
        >
          <Button
            variant="outline"
            size="lg"
            className="group bg-white/10 border-white/20 hover:bg-white/20 text-white hover:text-white transition-all duration-300 ease-in-out"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-4 text-center relative z-10">{post.title}</h1>
        <div className="mb-4 flex font-bold items-center text-white relative z-10">
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{post.estimatedReadingTime} min read</span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            width={800}
            height={400}
            className="w-full relative z-10 h-auto mb-8 rounded-lg -mt-16 md:-mt-24"
          />
        )}
        <div className="prose max-w-none">
          <PortableText
            value={post.content}
            // @ts-ignore
            components={portableTextComponents}
          />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Author</h2>
          <div className="flex items-center">
            {post.author?.image && (
              <Image
                src={urlFor(post.author.image).width(50).height(50).url()}
                alt={post.author.name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
            )}
            <span className="text-lg">{post.author?.name || 'Raleigh AI Solutions'}</span>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category: string) => (
              <span key={category} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

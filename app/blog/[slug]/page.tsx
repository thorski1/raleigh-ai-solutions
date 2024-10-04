import { trpc } from '@/trpc/server';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { PortableText, PortableTextMarkComponentProps } from '@portabletext/react';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { portableTextComponents } from '@/lib/portable-text.config';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await trpc.getPostBySlug({ slug: params.slug });

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  return (
    <article>
      <div className="px-8 md:px-16 lg:px-24 py-8 flex flex-col items-center justify-center md:py-16 lg:py-20 pt-28 md:pt-32 lg:pt-36 bg-gradient-to-br from-secondary via-secondary-foreground to-primary text-white">
        <AnimatedGridPattern className="absolute inset-0 z-0 opacity-40" />

        <h1 className="text-4xl font-bold mb-4 text-center">{post.title}</h1>
        <div className="mb-4 flex font-bold items-center text-white">
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
            className="w-full relative z-10 h-auto mb-8 rounded-lg -mt-16  md:-mt-24"
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
            {post.author.image && (
              <Image
                src={urlFor(post.author.image).width(50).height(50).url()}
                alt={post.author.name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
            )}
            <span className="text-lg">{post.author.name}</span>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category: any) => (
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

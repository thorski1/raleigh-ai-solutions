import { trpc } from '@/trpc/server';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { PortableText, PortableTextMarkComponentProps } from '@portabletext/react';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await trpc.getPostBySlug({ slug: params.slug });

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  const portableTextComponents = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).width(800).height(400).url()}
          alt={value.alt || ''}
          width={800}
          height={400}
          className="w-full h-auto my-8 rounded-lg"
        />
      ),
    },
    block: {
      h1: ({ children }: { children: React.ReactNode }) => (
        <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
      ),
      h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
      ),
      h3: ({ children }: { children: React.ReactNode }) => (
        <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>
      ),
      normal: ({ children }: { children: React.ReactNode }) => (
        <p className="mb-4 leading-relaxed">{children}</p>
      ),
      blockquote: ({ children }: { children: React.ReactNode }) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }: { children: React.ReactNode }) => (
        <ul className="list-disc list-inside mb-4">{children}</ul>
      ),
      number: ({ children }: { children: React.ReactNode }) => (
        <ol className="list-decimal list-inside mb-4">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }: { children: React.ReactNode }) => <li className="mb-2">{children}</li>,
      number: ({ children }: { children: React.ReactNode }) => <li className="mb-2">{children}</li>,
    },
    marks: {
      strong: ({ children }: { children: React.ReactNode }) => (
        <strong className="font-semibold">{children}</strong>
      ),
      em: ({ children }: { children: React.ReactNode }) => <em className="italic">{children}</em>,
      code: ({ children }: { children: React.ReactNode }) => (
        <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">{children}</code>
      ),
      link: ({
        children,
        value,
      }: PortableTextMarkComponentProps<{ href: string; _type: string }>) => (
        <a href={value?.href} className="text-blue-500 hover:underline">
          {children}
        </a>
      ),
    },
  };

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

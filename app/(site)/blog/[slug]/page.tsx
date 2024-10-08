import { Metadata, ResolvingMetadata } from 'next'
import { trpc } from '@/trpc/server'
import BlogPostPageClient from './client'
import { urlFor } from '@/sanity/lib/image'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await trpc.getPostBySlug({ slug: params.slug })

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const previousImages = (await parent).openGraph?.images || []

  const ogImageUrl = post.mainImage 
    ? urlFor(post.mainImage).width(1200).height(630).url() 
    : (previousImages[0] as string | URL)

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
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Raleigh AI Solutions Blog`,
      description: post.excerpt,
      images: [ogImageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await trpc.getPostBySlug({ slug: params.slug })

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>
  }

  return <BlogPostPageClient post={post} />
}
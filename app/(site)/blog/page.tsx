import { Metadata } from 'next'
import BlogPageClient from './client'

export const metadata: Metadata = {
  title: 'Blog | Raleigh AI Solutions',
  description: 'Insights, trends, and news on Artificial Intelligence transforming businesses in Raleigh and beyond.',
  openGraph: {
    title: 'Blog | Raleigh AI Solutions',
    description: 'Insights, trends, and news on Artificial Intelligence transforming businesses in Raleigh and beyond.',
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
    description: 'Insights, trends, and news on Artificial Intelligence transforming businesses in Raleigh and beyond.',
    images: ['https://www.raleighai.solutions/thumbnail-1.png'],
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}

import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { db } from '@/lib/db';
import { contacts, newsletter_subscribers } from '@/lib/db/schema';
import { client } from '@/sanity/lib/client';

export const appRouter = createTRPCRouter({
  submitContactForm: baseProcedure
    .input(z.object({ name: z.string(), email: z.string(), message: z.string() }))
    .mutation(async ({ input }) => {
      const { name, email, message } = input;
      const contactAdded = await db.insert(contacts).values({
        name,
        email,
        message,
      });
      console.log('Received contact form data:', contactAdded);
      return { success: true };
    }),

  getPosts: baseProcedure.query(async () => {
    const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "author": author->name,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180)
    }`);
    return posts;
  }),

  getPostBySlug: baseProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        "author": author->{name, "image": image.asset->url},
        "categories": categories[]->title,
        "mainImage": mainImage.asset->url,
        content[]{
          ...,
          _type == "image" => {
            "url": asset->url,
            "alt": asset->alt
          }
        },
        "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180)
      }`, { slug: input.slug });
      return post;
    }),

  subscribeToNewsletter: baseProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      const { email } = input;
      try {
        await db.insert(newsletter_subscribers).values({ email });
        return { success: true };
      } catch (error) {
        console.error('Error subscribing to newsletter:', error);
        return { success: false, error: 'Failed to subscribe. Email may already be registered.' };
      }
    }),
});

export type AppRouter = typeof appRouter;

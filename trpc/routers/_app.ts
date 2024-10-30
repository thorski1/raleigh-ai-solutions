import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { db } from '@/lib/db';
import { contacts, newsletter_subscribers, gated_asset_requests } from '@/lib/db/schema';
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

  getPostBySlug: baseProcedure.input(z.object({ slug: z.string() })).query(async ({ input }) => {
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
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
      }`,
      { slug: input.slug },
    );
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

  getGatedAsset: baseProcedure.input(z.object({ slug: z.string() })).query(async ({ input }) => {
    const asset = await client.fetch(
      `*[_type == "gatedAsset" && slug.current == $slug][0]{
        title,
        description,
        teaserContent,
        "assetFile": assetFile.asset->url,
        "slug": slug.current
      }`,
      { slug: input.slug },
    );
    return asset;
  }),

  submitGatedAssetRequest: baseProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        company: z.string(),
        assetSlug: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { name, email, company, assetSlug } = input;
      const requestAdded = await db.insert(gated_asset_requests).values({
        name,
        email,
        company,
        asset_slug: assetSlug,
      });
      console.log('Received gated asset request:', requestAdded);
      return { success: true };
    }),

  getAllServices: baseProcedure.query(async () => {
    const services = await client.fetch(`*[_type == "service"] {
      slug,
      title,
      description,
      longDescription,
      features[] {
        title,
        description,
        icon
      },
      benefits,
      videoSrc,
      "thumbnailSrc": thumbnailSrc.asset->url,
      hoverDescription
    }`);
    return services;
  }),

  getServiceBySlug: baseProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const service = await client.fetch(
        `*[_type == "service" && slug.current == $slug][0] {
          slug,
          title,
          description,
          longDescription,
          features[] {
            title,
            description,
            icon
          },
          benefits,
          videoSrc,
          "thumbnailSrc": thumbnailSrc.asset->url,
          hoverDescription
        }`,
        { slug: input.slug }
      );
      return service;
    }),

  getAllSolutions: baseProcedure.query(async () => {
    const solutions = await client.fetch(`*[_type == "solution"] {
      title,
      slug,  // This should return the slug as a string
      shortDescription,
      benefits,
      contentHeader,
      content,
      icon,
      statValue,
      statLabel,
      traditional,
      aiPowered
    }`);
    return solutions;
  }),

  getSolutionBySlug: baseProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const solution = await client.fetch(
        `*[_type == "solution" && slug.current == $slug][0] {
          title,
          "slug": slug.current,
          shortDescription,
          benefits,
          contentHeader,
          content,
          icon,
          statValue,
          statLabel,
          traditional,
          aiPowered
        }`,
        { slug: input.slug }
      );
      return solution;
    }),

  getAllNewServices: baseProcedure.query(async () => {
    const newServices = await client.fetch(`*[_type == "newService"] {
      title,
      "slug": slug.current,
      description,
      heroTitle,
      heroSubtitle,
      introductionTitle,
      introductionDescription,
      "introductionVideo": introductionVideo.asset->url,
      stepsTitle,
      stepsDescription,
      steps[] {
        title,
        description
      },
      keyFeatures[] {
        feature
      },
      technologiesUsed[] {
        name,
        "icon": icon.asset->url
      },
      whyChooseUs,
      ctaTitle,
      ctaButton,
      "solutions": solutions[]-> {
        "slug": slug.current,
        title,
        summary,
        heroSubtitle,
        icon,
        kpi
      }
    }`);
    return newServices;
  }),

  getNewServiceBySlug: baseProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const newService = await client.fetch(
        `*[_type == "newService" && slug.current == $slug][0] {
          title,
          "slug": slug.current,
          description,
          heroTitle,
          heroSubtitle,
          introductionTitle,
          introductionDescription,
          "introductionVideo": introductionVideo.asset->url,
          stepsTitle,
          stepsDescription,
          steps[] {
            title,
            description
          },
          keyFeatures[] {
            feature
          },
          technologiesUsed[] {
            name,
            "icon": icon.asset->url
          },
          whyChooseUs,
          ctaTitle,
          ctaButton,
          "solutions": solutions[]-> {
            "slug": slug.current,
            title,
            summary,
            icon,
            kpi,
            heroSubtitle
          }
        }`,
        { slug: input.slug }
      );
      return newService;
    }),

  getAllNewSolutions: baseProcedure.query(async () => {
    const newSolutions = await client.fetch(`*[_type == "newSolution"] {
      title,
      slug,
      heroTitle,
      heroSubtitle,
      problemTitle,
      problemDescription,
      "problemVideo": problemVideo.asset->url,
      stepsTitle,
      steps[] {
        title,
        description
      },
      featuresTitle,
      features[] {
        feature
      },
      technologiesUsedTitle,
      technologiesUsed[] {
        name,
        "icon": icon.asset->url
      },
      ctaTitle,
      ctaButton,
      kpi,
      icon,
      summary
    }`);
    return newSolutions;
  }),

  getNewSolutionBySlug: baseProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const newSolution = await client.fetch(
        `*[_type == "newSolution" && slug.current == $slug][0] {
          title,
          slug,
          heroTitle,
          heroSubtitle,
          problemTitle,
          problemDescription,
          "problemVideo": problemVideo.asset->url,
          stepsTitle,
          steps[] {
            title,
            description
          },
          featuresTitle,
          features[] {
            feature
          },
          technologiesUsedTitle,
          technologiesUsed[] {
            name,
            "icon": icon.asset->url
          },
          ctaTitle,
          ctaButton,
          kpi,
          icon,
          summary
        }`,
        { slug: input.slug }
      );
      return newSolution;
    }),
});

export type AppRouter = typeof appRouter;

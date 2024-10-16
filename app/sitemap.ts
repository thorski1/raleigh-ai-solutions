
import { Service } from '@/lib/services';
import { getSolutionSlugs } from '@/lib/solutions-data';
import { trpc } from '@/trpc/server';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://raleighai.solutions';

  // Static routes
  const routes = [
    '',
    '/solutions',
    '/about-us',
    '/services',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // Dynamic routes for solutions 
  const solutionsSlug = await getSolutionSlugs(); // You'll need to implement this function
  const servicesSlug = await trpc.getAllServices(); // You'll need to implement this function
  const solutionRoutes = solutionsSlug.map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date().toISOString(),
  }));
    
  const serviceRoutes = servicesSlug.map((service: Service) => ({
    url: `${baseUrl}/services/${service.slug.current}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...solutionRoutes, ...serviceRoutes];
}
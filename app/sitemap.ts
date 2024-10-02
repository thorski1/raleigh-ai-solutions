import { getAllServices } from '@/lib/services';
import { getSolutionSlugs } from '@/lib/solutions-data';
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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // Dynamic routes for solutions
  const solutionsSlug = await getSolutionSlugs(); // You'll need to implement this function
  const servicesSlug = await getAllServices(); // You'll need to implement this function
  const solutionRoutes = solutionsSlug.map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date().toISOString(),
  }));
    
  const serviceRoutes = servicesSlug.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...solutionRoutes, ...serviceRoutes];
}

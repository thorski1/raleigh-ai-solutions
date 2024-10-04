import { getAllServices } from '@/lib/services';
import { getSolutionSlugs } from '@/lib/solutions-data';
import { trpc } from '@/trpc/client';
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
  const blogSlug = await trpc.getPosts.useQuery(); // You'll need to implement this function
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

  const blogRoutes = blogSlug.data?.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...solutionRoutes, ...serviceRoutes, ...blogRoutes];
}

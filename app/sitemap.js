// app/sitemap.js

import { getAllGuides } from '@/lib/mdx'; // Make sure this path is correct

const URL = "https://dynamicpassgen.com";

export default async function sitemap() {
  // Get all guide pages
  const guides = getAllGuides().map(guide => ({
    url: `${URL}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedDate).toISOString(),
    changeFrequency: 'monthly', // Or 'weekly' if you update them often
    priority: 0.7,
  }));

  // Define your static pages
  const routes = ['', '/guides', '/tools', '/about'].map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8, // Homepage gets highest priority
  }));

  return [...routes, ...guides];
}

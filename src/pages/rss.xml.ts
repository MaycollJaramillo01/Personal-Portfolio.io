import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, SITE_ORIGIN } from '../config/site';

export async function GET() {
  const posts = await getCollection('blog');

  return rss({
    title: `${SITE.title} | Blog`,
    description: SITE.description,
    site: SITE_ORIGIN,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/blog/${post.slug}`
    })),
    customData: `<language>es</language>`
  });
}

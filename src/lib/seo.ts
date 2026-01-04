import type { CollectionEntry } from 'astro:content';
import { SITE, SITE_ORIGIN } from '../config/site';

export const defaultOgImage = '/og-default.png';

export const absoluteUrl = (path: string) => new URL(path, SITE_ORIGIN).toString();

export type StructuredData = Record<string, unknown>;

export const personJsonLd = (): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.author,
  jobTitle: SITE.role,
  email: SITE.email,
  telephone: SITE.phone,
  url: SITE_ORIGIN,
  address: SITE.location,
  sameAs: [SITE.social.linkedin, SITE.social.github],
  knowsAbout: [
    'Technical SEO',
    'Web Accessibility',
    'Shopify Liquid',
    'WordPress',
    'React',
    'Astro',
    'Tailwind CSS',
    'GHL',
    'WhatsApp Business API',
    'AEM',
    'CRO'
  ]
});

export const websiteJsonLd = (): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.title,
  url: SITE_ORIGIN
});

export const profilePageJsonLd = (params: {
  title: string;
  description: string;
  path: string;
}): StructuredData => {
  const person = personJsonLd();
  const { ['@context']: _context, ...personData } = person;

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: params.title,
    description: params.description,
    url: absoluteUrl(params.path),
    about: personData
  };
};

export const breadcrumbJsonLd = (items: { name: string; path: string }[]): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path)
  }))
});

export const articleJsonLd = (post: CollectionEntry<'blog'>): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.data.title,
  description: post.data.excerpt,
  datePublished: post.data.date,
  dateModified: post.data.updated ?? post.data.date,
  url: absoluteUrl(`/blog/${post.slug}`),
  author: personJsonLd(),
  inLanguage: post.data.lang ?? 'es'
});

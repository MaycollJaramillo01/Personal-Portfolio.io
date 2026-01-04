import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      tags: z.array(z.string()),
      date: z.date(),
      updated: z.date().optional(),
      lang: z.enum(['es', 'en']).default('es'),
      seo: z.object({
        title: z.string(),
        description: z.string()
      })
    })
});

const caseStudies = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      client: z.string().optional(),
      industry: z.string(),
      role: z.string(),
      stack: z.array(z.string()),
      highlights: z.array(z.string()),
      results: z.array(z.string()),
      situation: z.string(),
      task: z.string(),
      action: z.string(),
      outcome: z.string(),
      status: z.enum(['public', 'confidential', 'draft']).default('public'),
      date: z.date(),
      links: z
        .object({
          live: z.string().url().optional(),
          repo: z.string().url().optional()
        })
        .optional(),
      seo: z.object({
        title: z.string(),
        description: z.string()
      })
    })
});

export const collections = { blog, 'case-studies': caseStudies };

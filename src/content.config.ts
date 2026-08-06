import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const episodes = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/episodes' }),
  schema: z.object({
    number: z.number().int().min(1).max(8),
    title: z.string(),
    era: z.string(),
    status: z.enum(['full', 'stub']),
    accent: z.enum(['phosphor', 'amber', 'py-blue', 'py-yellow']),
  }),
});

export const collections = { episodes };

import { defineCollection, z } from 'astro:content';

const artists = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    birthDate: z.date(), // Accepts date objects
    deathDate: z.date().optional(),
    youtubeUrl: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

const paintings = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    artist: z.string(),
    date: z.date(), // Accepts date strings
    imageUrl: z.string().url(),
    youtubeUrl: z.string().url().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = { artists, paintings };
import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  updated: z.date().optional(),
  section: z.enum(['thinking', 'systems', 'making', 'notes', 'logs']),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const thinking = defineCollection({ schema: postSchema });
const systems = defineCollection({ schema: postSchema });
const making = defineCollection({ schema: postSchema });
const notes = defineCollection({ schema: postSchema });
const logs = defineCollection({ schema: postSchema });

export const collections = {
  thinking,
  systems,
  making,
  notes,
  logs,
};

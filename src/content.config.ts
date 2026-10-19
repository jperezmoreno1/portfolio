import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tech: z.array(z.string()),
        url: z.url().optional(),
        repo: z.url().optional(),
        featured: z.boolean().default(false),
        order: z.int(),
    })
});

export const collections = { projects };
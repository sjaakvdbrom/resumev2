import { z, defineCollection } from "astro:content";

const experienceCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number(),
    from: z.union([z.string(), z.number()]),
    to: z.union([z.string(), z.number()]),
    functions: z.array(
      z.object({
        title: z.string(),
      })
    ),
  }),
});

const aboutCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    availableForWork: z.boolean(),
    tagline: z.string(),
    location: z.string(),
    description: z.string(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  experience: experienceCollection,
  about: aboutCollection,
  blog: blogCollection,
};

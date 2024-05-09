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

export const collections = {
  experience: experienceCollection,
};

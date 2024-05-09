import { z, defineCollection } from "astro:content";

const experienceCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    functions: z.array(
      z.object({
        title: z.string(),
        from: z.union([z.string(), z.number()]),
        to: z.union([z.string(), z.number()]),
      })
    ),
  }),
});

export const collections = {
  experience: experienceCollection,
};

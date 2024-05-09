import { z, defineCollection } from "astro:content";

const experienceCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    functions: z.array(z.string()),
  }),
});

export const collections = {
  experience: experienceCollection,
};

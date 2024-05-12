import { defineConfig } from "astro/config";
import { imageService } from "@unpic/astro/service";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    service: imageService(),
  },
});

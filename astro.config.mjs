import { defineConfig } from "astro/config";
import { imageService } from "@unpic/astro/service";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  integrations: [tailwind(), icon()],
  image: {
    service: imageService(),
  },
});

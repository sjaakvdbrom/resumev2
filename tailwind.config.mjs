import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        success: "#00dd55",
        warning: "#db6c0a",
      },
      spacing: {
        "section-mobile": defaultTheme.spacing[6],
        "section-desktop": defaultTheme.spacing[14],
      },
    },
  },
  plugins: [],
};

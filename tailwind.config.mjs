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
        contributions: {
          0: "#161b22",
          1: "#0e4429",
          2: "#006d32",
          3: "#26a641",
          4: "#39d353",
        },
      },
      spacing: {
        "section-mobile": defaultTheme.spacing[6],
        "section-desktop": defaultTheme.spacing[14],
        "grid-gutter": defaultTheme.spacing[4],
        "card-mobile": defaultTheme.spacing[8],
        "card-desktop": defaultTheme.spacing[10],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

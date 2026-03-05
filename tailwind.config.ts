// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // darkMode removed - handled in CSS
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ... your theme config
    },
  },
  plugins: [],
};

export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-dm)", "system-ui", "sans-serif"],
        display: ["var(--font-orbitron)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "jelly-glow":
          "linear-gradient(135deg, rgba(255,105,180,0.35) 0%, rgba(160,32,240,0.25) 45%, rgba(0,212,255,0.25) 100%)",
      },
      boxShadow: {
        neon: "0 0 32px rgba(255, 105, 180, 0.35), 0 0 64px rgba(160, 32, 240, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;

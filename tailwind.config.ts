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
        navy: {
          900: "#050C1A",
          800: "#0A192F",
        },
        slate: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
        },
        gold: {
          400: "#D4AF37",
          500: "#C5A059",
          600: "#B08D48",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(to right, #C5A059, #D4AF37, #C5A059)",
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [],
};
export default config;

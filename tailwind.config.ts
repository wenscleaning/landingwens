import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B396A",
        gold: "#C9A84C",
        "gold-hover": "#b8943d",
        "navy-dark": "#0F2347",
        "navy-light": "#24508A",
        "bg-light": "#F6F7F8",
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)", "Nunito Sans", "sans-serif"],
        heading: ["var(--font-nunito)", "Nunito", "sans-serif"],
      },
      boxShadow: {
        gold: "0 4px 24px rgba(201,168,76,0.25)",
        "gold-lg": "0 8px 40px rgba(201,168,76,0.35)",
        navy: "0 4px 24px rgba(15,35,71,0.20)",
        "navy-xl": "0 20px 60px rgba(15,35,71,0.30)",
        card: "0 10px 25px -5px rgba(27,57,106,0.10), 0 8px 10px -6px rgba(27,57,106,0.08)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom right, #0F2347, #24508A)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

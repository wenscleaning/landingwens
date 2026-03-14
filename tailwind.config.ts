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
        "sky-blue": "#2E9CCA",
        mint: "#2DC4A4",
        "deep-navy": "#1B3A6B",
        "light-bg": "#F4FAFD",
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)", "Nunito Sans", "sans-serif"],
        heading: ["var(--font-nunito)", "Nunito", "sans-serif"],
      },
      boxShadow: {
        "sky-card":
          "0 10px 25px -5px rgba(46,156,202,0.1), 0 8px 10px -6px rgba(46,156,202,0.1)",
        "sky-lg": "0 20px 60px -10px rgba(46,156,202,0.2)",
        "mint-lg": "0 10px 30px -5px rgba(45,196,164,0.2)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

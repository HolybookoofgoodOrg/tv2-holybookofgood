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
        background: "#08080a",
        surface: "#121216",
        "surface-light": "#1c1c24",
        cosmic: {
          purple: "#a855f7",
          pink: "#ec4899",
          amber: "#f59e0b",
          cyan: "#06b6d4",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shorts-pulse": "shortsPulse 2.5s infinite",
        "glow-fade": "glowFade 4s ease-in-out infinite",
      },
      keyframes: {
        shortsPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(236, 72, 153, 0.4)" },
          "50%": { boxShadow: "0 0 18px 5px rgba(168, 85, 247, 0.6)" },
        },
        glowFade: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

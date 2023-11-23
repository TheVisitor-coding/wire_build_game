import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kreon: ["Abel", "sans-serif"],
        bahaus: ["Bauhaus_93", "sans-serif"],
      },
      backgroundImage: {
        "bg-box": "url('/bg-image.webp')",
      },
      backgroundColor: {
        red: "#DF623B",
        blue: "#61ABF0",
        grey: "#F5F3F3",

      },
      boxShadow: {
        "chat": "-6px 7px 14px 2px rgba(0, 0, 0, 0.25)"
      },
      textColor: {
        black: "#484848"
      }
    },
  },
  plugins: [],
};
export default config;

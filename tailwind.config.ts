import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyInk: {
          50: "#eef7ff",
          100: "#d9efff",
          200: "#b9e1ff",
          300: "#88cfff",
          400: "#53b6ff",
          500: "#2a9aff",
          600: "#127be7",
          700: "#0b60b6",
          800: "#0d528f",
          900: "#0f466f"
        }
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,.08)",
      },
      borderRadius: {
        card: "1.25rem",
      }
    },
  },
  plugins: [],
};
export default config;
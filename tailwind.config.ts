import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {},
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        museo_muderno: ["var(--font-museo-moderno)"],
      },
      colors: {
        primary: "#a30bb0",
      },
      boxShadow: {
        large: "0 150px 150px #e945e333",
        "large-lighter": "0 150px 150px #e945e355",
        dark: "0 20px 40px #010824",
      },
      backgroundImage: {
        "gradient-purple-orange":
          "linear-gradient(to right, #0a060a, #200820);",
        "purple-black": "linear-gradient(to right, #a30bb0, #0a060a);",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

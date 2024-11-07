import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        lg: "var(--font-size-lg)",
        md: "var(--font-size-md)",
        sm: "var(--font-size-sm)",
        xs: "var(--font-size-xs)",
        xxs: "var(--font-size-xxs)",
        xxxs: "var(--font-size-xxxs)",
      },
    },
    screens: {
      "2xl": { max: "1535px", min: "1279px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px", min: "1023px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px", min: "767px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px", min: "639px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    animation: {
      "from-right-to-center": "from-right-to-center 0.9s ease-in-out forwards",
      "width-scale-up": "width-scale-up 0.6s ease-in-out forwards",
      "width-scale-down": "width-scale-down 0.6s ease-in-out forwards",
      "appear-from-top": "appear-from-top 0.6s ease-in-out forwards",
      "appear-from-left": "appear-from-left 0.6s ease-in-out forwards",
      "disappear-to-right": "disappear-to-right 0.6s ease-in forwards",
    },
    keyframes: {
      "from-right-to-center": {
        "0%": {
          transform: "translateY(10%) rotate(5deg)",
        },
        "99%": { scale: "1" },
        "100%": { transform: "translateY(100%)", scale: "0" },
      },
      "width-scale-up": {
        "0%": {
          width: "0",
        },
        "100%": { width: "400px" },
      },
      "width-scale-down": {
        "0%": {
          width: "400px",
        },
        "100%": { width: "0" },
      },
      "appear-from-top": {
        "0%": {
          transform: "translateY(-100%)",
        },
        "100%": { transform: "translateY(0)" },
      },
      "appear-from-left": {
        "0%": {
          transform: "translateX(-100%)",
        },
        "100%": { transform: "translateX(0)" },
      },
      "disappear-to-right": {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": { transform: "translateX(100%)" },
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
export default config;

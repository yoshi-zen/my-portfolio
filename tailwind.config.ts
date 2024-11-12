import { Hedvig_Letters_Sans } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        lg: "var(--font-size-lg)",
        md: "var(--font-size-md)",
        sm: "var(--font-size-sm)",
        xs: "var(--font-size-xs)",
        xxs: "var(--font-size-xxs)",
        xxxs: "var(--font-size-xxxs)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
    screens: {
      "2xl": {
        max: "1535px",
        // min: "1279px",
      },
      xl: {
        max: "1279px",
        // min: "1023px",
      },
      lg: {
        max: "1023px",
        // min: "767px",
      },
      md: {
        max: "767px",
        // min: "639px",
      },
      sm: {
        max: "639px",
      },
    },
    animation: {
      "from-right-to-center": "from-right-to-center 0.9s ease-in-out forwards",
      "width-scale-up": "width-scale-up 0.6s ease-in-out forwards",
      "width-scale-down": "width-scale-down 0.6s ease-in-out forwards",
      "height-scale-up": "height-scale-up 0.6s ease-in-out forwards",
      "appear-from-top": "appear-from-top 0.6s ease-in-out forwards",
      "appear-from-left": "appear-from-left 0.6s ease-in-out forwards",
      "disappear-to-right": "disappear-to-right 0.6s ease-in forwards",
      rotate: "rotate 1s linear infinite",
    },
    keyframes: {
      "from-right-to-center": {
        "0%": {
          transform: "translateY(10%) rotate(5deg)",
        },
        "99%": {
          scale: "1",
        },
        "100%": {
          transform: "translateY(100%)",
          scale: "0",
        },
      },
      "width-scale-up": {
        "0%": {
          width: "0",
        },
        "100%": {
          // width: "400px",
        },
      },
      "width-scale-down": {
        "0%": {
          width: "400px",
        },
        "100%": {
          width: "0",
        },
      },
      "height-scale-up": {
        "0%": {
          height: "0",
        },
        "100%": {
          height: "90%",
        },
      },
      "appear-from-top": {
        "0%": {
          transform: "translateY(-100%)",
        },
        "100%": {
          transform: "translateY(0)",
        },
      },
      "appear-from-left": {
        "0%": {
          transform: "translateX(-100%)",
        },
        "100%": {
          transform: "translateX(0)",
        },
      },
      "disappear-to-right": {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(100%)",
        },
      },
      rotate: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "30%": {
          transform: "rotate(60deg)",
        },
        "50%": {
          transform: "rotate(180deg)",
        },
        "70%": {
          transform: "rotate(270deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    },
  },
  plugins: [require("tailwind-clip-path"), require("tailwindcss-animate")],
};
export default config;

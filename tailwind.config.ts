import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    animation: {
      'slide-out-right-early': 'slide-out-right 3.6s ease forwards',
      'slide-out-right': 'slide-out-right 4s ease forwards',
      'slide-out-right-delay': 'slide-out-right 4.4s ease forwards',
      'slide-out-right-so-delay': 'slide-out-right 4.8s ease forwards',
      'fade-in-out': 'fade-in-out 4s ease forwards',
      'fade-in': 'fade-in 1s ease forwards',
      shrink: 'shrink 0.3s ease 4.5s forwards',
      'move-to-right': 'move-to-right 0.7s ease 4s forwards',
    },
    keyframes: {
      'slide-out-right': {
        '80%': {
          transform: 'translateX(0)',
          opacity: '1',
        },
        '100%': {
          transform: 'translateX(100vw)',
          opacity: '0.9',
        },
      },
      'fade-in-out': {
        '0%': {
          opacity: '0',
        },
        '20%': {
          opacity: '0',
        },
        '40%': {
          opacity: '1',
        },
        '80%': {
          opacity: '1',
        },
        '100%': {
          opacity: '0',
        },
      },
      'fade-in': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      shrink: {
        '100%': {
          width: '0',
        },
      },
      'move-to-right': {
        '0%': {
          transform: 'translate(0, -50%)',
        },
        '50%': {
          width: '25%',
        },
        '100%': {
          transform: 'translate(25vw, -50%)',
        },
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
};
export default config;

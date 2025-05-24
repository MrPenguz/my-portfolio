/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00FF9D', // Bright neon green
          light: '#50FFB9', // Lighter neon green
          dark: '#00CC7D', // Darker neon green
        },
        dark: {
          DEFAULT: '#0A0A0A', // Almost black
          light: '#1A1A1A', // Dark gray
          darker: '#050505', // Darkest black
        },
        light: {
          DEFAULT: '#FFFFFF', // Pure white
          dark: '#CCCCCC', // Light gray
          muted: '#999999', // Medium gray
        },
      },
    },
  },
  plugins: [],
};

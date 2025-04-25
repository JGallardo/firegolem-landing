/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fire': {
          DEFAULT: '#b82e00',
          light: '#ff4d1c',
          dark: '#931f00',
        }
      }
    },
  },
  plugins: [],
} 
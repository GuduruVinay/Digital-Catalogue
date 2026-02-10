/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#059669', // Emerald 600 - Trustworthy Green
        primaryDark: '#047857', // Emerald 700 - Hover state
        secondary: '#1e293b', // Slate 800 - Professional Dark Grey for text
        lightBg: '#f8fafc', // Slate 50 - Light background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure you import Inter in index.css if you want it
      }
    },
  },
  plugins: [],
}
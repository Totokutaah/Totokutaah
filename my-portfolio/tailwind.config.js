/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable dark mode via class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#0ff', // customize your neon blue color here
      },
      dropShadow: {
        neon: '0 0 8px #0ff',
      }
    },
  },
  plugins: [],
}

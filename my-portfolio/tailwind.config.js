/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  // Add this safelist property
  safelist: [
    'bg-gray-100',
    'text-black',
    'dark:bg-black',
    'dark:text-white',
    // Add any other classes that are being purged incorrectly
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
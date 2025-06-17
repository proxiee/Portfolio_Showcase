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
  // Add new theme classes if they are dynamically constructed and might be purged
    'bg-theme-bg', // Example if needed
    'text-theme-primary' // Example if needed
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#FAFBFD',
        'light-text-primary': '#1A202C',
        'light-text-secondary': '#4A5568',
        'light-accent': '#000000',
        'light-svg-pattern': '#2D3748',
        'light-tesseract': '#C5C5C5',
        'light-particles': '#000000',
        // It's good practice to define dark theme colors here too for consistency
        'dark-bg': '#000000',
        'dark-text-primary': '#FFFFFF',
        'dark-text-secondary': '#A0AEC0', // Consistent with CSS var
        'dark-accent': '#FFFFFF', // Consistent with CSS var
        'dark-svg-pattern': '#A0AEC0', // Consistent with CSS var
        'dark-tesseract': '#FFFFFF',
        'dark-particles': '#FFFFFF',
        // Card backgrounds
        'light-card-bg': 'rgba(255, 255, 255, 0.8)',
        'dark-card-bg': 'rgba(20, 20, 20, 0.7)',
        // Transition and Glitch effect colors
        'light-transition-bg': '#FAFBFD', // same as light-bg
        'dark-transition-bg': '#000000',  // same as dark-bg
        'light-glitch-block': '#1A202C', // same as light-text-primary
        'dark-glitch-block': '#000000',   // same as dark-bg
      }
    },
  },
  plugins: [],
}
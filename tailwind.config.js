/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './node_modules/@heroicons/react/24/outline/*.js',

  ],
  darkMode: 'class', // Enables dark mode based on the 'dark' class
  theme: {
    extend: {
      colors: {
        'purple-blue': '#6A5ACD', // SlateBlue
        'salmon': '#FA8072',      // Salmon color
        'scrollbar-dark': '#1a1a1a',

      },
      
    },
    container: {
      center: true,
      padding: '1rem',
    },

  },
  plugins: [],
};

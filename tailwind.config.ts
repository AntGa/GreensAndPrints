/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        //i am no designer
        'deep-forest-green': 'rgba(47, 79, 79, 0.7)',
        'soft-ivory': '#F7F1E3',
        'charcoal-gray': '#333333',
        'dark-taupe': '#E0D9C8',
        'classy-green': '#2F4F4F',
      },
      fontFamily: {
        playFair: ['var(--font-playFair)'],
        geist: ['var(--font-geist-sans)'],
      },
    },
  },
  plugins: [],
};

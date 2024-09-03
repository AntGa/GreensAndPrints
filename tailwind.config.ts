/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'deep-forest-green': 'rgba(47, 79, 79, 0.7)',
        'solid-deep-forest-green': '#2F4F4F',
        'creamy-white': '#FAF9F6',
        'gold-accent': '#DAA520',
        'moss-green': '#8FBC8F',
        'warm-clay': '#C19A6B',
        'blush-pink': '#FFC0CB',
      },
      fontFamily: {
        playFair: ['var(--font-playFair)'],
      },
    },
  },
  plugins: [],
}

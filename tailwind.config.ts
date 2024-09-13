/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'deep-forest-green': 'rgba(47, 79, 79, 0.7)',
        'solid-deep-forest-green': '#2D4739',
        'creamy-white': '#FCF7E6',
      },
      fontFamily: {
        playFair: ['var(--font-playFair)'],
        geist: ['var(--font-geist-sans)'],
      },
    },
  },
  plugins: [],
}

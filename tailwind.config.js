/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: 'var(--font-serif)',
        sans: 'var(--font-sans)',
      },
      colors: {
        cream: 'var(--color-cream)',
        ink: 'var(--color-ink)',
        forest: 'var(--color-forest)',
        gold: 'var(--color-gold)',
        muted: 'var(--color-muted)',
      },
    },
  },
  plugins: [],
};

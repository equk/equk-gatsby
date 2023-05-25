/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/templates/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgColor: 'var(--theme-bg)',
        textColor: 'var(--theme-text)',
        link: 'var(--theme-link)',
        accent: 'var(--theme-accent)',
        'accent-2': 'var(--theme-accent-2)',
      },
      fontFamily: {
        // Add any custom fonts here
        sans: [...fontFamily.sans],
        serif: [...fontFamily.serif],
        mono: [...fontFamily.mono],
      },
    },
  },
  plugins: [],
}

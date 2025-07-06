/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'bruno': ['Bruno Ace', 'sans-serif'],
      'inter' : ["Inter Tight", 'sans-serif']
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-textshadow')
  ],
}
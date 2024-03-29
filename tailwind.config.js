/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': 'Ubuntu, sans-serif',
    },
    extend: {
      colors: {
        'base:': '#CCCCCC',
        'one': '#853BCE',
        'two': '#181622',
        'three': '#13111C',
        'four': '#9F76D9'
      },
    },
  },
  plugins: [],
}

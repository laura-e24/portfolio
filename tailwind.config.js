/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': 'Ubuntu, sans-serif',
    },
    extend: {
      colors: {
        'one': '#853BCE',
        'two': '#181622',
        'three': '#13111C',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        fredoka: ['Fredoka One', 'cursive'], // Add Rubik as a custom font
      },
      screens: {
        'ms': {'max': '500px'}, // For devices smaller than 640px
      },
    },
  },
  plugins: [],
}
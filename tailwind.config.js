/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      colors: {
        langue: '#EEEEEE',
        corp: '#444444',
        premier: '#853B8F',
        hover: '#f39659'
      },
      fontFamily: {
        montserrat: ['montserrat']
      }
    },
  },
  plugins: [],
}


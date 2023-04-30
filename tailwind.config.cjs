/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkGreen: '#254135',
      green: '#31795A',
      black: '#0F1620',
      grey: '#C4C4C4',
      lightGreen: '#E9F2EF',
      yellowGreen: '#D2F34C',
      lightGrey: '#F5F5F5',
      limeGreen: '#00B454',
      white: '#FFFFFF',
      greyGreen: '#93AD9F',
      brown: '#614137'
    },
    extend: {
      fontFamily: {
        garamond: "'EB Garamond', serif",
        // gordita: 'Gordita Regular'


      }
    },
  },
  plugins: [],
}

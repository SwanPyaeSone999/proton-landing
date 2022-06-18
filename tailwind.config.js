const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [
    './src/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
          cyan: colors.cyan,
      },
      fontFamily:{
        sans: ['Founders Grotesk Medium',...defaultTheme.fontFamily.sans],
      }, 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

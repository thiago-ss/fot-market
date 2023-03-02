/** @type {import('tailwindcss').Config} */
module.exports = {content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif']
    },
    backgroundImage: {
      "hero": "url('/hero-image.png')",
    },
  },
},
screens: {
  'sm': { 'max': "374px" },

  'md': { 'min': "374.01px", 'max': "767px" },

  'lg': { 'min': "767.01px", 'max': "1024px" },

  'xl': { 'min': "1024.01px", 'max': "1535px" },

  "2xl": { 'min': "1536px" },
}, 
}
  


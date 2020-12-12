 // tailwind.config.js
 module.exports = {
   purge: ['./pages/**/*.js', './components/**/*.js'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
     extend: {
      colors : {
        primary: "#1FC157",
        secondary: "#2c2a68" 
      },
     },
   },
   variants: {
     extend: {
      transform: ['hover', 'focus','responsive',"group-hover"],
     },
   },
   plugins: [],
 }
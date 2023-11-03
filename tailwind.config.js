module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        'brand': "#2e16e6"
      }
    },
    
    fontFamily: {
      sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      display: [
        ['Manrope' , 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      ],
    },

  },
  variants: {
    extend: {
     display: ['group-focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        'brand': "#2e16e6"
      }
    },
    
    fontFamily: {
      sans: ['Mona Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      display: [
        ['Mona Sans', ...defaultTheme.fontFamily.sans],
        { fontVariationSettings: '"wdth" 125' },
      ],
    },

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
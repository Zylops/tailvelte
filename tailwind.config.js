module.exports = {
  mode: 'jit',
  purge: ['src/**.svelte', 'src/**/**.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': 'Montserrat'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

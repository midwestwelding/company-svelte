module.exports = {
  mode: 'jit', // ⚠ Make sure to have this
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#0a0a0a',
        },
        blue: {
          DEFAULT: '#002144',
          transparent: 'rgba(0,17,68,0.45)'
        },
        darkGray: {
          DEFAULT: '#2d2d2d',
        },
        red: {
          DEFAULT: '#490000',
          transparent: 'rgba(73,0,0,0.78)'
        },
        white: {
          DEFAULT: '#fff'
        }
      },
      maxWidth: {
        'ninety': '90%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

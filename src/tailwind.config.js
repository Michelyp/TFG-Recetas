const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  prefix: 'tw-',
  purge: ['./**/*.html', './**/*.vue'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      roboto: ['Roboto', ...fontFamily.mono],
      poppins: ['Poppins', ...fontFamily.sans]
    },
    colors: {
      primary: '#6D2A2A',
      white: '#FFFFFF',
      gray: '#F4F1F1',
      dark: '#BEBCBC',
      black: '#1F2937',
      transparent: 'transparent'
    },
    borderRadius: {
      default: '12px',
      full: '50%'
    },
    extend: {
      maxWidth: {
        '2xs': '15rem'
      }
    }
  },
  variants: {},
  plugins: []
}

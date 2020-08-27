module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    darkSelector: '.dark-mode',
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      header: ['Roboto Condensed', 'Open Sans', 'sans-serif'],
      body: ['Roboto Condensed', 'Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          lighter: '#4FD1C5',
          default: '#38B2AC',
          darker: '#319795',
        },
        secondary: {
          lighter: '#63B3ED',
          default: '#4299E1',
          darker: '#3182CE',
        },
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        }
      },
    },
  },
  variants: {
    backgroundColor: ['dark', 'responsive', 'hover', 'focus'],
    borderColor: [
      'dark',
      'dark-focus-within',
      'responsive',
      'hover',
      'focus',
      'focus-within',
    ],
    borderWidth: ['dark', 'responsive'],
    textColor: ['dark', 'responsive', 'hover', 'focus'],
  },
  corePlugins: {},
  plugins: [require('tailwindcss-dark-mode')()],
}

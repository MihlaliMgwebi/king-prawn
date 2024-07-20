const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'card': '#D9D9D9',
        'primary-btn': '#0E0047'
      } ,
      textColor: {
        'grey': '#9F9F9F',
        'primary': '#3D4451'
      },
      boxShadow: {
        'search-card': '0px 2px 4px 0px rgba(0, 0, 0, 0.25);'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      extend: {
        colors: {
          'primary': '#2f3646',
        },
      },
    }
  },
  plugins: [require('daisyui')],
}


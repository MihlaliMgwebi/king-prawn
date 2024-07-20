const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#2f3646',
      },
    },
  },
  plugins: [require('daisyui')],
}


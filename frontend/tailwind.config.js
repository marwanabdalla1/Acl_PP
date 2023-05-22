/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],

  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')

  ],
}
//you can add repeated styles here using apply
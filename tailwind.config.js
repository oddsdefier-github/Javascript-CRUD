/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./crud.html",
    "./src/**/*.{html,js}",
    "./js/*/.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-font-inter')],
}

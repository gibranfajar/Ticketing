/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'navy': '#16215B',
      'orange': '#F25929',
      'white': '#FFFFFF',
      'light-gray': '#F5F5F7'
    },
    extend: {},
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


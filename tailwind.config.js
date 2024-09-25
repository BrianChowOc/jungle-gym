/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'max-lg': {'max': '1024px'},
      'max-sm': {'max': '640px'},
    },
    extend: {},
  },
  plugins: [],
}


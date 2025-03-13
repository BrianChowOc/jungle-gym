/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        screens: {
      'my-lg': '992px',
      'my-xl': '1265px'
    },
      colors: {
        'yellow': {
          brand: '#faff02',
          footer: '#FFE75F'
        },
        'red': {
          brand: '#BB0000'
        }
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        screens: {
      'my-lg': '992px',
    },
      colors: {
        'yellow': {
          brand: '#faff02',
          footer: '#FFE75F'
        },
      },
    },
  },
  plugins: [],
}


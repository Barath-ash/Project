/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        'Header-color-1': '#8272DA',
        'Header-color-2': '#FD6663',
        'Header-color-3': '#FCA201',
      }
    },
  },
  plugins: [],
}


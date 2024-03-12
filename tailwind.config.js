/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens: {
        sm : "360px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
      },
      spacing: {
        big: "44rem",
      },
    },
    fontFamily: {
      nunito: ['Nunito','sans-serif']
    }
  },
  plugins: [],
}


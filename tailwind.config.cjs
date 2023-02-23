/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{tsx,css,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        "c1": "#FFFFFF",
        "c2": "#FCF8F5",
        "c3": "#F7F1DF",
        "c4": "#E4D0B4",
        "c5": "#7E623C",
        "c6": "#644B2C",
        "c8": "#DC2428",
        "c19": "#2E2E2E",
        "c20": "#111111",
        "c21": "#000000"
      }
    },
  },
  plugins: [],
}

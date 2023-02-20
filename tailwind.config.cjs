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
        "c3": "#F7F1DF",
        "c6": "#644B2C",
        "c8": "#DC2428",
        "c19": "#2E2E2E"
      }
    },
  },
  plugins: [],
}

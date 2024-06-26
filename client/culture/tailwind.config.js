/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        complementary: "#FF0000"
      }
    },
  },
  plugins: [],
}


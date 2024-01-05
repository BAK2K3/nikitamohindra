/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        carmorantGaramond: ["Cormorant Garamond", "sans-serif"],
      },
    },
    colors: {
      customWhite: "#FCF2F2",
      softGreen: "#E8E2C3",
      strongGreen: "#9EB375",
      customBlue: "#3E7578",
      customBlack: "#1B1C1B",
      transparent: "transparent",
    },
  },
  plugins: [],
};

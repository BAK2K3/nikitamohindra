/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
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
      customWhite: "#FFF5EE",
      customBlue: "#3E7578",
      customBlack: "#1B1C1B",
      transparent: "transparent",
    },
  },
  plugins: [],
};

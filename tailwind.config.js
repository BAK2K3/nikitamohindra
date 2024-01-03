/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        LOTO: "url('https://res.cloudinary.com/bak2k3/image/upload/v1704209608/Legacy/The_Legacy_of_the_Ocean_I_-_Cap_d_Antibes_80x60cm_vm17zd.jpg')",
      },
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

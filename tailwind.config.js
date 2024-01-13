/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      color: {
        primary: "#34487F",
        red: "#95000C",
        secondary: "#db4021",
        dark: "#000000",
        stone: "#171717",
        grey: "#206F6F",
      },
      light: {
        100: "#FFFDEE",
        200: "#f2f2f2",
        300: "#E0E0E0",
        400: "#D9D9D9",
        500: "#828282",
      },
    },
  },
  plugins: [],
};

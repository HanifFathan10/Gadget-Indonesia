/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      color: {
        primary: "#090b2c",
        secondary: "#db4021",
        dark: "#212121",
        stone: "#171717",
      },
      light: {
        100: "#ffffff",
        200: "#f2f2f2",
        300: "#E0E0E0",
        400: "#D9D9D9",
        500: "#828282",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Sans", "serif"],
      }
    },
  },
  plugins: [],
};

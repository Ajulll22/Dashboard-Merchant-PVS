/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'primary': "#161A4F",
      'secondary': "#FE721C",

      'u0': "#008FFB",
      'u1': "#00E396",
      'u2': "#FEB019",
      'u3': "#FF6178"
    }
  },
  plugins: [],
});

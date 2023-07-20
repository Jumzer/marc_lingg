/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["LightTalouFont"],
      heading: ["BoldTalouFont"],
    },
    backgroundImage: {
      home_bg: "url('./src/assets/images/R2.jpg')",
    },
  },
  plugins: [],
};

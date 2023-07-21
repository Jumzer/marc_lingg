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
      first_bg: "url('./src/assets/images/R1.jpg')",
      second_bg: "url('./src/assets/images/P3.jpg')",
      third_bg: "url('./src/assets/images/S1.jpg')",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      home_bg: "url('./src/assets/images/R2.jpg')",
      colors: {
        blue: "#022994",
        gray_light: "F9F4EC",
        yellow: "#F8C20D",
        light_blue: "#DADDEB",
        champagne: "#F9F4EC",
        white: "#FFFFFF",
        purple: "#E384E6",
        blue_light: "#CBE6F7",
        brown_light: "#E6B99C",
        red: {
          200: "#fecaca",
          300: "#fca5a5",
        },
        yellowbutton: {
          200: "#fef08a",
        },
        gray: {
          200: "#e2e8f0",
          500: "#64748b",
        },
      },
    },
  },
  plugins: [],
};

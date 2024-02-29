/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      "hero-pattern01": "url('./src/assets/BG01.jpg')",
      "hero-pattern02": "url('./src/assets/BG02.jpg')",
      "sidemenu-pattern": "url('./src/assets/BG03.jpg')",
    },
    fontFamily: {
      yeseva: "Yeseva One",
    },
    boxShadow: {
      "hover-shadow":
        "0 0 5px #fff, 0 0 25px #fff, 0 0 50px #fff, 0 0 200px #fff",
    },
    colors: {
      "c-brown": "#170D08",
    },
  },
  plugins: [],
};

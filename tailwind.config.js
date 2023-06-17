/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      serif: ["Rubik"],
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#1E9ADF",
        secondary: "#F1F2F6",
        hitam: "#212121",
        buttonh: "#33D951",
        button: "#FFC100",
        hoverb: "#33D951",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

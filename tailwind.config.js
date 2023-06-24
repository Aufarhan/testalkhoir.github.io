/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      serif: ["Lato"],
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0f4c82",
        secondary: "#F1F2F6",
        hitam: "#444444",
        buttonh: "#00a550",
        button: "#0f4c82",
        hoverb: "#FFC100",
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1320px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss"), require("autoprefixer")],
};

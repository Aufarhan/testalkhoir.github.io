/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0f4c82",
        secondary: "#0f172a",
        button: "#f59e0b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

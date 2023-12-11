/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};

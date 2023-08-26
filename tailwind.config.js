/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "jet-active": "#0E7297",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};

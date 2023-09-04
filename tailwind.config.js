/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backfacevisibility: {
        "-webkit-backface-visibility": "hidden",
        "backface-visibility": "hidden",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "loading-color":
          "conic-gradient(red, orange, yellow, green, blue, indigo, violet, red)",
      },
    },
  },
  plugins: [],
};

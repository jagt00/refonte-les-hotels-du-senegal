/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Marcellus", "serif"],
        sans: ["Jost", "sans-serif"],
      },
      colors: {
        sand: "#c9a66b",
        ink: "#2b2b28",
      },
    },
  },
  plugins: [],
}

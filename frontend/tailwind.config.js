/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        sand: "#f38525",
        ink: "#1f2938",
        tealbrand: "#2e829f",
        creambrand: "#f7f3ec",
      },
    },
  },
  plugins: [],
}

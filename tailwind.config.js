/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B2FF",
        secondary: "#FFC700",
     },
      fontFamily: {
        'sfpro': ['SF Pro Display', 'sans-serif']
      },
    },
  },
  plugins: [],
}


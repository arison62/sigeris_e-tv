/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        wide: "1440px",
      },
      colors: {
        "secondary": "#4636c9",
        "accent": "#B9C936",
      },
      fontFamily : {
        "montserrat": ["Montserrat", "sans-serif"],
        "palanquin": ["Palanquin", "sans-serif"],
      }
    },
  },
  plugins: [ require('@tailwindcss/forms')],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-1": "#FCFAF7",
        "light-2": "#FEF7EC",
        "light-3": "#FFF4E0",
        "brand-1": "#FFE7C2",
        "brand-2": "#FFC53D",
        "brand-3": "#FF7347",
        "dark-1": "#38302E",
        "dark-2": "#55504E",
      },
    },
    fontFamily: {
      sans: ["Montserrat Alternates", "sans-serif", "ui-sans-serif"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontWeight: {
        normal: 300,
        bold: 400,
        bolder: 600,
      },
    },
  },
  plugins: [],
};

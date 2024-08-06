/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: { 100: "#fff3e7", 500: "#ffad60" },
        gray: {
          150: "#e9e9eb",
          700: "#7c7e8c",
          900: "#44475b",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        dark: {
          50: "#f8f8f8",
          100: "#ececec",
          200: "#d8d8d8",
          300: "#c5c5c5",
          400: "#b1b1b1",
          500: "#9e9e9e",
          600: "#7e7e7e",
          700: "#5f5f5f",
          800: "#3f3f3f",
          900: "#202020",
        },
        primary: {
          pressed: "#3818D9",
          hover: "#7577EE",
          main: "#5D5FEF",
          border: "#787AF2",
          focus: "#A4A5F5",
          bg: "#F7F5FF",
        },
        secondary: {
          pressed: "#F6C6C8",
          hover: "#F6E3E3",
          main: "#F4DDDE",
          border: "#F8EBEC",
          focus: "#F6DADC",
          bg: "#FCF5F5",
        },

        success: {
          DEFAULT: "#31D0AA",
        },

        error: {
          DEFAULT: "#ED4B9E",
        },
      },
    },
  },
  plugins: [],
};

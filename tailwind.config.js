/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "randmates-darkBlue": "#1E3BB3",
        "randmates-red": "#FF426F",
        "randmates-grey": "#9CA7D5",
        "randmates-white": "#FBFBFC",
      },
      borderWidth: {
        "1/2": "0.5px",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "4rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
        "3xl": "1124px",
        "4xl": "1124px",
      },
    },
  },
  plugins: [],
};

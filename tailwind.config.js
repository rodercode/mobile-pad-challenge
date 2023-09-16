/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    sm: "640px",

    md: "768px",

    lg: "1024px",

    xl: "1280px",

    "2xl": "1536px",
    extend: {
      colors: {
        // PRIMARY COLORS
        "primary-color-dark": "#2E8BD8",
        "primary-color-base": "#339af0",
        "primary-color-light": "#47A4F2",

        // SECONDARY COLORS
        "secondary-color-dark": "#1AA179",
        "secondary-color-base": "#20c997",
        "secondary-color-light": "#4DD4AC",

        // GREY COLORS
        "gray-color-dark": "#3A4046",
        "gray-color-base": "#495057",
        "gray-color-light": "#6D7379",

      },
      borderWidth: {
        1: "1px",
      },
      lineHeight: {
        "xl-relaxed": "1.725",
        "xl-loose": "2.5",
      },
      maxWidth: {
        "xxs": "290px",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};

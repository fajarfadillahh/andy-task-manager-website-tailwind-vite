module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1120px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      grey: "#474747",
      yellow: "#f7b731",
      green: "#11ac84",
      red: "#e67ed9",
      blue: "#46aaf2",
    },
    fontFamily: {
      body: ["DM Sans", "sans-serif"],
      title: ["Rubik", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      title: "150%",
      text: "160%",
    },
    transitionDuration: {
      400: "400ms",
    },
    extend: {},
  },
  plugins: [],
};

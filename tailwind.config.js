const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "768px",
    },
    extend: {
      colors: {
        StrongCyan: "hsl(171, 66%, 44%)",
        LightBlue: "hsl(233, 100%, 69%)",
        DarkGrayishBlue: "hsl(210, 10%, 33%)",
        GrayishBlue: "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
};

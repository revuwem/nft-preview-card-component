/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        cyan: "hsl(178, 100%, 50%)",
        blue: {
          100: "hsl(217, 54%, 11%)",
          200: "hsl(216, 50%, 16%)",
          300: "hsl(215, 32%, 27%)",
          400: "hsl(215, 51%, 70%)",
        },
      },
    },
  },
  plugins: [],
};

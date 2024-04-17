/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black1: "#101010",
        purple1: "#2D1F39",
        black2: "#1C1B1A",
        darkYellow: "#3F3733",
        mainBg: "#1E1E1E",
        white1: "#D9D9D9",
        black3: "#2D2D2D",
      },
    },
  },
  plugins: [],
};

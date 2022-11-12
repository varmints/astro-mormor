/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: {
        100: "#f6f6f6",
        200: "#e2e2e2",
        300: "#8b8b8b",
        400: "#6f6f6f",
        500: "#3e3e3e",
        600: "#222222",
      },
    },
  },
  plugins: [],
};

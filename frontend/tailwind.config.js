/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
        indigo: {
          '50': '#e0e8f9',
          '100': '#bed0f7',
          '200': '#98aeeb',
          '300': '#7b93db',
          '400': '#647acb',
          '500': '#4c63b6',   // This is indigo-500
          '600': '#4055a8',
          '700': '#35469c',
          '800': '#2d3a8c',
          '900': '#19216c',
        },
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
};

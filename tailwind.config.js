/* eslint-disable */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        calculator: "url('/src/calculatorbg.jpeg')",
        quote: "url('/src/calculatorquote.jpeg')",
      }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};

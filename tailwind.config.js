module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-right": {
          to: { transform: "translateX(5px)" },
        },
      },
      animation: {
        "arrow-slide-right": "slide-out 2s ease-in-out linear",
      },
    },
  },
  plugins: [],
};

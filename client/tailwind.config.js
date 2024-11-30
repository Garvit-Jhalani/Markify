/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jokerman: "Jokerman",
        Bradley: "Bradley Hand ITC",
      },
      colors: {
        purple: "#8f94fb",
        black: "#000000",
      },
      animation: {
        slide: "slide 3s ease-in-out infinite",
      },
      keyframes: {
        animatetop: {
          "0%": { top: "-300px", opacity: 0 },
          "100%": { top: "0", opacity: 1 },
        },
        zoomIn: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "50%": { opacity: 1 },
        },
        slide: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "20%": { transform: "translateY(0)", opacity: 1 },
          "40%": { transform: "translateY(0)", opacity: 1 },
          "60%": { transform: "translateY(-100%)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0 },
        },
      },
      animation: {
        animatetop: "animatetop 1s",
        zoomIn: "zoomIn 1s",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

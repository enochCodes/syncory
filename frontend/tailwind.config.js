/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    backgroundImage: {
      "hero-pattern": "url('/src/assets/images/hero-bg.png')", // Adjust the path
    },
    keyframes: {
      fadeInDown: {
        "0%": { opacity: "0", transform: "translateY(-20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      fadeInUp: {
        "0%": { opacity: "0", transform: "translateY(20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      bounceInUp: {
        "0%": { opacity: "0", transform: "translateY(50px)" },
        "60%": { opacity: "1", transform: "translateY(-5px)" },
        "80%": { transform: "translateY(5px)" },
        "100%": { transform: "translateY(0)" },
      },
    },
    animation: {
      "fade-in-down": "fadeInDown 1s ease-out",
      "fade-in-up": "fadeInUp 1s ease-out",
      "bounce-in-up": "bounceInUp 1s ease-out",
    },
  },
};
export const plugins = [];

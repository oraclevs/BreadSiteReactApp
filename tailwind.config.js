/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#F6F5F8",
        "dark-cover": "rgba(0,0,0,0.7)",
        "dark-cover-light": "rgba(0,0,0,0.6)",
        "dark-cover-200": "rgba(0,0,0,0.4)",
        "review-card": "#F2952D",
      },
    },
    screens: {
      large: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      tablet: { max: "867px" },
      // => @media (max-width: 767px) { ... }

      phone: { max: "430px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};

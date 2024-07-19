/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
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

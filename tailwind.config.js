/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mn: "785px",
      md: "990px",
      lg: "1240px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/1.avif')",
        "hero-fuji": "url('./assets/mal.avif')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      opacity: ["hover"],
    },
    fontFamily: {
      "josefin-san": ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};

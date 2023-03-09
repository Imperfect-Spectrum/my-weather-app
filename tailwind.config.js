/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        morning: "url('/src/assets/morning-bg.png')",
        evening: "url('/src/assets/evening-bg.png')",
        daytime: "url('/src/assets/daytime-bg.png')",
      },
      plugins: [],
    },
  },
};

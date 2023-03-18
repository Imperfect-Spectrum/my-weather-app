/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        morningCloudy: "url('../public/cloudy/morning-cloudy-bg.png')",
        eveningCloudy: "url('../public/cloudy/evening-cloudy-bg.png')",
        daytimeCloudy: "url('../public/cloudy/daytime-cloudy-bg.png')",

        morningRainy: "url('../public/rainy/morning-rainy-bg.png')",
        eveningRainy: "url('../public/rainy/evening-rainy-bg.png')",
        daytimeRainy: "url('../public/rainy/daytime-rainy-bg.png')",

        morningSnowy: "url('../public/snowy/morning-snowy-bg.png')",
        eveningSnowy: "url('../public/snowy/evening-snowy-bg.png')",
        daytimeSnowy: "url('../public/snowy/daytime-snowy-bg.png')",

        morningSunny: "url('../public/sunny/morning-sunny-bg.png')",
        daytimeSunny: "url('../public/sunny/daytime-sunny-bg.png')",
      },
      plugins: [],
    },
  },
};

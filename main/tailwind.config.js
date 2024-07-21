/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#f9fdff",
          "200": "#787878",
          "300": "#1a1a1a",
          "400": "#191919",
          "500": "rgba(26, 26, 26, 0.8)",
        },
        lightgray: {
          "100": "#d7d7d7",
          "200": "#cfcfcf",
        },
        dimgray: {
          "100": "#6e6e6e",
          "200": "#636363",
          "300": "#4d4d4d",
        },
        snow: "#fff9f6",
        orangered: "#fd650b",
        silver: {
          "100": "#c5c5c5",
          "200": "#c2c2c2",
          "300": "#c0c0c0",
          "400": "#bdbdbd",
          "500": "rgba(189, 189, 189, 0.09)",
        },
        coral: "#ff8b47",
        gainsboro: {
          "100": "#dcdcdc",
          "200": "#d9d9d9",
        },
        mistyrose: "#edd6c9",
        slategray: "#417086",
        linen: "#fceee6",
        antiquewhite: "#ffe0cf",
        floralwhite: "#fff8f0",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        "marko-one": "'Marko One'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      xl: "20px",
      lg: "18px",
      "17xl": "36px",
      base: "16px",
      "5xl": "24px",
      "27xl": "46px",
      "9xl": "28px",
      "35xl": "54px",
      sm: "14px",
      "3xl": "22px",
      lgi: "19px",
      "10xl": "29px",
      "18xl": "37px",
      "smi-8": "12.8px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

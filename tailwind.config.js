/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-background-color": "#020123",
        gradient: "#e024a7",
        "color-primary-color-2": "#58dafe",
        "color-text-color": "#f5f5f5",
        gray: {
          "100": "rgba(2, 1, 35, 0.5)",
          "200": "rgba(2, 1, 35, 0.8)",
        },
        white: "#fff",
        mediumvioletred: {
          "100": "rgba(224, 36, 167, 0.6)",
          "200": "rgba(224, 36, 167, 0.5)",
        },
        deepskyblue: {
          "100": "#24a6cc",
          "200": "rgba(36, 166, 204, 0.09)",
        },
        skyblue: {
          "100": "rgba(88, 218, 254, 0.2)",
          "200": "rgba(88, 218, 254, 0.6)",
        },
      },
      spacing: {},
      fontFamily: {
        "text-heading": "Orbitron",
        "text-body-2": "Poppins",
        lato: "Lato",
      },
    },
    fontSize: {
      "61xl": "80px",
      "5xl": "24px",
      "21xl": "40px",
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      lg: "18px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq1825: {
        raw: "screen and (max-width: 1825px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
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

const withAnimations = require('animated-tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = withAnimations({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    textFillColor: (theme) => theme("borderColor"),
    textStrokeColor: (theme) => theme("borderColor"),
    textStrokeWidth: (theme) => theme("borderWidth"),
    paintOrder: {
      fsm: { paintOrder: "fill stroke markers" },
      fms: { paintOrder: "fill markers stroke" },
      sfm: { paintOrder: "stroke fill markers" },
      smf: { paintOrder: "stroke markers fill" },
      mfs: { paintOrder: "markers fill stroke" },
      msf: { paintOrder: "markers stroke fill" },
    },
    variants: {
      // all the following default to ['responsive']
      textFillColor: ["responsive"],
      textStrokeColor: ["responsive"],
      textStrokeWidth: ["responsive"],
      paintOrder: ["responsive"],
    },
    fontFamily: {
      fredoka: ["fredoka", "sans-serif"],
    },
    extend: {
      flexBasis: {
        '1/99': "1250px",
      },
      padding: {
        '5px': '10 vh'
      },
      width: {
        600: "600px",
        1250: "1250px",
        950: "950px",
        450: "450px",
        550: "550px",
        900: "calc(100% - 60px)",
        1008: "400px"
      },
      height: {
        '228': '62rem',
        '128': '42rem',
        '108': '32 rem',
        '103': '10 vh',
      },
      screens: {
        'xmd': '1300px'
      },
      colors: {
        'deepdeepblue': '#1d1853'
      }
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")()],
});

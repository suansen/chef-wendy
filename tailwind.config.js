/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ["9.375rem", { fontWeight: "500" }],
        h2: ["6.25rem", { fontWeight: "500" }],
        h3: "3.5rem",
        h4: "2rem",
        h5: [
          "1.75rem",
          {
            letterSpacing: "4.72px"
          }
        ],
        sh1: "1.75rem",
        sh2: ["0.875rem", { letterSpacing: "2.36px" }],
        nav: ["1rem", { letterSpacing: "2.7px" }],
        p: "1.125rem"
      },
      colors: {
        "tw-text": "#6C4A4A",
        "tw-text-pink": "#C89595",
        "tw-light-brown": "#F5EBE0",
        "tw-white": "#FEFCF3",
        "tw-pink": "#F0DBDB",
        "tw-dark-pink": "#DBA39A",
        "tw-dark-pink-hover": "#Af827B"
      },
      fontFamily: {
        sans: ["var(--montserrat-font)", ...defaultTheme.fontFamily.sans],
        secondary: ["var(--karla-font)", ...fontFamily.serif],
        serif: ["var(--bellafair-font)", ...fontFamily.serif]
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        rotate: {
          "0%, 100%": {
            transform: "rotate(0)"
          },
          "50%": {
            transform: "rotate(180)"
          }
        }
      },
      animation: {
        text: "text 5s ease infinite",
        rotate: "rotate 5s ease infinite"
      }
    }
  },
  plugins: []
}

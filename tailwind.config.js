/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the files where Tailwind CSS will look for classes to generate.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Define various theme-related configurations.
  theme: {
    // Define font sizes with their respective values for `font-size` and `line-height`.
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },

    // Extend the default theme with customizations.
    extend: {
      // Define custom font families.
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      // Define custom color values with their respective names.
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },

      // Define custom box shadows.
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },

      // Define custom background images.
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },

      // Define custom screen sizes.
      screens: {
        wide: "1440px",
      },
    },
  },

  // Include additional plugins for Tailwind CSS.
  plugins: [],
};

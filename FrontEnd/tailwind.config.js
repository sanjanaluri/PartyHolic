const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/home.js",
    "./src/pages/PartyList.js",
    "./src/components/ListingParties.js",
    "./src/components/Navbar/index.js",
    "./src/components/LandingStyle.js",
    "./src/components/AddForm.js",
    "./src/pages/PartyDetail.js",
    "./src/pages/contact.js",
    "./src/pages/signin.js",
  ],
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
    backgroundImage: {
      "hero-pattern": "url('../public/assets/background.png')",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

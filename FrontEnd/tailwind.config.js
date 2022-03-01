module.exports = {
  content: [
    "./src/pages/home.js",
    "./src/pages/PartyList.js",
    "./src/components/ListingParties.js",
    "./src/components/Navbar/index.js",
    "./src/components/LandingStyle.js",
    "./src/components/AddFrom.js",
    "./src/pages/PartyDetail.js",
  ],
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

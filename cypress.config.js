const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.unilever.com",
    experimentalWebKitSupport: true,
    chromeWebSecurity: true,
    viewportWidth: 1920,
    viewportHeight: 1200,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

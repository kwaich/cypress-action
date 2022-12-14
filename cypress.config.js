const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/test-output-[hash].xml'
    },
    video: false
  },
});

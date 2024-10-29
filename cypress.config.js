const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const dotenv = require('dotenv');
dotenv.config();
const environment = process.env.ENVIRONMENT || 'staging'; 
dotenv.config({ path: environment === 'prod' ? './.env.prod' : './.env.staging' });

module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      config.env = {
        ...config.env,
        ...process.env,
      };
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    viewportHeight: 1080,
    viewportWidth: 1900,
    defaultCommandTimeout: 100000,
    pageLoadTimeout: 100000,
    experimentalSkipDomainInjection: [
      '*.stripe.com',
      '*.stripe.network',
      '*.amazon.co.jp',
    ],
  },
});


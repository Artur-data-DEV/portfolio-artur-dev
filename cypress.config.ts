import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.family === "chromium" && browser.name !== "electron") {
          launchOptions.args.push("--disable-gpu");
        }
        return launchOptions;
      });

      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    baseUrl: "http://localhost:3000", // Base URL for E2E tests
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}", // Pattern for E2E test files
    supportFile: "cypress/support/e2e.ts", // Support file for E2E tests
    // chromeWebSecurity: false,
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    specPattern: "cypress/component/**/*.{js,jsx,ts,tsx}", // Pattern for component test files
    supportFile: "cypress/support/component.ts", // Support file for component tests
  },

  video: false, // Disable video recording
  screenshotOnRunFailure: true, // Take screenshots on test failure
  trashAssetsBeforeRuns: true, // Clean up assets before each test run
  watchForFileChanges: true, // Watch for file changes and rerun tests
});

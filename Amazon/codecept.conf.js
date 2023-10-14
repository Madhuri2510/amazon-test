const { restart } = require("pm2");

exports.config = {
  tests: "./src/specs/e2e/specs/*.spec.ts",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "https://www.amazon.in/",
      browser: "chrome",
      restart: false,
      windowSize: "maximize",
      chrome: {
        args: ["--start-maximized"],
      },
    },
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: "amazon-test",
  require: ["ts-node/register"],
};

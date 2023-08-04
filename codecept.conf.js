exports.config = {
  tests: "./src/specs/e2e/specs/*.spec.ts",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "https://www.amazon.in/",
      browser: "chrome"
    },
    RandomGeneratorHelper: {
      require: "./src/specs/e2e/helpers/randomGenerator.helper.ts"
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: "codecept-typescript-example",
  require: ["ts-node/register"]
};

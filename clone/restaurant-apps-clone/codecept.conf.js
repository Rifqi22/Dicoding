/* eslint-disable import/prefer-default-export */
// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
// setCommonPlugins();

const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'e2e/**/*.test.js',
  output: 'e2e/output',
  helpers: {
    Puppeteer: {
      browser: 'chromium',
      url: 'http://localhost:9000',
      show: true,
    },
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'Katalog Restoran Progresif',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};

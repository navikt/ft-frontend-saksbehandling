const vite = require('vite');
const common = require('./eslintrc.common.js');

const ERROR = 2;

const config = {
  rules: {
    'no-console': ERROR,
  },
};

module.exports = vite.mergeConfig(common, config);

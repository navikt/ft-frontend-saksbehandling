const common = require('./eslintrc.common.cjs');

module.exports = {
  ...common,
  rules: {
    ...common.rules,
    'no-debugger': 0,
    'no-console': 1,
  },
};

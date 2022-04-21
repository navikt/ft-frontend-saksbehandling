const path = require('path');
const { merge } = require('webpack-merge');
const prodConfig = require('../../webpack/webpack.prod.template');

const config = {
  output: merge(prodConfig.output, {
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: '@navikt/ft-utils-test',
      type: 'umd',
    },
  }),
};

module.exports = merge(prodConfig, config);

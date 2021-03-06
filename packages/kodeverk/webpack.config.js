const path = require('path');
const { merge } = require('webpack-merge');
const prodConfig = require('../../webpack/webpack.prod.template');

const config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: '@navikt/ft-kodeverk',
      type: 'umd',
    },
  },
};

module.exports = merge(prodConfig, config);

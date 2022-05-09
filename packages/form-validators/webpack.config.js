// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { merge } = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prodConfig = require('../../webpack/webpack.prod.template.js');

const config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: '@navikt/ft-form-validators',
      type: 'umd',
    },
  },
};

module.exports = merge(prodConfig, config);

/* eslint-disable */
const path = require('path');
const { merge } = require('webpack-merge');
const prodConfig = require('../../webpack/webpack.prod.template');
const styleModulesRule = require('../../webpack/rules/style-modules-rule');

const SRC_DIR = path.resolve(__dirname, './src');

const config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: '@navikt/ft-sak-support-meny',
      type: 'umd',
    },
  },
  module: {
    rules: prodConfig.module.rules.concat([
      styleModulesRule(SRC_DIR),
      {
        test: /\.(svg)$/,
        issuer: /\.(tsx)?$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name]_[contenthash].[ext]',
            },
          },
        ],
        type: 'javascript/auto',
      },
    ]),
  },
};

module.exports = merge(prodConfig, config);

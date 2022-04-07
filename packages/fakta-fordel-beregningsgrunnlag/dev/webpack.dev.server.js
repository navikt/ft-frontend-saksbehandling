'use strict';
require('dotenv')
  .config();
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev');

if (process.argv.includes('--no-fix')) {
  console.warn('Setting eslint-loader option \'fix\' to false');
  config.module.rules.find((rules) => rules.loader === 'eslint-loader').options.fix = false;
}

const options = {
  static: {
    directory: 'packages',
    watch: true,
  },
  devMiddleware: {
    publicPath: config.output.publicPath,
    stats: {
      children: false,
      colors: true,
    },
  },
  historyApiFallback: true,
  port: 9007,
};

const wds = new WebpackDevServer(webpack(config), options);

(async () => {
  try {
    await wds.start();
  } catch (error) {
    return console.log(err); // NOSONAR
  }

  console.log('Listening at http://localhost:9007/');
  return undefined;
})();

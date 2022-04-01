'use strict';
require('dotenv')
  .config();
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev');

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
  port: 9006,
};

const wds = new WebpackDevServer(webpack(config), options);

(async () => {
  try {
    await wds.start();
  } catch(error) {
    return console.log(err); // NOSONAR
  }

  console.log('Listening at http://localhost:9006/');
})();

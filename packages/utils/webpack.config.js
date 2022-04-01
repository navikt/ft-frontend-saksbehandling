const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'index.js',
    library: {
      name: '@navikt/ft-utils',
      type: 'umd',
    },
  },
  module: {
    rules: [{
      test: /\.(tsx?|ts?)$/,
      loader: 'babel-loader',
      options: {
        rootMode: 'upward',
      },
    }],
  },

  plugins: [new CleanWebpackPlugin()],

  externals: [nodeExternals({
    modulesDir: path.resolve(__dirname, '../../node_modules'),
  })],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  optimization: {
    moduleIds: 'named',
  },
};

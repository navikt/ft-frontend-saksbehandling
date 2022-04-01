const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
      name: '@navikt/ft-utils-test',
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
    }, {
      test: /\.(less|css)?$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '',
          },
        }, {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]_[local]_[contenthash:base64:5]',
            },
          },
        }, {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modules: true,
              localIdentName: '[name]_[local]_[contenthash:base64:5]',
              modifyVars: {
                nodeModulesPath: '~',
                coreModulePath: '~',
              },
            },
          },
        }],
    }, {
      test: /\.(svg)$/,
      type: 'asset/resource',
      generator: {
        filename: '[name]_[contenthash].[ext]',
      },
    }],
  },

  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin({
    filename: 'style.css',
    ignoreOrder: true,
  })],

  externalsPresets: { node: true },
  externals: [nodeExternals({
    modulesDir: path.resolve(__dirname, '../../node_modules'),
  })],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
  },

  optimization: {
    moduleIds: 'named',
  },
};

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

const SRC_DIR = path.resolve(__dirname, './src');
const NODE_MODULES_DIR = path.resolve(__dirname, './node_modules');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'index.js',
    library: {
      name: '@navikt/ft-prosess-beregningsgrunnlag',
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
            publicPath: './',
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
      include: [SRC_DIR],
    }, {
      test: /\.(less)?$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: './',
          },
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: {
                nodeModulesPath: '~',
                coreModulePath: '~',
              },
            },
          },
        }],
      include: [NODE_MODULES_DIR],
    }, {
      test: /\.(svg)$/,
      type: 'asset/inline',
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

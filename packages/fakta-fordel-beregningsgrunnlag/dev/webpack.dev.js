const webpack = require('webpack');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../package.json').dependencies;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const PACKAGE = require('./../../../package.json');

const VERSION = PACKAGE.version;

const SRC_DIR = path.join(__dirname, '../src');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9007',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'index.ts'),
  ],
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|ts?)$/,
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
        },
        include: [SRC_DIR, __dirname],
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
        test: /\.(less|css)?$/,
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
        exclude: [SRC_DIR],
      }, {
        test: /\.(svg)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name]_[contenthash].[ext]',
        },
      }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
  },
  externals: {
    canvas: 'commonjs canvas',
    cheerio: 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
    bufferutil: 'bufferutil',
    'utf-8-validate': 'utf-8-validate',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({
      context: SRC_DIR,
      extensions: ['tsx', 'ts'],
      failOnWarning: false,
      failOnError: false,
      fix: true,
      overrideConfigFile: path.resolve(__dirname, '../../../eslint/eslintrc.dev.js'),
      cache: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'style[name].css',
      ignoreOrder: true,
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(VERSION),
    }),
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /nb/,
    ),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new ModuleFederationPlugin({
      name: 'ft_fakta_fordel_beregningsgrunnlag',
      library: { type: 'var', name: 'ft_fakta_fordel_beregningsgrunnlag' },
      filename: 'remoteEntry.js',
      exposes: {
        './FaktaFordelBeregningsgrunnlag': './dev/MicroFrontendIndex',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps.react,
        },
      },
    }),
  ],
};

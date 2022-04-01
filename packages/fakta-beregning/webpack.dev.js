'use strict';
const CircularDependencyPlugin = require('circular-dependency-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
const webpack = require('webpack');
const path = require('path');
const PACKAGE = require('./package.json');
const VERSION = PACKAGE.version;

const CORE_DIR = path.resolve(__dirname, './node_modules');
const SRC_DIR = path.resolve(__dirname, './src');

const isDevelopment = JSON.stringify(process.env.NODE_ENV) === 'development';

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9006',
    'webpack/hot/only-dev-server',
    '/index.ts',
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
        include: SRC_DIR,
      }, {
        test: /\.(less|css)?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: isDevelopment ? './' : '',
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
        include: SRC_DIR,
      }, {
        test: /\.(less|css)?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: isDevelopment ? './' : '',
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
        include: [CORE_DIR],
      }, {
        test: /\.(svg)$/,
        issuer: /\.less?$/,
        type: 'asset/resource',
        generator: {
          filename: '[name]_[contenthash].[ext]',
        },
        include: SRC_DIR,
      }, {
        test: /\.(svg)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name]_[contenthash].[ext]',
        },
        include: [CORE_DIR],
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
    new ESLintPlugin({
      context: SRC_DIR,
      extensions: ['tsx', 'ts'],
      failOnWarning: false,
      failOnError: !isDevelopment,
      fix: isDevelopment,
      overrideConfigFile: path.resolve(__dirname, isDevelopment ? '../eslint/eslintrc.dev.js' : '../eslint/eslintrc.prod.js'),
      cache: true,
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? 'style[name].css' : 'style[name]_[contenthash].css',
      ignoreOrder: true,
    }),
    new HtmlWebpackPlugin({
      filename: isDevelopment ? 'index.html' : '../index.html',
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
    new webpack.HotModuleReplacementPlugin(),
    new ModuleFederationPlugin({
      name: 'ft_frontend_saksbehandling',
      library: { type: 'var', name: 'ft_frontend_saksbehandling' },
      filename: 'remoteEntry.js',
      exposes: {
        './FaktaBeregning': './packages/fakta-beregning/src/BeregningFaktaIndex',
        './FaktaFordelBeregningsgrunnlag': './packages/fakta-fordel-beregningsgrunnlag/src/FordelBeregningsgrunnlagFaktaIndex',
        './ProsessBeregningsgrunnlag': './packages/prosess-beregningsgrunnlag/src/BeregningsgrunnlagProsessIndex',
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

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const PACKAGES_DIR = path.resolve(__dirname, '../packages');
const CORE_DIR = path.resolve(__dirname, '../node_modules');
const STORYBOOK_DIR = path.resolve(__dirname);

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ['../packages/**/*.stories.@(tsx)'],
  addons: ['@storybook/addon-docs/preset', '@storybook/addon-actions/register'],
  webpackFinal: async (config, { configType }) => {

     //Fjern default svg-loader
     config.module.rules = config.module.rules.map( data => {
      if (/svg\|/.test(String(data.test))) {
        data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
      }
      return data;
    });

    config.devtool = 'eval-cheap-module-source-map';

    // Make whatever fine-grained changes you need
    config.module.rules = config.module.rules.concat({
      test: /\.(tsx?|ts?)$/,
      use: [
        { loader: 'cache-loader' },
        {
          loader: 'thread-loader',
          options: {
            workers: process.env.CIRCLE_NODE_TOTAL || require('os')
              .cpus() - 1,
            workerParallelJobs: 50,
          },
        },
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      ],
      include: PACKAGES_DIR,
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
      exclude: [CORE_DIR, STORYBOOK_DIR],
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
      include: [CORE_DIR, STORYBOOK_DIR],
    }, {
      test: /\.(svg)$/,
      type: 'asset/resource',
      generator: {
        filename: '[name]_[contenthash].[ext]',
      },
    });

    config.plugins.push(new MiniCssExtractPlugin({
      filename: 'style[name].css',
      ignoreOrder: true,
    }));
    config.plugins.push(new ESLintPlugin({
      context: PACKAGES_DIR,
      extensions: ['tsx', 'ts'],
      failOnWarning: false,
      failOnError: false,
      fix: true,
      overrideConfigFile: path.resolve(__dirname, '../eslint/eslintrc.dev.js'),
      cache: true,
    }),);
    
    config.resolve.extensions.push('.ts', '.tsx', '.less');

    // Return the altered config
    return config;
  },
}
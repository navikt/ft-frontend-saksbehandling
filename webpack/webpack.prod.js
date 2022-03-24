"use strict";
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path');
const { merge } = require('webpack-merge');
const commonDevAndProd = require('./webpack.common');

const PACKAGES_DIR = path.resolve(__dirname, '../packages');

const config = {
  mode: 'production',
  devtool: 'source-map',
  performance: { hints: false },

  entry: [
    PACKAGES_DIR + '/index.ts',
  ],
  output: {
    filename: '[name]-[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
    path: path.resolve(__dirname, '../dist/public'),
    publicPath: '/fp/web/tilbake/public/',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  stats: {
    children: false,
  },
};

module.exports = merge(commonDevAndProd, config);

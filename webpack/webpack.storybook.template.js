const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const styleModulesRule = require('./rules/style-modules-rule');
const styleRule = require('./rules/style-rule');

module.exports = (config, srcDir) => {
  //Fjern default svg-loader
  config.module.rules = config.module.rules.map( data => {
    if (/svg\|/.test(String(data.test))) {
      data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
    }
    return data;
  });

  config.module.rules = config.module.rules.concat({
      test: /\.(tsx?|ts?)$/,
      include: srcDir,
      loader: 'babel-loader',
      options: {
        rootMode: "upward",
      },
    }, {
      test: /\.(svg)$/,
      type: 'asset/inline',
    },
    styleModulesRule(srcDir),
    styleRule(srcDir));

    config.resolve.extensions.push('.ts', '.tsx', '.less');

    config.plugins.push(new MiniCssExtractPlugin({
      filename: 'style[name].css',
      ignoreOrder: true,
    }));
    config.plugins.push(new ESLintPlugin({
      context: srcDir,
      extensions: ['tsx', 'ts'],
      failOnWarning: false,
      failOnError: false,
      fix: true,
      overrideConfigFile: path.resolve(__dirname, '../eslint/eslintrc.dev.js'),
      lintDirtyModulesOnly: true,
    }));

  return config;
};

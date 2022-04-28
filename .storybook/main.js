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
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  stories: ['./DummyStory.stories.jsx'],
  refs: {
      'ft-fakta-beregning': {
          title: 'ft-fakta-beregning',
          url: 'http://localhost:7001',
      },
      'ft-fakta-fordel-beregningsgrunnlag': {
          title: 'ft-fakta-fordel-beregningsgrunnlag',
          url: 'http://localhost:7002',
      },
      'ft-form-hooks': {
          title: 'ft-form-hooks',
          url: 'http://localhost:7003',
      },
      'ft-form-redux-legacy': {
          title: 'ft-form-redux-legacy',
          url: 'http://localhost:7004',
      },
      'prosess-beregningsgrunnlag': {
          title: 'prosess-beregningsgrunnlag',
          url: 'http://localhost:7005',
      },
      'ui-komponenter': {
          title: 'ui-komponenter',
          url: 'http://localhost:7006',
      },
  },
  webpackFinal: async (config, { configType }) => {

   config.devtool = 'eval-cheap-module-source-map';

   config.module.rules = config.module.rules.concat({
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
     lintDirtyModulesOnly: true,
   }),);
   
   config.resolve.extensions.push('.ts', '.tsx', '.less');

   // Return the altered config
   return config;
 },
}

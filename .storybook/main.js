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
      'prosess-beregningsgrunnlag': {
          title: 'prosess-beregningsgrunnlag',
          url: 'http://localhost:7005',
      },
      'ui-komponenter': {
          title: 'ui-komponenter',
          url: 'http://localhost:7006',
      },
      'plattform-komponenter': {
          title: 'plattform-komponenter',
          url: 'http://localhost:7007',
      },
      'fakta-tilbakekreving-feilutbetaling': {
          title: 'fakta-tilbakekreving-feilutbetaling',
          url: 'http://localhost:7008',
      },
      'prosess-tilbakekreving-foreldelse': {
          title: 'prosess-tilbakekreving-foreldelse',
          url: 'http://localhost:7009',
      },
      'prosess-tilbakekreving': {
          title: 'prosess-tilbakekreving',
          url: 'http://localhost:7010',
      },
      'prosess-tilbakekreving-vedtak': {
          title: 'prosess-tilbakekreving-vedtak',
          url: 'http://localhost:7011',
      },
      'sak-behandling-velger': {
          title: 'sak-behandling-velger',
          url: 'http://localhost:7012',
      },
      'sak-aktor': {
          title: 'sak-aktor',
          url: 'http://localhost:7013',
      },
      'sak-visittkort': {
          title: 'sak-visittkort',
          url: 'http://localhost:7014',
      },
      'sak-dekorator': {
          title: 'sak-dekorator',
          url: 'http://localhost:7015',
      },
      'sak-support-meny': {
          title: 'sak-support-meny',
          url: 'http://localhost:7016',
      },
      'sak-dokumenter': {
          title: 'sak-dokumenter',
          url: 'http://localhost:7017',
      },
      'sak-fagsak-profil': {
          title: 'sak-fagsak-profil',
          url: 'http://localhost:7018',
      },
      'sak-risikoklassifisering': {
          title: 'sak-risikoklassifisering',
          url: 'http://localhost:7019',
      },
      'sak-infosider': {
          title: 'sak-infosider',
          url: 'http://localhost:7020',
      },
      'sak-meny': {
          title: 'sak-meny',
          url: 'http://localhost:7021',
      },
      'tidslinje': {
          title: 'sak-meny',
          url: 'http://localhost:7022',
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

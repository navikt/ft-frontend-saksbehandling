// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { merge } = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prodConfig = require('../../webpack/webpack.prod.template'); // eslint-disable-line import/extensions
// eslint-disable-next-line @typescript-eslint/no-var-requires
const devWatchConfig = require('../../webpack/webpack.dev.watch.template'); // eslint-disable-line import/extensions
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styleModulesRule = require('../../webpack/rules/style-modules-rule'); // eslint-disable-line import/extensions
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styleRule = require('../../webpack/rules/style-rule'); // eslint-disable-line import/extensions

const SRC_DIR = path.resolve(__dirname, './src');

const config = env => {
  const prodOrDevConfig = env.watch === 'true' ? devWatchConfig : prodConfig;
  return {
    output: {
      path: path.resolve(__dirname, 'dist'),
      library: {
        name: '@navikt/ft-fakta-beregning',
        type: 'umd',
      },
    },
    watch: env.watch === 'true',
    watchOptions: {
      poll: 1000, // Check for changes every second
    },
    module: {
      rules: prodOrDevConfig.module.rules.concat([styleModulesRule(SRC_DIR), styleRule(SRC_DIR)]),
    },
  };
};

module.exports = env => merge(env.watch === 'true' ? devWatchConfig : prodConfig, config(env));

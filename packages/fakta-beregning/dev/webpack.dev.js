const path = require('path');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../package.json').dependencies;
const getDevConfig = require('../../../webpack/webpack.dev.template');
const runServer = require('../../../webpack/webpack.dev.server');

const config = {
  entry: [path.join(__dirname, 'index.ts')],
  plugins: [
    new ModuleFederationPlugin({
      name: 'ft_fakta_beregning',
      library: { type: 'var', name: 'ft_fakta_beregning' },
      filename: 'remoteEntry.js',
      exposes: {
        './FaktaBeregning': './dev/MicroFrontendIndex',
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

const webpackConfig = merge(getDevConfig(__dirname), config);

runServer(webpackConfig, 9006);

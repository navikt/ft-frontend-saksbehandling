const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../package.json').dependencies;
const commonDevAndProd = require('./webpack.common');

const PACKAGES_DIR = path.join(__dirname, '../packages');

const config = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    PACKAGES_DIR + '/index.ts',
  ],
  output: {
    publicPath: "auto",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ModuleFederationPlugin({
      name: "ft_frontend_saksbehandling",
      library: { type: "var", name: "ft_frontend_saksbehandling" },
      filename: "remoteEntry.js",
      exposes: {
        "./FaktaBeregning": "./packages/fakta-beregning/src/BeregningFaktaIndex",
        "./FaktaFordelBeregningsgrunnlag": "./packages/fakta-fordel-beregningsgrunnlag/src/FordelBeregningsgrunnlagFaktaIndex",
        "./ProsessBeregningsgrunnlag": "./packages/prosess-beregningsgrunnlag/src/BeregningsgrunnlagProsessIndex",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps.react,
        },
      },
    }),
  ],
};

module.exports = merge(commonDevAndProd, config);

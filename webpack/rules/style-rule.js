const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (src, testCss) => ({
  test: testCss ? /\.(less|css)?$/ : /\.(less)?$/,
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
  exclude: [src],
});

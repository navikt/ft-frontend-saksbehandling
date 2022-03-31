const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_DIR = path.resolve(__dirname, '../src');

module.exports = {
    core: {
        builder: "webpack5",
    },
    stories: ['../src/**/*.stories.@(ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config) => {
           //Fjern default svg-loader
     config.module.rules = config.module.rules.map( data => {
      if (/svg\|/.test(String(data.test))) {
        data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
      }
      return data;
    });
    
        config.module.rules = config.module.rules.concat({
            test: /\.(tsx?|ts?)$/,
            include: SRC_DIR,
            loader: 'babel-loader',
            options: {
              rootMode: "upward",
            },
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
            include: [SRC_DIR],
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
            exclude: [SRC_DIR],
          }, {
            test: /\.(svg)$/,
            type: 'asset/resource',
            generator: {
              filename: '[name]_[contenthash].[ext]',
            },
          });

          config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx', '.less', '.css');

          config.plugins.push(new MiniCssExtractPlugin({
            filename: 'style[name].css',
            ignoreOrder: true,
          }));

        return config;
    },
};

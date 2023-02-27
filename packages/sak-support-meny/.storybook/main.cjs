const { mergeConfig } = require('vite');

module.exports = {
  core: {
    builder: "@storybook/builder-vite",
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};

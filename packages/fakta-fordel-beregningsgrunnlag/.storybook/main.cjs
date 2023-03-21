module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: false
  }
};
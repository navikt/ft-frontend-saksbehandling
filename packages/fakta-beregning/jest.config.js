const path = require('path');
const commonJestConfig = require('./../../jest-config/jest.config');

module.exports = {
  ...commonJestConfig,
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/../../jest-config/fileMock.js',
  },
  setupFiles: ['<rootDir>/../../jest-config/setup-enzyme.js'],
  setupFilesAfterEnv: ['<rootDir>/../../jest-config/setup-enzyme-after-env.js'],
  transform: {
    '^.+\\.(ts|tsx|js)?$': ['babel-jest', { configFile: path.resolve(__dirname, '../../babel.config.js') }],
    '^.+.(css|less)$': 'jest-transform-stub',
  },
};

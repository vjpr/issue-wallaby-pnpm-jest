const {join} = require('path')
module.exports = ({
  verbose: true,
  // Otherwise we get:
  //   `2020-06-08T14:03:13.489Z processor WARNING: could not find and load babel-preset-jest preset, it is required for correct jest.mock(...) calls hoisting`
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  modulePathIgnorePatterns: [
    // Ignore new monorepo template files.
    'repos/live-public/packages/live-cli/live-monorepo-cli/templates/template-monorepo-files',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
})

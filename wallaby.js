module.exports = (w) => {
  return {
    files: ['jest.config.js', '**/src/**/*.js', '!**/src/**/*.test.js'],

    tests: [
      '**/src/*.test.js',
      '**/src/**/*.test.js',
    ],

    env: {
      type: 'node',
    },

    compilers: {
      '**/*.ts?(x)': w.compilers.typeScript({
        module: 'commonjs',
      }),
    },

    testFramework: 'jest',

    debug: true,

    runMode: 'onsave',

    setup: (w) => {
      const {join} = require('path')
      //w._testFrameworkPath
      const jestConfigPath = join(w.localProjectDir, './jest.config.js')
      console.log({jestConfigPath})
      const jestConfig = require(jestConfigPath)
      w.testFramework.configure(jestConfig)
    },

  }
}

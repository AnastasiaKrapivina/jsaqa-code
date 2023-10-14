const config = {
    verbose: true,
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/coverage/**',
        '!**jest.config.js**',
      ],
    collectCoverage: true,
    coverageReporters: ["html"],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
      }
    },
  }
  
  module.exports = config;
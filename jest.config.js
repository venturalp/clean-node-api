module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
    'html'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

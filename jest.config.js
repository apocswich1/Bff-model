module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "test/(.*)": "<rootDir>/test/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,ts}",
  ],
  modulePaths: ["<rootDir>"],
  // coverageThreshold: {
  //   "global": {
  //     "statements": 90,
  //     "branches": 80,
  //     "functions": 80,
  //     "lines": 90
  //   }
  // }
};
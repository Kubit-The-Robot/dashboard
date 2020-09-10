module.exports = {
  rootDir: './',
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
    './',
  ],
  setupFiles: ['<rootDir>/src/setupTests.js'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  snapshotSerializers: ['jest-serializer-html'],
  testEnvironment: 'jest-environment-jsdom-global',
  testURL: 'http://localhost:8080',
  transform: {
    '.*\\.(j|t)sx?$': 'babel-jest',
  },
};

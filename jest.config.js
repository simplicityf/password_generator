const { TestEnvironment } = require("jest-environment-jsdom");

module.exports = {
    preset: './jest-preset.js',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    testEnvironment: 'jsdom',
};
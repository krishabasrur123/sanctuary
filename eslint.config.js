// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
//kind of "debugger" that improves code, gives auto suggestions, etc
module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
]);

import googleappsscript from 'eslint-plugin-googleappsscript';
import eslintConfigPrettier from 'eslint-config-prettier';
import gts from 'gts';

export default [
  ...gts, // Base Google TypeScript/JavaScript Style rules
  {
    // Google Apps Script specific overrides
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',  // Apps Script runtime is a shared script scope
      globals: {
        // Injects all standard Google Workspace API symbols
        ...googleappsscript.environments.googleappsscript.globals,
      },
    },
    plugins: {
      googleappsscript,
    },
    rules: {
      'no-undef': 'error',  // Retain Apps Script global definitions
    },
  },

  // 3. Disable conflicting formatting rules in favor of Prettier
  eslintConfigPrettier,
];
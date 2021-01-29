module.exports = {
  env: {
    browser: true,
    es6: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint-config-react-native',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    parserOptions: {
      parser: 'babel-eslint'
    },
  },
  plugins: [
    'jest',
    'react',
  ],
  settings: {
    'react-native/style-sheet-object-names': ['EStyleSheet', 'OtherStyleSheet', 'PStyleSheet'],
    'import/ignore': ['react-native']
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'object-shorthand': 'off'
  },
};

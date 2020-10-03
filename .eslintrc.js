module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    es6: true
  },
  plugins: [
    'react-hooks'
  ],
  rules: {
    'no-use-before-define': 'error',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'comma-dangle': ['error', 'never']
  },
  globals: {
    fetch: false
  }
};

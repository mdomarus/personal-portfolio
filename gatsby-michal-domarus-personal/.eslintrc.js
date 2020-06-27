module.exports = {
  extends: ['eslint:recommended', 'airbnb'],
  rules: {
    'max-len': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
  },
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
};

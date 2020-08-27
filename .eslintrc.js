module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'plugin:flowtype/recommended',
  ],
  plugins: [
    'flowtype',
  ],
  env: {
    browser: true,
  },
  rules: {
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
  },
};

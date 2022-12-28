module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'consistent-return': 0,
    'no-unused-vars': 0,
    'class-methods-use-this': 0,
  },
};

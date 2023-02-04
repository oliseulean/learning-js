module.exports = {
  root: true,
  extends: ['eslint:recommended', 'airbnb-base'],
  env: {
    node: true,
    browser: true,
  },
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] }],
    'no-console': 'off',
    'no-else-return': 'off',
  },
};

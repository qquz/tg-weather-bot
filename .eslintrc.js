const options = {
  env: {
    node: true
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', { 'allowTemplateLiterals': true }],
    'object-shorthand': ['error', 'always', { 'avoidQuotes': true }],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],
    'arrow-body-style': ['error', 'as-needed'],
    'no-undefined': 'error',
    'no-new-object': 'error',
    'no-unused-vars': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: true
    }],
    'require-await': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-duplicate-imports': 'error',
    'max-len': ['warn', { 'code': 120 }]
  }
};

module.exports = options;

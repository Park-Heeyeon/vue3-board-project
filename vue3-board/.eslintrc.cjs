/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended', // 혹은 다른 ESLint 규칙들
    'plugin:vue/vue3-recommended', // Vue 프로젝트의 경우
    'plugin:prettier/recommended' // Prettier 설정을 추가
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/no-multiple-template-root': 'off', // 이 규칙을 비활성화합니다
    'vue/multi-word-component-names': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto'
      }
    ]
  }
};

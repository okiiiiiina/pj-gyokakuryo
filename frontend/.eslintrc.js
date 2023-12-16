module.exports = {
  env: {
    es6: true,
  },
  extends: [
    "prettier",
  ],
  // @vue/eslint-plugin をプラグインとして指定
  plugins: [
    '@vue',
  ],
  rules: {
    // <script setup>タグでimportされたcomponentが<template>未使用としてマークされるのを防ぐため追加(↓現在不要かも?)
    // see: https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/script-setup-uses-vars.md
    'vue/script-setup-uses-vars': 1,
  },
};
module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'parser: vue-eslint-parser',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],
  plugins: [
    '@vue', '@typescript-eslint', 'prettier'
  ],
  rules: {
    // <script setup>タグでimportされたcomponentが<template>未使用としてマークされるのを防ぐため追加(↓現在不要かも?)
    // see: https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/script-setup-uses-vars.md
    'vue/script-setup-uses-vars': 1,
  },
  parserOptions: {
    sourceType: 'module', // JavaScriptファイルがECMAScriptモジュールを使用
  },
};
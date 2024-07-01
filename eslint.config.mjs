import path from 'node:path'
import { fileURLToPath } from 'node:url'

import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://github.com/vuejs/eslint-config-typescript/issues/76
// 解决vue3在eslint9.x 版本中使用 lang = ‘ts' 无法解析ts语法的问题
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
})

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        QRCode: 'readonly',
      },
    },
  },
  ...pluginVue.configs['flat/essential'],
  ...compat.extends('@vue/eslint-config-typescript/recommended'),
  {
    rules: {
      quotes: ['error', 'single'], // 强制使用单引号
      semi: ['error', 'never'],
      'object-curly-spacing': ['error', 'always'], // 要求花括号内有空格
      'space-infix-ops': ['error', { int32Hint: false }], // 要求中缀操作符周围有空格
      'space-unary-ops': ['error', { words: true, nonwords: false }], // 要求一元操作符前后有空格
      "comma-dangle": ["error", "always-multiline"],
      'quote-props': ['error', 'as-needed'],
      '@typescript-eslint/no-explicit-any': 'off',
      indent: ['error', 2],
      'no-multi-spaces': 'error', // 禁止多余的空格
      'no-trailing-spaces': 'error', // 禁止行尾空格
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'never',
            normal: 'never',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 2,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      'vue/html-indent': ['error', 2], // 缩进为2个空格
      'vue/attributes-order': 'error',
      'vue/multi-word-component-names': 'off'
    },
  },
]

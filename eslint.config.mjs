import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        QRCode: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      quotes: ['error', 'single'], // 强制使用单引号
      semi: ['error', 'never'],
      '@typescript-eslint/no-explicit-any': 'off',
      indent: ['error', 2],
      'no-multi-spaces': 'error', // 禁止多余的空格
      'no-trailing-spaces': 'error', // 禁止行尾空格
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'never'
          },
          svg: 'always',
          math: 'always'
        }
      ]
    },
  },
]

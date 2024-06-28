import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"

export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        QRCode: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      semi: ["error", "never"],
      "@typescript-eslint/no-explicit-any": "off",
      indent: ["error", 2],
      "no-multi-spaces": "error", // 禁止多余的空格
      "no-trailing-spaces": "error", // 禁止行尾空格
    },
  },
]

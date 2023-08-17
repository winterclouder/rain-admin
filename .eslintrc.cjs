module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module",
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        // eslint
        'no-var': 'error',  // 禁止var
        'no-multiple-empty-lines': ['warn', {max: 1}], 
        'no-useless-escape': 'off',

        // typeScript
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/semi': 'off',

        // eslint-plugin-vue
        'vue/multi-word-component-names': 'off', 
        'vue/no-mutating-props': 'off',
        'vue/attribute-hyphenation': 'off',
    }
}
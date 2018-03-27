// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        'vue/no-parsing-error': [2, {
            "x-invalid-end-tag": false
        }],
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 强制在注释中 // 或 /* 使用一致的空格
        'spaced-comment': 'off',
        // 关键字后面使用一致的空格
        'keyword-spacing': 'off',
        // 强制在 function的左括号之前使用一致的空格
        'space-before-function-paren': 'off',
        // 缩进风格
        'indent': 'off'
    }
}

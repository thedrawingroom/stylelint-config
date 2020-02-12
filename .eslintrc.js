// http://eslint.org/docs/user-guide/configuring#configuring-rules
module.exports = {
    extends: [
        '@leemillward/eslint-config' // Extending the AirBnB ES2015 config: https://www.npmjs.com/package/eslint-config-airbnb
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    rules: {
        'import/no-relative-parent-imports': 'off',
        'no-console': 'off'
    }
};

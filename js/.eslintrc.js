module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es2021: true,
        browser: true,
        node: true,
    },
    extends: ['eslint:recommended'],
    rules: {
        // Настройки правил ESLint
    },
};

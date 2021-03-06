module.exports = {
    reportUnusedDisableDirectives: true,
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'plugin:vue/essential',
        'plugin:mocha/recommended',
        '@vue/standard',
        '@vue/typescript',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: [
        'vue',
        '@typescript-eslint'
    ],
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        'mocha/no-mocha-arrows': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
    },
    overrides: [
        {
            files: [
                '**/*.js'
            ],
            rules: {
                '@typescript-eslint/no-var-requires': 'off'
            }
        },
        {
            files: [
                '**/*.test.ts',
                '**/*.test.js'
            ],
            env: {
                mocha: true
            },
            plugins: ['mocha']
        }
    ]
};

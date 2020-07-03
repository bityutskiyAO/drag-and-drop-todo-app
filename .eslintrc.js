module.exports = {
    parser: 'babel-eslint',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    env: {
        browser: true
    },
    rules: {
        'no-console': 0,
        'react/prop-types': 0,
        'react/jsx-curly-spacing': [2, 'always'],
        'react/jsx-key': 1,
        'react/jsx-tag-spacing':[2, {'beforeSelfClosing': 'always'}],
        'react/jsx-curly-brace-presence': 1,
        'semi': [2, 'never'],
        'object-curly-spacing': [2, 'always'],
        'quotes': ['warn', 'single'],
    }
}

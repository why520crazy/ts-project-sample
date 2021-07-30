module.exports = {
    eslintIntegration: true,
    stylelintIntegration: true,
    tabWidth: 4,
    singleQuote: false,
    semi: true,
    printWidth: 140,
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.html',
            options: {
                tabWidth: 2,
            },
        },
    ],
};

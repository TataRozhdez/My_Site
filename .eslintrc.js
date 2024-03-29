module.exports = {
    env: {
        browser: true,
        es2021: true,
        es6: true,
        node: true,
    },
    extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "import/extensions": "off",
        "linebreak-style": "off",
        "no-use-before-define": "off",
        "react/jsx-props-no-spreading": "off",
        "react/no-array-index-key": "off",
        "import/no-unresolved": 0,
        "no-unneeded-ternary": 0,
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", "tsx"] }],
        "import/prefer-default-export": "off",
        "import/no-cycle": [2, { ignoreExternal: true, maxDepth: 1 }],
        "react/prop-types": "off",
        "react/no-unescaped-entities": "off",
        "no-shadow": "warn",
        "no-unused-vars": "off",
        "consistent-return": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-fragments": "off",
    },
    plugins: ["react", "import"],
};

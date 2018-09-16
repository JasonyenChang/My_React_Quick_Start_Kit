module.exports = {
    "extends": "airbnb",
    "rules": {
        "comma-dangle": ["error", "never"],
        "react/jsx-filename-extension": [0],
        "indent": "off",
        "import/no-unresolved": "off",
        "react/prefer-stateless-function": [0, { "ignorePureComponents": "false" }],
        "import/no-extraneous-dependencies": [0],
        "global-require": 0,
        "eol-last": [2],
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
};
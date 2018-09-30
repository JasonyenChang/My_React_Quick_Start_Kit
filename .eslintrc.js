module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "comma-dangle": ["error", "never"],
        "react/jsx-filename-extension": [0],
        "indent": "off",
        "import/no-unresolved": "off",
        "react/prefer-stateless-function": [0, { "ignorePureComponents": "false" }],
        "import/no-extraneous-dependencies": [0],
        "global-require": 0,
        "eol-last": [2],
        "import/prefer-default-export": [0],
        "react/destructuring-assignment": 0,
        "camelcase": 0,
        "react/prop-types": [1, { "ignore": ["history"] }],
        "react/no-access-state-in-setstate": [0],
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
};
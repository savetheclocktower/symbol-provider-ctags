module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  extends: 'eslint:recommended',
  globals: {
    atom: true
  },
  rules: {
    "space-before-function-paren": ["error", {
      "named": "never",
      "anonymous": "never",
      "asyncArrow": "always"
    }],
    "no-cond-assign": "off"
  }
};

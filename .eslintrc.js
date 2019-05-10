module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "semi":[2, "never"],
    "implicit-arrow-linebreak": 0,
    "eol-last": 0,
    "react/no-array-index-key": 1,
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    "jsx-a11y/label-has-for": [ 2, {
            "components": [ "Label" ],
            "required": {
                "every": [ "id" ]
            },
            "allowChildren": false
        }],
    "jsx-a11y/label-has-associated-control": [ 2, {
        "labelComponents": ["label"],
        "labelAttributes": ["htmlFor"],
        "controlComponents": ["input"]
      }]
  },
};

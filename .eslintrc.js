module.exports = {
  parser: "babel-eslint",
  extends: ["react-app"],
  rules: {
    // 2 error 1 warn 0 off
    quotes: [1, "single"],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "no-unused-vars": 2,
    "no-var": 2,
    "no-undef": 2,
    "no-multiple-empty-lines": 2,
    "no-cond-assign": 2,
    "block-spacing": 2,
    "eol-last": 2,
    "no-caller": 2,
    "no-constant-condition": 2,
    "no-extra-boolean-cast": "warn",
    "no-label-var": 2,
    "no-labels": 2,
    "no-new-object": 2,
    "no-with": 2,
  },
};

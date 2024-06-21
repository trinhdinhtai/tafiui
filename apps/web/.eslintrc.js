/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@tafi/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
}

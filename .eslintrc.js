module.exports = {
  root: true,
  extends: [
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'plugin:vue/base',
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'linebreak-style': 0,
    'import/extensions': 0,
    'vue/max-attributes-per-line': 0,
    'no-shadow': 0,
    'arrow-parens': 0,
    'max-len': 0,
    'no-param-reassign': 0,
    'vue/attribute-hyphenation': 0,
    'class-methods-use-this': 0
  },
};

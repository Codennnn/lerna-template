const { prettier } = require('prefer-code-style');

module.exports = {
  ...prettier,
  semi: true,
  endOfLine: 'crlf',
};

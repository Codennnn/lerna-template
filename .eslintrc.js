module.exports = {
  root: true,
  extends: [require.resolve('prefer-code-style/lib/eslint')],
  rules: {
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/', '^@@/'],
      },
    ],
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = {
  extends: ['next', 'prettier'],
  plugins: ['eslint-plugin-prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'prettier/prettier': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
};

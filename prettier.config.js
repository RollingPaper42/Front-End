module.exports = {
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  singleQuote: true,
  importOrder: ['^next/(.*)$', './'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

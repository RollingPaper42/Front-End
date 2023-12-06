module.exports = {
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  singleQuote: true,
  importOrder: ['./'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

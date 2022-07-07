/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  endOfLine: 'auto',
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  quoteProps: 'as-needed',
  overrides: [
    {
      files: ['*.ts'],
      options: {
        parser: 'typescript',
      },
    },
  ],
};

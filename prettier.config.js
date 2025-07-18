/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: ['**/package.json'],
      options: {
        useTabs: false,
      },
    },
    {
      files: ['**/*.mdx'],
      options: {
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'ignore',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindAttributes: ['class', 'className', 'ngClass', '.*[cC]lassName'],
  tailwindFunctions: ['clsx', 'cn', 'cva'],
}

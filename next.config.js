/** @type {import('next').NextConfig} */

const path = require('path');
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts'
);

module.exports = withNextIntl({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
});

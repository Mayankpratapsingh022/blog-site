// next-i18next.config.js

module.exports = {
    i18n: {
      // all the locales supported in the application
      locales: ['en', 'it', 'es'], 
      // the default locale to be used when visiting
      // a non-localized route (e.g. `/about`)   
      defaultLocale: 'en'
    },
  }
  // next.config.js

const { i18n } = require('./next-i18next.config')
 
const nextConfig = {
  i18n,
  reactStrictMode: true,
}

module.exports = nextConfig
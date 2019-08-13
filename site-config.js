const path = require('path');

module.exports = {
  pathPrefix: null,
  siteTitle: 'CodeNaija', // Navigation and Site Title
  siteTitleAlt: 'CodeNaija', // Alternative Site title for SEO
  siteTitleShort: 'CodeNaija', // short_name for manifest
  siteHeadline: 'An international hackathon to showcase Nigerian Developer talent', // Headline for schema.org JSONLD
  siteUrl: 'https://www.codenaija.org', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteDescription: 'An internation hackathon to showcase Nigerian Developer talent',
  author: 'bdougie', // Author for schema.org JSONLD
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: `blacktocats`,
    fbAppId: `GitHub`,
  },
};

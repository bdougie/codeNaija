const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'CodeNaija', // Navigation and Site Title
  siteTitleAlt: 'CodeNaija', // Alternative Site title for SEO
  siteTitleShort: 'CodeNaija', // short_name for manifest
  siteHeadline: 'An internation hackathon to showcase Nigerian Developer talent', // Headline for schema.org JSONLD
  siteUrl: 'https://codenaija.org', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'An internation hackathon to showcase Nigerian Developer talent',
  author: 'bdougie', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@githubcommunity', // Twitter Username
  ogSiteName: 'codenaija', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}

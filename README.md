## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:

- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

```
npm run serve
```

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/docs/plugins/).

### Building your site

```
npm run build
```

## Infrastructure of this site

This site is built with [GatsbyJS](https://www.gatsbyjs.org/) using the [gatsby-universal](https://github.com/fabe/gatsby-universal) template. This decision was made to get something oof the ground quickly

### CSS

The CSS is power through a combination [styled-components](https://www.styled-components.com/), the [global.css](https://github.com/bdougie/codeNaija/blob/master/src/global.css.js) file, and [inline JSX](https://github.com/bdougie/codeNaija/blob/7c682f6e5173751301ee0dfb967035a0a4bdd4b3/src/pages/index.js#L74) (for global overrides).


Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.



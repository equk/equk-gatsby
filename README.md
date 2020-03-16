# equk-gatsby

My Personal Blog - [equk.co.uk](https://equk.co.uk)

Built Using Gatsby ⚛️ 📄 🚀

## :warning: not a starter template or theme

This is my own personal blog and shouldn't be used as a starter template or theme.

I have made the site open source and available on github for others to learn from or to contribute improvements.

## main features

- [x] PWA
- [x] Google Workbox Service Worker
- [x] Sitemap
- [x] OpenGraph & Twitter Meta Tags
- [x] Feature Image
- [x] RSS Feed
- [x] Sitemap
- [x] Disqus Comments
- [x] Syntax Highlighting with `prismjs`
- [x] Pagination
- [x] Netlify CMS
- [x] Github Pages
- [x] Netlify

## development features

- [x] ESLint with plugins
- [x] Uses `SASS` for styles
- [x] Bulma flex grid
- [x] `postcss` with plugins
- [x] `PurgeCSS` on `build`
- [x] Uses `gatsby-image`
- [x] Uses react `prop-types`
- [x] Uses react `hooks`
- [x] Uses `react-helmet`
- [x] Uses GraphQL
- [x] Husky Git Hooks
- [x] Checks js,jsx,ts,tsx pre-commit
- [x] Postbuild script

### eslint config

- [x] Lints JavaScript based on ES6
- [x] Fixes issues using Prettier
- [x] Fixes formatting errors using Prettier
- [x] Lints + Fixes inside of html script tags
- [x] Lints + Fixes React
- [x] Based on airbnb rules for eslint
- [x] Checks for react `prop-types`

## folder structure

### main content folders

- [x] `content` - posts & pages in markdown + yaml
- [x] `static/media` - images for frontmatter

### favicon generation

- [x] `src/icon/icon.png` - default icon location

### netlify cms

- [x] `static/admin/config.yml` - netlify cms config

# Notes

Added a postbuild script to fix netlify cms as importing css in the cms component from `gatsby-plugin-netlify-cms` causes CSS processing to run twice making CSS bundle twice the size & breaking deploys in netlify.

    error UNHANDLED EXCEPTION Callback was already called.

The postbuild script copies built css to `/admin/cms.css`

# Contact

Website: https://equk.co.uk

Twitter: [@equilibriumuk](https://twitter.com/equilibriumuk)

# License

Source Code: MIT License

Content & Media: Copyright

(You are **not** permitted to re-use the content publicly or commercially)
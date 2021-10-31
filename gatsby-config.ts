import { siteConfig } from './config'
import { postCssPlugins } from './postcss-config'

const { url, title, subtitle, copyright, disqusShortname, menu, author, backgroundColor, themeColor, logo } = siteConfig

export default {
  siteMetadata: {
    url,
    title,
    subtitle,
    copyright,
    disqusShortname,
    menu,
    author,
  },
  plugins: [
    /**
     *  Content Plugins
     */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'media',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`,
      },
    },
    /**
     *  Generate RSS Feed Using excerpt
     */
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map((edge) =>
                // eslint-disable-next-line prefer-object-spread
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.site_url}/${edge.node.fields.slug}`,
                  guid: `${site.siteMetadata.site_url}/${edge.node.fields.slug}`,
                  custom_elements: [],
                })
              ),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { ne: "page" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      excerpt(
                        format: PLAIN
                        pruneLength: 450
                        truncate: false
                      )
                      frontmatter {
                        title
                        date
                        template
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title,
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    /**
     *  Markdown Plugins
     */
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              quality: 85,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
        ],
      },
    },
    /**
     *  Subresource Integrity (SRI)
     */
    {
      resolve: 'gatsby-plugin-sri',
      options: {
        hash: 'sha512',
        extensions: ['js'],
        crossorigin: true,
      },
    },
    /**
     *  PNPM Webpack
     */
    'gatsby-plugin-pnpm',
    /**
     *  Google Tag
     */
    /*
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [googleAnalyticsId],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 3600,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    }, */
    /**
     *  Generate Sitemap
     */
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl: url
              }
            }
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404|/404.html|/dev-404-page/|/page)/" }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => ({
            url: site.siteMetadata.siteUrl + edge.node.path,
            changefreq: 'daily',
            priority: 0.7,
          })),
      },
    },
    /**
     *  Generate Manifest (PWA)
     */
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: title,
        start_url: '/',
        background_color: backgroundColor,
        theme_color: themeColor,
        display: 'standalone',
        icon: logo,
        icon_options: {
          purpose: 'any maskable',
        },
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    /**
     *  SASS Style Plugins
     */
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    /**
     *  Remove Unused Styles On Build
     */
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        ignore: ['prism/', 'fa/', 'gitalk/', 'themes/'],
        whitelistPatterns: [
          /fa/,
          /button/,
          /language/,
          /gatsby/,
          /git/,
          /width-full/,
          /image-card/,
          /message/,
          /is-warning/,
          /is-danger/,
          /is-success/,
          /is-info/,
          /is-primary/,
          /is-link/,
          /columns/,
          /column/,
          /dark-mode/,
          /light-mode/,
          /box/,
          /is-128x128/,
          /media-left/,
          /media-content/,
          /is-dark/,
        ],
      },
    },
    /**
     *  Netlify CMS Plugins
     */
    // disabling plugin and am using prebuilt netlify-cms
    // (this means previews are basic but speeds up build & deploy times)
    // {
    //   resolve: 'gatsby-plugin-netlify-cms',
    //   options: {
    //     modulePath: `${__dirname}/src/cms/index.js`,
    //   },
    // },
    // disabled due to bug with webpack
    // ref: https://github.com/gatsbyjs/gatsby/issues/29974
    // 'gatsby-plugin-netlify',
  ],
}

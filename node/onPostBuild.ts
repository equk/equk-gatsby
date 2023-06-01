import fs from 'fs/promises'
import { Feed } from 'feed'

/**
 * This is the main function for running scripts at the end of build process
 *
 * The last extension point called after all other parts of the build
 * process are complete.
 *
 * Ref:
 * https://www.gatsbyjs.org/docs/node-apis/#onPostBuild
 *
 */

const year = +new Date().getFullYear()

/*
 * Generate Syndication Feeds
 * --------------------------
 *
 * Output valid syndication feeds using jpmonette/feed
 *
 * Queries GraphQL database for post entries & outputs rss2, atom & json feeds
 *
 */

/*
 * Main Feed Options
 */

const options = {
  author: 'equilibriumuk',
  copyright: `copyright ${year} equk.co.uk all rights reserved`,
  output: {
    dir: './public/',
    rss2: 'rss.xml',
    atom: 'atom.xml',
    json: 'feed.json',
  },
}

/*
 * Build Feed From Posts
 */

function buildBlogFeed(blogPosts, siteMetadata) {
  const feed = new Feed({
    title: siteMetadata.title,
    description: siteMetadata.description,
    link: `${siteMetadata.site_url}/`,
    id: `${siteMetadata.site_url}/`,
    copyright: options.copyright,
    feedLinks: {
      atom: `${siteMetadata.site_url}/${options.output.atom}`,
      rss2: `${siteMetadata.site_url}/${options.output.rss2}`,
      json: `${siteMetadata.site_url}/${options.output.json}`,
    },
    author: {
      name: options.author,
      link: siteMetadata.site_url,
    },
  })

  blogPosts.map((posts) => posts.node).forEach(addItemToFeed(feed, siteMetadata))

  feed.addContributor({
    name: options.author,
    link: siteMetadata.site_url,
  })

  return feed
}

function addItemToFeed(feed, siteMetadata) {
  return (posts) => {
    feed.addItem({
      title: posts.frontmatter.title,
      id: `${siteMetadata.site_url}/${posts.fields.slug}/`,
      link: `${siteMetadata.site_url}/${posts.fields.slug}/`,
      date: new Date(posts.frontmatter.date),
      content: posts.excerpt,
      author: [
        {
          name: options.author,
          link: siteMetadata.site_url,
        },
      ],
    })
  }
}

async function generateFeed({ graphql }) {
  const result = await graphql(`
    {
      site {
        siteMetadata {
          site_url: url
          title
          description: subtitle
        }
      }
      allMarkdownRemark(
        limit: 20
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { template: { ne: "page" }, draft: { ne: true } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            excerpt(format: PLAIN, pruneLength: 450, truncate: false)
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
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges
  const { siteMetadata } = result.data.site
  const feed = buildBlogFeed(posts, siteMetadata)

  // write output files async
  await fs.writeFile(`./public/${options.output.atom}`, feed.atom1())
  // await fs.writeFile(`./public/${options.output.rss2}`, feed.rss2())
  // await fs.writeFile(`./public/${options.output.json}`, feed.json1())
}

/*
 * Run Main Function
 */

export const onPostBuild = async ({ graphql }) => {
  await generateFeed({ graphql })
}

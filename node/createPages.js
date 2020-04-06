const path = require('path')
const _ = require('lodash')
const createTagsPages = require('./pagination/createTagsPages.js')
const createPostsPages = require('./pagination/createPostsPages.js')

/**
 * This is the main function for creating pages using the createPages
 * node API.
 *
 * Tell plugins to add pages.
 * This extension point is called only after the initial sourcing and
 * transformation of nodes plus creation of the GraphQL schema are complete
 * so you can query your data in order to create pages.
 *
 * Ref:
 * https://www.gatsbyjs.org/docs/node-apis/#createPages
 *
 */

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  /**
   * Error Page
   */
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js'),
  })

  /**
   * Tags List
   */
  /*
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list-template.js'),
  })
  */

  /**
   * Query for Posts & Pages
   */
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              template
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { edges } = result.data.allMarkdownRemark

  _.each(edges, (edge) => {
    if (_.get(edge, 'node.frontmatter.template') === 'page') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/page-template.js'),
        context: { slug: edge.node.fields.slug },
      })
    } else {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post-template.js'),
        context: { slug: edge.node.fields.slug },
      })
    }
  })

  // Feeds
  await createTagsPages(graphql, actions)
  await createPostsPages(graphql, actions)
}

module.exports = createPages

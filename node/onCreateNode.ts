const _ = require('lodash')
const moment = require('moment')

/**
 * This is the main function for creating nodes using the onCreateNode
 * node API
 *
 * Called when a new node is created. Plugins wishing to extend or transform
 * nodes created by other plugins should implement this API.
 *
 * Ref:
 * https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
 *
 */

let slugVal = ''

const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    /**
     * Create Post URLs Using YYYY/MM/DD/slug
     *
     * If slug does not exist generate URL using post title
     */
    const m = moment(node.frontmatter.date)
    if (node.frontmatter.slug) {
      slugVal = `${m.format('YYYY')}/${m.format('MM')}/${m.format('DD')}/${node.frontmatter.slug}`
    } else {
      slugVal = `${m.format('YYYY')}/${m.format('MM')}/${m.format('DD')}/${_.kebabCase(node.frontmatter.title)}`
    }

    /**
     * Create Post URL Nodes
     */
    if (node.frontmatter.template !== 'page') {
      createNodeField({
        node,
        name: 'slug',
        value: slugVal,
      })
    }

    /**
     * Create Page URLs Using /slug
     */
    if (node.frontmatter.template === 'page') {
      createNodeField({
        node,
        name: 'slug',
        value: `/${_.kebabCase(node.frontmatter.slug)}/`,
      })
    }
    /**
     * Create Tag URLs Using /tagslug
     */
    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map((tag) => `/tag/${_.kebabCase(tag)}/`)
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs })
    }
  }
}

module.exports = onCreateNode

const slugify = require('slugify')

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

function slugifyStr(inputStr: string) {
  const slugifyStrOut = slugify(inputStr, { lower: true })
  return slugifyStrOut
}

function dateLink(dateInput) {
  const date = new Date(dateInput)
  const dateLinkOut = date.toISOString().split('T')[0].split('-').join('/')
  return dateLinkOut
}

export const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    /**
     * Create Post URLs Using YYYY/MM/DD/slug
     *
     * If slug does not exist generate URL using post title
     *
     * Don't set slugVal for pages
     */
    if (node.frontmatter.date) {
      const dateURL = dateLink(node.frontmatter.date)
      if (node.frontmatter.slug) {
        slugVal = `${dateURL}/${node.frontmatter.slug}`
      } else {
        slugVal = `${dateURL}/${slugifyStr(node.frontmatter.title)}`
      }
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
        value: `/${slugifyStr(node.frontmatter.slug)}/`,
      })
    }
    /**
     * Create Tag URLs Using /tagslug
     */
    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map((tag) => `/tag/${slugifyStr(tag)}/`)
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs })
    }
  }
}

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Topbar, Footer, Post } from '../components'
import { useSiteMetadata } from '../hooks'

const PostTemplate = ({ data }) => {
  const { title: siteTitle } = useSiteMetadata()
  const { title: postTitle } = data.markdownRemark.frontmatter
  const metaDescription = data.markdownRemark.excerpt

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription}>
      <Topbar />
      <Post post={data.markdownRemark} />
      <Footer />
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        tagSlugs: PropTypes.arrayOf(PropTypes.string),
      }),
      excerpt: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        image: PropTypes.any,
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string.isRequired,
      }),
      html: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  }),
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 150)
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        tags
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default PostTemplate

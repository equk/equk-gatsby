import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Topbar, Footer, Post } from '../components'
import { useSiteMetadata } from '../hooks'

const PostTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()
  const { title: postTitle, description: postDescription } = data.markdownRemark.frontmatter
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle

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
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        description: PropTypes.any,
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
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default PostTemplate

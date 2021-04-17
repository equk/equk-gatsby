/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Topbar, Footer, Page } from '../components'
import { useSiteMetadata } from '../hooks'

const PageTemplate = ({ data }) => {
  const { title: siteTitle } = useSiteMetadata()
  const { html: pageBody } = data.markdownRemark
  const { image: pageImage } = data.markdownRemark.frontmatter
  const { title: pageTitle } = data.markdownRemark.frontmatter
  const metaDescription = data.markdownRemark.excerpt

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Topbar />
      <Page title={pageTitle} image={pageImage}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
      <Footer />
    </Layout>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      excerpt: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.any,
        image: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            id: PropTypes.string,
          }),
        }),
        title: PropTypes.string.isRequired,
      }),
      html: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  }),
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 150)
      html
      frontmatter {
        title
        date
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default PageTemplate

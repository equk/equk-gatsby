/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Topbar, Footer, Page } from '../components'
import { useSiteMetadata } from '../hooks'

const PageTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()
  const { html: pageBody } = data.markdownRemark
  const { image: pageImage } = data.markdownRemark.frontmatter
  const { title: pageTitle, description: pageDescription } = data.markdownRemark.frontmatter
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle

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
      frontmatter: PropTypes.shape({
        date: PropTypes.any,
        description: PropTypes.string,
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
      html
      frontmatter {
        title
        date
        description
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

export default PageTemplate

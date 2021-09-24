/* eslint-disable react/no-danger */
import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Topbar, Footer, Page } from '../components'
import { useSiteMetadata } from '../hooks'

interface PageTemplateProps {
  data?: {
    markdownRemark?: {
      excerpt: string
      frontmatter?: {
        date?: any
        image?: {
          childImageSharp?: {
            id?: string
          }
        }
        title: string
      }
      html: string
      id: string
    }
  }
}

const PageTemplate = ({ data }: PageTemplateProps) => {
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

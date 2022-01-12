import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Topbar, Footer, Feed, Page, Hero, Pagination } from '../components'
import { useSiteMetadata } from '../hooks'

interface IndexTemplateProps {
  pageContext: any
  data: {
    allMarkdownRemark: {
      edges?: {
        node?: {
          fields?: {
            slug: string
            tagSlugs?: string[]
          }
          frontmatter?: {
            date: string
            description?: any
            tags?: string[]
            title: string
          }
        }
      }[]
    }
  }
}

function IndexTemplate({ data, pageContext }: IndexTemplateProps) {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()

  const { currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath } = pageContext

  const { edges } = data.allMarkdownRemark
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle

  return (
    <Layout title={`${pageTitle} - ${siteSubtitle}`} description={siteSubtitle}>
      <Topbar />
      <Hero />
      <div className="index-page">
        <Page title="">
          <Feed edges={edges} />
          <Pagination
            prevPagePath={prevPagePath}
            nextPagePath={nextPagePath}
            hasPrevPage={hasPrevPage}
            hasNextPage={hasNextPage}
          />
        </Page>
        <Footer />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { template: { ne: "page" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            tagSlugs
          }
          frontmatter {
            title
            date
            tags
            description
          }
        }
      }
    }
  }
`

export default IndexTemplate

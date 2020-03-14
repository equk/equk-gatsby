import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Topbar, Footer, Feed, Page, Hero, Pagination } from '../components'
import { useSiteMetadata } from '../hooks'

const IndexTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()

  const { currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath } = pageContext

  const { edges } = data.allMarkdownRemark
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle

  return (
    <Layout title={`${pageTitle} - ${siteSubtitle}`} description={siteSubtitle}>
      <Topbar />
      <Hero />
      <div className="index-page">
        <Page>
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

IndexTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
              tagSlugs: PropTypes.arrayOf(PropTypes.string),
            }),
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              description: PropTypes.any,
              tags: PropTypes.arrayOf(PropTypes.string),
              title: PropTypes.string.isRequired,
            }),
          }),
        })
      ),
    }),
  }),
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

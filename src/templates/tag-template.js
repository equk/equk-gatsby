import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Topbar, Footer, Feed, Page, Hero, Pagination } from '../components'
import { useSiteMetadata } from '../hooks'

const TagTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()

  const { tag, currentPage, prevPagePath, nextPagePath, hasPrevPage, hasNextPage } = pageContext

  const { edges } = data.allMarkdownRemark
  const pageTitle =
    currentPage > 0
      ? `All Posts tagged with "${tag}" - Page ${currentPage} - ${siteTitle}`
      : `All Posts tagged with "${tag}" - ${siteTitle}`
  const tagTitle = `Posts tagged with #${tag}`

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Topbar />
      <Hero />
      <div className="tag-page">
        <Page title={tagTitle}>
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

TagTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              description: PropTypes.any,
              title: PropTypes.string.isRequired,
            }),
          }),
        })
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        subtitle: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
}

export const query = graphql`
  query TagPage($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { tags: { in: [$tag] }, template: { ne: "page" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
          }
        }
      }
    }
  }
`

export default TagTemplate

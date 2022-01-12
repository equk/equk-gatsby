import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Topbar, Footer, Post } from '../components'
import { useSiteMetadata } from '../hooks'

interface PostTemplateProps {
  data: {
    markdownRemark: {
      fields: {
        slug: string
        tagSlugs?: string[]
      }
      excerpt: string
      frontmatter: {
        date: string
        image?: any
        tags?: string[]
        title: string
      }
      html: string
      id: string
    }
  }
}

function PostTemplate({ data }: PostTemplateProps) {
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

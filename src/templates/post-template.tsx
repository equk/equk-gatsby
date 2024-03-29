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
      tableOfContents: string
      id: string
    }
  }
}

function PostTemplate({ data }: PostTemplateProps) {
  const { title: siteTitle } = useSiteMetadata()
  const { title: postTitle } = data.markdownRemark.frontmatter
  const metaDescription = data.markdownRemark.excerpt
  const ogType = 'article'

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} ogtype={ogType}>
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
      tableOfContents
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
            gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2.68)
          }
        }
      }
    }
  }
`

export default PostTemplate

import React from 'react'
import { Helmet } from 'react-helmet'
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
  const ogType = 'article'

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription}>
      <Topbar />
      <Post post={data.markdownRemark} />
      <Footer />
      <Helmet>
        <meta property="og:type" content={ogType} />
      </Helmet>
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
            gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2.68)
          }
        }
      }
    }
  }
`

export default PostTemplate

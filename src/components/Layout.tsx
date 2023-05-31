import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../hooks'

interface LayoutProps {
  children?: React.ReactNode
  title: string
  description?: string
  ogtype?: string
}

function Layout({ children, title, description, ogtype }: LayoutProps) {
  const { author, url } = useSiteMetadata()
  const TwitterCreator = `@${author.contacts.twitter}`
  const ogImage = `${url}/media/social.png`
  const ogType = ogtype || 'website'
  return (
    <div className="page-wrapper">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="512" />
        <meta property="og:type" content={ogType} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={TwitterCreator} />
      </Helmet>
      {children}
    </div>
  )
}

export default Layout

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

interface PageProps {
  children?: React.ReactNode
  title: string
  image?: any
}

function Page({ title, children, image }: PageProps) {
  return (
    <div className="container">
      <article className="content">
        <header className="page-full-header">
          <h1 className="content-title">{title}</h1>
        </header>
        {image && (
          <div className="post-feature-image">
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="" />
          </div>
        )}
        <section className="page-full-content">
          <div className="content-body">{children}</div>
        </section>
      </article>
    </div>
  )
}

export default Page

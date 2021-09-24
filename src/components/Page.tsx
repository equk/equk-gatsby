import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

interface PageProps {
  children?: React.ReactNode
  title: string
  image?: any
}

const Page = ({ title, children, image }: PageProps) => (
  <div className="container">
    <article className="content">
      <header className="page-full-header">
        <h1 className="content-title">{title}</h1>
      </header>
      {image && (
        <div className="post-feature-image">
          <GatsbyImage image={image.childImageSharp.gatsbyImageData} />
        </div>
      )}
      <section className="page-full-content">
        <div className="content-body">{children}</div>
      </section>
    </article>
  </div>
)

export default Page

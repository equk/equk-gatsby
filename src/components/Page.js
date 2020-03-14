import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const Page = ({ title, children, image }) => (
  <div className="container">
    <article className="content">
      <header className="page-full-header">
        <h1 className="content-title">{title}</h1>
      </header>
      {image && (
        <div className="post-feature-image">
          <Img fluid={image.childImageSharp.fluid} />
        </div>
      )}
      <section className="page-full-content">
        <div className="content-body">{children}</div>
      </section>
    </article>
  </div>
)

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  image: PropTypes.any,
}

export default Page

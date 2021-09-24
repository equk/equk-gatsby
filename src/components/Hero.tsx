import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks'

const Hero = () => {
  const { title, subtitle } = useSiteMetadata()
  return (
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="blog-title">
            <Link className="title-link" to="/">
              {title}
            </Link>
          </h1>
          <h2 className="blog-subtitle">{subtitle}</h2>
          <p className="hero-social">
            <a
              href="https://twitter.com/equilibriumuk"
              target="_blank"
              aria-label="go to twitter"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter" />
            </a>
            <a href="https://github.com/equk" target="_blank" aria-label="go to github" rel="noopener noreferrer">
              <i className="fa fa-github" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks'

function Hero() {
  const { title, subtitle, author } = useSiteMetadata()
  const TwitterLink = `https://twitter.com/${author.contacts.twitter}`
  const GithubLink = `https://github.com/${author.contacts.github}`
  const MastodonLink = `https://${author.contacts.mastodon_url}`
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
            <a href={TwitterLink} target="_blank" aria-label="go to twitter" rel="noopener noreferrer">
              <i className="fa fa-twitter" />
            </a>
            <a href={GithubLink} target="_blank" aria-label="go to github" rel="noopener noreferrer">
              <i className="fa fa-github" />
            </a>
            <a href={MastodonLink} target="_blank" aria-label="go to mastodon" rel="noopener noreferrer">
              <i className="fa fa-mastodon" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

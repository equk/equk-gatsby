import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks'

function Hero() {
  const { title, author } = useSiteMetadata()
  const TwitterLink = `https://twitter.com/${author.contacts.twitter}`
  const GithubLink = `https://github.com/${author.contacts.github}`
  const MastodonLink = `https://${author.contacts.mastodon_url}`
  return (
    <section className="top-banner">
      <div className="topbanner-body relative overflow-hidden">
        <div className="topbanner-bg absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="text-5xl font-bold uppercase tracking-tight md:text-6xl">
                <Link className="title-link text-white" to="/">
                  {title}
                </Link>
              </h1>
              <p className="social-blocks">
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
        </div>
      </div>
    </section>
  )
}

export default Hero

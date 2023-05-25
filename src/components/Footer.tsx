/* eslint-disable react/no-invalid-html-attribute */
import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks'

function Footer() {
  const { menu, author } = useSiteMetadata()
  const GithubLink = `https://github.com/${author.contacts.github}`
  const MastodonLink = `https://${author.contacts.mastodon_url}`
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-300 text-gray-800 dark:border-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-6xl py-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-4 md:gap-8 lg:grid-cols-4">
          <div className="footer-title">
            <p className="pb-4 text-center md:justify-start md:pb-0 md:text-left">equk</p>
          </div>
          <div className="hidden md:block" />
          <div className="footer-nav hidden md:block">
            <nav aria-label="More on this site" className="gap-x-2 text-center sm:gap-x-0">
              <ul className="md:self-center">
                {menu.map((item) => (
                  <Link to={item.path} className="footer-link">
                    {item.label}
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
          <div className="social-blocks">
            <a href={GithubLink} target="_blank" aria-label="go to github" rel="noopener noreferrer">
              <i className="fa fa-github" />
            </a>
            <a href={MastodonLink} target="_blank" aria-label="go to mastodon" rel="noopener noreferrer">
              <i className="fa fa-mastodon" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto grid max-w-6xl border-t border-gray-300 p-1 dark:border-gray-900 md:grid-cols-2">
          <div className="copyright text-center text-sm md:text-left">
            Copyright &copy; {year} equk.co.uk all rights reserved.
          </div>
          <div className="powered-by hidden text-right text-sm md:block">
            Powered by{' '}
            <a
              href="https://reactjs.org/"
              title="React"
              target="_blank"
              aria-label="go to react"
              rel="noopener noreferrer"
            >
              <img src="/media/logos/reactsq.svg" alt="react" width="27px" height="20px" />
            </a>
            <a
              href="https://graphql.org/"
              title="GraphQL"
              target="_blank"
              aria-label="go to gatsby"
              rel="noopener noreferrer"
            >
              <img src="/media/logos/graphql.svg" alt="graphql" width="25px" height="20px" />
            </a>
            <a
              href="https://gatsbyjs.org/"
              title="Built using Gatsby"
              target="_blank"
              aria-label="go to gatsby"
              rel="noopener noreferrer"
            >
              <img src="/media/logos/gatsby.svg" alt="gatsby" width="25px" height="20px" />
            </a>
            <a
              href="https://www.netlify.com/"
              title="Hosted by Netlify"
              target="_blank"
              aria-label="go to netlify"
              rel="noopener noreferrer"
            >
              <img src="/media/logos/netlify.svg" alt="netlify" width="25px" height="20px" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

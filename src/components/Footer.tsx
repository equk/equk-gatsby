import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks'

function Footer() {
  const { copyright, menu } = useSiteMetadata()

  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="columns">
            <div className="footer-title">
              <p>EQUK</p>
            </div>
            <div className="footer-links">
              {menu.map((item) => (
                <Link to={item.path} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="footer-social">
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
            </div>
          </div>
          <div className="columns">
            <div className="copyright">{copyright}</div>
            <div className="powered-by">
              Powered by
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
      </div>
    </footer>
  )
}

export default Footer

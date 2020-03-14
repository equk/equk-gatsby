import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks'

const Footer = () => {
  const { copyright, menu } = useSiteMetadata()

  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="columns">
            <div className="footer-title">
              <h1>EQUK</h1>
            </div>
            <div className="footer-links">
              {menu.map(item => (
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
              Powered By:
              <img src="/media/logos/react.svg" alt="react" />
              React
              <img src="/media/logos/graphql.svg" alt="graphql" /> GraphQL
              <img src="/media/logos/gatsby.svg" alt="gatsby" /> Gatsby
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

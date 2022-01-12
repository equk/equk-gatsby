import React from 'react'
import { Link } from 'gatsby'
import { Layout, Topbar, Page } from '../components'
import { useSiteMetadata } from '../hooks'

function NotFoundTemplate() {
  const { title, subtitle } = useSiteMetadata()

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Topbar />
      <Page title="NOT FOUND">
        <div className="error-page">
          <div className="error">
            <div className="imgBlock">
              <div className="imgEle 404" />
            </div>

            <div className="title">404</div>
            <div className="description">
              The requested operation failed because a resource associated with the request could not be found.
            </div>
            <div className="actions">
              <Link className="error-link" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </Page>
    </Layout>
  )
}

export default NotFoundTemplate

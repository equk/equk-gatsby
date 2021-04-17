import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const Layout = ({ children, title, description }) => (
  <div className="page-wrapper">
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@equk_co_uk" />
      <meta name="twitter:creator" content="@equilibriumuk" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="equk.co.uk" />
      <meta content="https://equk.co.uk/media/social.png" property="og:image" />
      <meta content="1024" property="og:image:width" />
      <meta content="512" property="og:image:height" />
      <meta content="https://equk.co.uk/media/social.png" name="twitter:image" />
      <meta content="1024" name="twitter:image:width" />
      <meta content="512" name="twitter:image:height" />
      <meta content="https://equk.co.uk/media/social.png" property="og:image" />
      <meta content="1024" property="og:image:width" />
      <meta content="512" property="og:image:height" />
    </Helmet>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default Layout

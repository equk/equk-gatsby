import React from 'react'
import { Helmet } from 'react-helmet'

export const wrapPageElement = ({ element, props: { location } }) => {
  const baseUrl = 'https://equk.co.uk'
  let pathname = ``
  pathname = location.pathname || '/'
  const url = `${baseUrl}${pathname}`
  return (
    <>
      <Helmet
        link={[
          {
            rel: 'canonical',
            key: url,
            href: url,
          },
        ]}
      />
      <Helmet
        meta={[
          {
            property: 'og:url',
            content: url,
          },
        ]}
      />
      {element}
    </>
  )
}

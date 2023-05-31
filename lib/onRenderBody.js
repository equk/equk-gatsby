import React from 'react'

export const onRenderBody = ({ setHeadComponents, pathname = `/` }) => {
  const baseUrl = 'https://equk.co.uk'
  const url = `${baseUrl}${pathname}`
  setHeadComponents([<link rel="canonical" key={url} href={url} />, <meta property="og:url" content={url} />])
}

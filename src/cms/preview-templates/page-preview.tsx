import React from 'react'
// eslint-disable-next-line import/no-named-as-default
import PagePreviewTemplate from '../../templates/preview-template'

interface PagePreviewProps {
  entry: any
  widgetFor: any
}

const PagePreview = ({ entry, widgetFor }: PagePreviewProps) => {
  const body = widgetFor('body')
  const title = entry.getIn(['data', 'title'])

  return <PagePreviewTemplate body={body} title={title} />
}

export default PagePreview

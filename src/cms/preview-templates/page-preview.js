import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line import/no-named-as-default
import PagePreviewTemplate from '../../templates/preview-template'

const PagePreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body')
  const title = entry.getIn(['data', 'title'])

  return <PagePreviewTemplate body={body} title={title} />
}

PagePreview.propTypes = {
  entry: PropTypes.object.isRequired,
  widgetFor: PropTypes.object.isRequired,
}

export default PagePreview

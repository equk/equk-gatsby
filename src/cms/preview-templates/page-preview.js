import React from 'react'
import PropTypes from 'prop-types'

const PagePreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body')
  const title = entry.getIn(['data', 'title'])

  return (
    <div className="page">
      <h1 className="page__title">{title}</h1>
      <div className="page__body">{body}</div>
    </div>
  )
}

PagePreview.propTypes = {
  entry: PropTypes.object.isRequired,
  widgetFor: PropTypes.object.isRequired,
}

export default PagePreview

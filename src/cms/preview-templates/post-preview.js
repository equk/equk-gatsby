import React from 'react'
import PropTypes from 'prop-types'

const PostPreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body')
  const title = entry.getIn(['data', 'title'])

  return (
    <div className="post">
      <h1 className="post__title">{title}</h1>
      <div className="post__body">{body}</div>
    </div>
  )
}

PostPreview.propTypes = {
  entry: PropTypes.object.isRequired,
  widgetFor: PropTypes.object.isRequired,
}

export default PostPreview

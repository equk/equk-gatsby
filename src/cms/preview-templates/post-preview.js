import React from 'react'
import PropTypes from 'prop-types'
import PreviewTemplate from '../../templates/preview-template'

const PostPreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body')
  const title = entry.getIn(['data', 'title'])
  const date = entry.getIn(['data', 'date'])
  const image = entry.getIn(['data', 'image'])

  return <PreviewTemplate body={body} title={title} date={date} image={image} />
}

PostPreview.propTypes = {
  entry: PropTypes.object.isRequired,
  widgetFor: PropTypes.object.isRequired,
}

export default PostPreview

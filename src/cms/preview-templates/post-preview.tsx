import React from 'react'
import PreviewTemplate from '../../templates/preview-template'

interface PostPreviewProps {
  entry: any
  widgetFor: any
}

const PostPreview = ({ entry, widgetFor }: PostPreviewProps) => {
  const body = widgetFor('body')
  const title = entry.getIn(['data', 'title'])
  const date = entry.getIn(['data', 'date'])
  const image = entry.getIn(['data', 'image'])

  return <PreviewTemplate body={body} title={title} date={date} image={image} />
}

export default PostPreview

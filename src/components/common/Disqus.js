/* eslint-disable import/no-unresolved */
/* to use this install react-disqus-comments */
import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'
import { useSiteMetadata } from '../../hooks'

const DisqComments = ({ postTitle, postSlug }) => {
  const { url, disqusShortname } = useSiteMetadata()
  const postURL = `${url}/${postSlug}`

  return (
    <div className="comments">
      {disqusShortname && (
        <ReactDisqusComments shortname={disqusShortname} identifier={postURL} title={postTitle} url={postURL} />
      )}
    </div>
  )
}

DisqComments.propTypes = {
  postTitle: PropTypes.string,
  postSlug: PropTypes.string,
}

export default DisqComments

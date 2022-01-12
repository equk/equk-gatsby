import React, { useEffect } from 'react'
import Gitalk from 'gitalk'
import { useSiteMetadata } from '../../hooks'

interface CommentsProps {
  postSlug?: string
}

function Comments({ postSlug }: CommentsProps) {
  const { url } = useSiteMetadata()
  const postURL = `${url}/${postSlug}`

  useEffect(() => {
    const GitTalkInstance = new Gitalk({
      clientID: '4f0178686cd10054851a',
      clientSecret: 'b8a008819fe065c2923218f1c287ab5da3a2ba35',
      repo: 'equk-comments',
      owner: 'equk',
      admin: ['equk'],
      id: postSlug,
      title: `Comments on '${postURL}'`,
      distractionFreeMode: false,
    })
    GitTalkInstance.render('gitalk-container')
  })

  return (
    <div className="comments">
      <div id="gitalk-container" />
    </div>
  )
}

export default Comments

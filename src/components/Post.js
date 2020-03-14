/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import moment from 'moment'
import Comments from './common/Comments'
import Tags from './common/Tags'
import { useSiteMetadata } from '../hooks'

const Post = ({ post }) => {
  const { html } = post
  const { tagSlugs, slug } = post.fields
  const { tags, title, date, image } = post.frontmatter
  const { author } = useSiteMetadata()

  return (
    <div className="container">
      <article className="content">
        <header className="post-full-header">
          <h1 className="content-title">{title}</h1>
          <div className="post-date">
            <div className="meta">
              <p className="meta__date">{moment(date).format('MMM D, YYYY')}</p>
            </div>
          </div>
        </header>
        {image && (
          <div className="post-feature-image">
            <Img fluid={image.childImageSharp.fluid} />
          </div>
        )}
        <section className="post-full-content">
          <div className="content-body" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="post-footer">
            <div className="author">
              <div className="authorimage">
                <img src={author.photo} alt={author.name} />
              </div>
              <h4>
                <a href="/about">{author.name}</a>
              </h4>
              <p className="bio">{author.bio}</p>
              <div className="post-meta">
                <time dateTime={moment(date).format('DD MMM YYYY')}>{moment(date).format('DD MMM YYYY')}</time>
              </div>
            </div>

            <div className="footer-tag hide-for-small">
              <div className="post-meta">
                <div className="post-tags">{tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}</div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <div className="post-comments">
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post

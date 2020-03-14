import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import moment from 'moment'
import { kebabCase } from 'lodash'

const Feed = ({ edges }) => (
  <div className="post-feed">
    {edges.map(edge => (
      <div className="post" key={edge.node.fields.slug}>
        <div className="post-meta">
          <time className="published" dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('DD MMMM YYYY')}
          </time>
        </div>
        <h2 className="post-title">
          <Link className="post-title-link" to={`/${edge.node.fields.slug}`}>
            {edge.node.frontmatter.title}
          </Link>
        </h2>
        <div className="post-meta">
          <span className="post-meta-divider" />
          <span className="post-tags">
            {edge.node.frontmatter.tags ? (
              <div className="tags-container">
                <ul className="taglist">
                  {edge.node.frontmatter.tags.map(tag => (
                    <li key={`${tag}tag`}>
                      <Link to={`/tag/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </span>
        </div>
      </div>
    ))}
  </div>
)

Feed.propTypes = {
  edges: PropTypes.object.isRequired,
}

export default Feed

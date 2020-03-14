import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Tags = ({ tags, tagSlugs }) => (
  <div className="tags">
    <ul className="taglist">
      {tagSlugs &&
        tagSlugs.map((slug, i) => (
          <li className="taglist-item" key={tags[i]}>
            <Link to={slug} className="taglist-item-link">
              {tags[i]}
            </Link>
          </li>
        ))}
    </ul>
  </div>
)

Tags.propTypes = {
  tags: PropTypes.array,
  tagSlugs: PropTypes.array,
}

export default Tags

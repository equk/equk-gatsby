import React from 'react'
import { Link } from 'gatsby'

interface TagsProps {
  tags: any[]
  tagSlugs?: any[]
}

function Tags({ tags, tagSlugs }: TagsProps) {
  return (
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
}

export default Tags

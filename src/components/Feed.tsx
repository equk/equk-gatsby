import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import { kebabCase } from 'lodash'

interface FeedProps {
  edges: any
}

function Feed({ edges }: FeedProps) {
  return (
    <div className="post-list">
      <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
        <div className="prose lg:prose-lg mx-auto max-w-none">
          <ul className="mb-6 list-none">
            {edges.map((edge) => (
              <li className="mt-4" key={edge.node.fields.slug}>
                <h2 className="post-title mb-1 mt-0 font-normal">
                  <Link className="post-title-link" to={`/${edge.node.fields.slug}`}>
                    {edge.node.frontmatter.title}
                  </Link>
                </h2>
                <div className="post-meta">
                  <span className="post-meta-divider" />
                  <span className="post-tags lowercase text-sm hidden md:block">
                    {edge.node.frontmatter.tags ? (
                      <div className="tags-container">
                        <ul className="taglist">
                          {edge.node.frontmatter.tags.map((tag) => (
                            <li key={`${tag}tag`}>
                              <Link to={`/tag/${kebabCase(tag)}/`}>{tag}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </span>
                </div>
                <div className="flex items-center space-x-2 uppercase">
                  <time className="published" dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
                    {moment(edge.node.frontmatter.date).format('DD MMMM YYYY')}
                  </time>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Feed

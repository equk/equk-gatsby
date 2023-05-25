/* eslint-disable react/no-danger */
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import moment from 'moment'
import Comments from './common/Comments'
import Tags from './common/Tags'
import { useSiteMetadata } from '../hooks'

interface PostProps {
  post: any
}

function Post({ post }: PostProps) {
  const { html } = post
  const { tagSlugs, slug } = post.fields
  const { tags, title, date, image } = post.frontmatter
  const { author } = useSiteMetadata()

  return (
    <main>
      <article className="content">
        <header className="pb-16 pt-24">
          <div className="space-y-4">
            <h1 className="text-center text-5xl font-bold dark:text-gray-100">{title}</h1>
            <dl>
              <div>
                <dl>
                  <div>
                    <div className="text-center leading-6 text-gray-500 dark:text-gray-400">
                      {date && <time dateTime={moment(date).toISOString()}>{moment(date).format('MMM D, YYYY')}</time>}
                    </div>
                  </div>
                </dl>
              </div>
            </dl>
          </div>
        </header>

        {image && (
          <div className="hero-image">
            <div className="hero-w">
              <GatsbyImage image={image.childImageSharp.gatsbyImageData} objectFit="contain" alt="" />
            </div>
          </div>
        )}
        <section className="post-full-content">
          <div className="post-content">
            <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose lg:prose-lg mx-auto max-w-none">
                <div className="content-body" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
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
        <Comments postSlug={slug} />
      </div>
    </main>
  )
}

export default Post

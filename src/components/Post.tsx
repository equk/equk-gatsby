/* eslint-disable react/no-danger */
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Tags from './common/Tags'
import { useSiteMetadata } from '../hooks'

interface PostProps {
  post: any
}

function Post({ post }: PostProps) {
  const { html, tableOfContents } = post
  const { tagSlugs } = post.fields
  const { tags, title, date, image } = post.frontmatter
  const { author } = useSiteMetadata()

  return (
    <main>
      <article className="content">
        <header className="pb-16 pt-24">
          <div className="space-y-4">
            <h1 className="text-center text-5xl font-bold dark:text-gray-100">{title}</h1>
            <div>
              <div>
                <div className="text-center leading-6 text-gray-500 dark:text-gray-400">
                  {date && (
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString('en-us', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </time>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {image && (
          <div className="hero-image">
            <div className="hero-w">
              <GatsbyImage image={image.childImageSharp.gatsbyImageData} objectFit="contain" alt="" />
            </div>
          </div>
        )}
        <section className="post-full-content xl:relative">
          <div className="toc hidden xl:absolute xl:h-full xl:right-10 xl:top-2 xl:z-10">
            <div className="xl:sticky xl:top-10">
              <div className="flex justify-center items-center xl:flex-col xl:mt-0 xl:text-sm">
                <p className="text-lg font-bold pb-2">On This Page</p>
                <div className="text-left" dangerouslySetInnerHTML={{ __html: tableOfContents }} />
              </div>
            </div>
          </div>
          <div className="post-content">
            <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose lg:prose-lg mx-auto max-w-none">
                <div className="content-body" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
          <div className="post-footer border-t border-b border-slate-200 px-3 py-2 dark:border-slate-700/40">
            <div className="flex items-center">
              <div className="flex items-center">
                <img className="object-cover h-20 rounded-full" src={author.photo} alt={author.name} />
              </div>
              <div className="mx-5 flex-1 items-center text-left">
                <a href="/about" className="mx-2 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                  {author.name}
                </a>
                <br />
                <span className="mx-2 text-sm">{author.bio}</span>
                <br />
                <time className="mx-2 text-sm text-gray-600 dark:text-gray-300 uppercase" dateTime={date}>
                  {new Date(date).toLocaleDateString('en-gb', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <div className="hidden md:flex items-center text-sm text-right">
                <div className="post-tags">{tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}</div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <div className="post-comments">
        <div className="comments">
          <p className="p-6 text-center border-2 border-gray-100 rounded-lg dark:border-slate-700/40">
            <i className="fa fa-commenting" /> Comments are currently disabled
          </p>
        </div>
      </div>
    </main>
  )
}

export default Post

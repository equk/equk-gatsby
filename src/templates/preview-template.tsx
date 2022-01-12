import React from 'react'
import moment from 'moment'

interface PreviewTemplateProps {
  body: React.ReactNode
  title?: string
  date?: string
  image?: string
}

function PreviewTemplate({ title, date, body, image }: PreviewTemplateProps) {
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
            <img src={image} alt="" />
          </div>
        )}
        <section className="post-full-content">
          <div className="content-body">{body}</div>
        </section>
      </article>
    </div>
  )
}

interface PagePreviewTemplateProps {
  body: React.ReactNode
  title?: string
  image?: string
}

export function PagePreviewTemplate({ title, body, image }: PagePreviewTemplateProps) {
  return (
    <div className="container">
      <article className="content">
        <header className="page-full-header">
          <h1 className="content-title">{title}</h1>
        </header>
        {image && (
          <div className="post-feature-image">
            <img src={image} alt="" />
          </div>
        )}
        <section className="page-full-content">
          <div className="content-body">{body}</div>
        </section>
      </article>
    </div>
  )
}

export default PreviewTemplate

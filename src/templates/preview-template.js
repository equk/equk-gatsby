import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const PreviewTemplate = ({ title, date, body }) => (
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
      <section className="post-full-content">
        <div className="content-body">{body}</div>
      </section>
    </article>
  </div>
)

PreviewTemplate.propTypes = {
  body: PropTypes.node.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
}

export default PreviewTemplate

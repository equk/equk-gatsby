import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { Layout, Topbar, Footer, Page } from '../components'
import { useSiteMetadata, useTagsList } from '../hooks'

const TagsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata()
  const tags = useTagsList()

  return (
    <Layout title={`Tags - ${title}`} description={subtitle}>
      <Topbar />
      <Page title="Tags">
        <ul>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
      <Footer />
    </Layout>
  )
}

export default TagsListTemplate

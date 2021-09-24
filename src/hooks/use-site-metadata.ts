import { useStaticQuery, graphql } from 'gatsby'

/**
 * These hooks are re-usable small queries for components using useStaticQuery.
 *
 * Hooks are a new addition in React 16.8. They let you use state
 * and other React features without writing a class
 *
 * ref: useStaticQuery
 * https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/
 *
 * ref: React Hooks
 * https://reactjs.org/docs/hooks-intro.html
 *
 */

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                email
                telegram
                twitter
                github
                rss
                vkontakte
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata

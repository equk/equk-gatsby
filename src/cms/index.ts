/* eslint-disable import/no-unresolved */
/* to use this install netlify-cms-app */
/* then add / comment out modulePath: `${__dirname}/src/cms/index.js`, */
/* in gatsby-config.js */
import CMS from 'netlify-cms-app'
import PagePreview from './preview-templates/page-preview'
import PostPreview from './preview-templates/post-preview'

CMS.registerPreviewTemplate('pages', PagePreview)
CMS.registerPreviewTemplate('posts', PostPreview)

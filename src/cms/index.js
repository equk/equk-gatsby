import CMS from 'netlify-cms-app'
import PagePreview from './preview-templates/page-preview'
import PostPreview from './preview-templates/post-preview'
import '../assets/scss/init.scss'

CMS.registerPreviewTemplate('pages', PagePreview)
CMS.registerPreviewTemplate('posts', PostPreview)

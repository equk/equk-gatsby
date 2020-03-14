const path = require('path')

module.exports = {
  url: 'https://equk.co.uk',
  title: "equk's blog",
  subtitle: 'writings of a coder + sysadmin',
  copyright: '© 2020 equk.co.uk All rights reserved.',
  disqusShortname: 'equk',
  postsPerPage: 9,
  googleAnalyticsId: '',
  themeColor: '#dd1144',
  backgroundColor: '#ffffff',
  logo: path.resolve(__dirname, 'src/icon/icon.png'),
  menu: [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
  ],
  author: {
    name: 'equilibriumuk',
    photo: '/users/equilibriumuk.jpg',
    bio: 'Developer & Linux Administrator',
    contacts: {
      email: '#',
      telegram: '#',
      twitter: 'equilibriumuk',
      github: 'equk',
      rss: '#',
      vkontakte: '#',
    },
  },
}

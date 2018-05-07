module.exports = {
  siteMetadata: {
    name: 'Hack Happy Valley',
    siteUrl: 'http://hackhappyvalley.com'
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hack Happy Valley',
        short_name: 'Hack Happy Valley',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#ff5a5f',
        display: 'minimal-ui'
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-45778683-3',
        head: true
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline'
  ]
}

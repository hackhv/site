module.exports = {
  siteMetadata: {
    name: 'Camp Lightbulb',
    siteUrl: 'https://camplightbulb.lachlanjc.me'
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Camp Lightbulb',
        short_name: 'Camp Lightbulb',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#ff0059',
        display: 'minimal-ui'
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline'
  ]
}

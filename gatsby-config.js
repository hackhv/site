module.exports = {
  siteMetadata: {
    name: 'Happy Valley Hacks',
    siteUrl: 'https://happyvalleyhacks.com'
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Happy Valley Hacks',
        short_name: 'Happy Valley Hacks',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#ff5a5f',
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

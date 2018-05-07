import React from 'react'
import Helmet from 'react-helmet'
import data from 'data.json'
import ThemeProvider from 'theme'
import { colors } from 'theme/config'

const { name, title, description, img, url, org, event } = data

const meta = tags =>
  tags.map((props, index) =>
    React.createElement('meta', { ...props, key: index })
  )
const heap = `
  window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
  heap.load("3545039032");
`

export default props => (
  <ThemeProvider>
    <Helmet defaultTitle={title} title={title}>
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="theme-color" content={colors.primary} />
      {meta([
        { name: 'description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: description },
        { name: 'twitter:domain', content: url },
        { name: 'twitter:image', content: img },
        { name: 'twitter:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: img },
        { property: 'og:image:height', content: 576 },
        { property: 'og:image:width', content: 576 },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: name },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url }
      ])}
      <link rel="stylesheet" href="/fonts.css" />
      <script type="application/ld+json" children={JSON.stringify(org)} />
      <script type="application/ld+json" children={JSON.stringify(event)} />
      <script dangerouslySetInnerHTML={{ __html: heap }} />
    </Helmet>
    {props.children()}
  </ThemeProvider>
)

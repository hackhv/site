import React from 'react'
import { injectGlobal, ThemeProvider as Root } from 'styled-components'
import config from './config'

export const theme = config

injectGlobal`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: ${config.font};
    line-height: 1.625;
  }
  /*
  @font-face {
    font-family: Averta;
    font-style: normal;
    font-weight: 400;
    src: url(//hackclub.com/fonts/averta-regular.woff2) format('woff2'), url(//hackclub.com/fonts/averta-regular.woff) format('woff');
    unicode-range: U + 0000 - F8FE, U + F900-FFFF;
  }
  @font-face {
    font-family: Averta;
    font-style: normal;
    font-weight: 700;
    src: url(//hackclub.com/fonts/averta-bold.woff2) format('woff2'), url(//hackclub.com/fonts/averta-bold.woff) format('woff');
    unicode-range: U + 0000 - F8FE, U + F900-FFFF;
  }
  */
  h1 + h2, h2 + h3, p {
    font-family: ${config.serif};
  }
  a {
    box-shadow: none;
    text-decoration: none;
  }
  ul, ol {
    margin: 0;
    padding: 0;
  }
`

const ThemeProvider = props => (
  <Root theme={config}>
    <div>{props.children}</div>
  </Root>
)

export default ThemeProvider

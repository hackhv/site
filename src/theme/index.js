import React, { Fragment } from 'react'
import { injectGlobal, ThemeProvider as Root } from 'styled-components'
import config from './config'

export const theme = config

injectGlobal`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: ${config.font};
    line-height: 1.5;
  }
  h2 {
    line-height: 1.5 !important;
  }
  a {
    box-shadow: none;
    text-decoration: none;
  }
  ul, ol {
    margin: 0;
    padding: 0;
  }
  h1 + h2,
  p > a,
  b {
    font-weight: 500 !important;
  }
  strong {
    font-weight: 700 !important;
  }
`

const ThemeProvider = props => (
  <Root theme={config}>
    <Fragment>{props.children}</Fragment>
  </Root>
)

export default ThemeProvider

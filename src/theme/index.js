import React from 'react'
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
  a {
    box-shadow: none;
    text-decoration: none;
  }
  ul, ol {
    margin: 0;
    padding: 0;
  }
  p > a,
  strong,
  b {
    font-weight: 500;
  }
`

const ThemeProvider = props => (
  <Root theme={config}>
    <div>{props.children}</div>
  </Root>
)

export default ThemeProvider

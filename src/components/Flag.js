import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Flag = styled(Link).attrs({
  to: '/',
  'aria-label': 'Homepage'
})`
  background: url(/flag.svg) no-repeat;
  background-size: auto 100%;
  flex-shrink: 0;
  width: 36px;
  height: 48px;
  ${props => props.theme.mediaQueries.md} {
    width: 48px;
    height: 64px;
  }
`

export default Flag

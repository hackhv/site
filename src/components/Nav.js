import React from 'react'
import { Box, Container, Flex, Link as A } from '@hackclub/design-system'
import Flag from 'components/Flag'
import Link from 'gatsby-link'

const Base = Box.extend.attrs({ py: 3, w: 1 })`
  position: absolute;
  top: 0;
  z-index: 4;
`

const Inner = Container.withComponent('nav').extend.attrs({
  maxWidth: 48,
  px: 3,
  role: 'navigation'
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Item = A.withComponent(Link).extend.attrs({
  bold: true,
  my: 1,
  px: [2, 3]
})`color: inherit;`

const Nav = ({ color = 'white', ...props }) => (
  <Base role="banner" {...props}>
    <Inner color={color} py={[1, 0]}>
      <Flag />
      <Box ml={3}>
        <Item to="/register" children="Register" />
        <Item to="/sponsors" children="Sponsors" />
      </Box>
    </Inner>
  </Base>
)

export default Nav

import React from 'react'
import { Box, Flex, Link as A } from '@hackclub/design-system'
import Flag from 'components/Flag'
import Link from 'gatsby-link'

const Base = Flex.extend.attrs({
  pt: 3,
  px: [3, 4],
  pb: 2,
  justify: 'space-between'
})`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  align-items: center;
`

const NavBar = Flex.withComponent('nav').extend`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`

export const Item = A.withComponent(Link).extend.attrs({
  bold: true,
  my: 1,
  px: [2, 3]
})`color: inherit;`

const Nav = ({ color = 'white', ...props }) => (
  <Base role="banner" {...props}>
    <Flag />
    <NavBar role="navigation" ml={3} py={[1, 0]} color={color} align="center">
      <Item to="/register" children="Register" />
      <Item to="/info" children="Info" />
      <Item to="/about" children="About" />
      <Item to="/donate" children="Donate" />
    </NavBar>
  </Base>
)

export default Nav

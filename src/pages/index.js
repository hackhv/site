import React, { Fragment } from 'react'
import {
  Box,
  Flex,
  Text,
  Heading,
  BackgroundImage,
  Container
} from '@hackclub/design-system'
import { theme } from 'theme'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from 'components/Nav'
import Action from 'components/Action'
import Footer from 'components/Footer'

const Grid = Box.extend`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  width: 100%;

  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default () => (
  <Fragment>
    <Nav />
    <Box.header bg="primary" py={[6, null, null, 7]}>
      <Container color="white" align="center" px={3}>
        <Heading.h1 f={[6, 7]} mb={2}>
          Hack Happy Valley
        </Heading.h1>
        <Heading.h2 f={[3, 4]} mb={[3, 4]} style={{ fontWeight: 500 }}>
          The first high school hackathon in Central Pennsylvania.
        </Heading.h2>
        <Action to="/register" bg="altLight" f={[3, 4]}>
          Register
        </Action>
      </Container>
    </Box.header>
    <Footer />
  </Fragment>
)

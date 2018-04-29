import React, { Fragment } from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link as A,
  Text
} from '@hackclub/design-system'
import { theme } from 'theme'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from 'components/Nav'
import Action from 'components/Action'
import Footer from 'components/Footer'

export default () => (
  <Fragment>
    <Nav />
    <Box.header bg="alt" pt={6} pb={[5, 6]}>
      <Container maxWidth={48} color="white" px={3}>
        <Heading.h1 f={[6, 7]} mb={2}>
          Sponsorship
        </Heading.h1>
        <Heading.h2 f={[3, 4]} mb={3}>
          We’re trying to bring technology to the forefront of Central PA, but
          your help is critical.
        </Heading.h2>
        <Text f={[3, 4]} mb={4} regular>
          If you’re interested in getting involved as a sponsor, contact us!
        </Text>
        <Action.a href="mailto:joy@hackhappyvalley.com" bg="primary" f={[3, 4]}>
          Email us
        </Action.a>
      </Container>
    </Box.header>
    <Footer />
  </Fragment>
)

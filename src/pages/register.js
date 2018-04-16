import React, { Fragment } from 'react'
import { Box, Flex, Text, Heading, Container } from '@hackclub/design-system'
import { theme } from 'theme'
import Helmet from 'react-helmet'
import Nav from 'components/Nav'
import Action from 'components/Action'
import Footer from 'components/Footer'

export default () => (
  <Fragment>
    <Nav />
    <Flex
      p={3}
      flexDirection="column"
      justify="center"
      align="center"
      bg="alt"
      style={{ minHeight: '100vh' }}
    >
      <Container color="white" align="center" px={3}>
        <Heading.h1 f={[5, 6, 7]} mb={2}>
          Register
        </Heading.h1>
        <Heading.h2 f={[3, 4]} mb={4}>
          Coming soon!
        </Heading.h2>
      </Container>
    </Flex>
    <Footer />
  </Fragment>
)

import React, { Fragment } from 'react'
import { Heading, Flex, Text } from '@hackclub/design-system'
import Helmet from 'react-helmet'
import Action from 'components/Action'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

export default () => (
  <Fragment>
    <Helmet title="404 – Hack Happy Valley" />
    <Nav bg="primary" />
    <Flex
      p={3}
      flexDirection="column"
      justify="center"
      align="center"
      bg="primary"
      style={{ minHeight: '100vh' }}
    >
      <Heading.h1 color="white" f={[128, 256]}>
        404!
      </Heading.h1>
      <Text f={4} mt={-4} mb={4} color="white">
        We couldn’t find that page.
      </Text>
      <Action to="/" bg="altLight">
        Go Home 🏡
      </Action>
    </Flex>
    <Footer />
  </Fragment>
)

import React, { Fragment } from 'react'
import { Heading, Container, LargeButton, Text } from '@hackclub/design-system'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

LargeButton.link = LargeButton.withComponent(Link)

export default () => (
  <Fragment>
    <Helmet title="404 – Camp Lightbulb" />
    <Nav color="primary" />
    <Container maxWidth={48} px={2} py={6} align="center">
      <Heading.h1 color="primary" f={[128, 256]}>
        404!
      </Heading.h1>
      <Text f={4} mb={4} color="muted">
        Maybe the Lightbulb went out…we couldn’t find that page.
      </Text>
      <LargeButton.link to="/" bg="success">
        Go Home 🏡
      </LargeButton.link>
    </Container>
    <Footer />
  </Fragment>
)

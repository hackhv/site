import React, { Fragment } from 'react'
import { Box, Container, Heading, } from '@hackclub/design-system'
import Nav from 'components/Nav'
import Sponsors from 'components/Sponsors'
import Footer from 'components/Footer'

export default () => (
  <Fragment>
    <Nav />
    <Box.header bg="alt" pt={6} pb={[5, 6]}>
      <Container maxWidth={48} color="white" px={3}>
        <Heading.h1 f={[6, 7]} mb={2}>
          Sponsorship
        </Heading.h1>
        <Heading.h2 f={[3, 4]}>
          We’re trying to bring technology to the forefront of Central PA, and
          your help is crucial.
        </Heading.h2>
      </Container>
    </Box.header>
    <Container py={[4, 5]}>
      <Heading.h2 color="primary" f={4} mb={3} align="center" caps>
        Our sponsors
      </Heading.h2>
      <Sponsors />
    </Container>
    <Footer />
  </Fragment>
)

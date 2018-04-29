import React, { Fragment } from 'react'
import { Box, Flex, Heading, Container, Card } from '@hackclub/design-system'
import { theme } from 'theme'
import Helmet from 'react-helmet'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

const Sheet = Card.withComponent(Container).extend`
  overflow: hidden;
`

export default () => (
  <Fragment>
    <Nav />
    <Box px={3} py={[5, 6]} bg="warm">
      <Container maxWidth={36} color="white" align="center" px={3}>
        <Heading.h1 f={[6, 7]} mb={2}>
          Register (free!)
        </Heading.h1>
        <Heading.h2 f={[3, 4]} mb={4}>
          Come to an amazing high school hackathon in State College, PA,
          starting June 2 at noon.
        </Heading.h2>
      </Container>
      <Sheet maxWidth={48} w={1} my={3} bg="white" boxShadowSize="lg">
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrP7H89cwS21QrDX?backgroundColor=yellow"
          frameBorder="0"
          onMouseWheel=""
          width="100%"
          height={512}
          style={{ background: 'transparent' }}
        />
      </Sheet>
    </Box>
    <Footer />
  </Fragment>
)

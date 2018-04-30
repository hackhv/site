import React, { Fragment } from 'react'
import {
  Box,
  Text,
  Heading,
  Container,
  Card,
  Link
} from '@hackclub/design-system'
import { theme } from 'theme'
import Helmet from 'react-helmet'
import Nav from 'components/Nav'
import Action from 'components/Action'
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
          Register
        </Heading.h1>
        <Heading.h2 f={[3, 4]} m={0}>
          It all starts June 2, 2018. The event is totally free, food and
          registration included.
        </Heading.h2>
        <Action href="mailto:contact@hackhappyvalley.com" bg="alt" my={4}>
          Questions?
        </Action>
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
      <Sheet p={[2, 3]} bg="warmWash" maxWidth={28} mt={4} boxShadowSize="md">
        <Text align="center">
          Reminder: while we are not MLH-affiliated, you are required to adhere
          to the{' '}
          <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
            MLH Code of Conduct
          </Link>.
        </Text>
      </Sheet>
    </Box>
    <Footer />
  </Fragment>
)
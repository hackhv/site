import React, { Fragment } from 'react'
import {
  Box,
  Text,
  Heading,
  Container,
  Card,
  Link,
  Button
} from '@hackclub/design-system'
import { theme } from 'theme'
import { lowerCase } from 'lodash'
import Helmet from 'react-helmet'
import Nav from 'components/Nav'
import Action from 'components/Action'
import Footer from 'components/Footer'

const Sheet = Card.withComponent(Container).extend`
  overflow: hidden;
`

const url = 'http://hackhappyvalley.com/'
const twitterURL = (text, u = url) =>
  `https://twitter.com/intent/tweet?text=${text
    .split(' ')
    .join('%20')}&url=${u}`
const facebookURL = (text, u = url) =>
  `https://www.facebook.com/sharer/sharer.php?u=${u}`

const InlineButton = Button.extend`
  display: inline-flex;
  align-items: center;
  div {
    background-image: url(/social/${props =>
        lowerCase(props.service)
          .split(' ')
          .join('')}-white.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    width: 18px;
    height: 18px;
  }
`
const ShareButton = ({ children, ...props }) => (
  <InlineButton
    target="_blank"
    aria-label={`Share on ${props.service}`}
    f={2}
    {...props}
  >
    <Box mr={2} />
    {children || props.service}
  </InlineButton>
)

export default () => (
  <Fragment>
    <Nav />
    <Box px={3} pt={[5, 6]} pb={5} bg="cool">
      <Container maxWidth={36} color="white" align="center" px={3}>
        <Heading.h1 f={[6, 7]} mb={2}>
          Register
        </Heading.h1>
        <Heading.h2 f={[3, 4]} m={0}>
          It all starts June 2, 2018. The event is totally free, lots of food,
          drinks, and prizes included.
        </Heading.h2>
        <Action
          href="mailto:contact@hackhappyvalley.com"
          bg="warm"
          my={4}
          is="a"
          analytics="email"
        >
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
      <Container px={[2, 3]} mt={5} mb={4} maxWidth={28}>
        <Text color="white" align="center">
          You must adhere to the{' '}
          <Link color="white" underline href="https://conduct.hackclub.com">
            Hack Club Code of Conduct
          </Link>{' '}
          and complete the{' '}
          <Link color="white" underline href="/liability.pdf">
            liability consent form
          </Link>.
        </Text>
      </Container>
      <Sheet
        p={[3, 4]}
        bg="coolWash"
        align="center"
        maxWidth={24}
        boxShadowSize="md"
      >
        <Heading.h2 f={3} caps mb={2}>
          Share it!
        </Heading.h2>
        <ShareButton
          service="Twitter"
          href={twitterURL(
            'I just signed up for @hackhv, the first high school hackathon in PA.',
            url
          )}
          bg="#1da1f2"
          mr={3}
        />
        <ShareButton service="Facebook" href={facebookURL(url)} bg="#3b5998" />
      </Sheet>
    </Box>
    <Footer />
  </Fragment>
)

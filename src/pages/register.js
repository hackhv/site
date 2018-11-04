import React, { Fragment } from 'react'
import {
  Box,
  Heading,
  Container,
  Card,
  Button,
  Text
} from '@hackclub/design-system'
import { lowerCase } from 'lodash'
import Nav from 'components/Nav'
import Action from 'components/Action'
import Footer from 'components/Footer'

const Sheet = Card.withComponent(Container).extend`
  overflow: hidden;
`

const url = 'http://hackpenn.com/'
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
          <Text.span bg="warm">Heads up!</Text.span> Hack Happy Valley is now
          Hack Pennsylvania, PA’s largest high school hackathon. Registration
          has moved there.
        </Heading.h2>
        <Action
          href="https://hackpenn.com"
          bg="warm"
          my={4}
          is="a"
          analytics="email"
        >
          Check out the new event »
        </Action>
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
            'Check out @hackpenn, PA’s largest high school hackathon!',
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

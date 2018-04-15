import React, { Fragment } from 'react'
import {
  Box,
  Flex,
  Text,
  Heading,
  BackgroundImage,
  Container,
  Button,
  LargeButton
} from '@hackclub/design-system'
import { theme } from 'theme'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from 'components/Nav'
import Animator from 'components/Animator'
import Footer from 'components/Footer'

const HeaderBox = Box.withComponent('header').extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background:  linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('/campers.jpg') no-repeat;
  background-size: cover;
  background-position: center top;
  max-width: 100%;
  overflow: hidden;
  clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0 95%);
  ${props => props.theme.mediaQueries.md} {
    clip-path: polygon(0% 0%, 100% 0, 100% 90%, 0 100%);
  }

  h1 {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
  }
  h1 {
    line-height: 1;
  }
  h2 {
    line-height: 1.25;
  }

  @media screen and (max-width: 22em) {
    a span {
      display: none;
    }
  }
`

const Action = LargeButton.withComponent(Link).extend`
  transition: transform 0.125s ease-out;
  will-change: transform;
  transform: scale(1);
  &:hover,
  &:focus {
    transform: scale(1.06);
  }
  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`

const Grid = Box.extend`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  width: 100%;

  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Photo = BackgroundImage.extend.attrs({ role: 'img', mx: 'auto', w: 1 })`
  overflow: hidden;
  transition: all 0.125s ease-out;
  background-size: auto 100%;
  min-height: 32rem;
  max-width: 32rem;
  box-shadow: ${props => props.theme.boxShadows[3]};
  border-radius: ${props => props.theme.radius};
  &:hover {
    background-size: auto 108%;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    background-size: cover !important;
  }
`

export default () => (
  <Fragment>
    <Nav />
    <Animator
      is={HeaderBox}
      data={{
        opacity: [1, 0.75],
        transform: [{ translateY: '0px' }, { translateY: '-96px' }]
      }}
    >
      <Container maxWidth={34} pt={[5, 6]} pb={[4, 5]} px={3}>
        <Heading.h1 f={[6, 7]} color="white" mb={[3, 4]}>
          Join Us for Camp Lightbulb
        </Heading.h1>
        <Action to="/register" f={[3, 4]}>
          Learn more »
        </Action>
      </Container>
    </Animator>
    <Container pt={[3, 4]} pb={[4, 5]} px={3}>
      <Container maxWidth={48}>
        <Text align="center" mb={[4, 5]} {...theme.styles.subtext} f={[4, 5]}>
          Camp Lightbulb celebrates young LGBTQ+ people with magical camp
          experiences, filled with fun, pride, community, friends, support,
          self-discovery and memories to last a lifetime.
        </Text>
      </Container>
      <Grid>
        <Photo image="/beach.jpg" />
        <Photo image="/stonewall.jpg" />
      </Grid>
      <Container maxWidth={48} pt={[4, 5]} align="center">
        <Action to="/register" f={[3, 4]}>
          Learn more »
        </Action>
        <Text color="slate" f={[3, 4]} mt={4}>
          Camp Lightbulb is a nonprofit running seasonal camps for gay, bi,
          trans, and other LGBTQ+ youth, creating community and spreading love
          and acceptance for teenagers.
        </Text>
      </Container>
    </Container>
    <Footer />
  </Fragment>
)

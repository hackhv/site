import React, { Fragment } from 'react'
import {
  Box,
  Flex,
  Text,
  Heading,
  BackgroundImage,
  Container,
  Avatar,
  Link as A
} from '@hackclub/design-system'
import { theme } from 'theme'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from 'components/Nav'
import Action from 'components/Action'
import Footer from 'components/Footer'

const Grid = Box.extend`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  width: 100%;

  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Leaders = Box.extend`
  max-width: 24rem;
  margin: ${props => props.theme.space[4]}px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${props => props.theme.space[2]}px;
  p {
    font-weight: 500;
    line-height: 1.25;
  }
`
const Leader = ({ name, ...props }) => (
  <Box align="center">
    <Avatar src={`/team/${name.split(' ')[0].toLowerCase()}.jpg`} size={128} />
    <Text mt={1} f={3} bold {...theme.styles.sans} children={name} />
  </Box>
)

export default () => (
  <Fragment>
    <Nav />
    <Box.header bg="alt" py={[5, 6]}>
      <Container maxWidth={48} color="white" px={3}>
        <Heading.h1 f={[6, 7]} mb={2}>
          About
        </Heading.h1>
        <Heading.h2 f={[3, 4]} mb={[3, 4]} style={{ fontWeight: 500 }}>
          We’re trying to bring technology to the forefront of Central PA.
        </Heading.h2>
        <Action to="/register" bg="primary" f={[3, 4]}>
          Register
        </Action>
      </Container>
    </Box.header>
    <Container py={[4, 5]}>
      <Container maxWidth={48} px={3}>
        <Heading.h2 f={[3, 4]} color="primary" caps>
          We’re driven by a mission.
        </Heading.h2>
        <Text {...theme.styles.subtext} mt={2} mb={3}>
          Technology is by far the fastest growing industry in the U.S. with
          hundreds of thousands of unfilled jobs and employers desperate for
          talent—but nearly all of the opportunities are on the coasts. In 2017
          alone, there were 30 hackathons for high schoolers in California with
          thousands of students in attendance. Pennsylvania had none.
        </Text>
        <Text {...theme.styles.subtext} mt={2} mb={4}>
          <Text.span bg="warmWash">
            Happy Valley Hacks will be the first high school hackathon in
            Central Pennsylvania
          </Text.span>, bringing technology to the forefront of our community.
          100 students of all skill levels will assemble for a weekend of
          collaboration and innovation, each building apps/websites/games in 24
          hours. Then participants and judges will select the winning projects
          and teams.
        </Text>
        <Heading.h2 f={[3, 4]} color="primary" caps>
          Coding is a superpower.
        </Heading.h2>
        <Text {...theme.styles.subtext} mt={2} mb={3}>
          Starting to code has a lasting impact. Once you begin coding, you
          switch from being a consumer to being a creator.{' '}
          <Text.span bg="warmWash">
            We want to make everyone a creator
          </Text.span>—it's a magical transformation. You can solve problems
          your way, bounded only by your imagination.
        </Text>
        <Leaders>
          <Leader name="Lachlan Campbell" />
          <Leader name="Joy Liu" />
        </Leaders>
        <Text {...theme.styles.subtext}>
          We know this because we’re the leaders of the{' '}
          <A href="https://hackclub.com" color="primary">
            Hack Club
          </A>{' '}
          at State College Area High School, where hundreds of students have
          come to write their first code. Now, we want to bring that experience
          to everyone.
        </Text>
      </Container>
      <Container maxWidth={48} pt={[4, 5]} align="center">
        <Action to="/register" f={[3, 4]}>
          Learn more »
        </Action>
      </Container>
    </Container>
    <Footer />
  </Fragment>
)

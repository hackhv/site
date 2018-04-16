import React, { Fragment } from 'react'
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link as A,
  Text
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

const Leaders = Grid.extend`
  p {
    font-weight: 700;
    line-height: 1.25;
  }
`
const EmailButton = Button.extend`
  display: inline-flex;
  align-items: center;
  line-height: 1 !important;
  font-weight: 500;
`
const username = a => a.split(' ')[0].toLowerCase()
const Leader = ({ name, ...props }) => (
  <Flex align="center">
    <Avatar src={`/team/${username(name)}.jpg`} size={128} mr={3} />
    <Box align="left">
      <Text f={4} {...theme.styles.sans} children={name} />
      <EmailButton
        href={`mailto:${username(name)}@hackhappyvalley.com`}
        bg="alt"
        f={2}
        mt={2}
      >
        <Text.span>Email</Text.span>
      </EmailButton>
    </Box>
  </Flex>
)

export default () => (
  <Fragment>
    <Nav />
    <Box.header bg="alt" pt={6} pb={[5, 6]}>
      <Container maxWidth={48} color="white" px={3}>
        <Heading.h1 f={[6, 7]} mb={2}>
          About
        </Heading.h1>
        <Heading.h2 f={[3, 4]} mb={4}>
          We’re trying to bring technology to the forefront of Central PA.
        </Heading.h2>
        <Action to="/register" bg="primary" f={[3, 4]}>
          Register »
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
        <Leaders my={4}>
          <Leader name="Lachlan Campbell" />
          <Leader name="Joy Liu" />
        </Leaders>
        <Text {...theme.styles.subtext} mb={4}>
          We know this because we’re the leaders of the{' '}
          <A href="https://hackclub.com" color="primary">
            Hack Club
          </A>{' '}
          at State College Area High School, where hundreds of students have
          come to write their first code. Now, we want to bring that experience
          to everyone.
        </Text>
        <Action to="/register" f={[3, 4]}>
          Register »
        </Action>
      </Container>
    </Container>
    <Footer />
  </Fragment>
)

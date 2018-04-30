import React, { Fragment } from 'react'
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link as A,
  Text,
  Card
} from '@hackclub/design-system'
import { theme } from 'theme'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from 'components/Nav'
import Action from 'components/Action'
import Footer from 'components/Footer'

const Calendar = Flex.extend`
  flex-direction: column;
  flex-shrink: 0;
  text-align: center;
  width: 72px;
  height: 72px;
  border-color: ${props => props.theme.colors.white};
  border-style: solid;
  border-width: 6px;
  border-radius: 12px;
  font-weight: 700;
  ${props => props.theme.mediaQueries.md} {
    border-width: 4px;
    width: 96px;
    height: 96px;
  }
`
const Month = Text.extend.attrs({
  f: 3,
  py: [0, 1],
  bg: 'white',
  color: 'primary'
})`
  line-height: 1;
`
const Day = Text.extend.attrs({ f: [5, 6], color: 'white' })`
  line-height: 1.5;
`

const Questions = Container.extend.attrs({ maxWidth: 72 })`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  width: 100%;

  ${props => props.theme.mediaQueries.sm} {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`
const Question = ({ name, body, ...props }) => (
  <Card p={[3, 4]} bg="white" boxShadowSize="md" {...props}>
    <Heading.h3 f={2} color="altDark" caps mt={0} mb={[1, 2]} children={name} />
    <Text f={2} color="slate" my={0} children={body} />
  </Card>
)

const Dual = Box.extend`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  width: 100%;

  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Leaders = Dual.extend`
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
    <Flex
      px={2}
      pb={5}
      pt={[5, 6]}
      flexDirection="column"
      justify="center"
      align="center"
      bg="primary"
    >
      <Container color="white" align="center" px={3}>
        <Heading.h1 f={[5, 6, 7]} mb={2}>
          Hack Happy Valley
        </Heading.h1>
        <Heading.h2 f={[3, 4]}>
          The first high school hackathon in Central Pennsylvania.
        </Heading.h2>
        <Flex align="center" justify="center" my={[3, 4]}>
          <Calendar mr={[3, 4]}>
            <Month children="June" />
            <Day children={2} />
          </Calendar>
          <Text align="left" my={3} f={[2, 3]}>
            <strong>Time:</strong> 12PM Sat–12PM Sun
            <br />
            <strong>Location:</strong> State College, PA
            <br />
            <strong>Venue:</strong> Coming soon
          </Text>
        </Flex>
        <Action to="/register" bg="altLight" f={[3, 4]}>
          Register »
        </Action>
      </Container>
    </Flex>
    <Box.section bg="alt" w={1}>
      <Container py={[4, 5]} px={3}>
        <Heading.h2 color="white" f={[5, 6]} mb={3} align="center">
          FAQ
        </Heading.h2>
        <Questions>
          <Question
            name="Who can participate?"
            body="Any current high school student! If you’re under/over the age limit, send us an email (below)."
          />
          <Question
            name="What if I’m new to coding?"
            body="Complete beginners are totally welcome! We’ll have workshops and assistance to get you going."
          />
          <Question
            name="How much does it cost?"
            body="Nothing, it’s totally free! Registration and attendance are free, with meals included."
          />
          <Question
            name="Do I need a team?"
            body="Nope! You’ll have an opportunity to meet fellow hackers, and make teams of up to 4, or you can work alone (though it’s discouraged)."
          />
          <Question
            name="What can I make?"
            body="Anything! A website, mobile app, game, hardware, you name it. Submissions will be judged for creativity, technical difficulty, polish, and utility by judges."
          />
          <Question
            name="What should I bring?"
            body="Bring a computer, chargers, anything you’ll need for your hack, like hardware, and (if you’d like) a sleeping bag/toiliteries."
          />
        </Questions>
      </Container>
    </Box.section>
    <Container py={[4, 5]}>
      <Container maxWidth={48} px={3}>
        <Heading.h2 color="primary" f={[5, 6]} mb={3} align="center">
          About
        </Heading.h2>
        <Heading.h3 f={[3, 4]} color="primary" caps>
          We’re driven by a mission.
        </Heading.h3>
        <Text {...theme.styles.subtext} mt={2} mb={3}>
          Technology is by far the fastest growing industry in the U.S. with
          hundreds of thousands of unfilled jobs and employers desperate for
          talent—but nearly all of the opportunities are on the coasts. In 2017
          alone, there were 30 hackathons for high schoolers in California with
          thousands of students in attendance. Pennsylvania had none.
        </Text>
        <Text {...theme.styles.subtext} mt={2} mb={4}>
          <Text.span bg="warmWash">
            Hack Happy Valley will be the first high school hackathon in Central
            Pennsylvania
          </Text.span>, bringing technology to the forefront of our community.
          100 students of all skill levels will assemble for a weekend of
          collaboration and innovation, each building apps/websites/games in 24
          hours. Then participants and judges will select the winning projects
          and teams.
        </Text>
        <Heading.h3 f={[3, 4]} color="primary" caps>
          Coding is a superpower.
        </Heading.h3>
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
      </Container>
      <Box align="center">
        <Action to="/register" f={[3, 4]}>
          Register »
        </Action>
      </Box>
    </Container>
    <Footer />
  </Fragment>
)

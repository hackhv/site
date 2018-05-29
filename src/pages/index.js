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
  Card,
  Section,
  BackgroundImage
} from '@hackclub/design-system'
import { theme } from 'theme'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Icon from 'spectrum-icons'
import Nav from 'components/Nav'
import Action from 'components/Action'
import Module from 'components/Module'
import Footer from 'components/Footer'

const Calendar = Flex.extend`
  flex-direction: column;
  flex-shrink: 0;
  text-align: center;
  width: 72px;
  height: 72px;
  border-color: ${({ theme }) => theme.colors.white};
  border-style: solid;
  border-width: 6px;
  border-radius: 12px;
  font-weight: 700;
  ${({ theme }) => theme.mediaQueries.md} {
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

const Grid = Box.extend`
  display: grid;
  grid-gap: ${({ theme }) => theme.space[2]}px;
  width: 100%;
  > div {
    width: 100%;
    box-shadow: ${({ theme }) => theme.boxShadows[2]};
    border-radius: ${({ theme }) => theme.radius};
    max-width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${({ theme }) => theme.space[4]}px;
  }
`

const Modules = Box.extend`
  display: grid;
  grid-gap: ${({ theme }) => theme.space[3]}px;
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Photo = BackgroundImage.extend.attrs({ role: 'img' })`
  overflow: hidden;
  transition: all 0.125s ease-out;
  background-size: auto 100%;
  &:hover {
    background-size: auto 108%;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    background-size: cover !important;
  }
`

const Questions = Container.extend.attrs({ maxWidth: 72 })`
  display: grid;
  grid-gap: ${({ theme }) => theme.space[3]}px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  }

  > div {
    background-color: rgba(255, 255, 255, 0.875);
    transition: 0.125s ease-out all;
    box-shadow: ${({ theme }) => theme.boxShadows[1]};

    h3 {
      transition: 0.125s ease-out color;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.95);
      box-shadow: ${({ theme }) => theme.boxShadows[2]};

      h3 {
        color: ${({ theme }) => theme.colors.altLight};
      }
    }
  }
`
const Question = ({ name, body, ...props }) => (
  <Card p={[3, 4]} {...props}>
    <Heading.h3 f={2} color="altDark" caps mt={0} mb={[1, 2]} children={name} />
    <Text f={2} color="slate" my={0} children={body} />
  </Card>
)

const Dual = Box.extend`
  display: grid;
  grid-gap: ${({ theme }) => theme.space[3]}px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Leaders = Dual
const LeaderName = Text.extend`
  font-weight: 700;
  line-height: 1.25;
`
const EmailButton = Button.extend`
  display: inline-flex;
  align-items: center;
  line-height: 1 !important;
  font-weight: 500;
`
const username = a => a.split(' ')[0].toLowerCase()
const Leader = ({ name, pronouns, ...props }) => (
  <Flex align="center">
    <Avatar src={`/team/${username(name)}.jpg`} alt={name} size={128} mr={3} />
    <Box align="left">
      <LeaderName f={4} children={name} />
      <Text color="muted" f={2} mb={2} children={pronouns} />
      <EmailButton
        href={`mailto:${username(name)}@hackhappyvalley.com`}
        bg="cool"
        f={2}
        mt={2}
      >
        <Icon glyph="email" size={24} />
        <Text.span ml={1}>Email</Text.span>
      </EmailButton>
    </Box>
  </Flex>
)

export default () => (
  <Fragment>
    <Helmet>
      <meta
        name="google-site-verification"
        content="CaaLuNaaYhXbn1s-kSfKI092j_VHDoqjxGt6fay58rc"
      />
    </Helmet>
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
        <Heading.h1 f={[6, 7]} mb={2}>
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
          <Box align="left" my={3}>
            <Text f={[2, 3]}>
              <strong>Time:</strong> 12PM Sat–12PM Sun
              <br />
              <strong>Location:</strong> State College, PA
              <br />
              <strong>Venue:</strong> Church of the Good Shepherd
            </Text>
            <Text>867 Gray’s Woods Blvd, Port Matilda, PA 16870</Text>
          </Box>
        </Flex>
        <Action
          to="/register"
          bg="altLight"
          f={[3, 4]}
          analytics="primary register"
        >
          Register now »
        </Action>
      </Container>
    </Flex>
    <Container w={1} px={[3, 4, null, 2]} mt={5}>
      <Box mx={0} mt={5} color="black">
        <Heading.h2 f={[4, 5]} mb={2}>
          24 hours of coding, fun, free food, & prizes.
        </Heading.h2>
        <Container maxWidth={48} mx={0}>
          <Text f={[3, 4]}>
            Hack Happy Valley is a hackathon, a 24-hour coding competition. 30
            students from across Central PA will come for the day. You’ll work
            with a team (or by yourself) to build an app, game, or website.
            We’ll have free food & drinks, and you can sleep in the middle, or
            not. In the morning, a group of judges will pick the best projects
            to demo for everyone and win prizes.{' '}
            <Text.span bg="warmWash">
              You’ll meet people, build something amazing, and have so much fun.
            </Text.span>
          </Text>
        </Container>
      </Box>
      <Grid mt={4} mb={[4, 6]} color="white">
        <Box bg="primary" p={[3, 4]}>
          <Heading.h3 f={[4, 5]} my={0}>
            You are welcome here.
          </Heading.h3>
          <Text f={3} mt={2}>
            We’re open to all high schoolers, but aimed at girls and gender
            minorities who are new to coding. Organized by a diverse team, we’re
            serious about creating an all-inclusive space for attendees.
          </Text>
        </Box>
        <Photo image="/lah_1.jpg" />
        <Photo image="/lah_2.jpg" />
        <Box bg="altLight" p={[3, 4]}>
          <Heading.h3 f={[4, 5]} my={0}>
            A hackathon for everyone.
          </Heading.h3>
          <Modules w={1}>
            <Module
              icon="member-add"
              heading="Beginner-oriented"
              body="Most attendees will be new to coding, so we’ll have workshops and mentors to get you going."
            />
            <Module
              icon="like"
              heading="A safe space for all"
              body="You’ll be in a friendly, safe environment, with diverse attendees, free of harassment."
            />
          </Modules>
        </Box>
      </Grid>
    </Container>
    <Box.section bg="alt" w={1}>
      <Container py={[4, 5]} px={3}>
        <Heading.h2 color="white" f={[5, 6]} mb={3} align="center">
          FAQ
        </Heading.h2>
        <Questions>
          <Question
            name="Who can participate?"
            body="Any current high school student! If you’re under/over that age, send us an email (below) and we’ll see what we can do."
          />
          <Question
            name="What if I’m new to coding?"
            body="Complete beginners are not only welcome, but expected! Learn as you go with our starting workshops and mentors."
          />
          <Question
            name="How much does it cost?"
            body="Nothing, it’s totally free! Registration and attendance are 100% free, with meals and drinks included."
          />
          <Question
            name="Do I need a team?"
            body="Nope! You’ll have an opportunity to meet fellow hackers, and make teams of up to 3—you’ll likely meet new friends! Or you can work alone (though discouraged)."
          />
          <Question
            name="What can I make?"
            body="Anything! A website, mobile app, game, hardware, you name it. Submissions will be judged for creativity, technical difficulty, polish, and utility by judges."
          />
          <Question
            name="What should I bring?"
            body="Bring your student ID, a computer, chargers, anything you’ll need for your hack (like hardware), toiletries, and a sleeping bag (if you’ll sleep)."
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
          30 students of all skill levels will assemble for a weekend of
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
          </Text.span>—it’s a magical transformation. You can solve problems
          your way, bounded only by your imagination.
        </Text>
        <Leaders my={4}>
          <Leader name="Lachlan Campbell" pronouns="they/them" />
          <Leader name="Joy Liu" pronouns="she/her" />
        </Leaders>
        <Text {...theme.styles.subtext} mb={4}>
          We know this because we’re the leaders of the{' '}
          <A href="https://hackclub.com" color="primary">
            Hack Club
          </A>{' '}
          at State College Area High School, where hundreds of students have
          come to write their first code. Now, we want to bring that experience
          to everyone. This is a hackathon by the students, for the students,
          and for the future of Pennsylvania.
        </Text>
      </Container>
      <Box align="center">
        <Action to="/register" f={[3, 4]} analytics="secondary register">
          Register »
        </Action>
      </Box>
    </Container>
    <Footer />
  </Fragment>
)
